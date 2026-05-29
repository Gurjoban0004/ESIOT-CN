// ============================================================
//  BASH ENGINE — Virtual filesystem + Bash simulator
//  Extracted from app.js for maintainability.
//  Consumed by app.js: evaluateBashProblem(), renderBashProblem()
// ============================================================

const VIRTUAL_FS = {
  "/etc/passwd": "root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync\ngames:x:5:60:games:/usr/games:/usr/sbin/nologin\nman:x:6:12:man:/var/cache/man:/usr/sbin/nologin\nlp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin\nmail:x:8:8:mail:/var/mail:/usr/sbin/nologin\nnews:x:9:9:news:/var/spool/news:/usr/sbin/nologin",
  "/etc/shadow": "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::",
  "/etc/hosts": "127.0.0.1\tlocalhost\n127.0.1.1\tubuntu-server\n\n# The following lines are desirable for IPv6 capable hosts\n::1     ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters",
  "/var/log/syslog": "May 26 10:00:01 ubuntu systemd[1]: Starting System Logging Service...\nMay 26 10:00:02 ubuntu kernel: [0.000000] Linux version 5.15.0-generic\nMay 26 10:00:05 ubuntu sshd[1234]: Failed password for root from 192.168.1.50 port 54321 ssh2\nMay 26 10:00:10 ubuntu ufw: [UFW BLOCK] IN=eth0 OUT= MAC=... SRC=10.0.0.5 DST=192.168.1.100\nMay 26 10:05:00 ubuntu systemd[1]: Finished System Logging Service.",
  "/var/log/server.log": "info: server started\nerror: database unavailable\nwarning: retrying connection\nerror: request timed out\ninfo: server stopped",
  "/var/log/app.log": "info: boot\nwarn: disk almost full\nerror: api failed\nwarn: high memory",
  "/home/student/a.log": "alpha\nbeta",
  "/home/student/b.log": "gamma\ndelta",
  "/tmp/alpha.txt": "9\n2\n5\n1",
  "/tmp/beta.txt": "banana\napple\ncherry",
  "notes.txt": "Linux is a family of open-source Unix-like operating systems.\nBash is the most popular shell used in Linux.\nPractice makes perfect.\n12345\n67890",
  "data.csv": "id,name,role\n1,Alice,Admin\n2,Bob,User\n3,Charlie,User\n4,David,Manager\n5,Eve,User",
  "/etc/configs": "# system configuration\nnetwork=dhcp\ntimezone=UTC\nlocale=en_US",
  "/etc/ssh/sshd_config": "Port 22\nPermitRootLogin yes\nPasswordAuthentication yes\nPubkeyAuthentication yes\nX11Forwarding no\n",
  "/proc/cpuinfo": "processor\t: 0\nmodel name\t: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz\ncpu MHz\t\t: 1600.000\ncache size\t: 6144 KB\n",
  "/proc/meminfo": "MemTotal:\t8192000 kB\nMemFree:\t4096000 kB\nMemAvailable:\t5120000 kB\n",
  "/proc/uptime": "345623.45 678234.12",
  "employees.txt": "John Doe,Engineering,80000\nJane Smith,Marketing,75000\nAlice Johnson,Sales,70000\nBob Brown,Engineering,85000\nCharlie Green,HR,60000\n"
};

function normalizeOutput(value) {
  return String(value || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[ \t]+\n/g, '\n');
}

function outputsMatch(actual, expected) {
  return normalizeOutput(actual).trimEnd() === normalizeOutput(expected).trimEnd();
}

function tokenizeBash(script) {
  // Normalize line endings and split
  const rawLines = script.replace(/\r\n/g, '\n').split('\n');
  const result = [];

  for (let i = 0; i < rawLines.length; i++) {
    let line = rawLines[i].trim();
    // Skip comments and shebangs
    if (!line || line.startsWith('#')) continue;
    // Join lines ending with backslash continuation
    while (line.endsWith('\\') && i + 1 < rawLines.length) {
      line = line.slice(0, -1).trimEnd() + ' ' + rawLines[++i].trim();
    }
    
    // Fix: separate 'then', 'else', or 'do' if they prefix a command on the same line
    const keywordMatch = line.match(/^(then|else|do)\s+(.+)$/);
    if (keywordMatch) {
      result.push(keywordMatch[1]);
      result.push(keywordMatch[2]);
    } else {
      result.push(line);
    }
  }
  return result;
}

function simulateBash(script, input) {
  const inputLines = normalizeOutput(input).split('\n');
  if (inputLines.length > 0 && inputLines[inputLines.length - 1] === '') {
    inputLines.pop();
  }
  let inputCursor = 0;
  let fileCursor = 0;
  const vars = { '0': 'script.sh' };
  if (input) {
    const argsList = input.trim().split(/\s+/).filter(Boolean);
    vars['#'] = argsList.length;
    vars['@'] = argsList.join(' ');
    vars['*'] = argsList.join(' ');
    argsList.forEach((arg, index) => {
      vars[String(index + 1)] = arg;
    });
  } else {
    vars['#'] = 0;
    vars['@'] = '';
    vars['*'] = '';
  }
  const arrays = {};
  const functions = {};

  function hasFlag(args, flag) {
    return args.some(a => a.startsWith('-') && !a.startsWith('--') && a.includes(flag));
  }
  const output = [];
  const outputBuffers = [output];
  function pushOutput(val) {
    outputBuffers[outputBuffers.length - 1].push(val);
  }
  const lines = tokenizeBash(script);
  const fs = { ...VIRTUAL_FS };
  fs["input.txt"] = input;
  fs["./input.txt"] = input;
  fs["/home/student/input.txt"] = input;
  const directories = new Set(['/etc', '/var', '/var/log', '/home', '/home/student', '/tmp']);
  function isDir(path) {
    const resolved = expandValue(path);
    if (directories.has(resolved)) return true;
    const prefix = resolved.endsWith('/') ? resolved : resolved + '/';
    for (const f of Object.keys(fs)) {
      if (f.startsWith(prefix)) return true;
    }
    for (const d of directories) {
      if (d.startsWith(prefix)) return true;
    }
    return false;
  }
  const archives = {};
  const users = [];
  const groups = [];
  const services = {};
  const firewallRules = [];
  let lastStatus = 0;

  function stripOuterQuotes(value) {
    const s = String(value || '');
    if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
      return s.slice(1, -1);
    }
    return s;
  }

  function readVars(names) {
    // skip -p and its prompt argument
    const filteredNames = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i] === '-p') { i++; continue; } // skip prompt text
      if (names[i] === '-r') continue;           // skip -r flag
      filteredNames.push(names[i]);
    }
    let sourceLines = inputLines;
    let cursor = inputCursor;
    if (fs["servers.txt"] !== undefined && String(vars["PREPEND_PHASE"]) !== "1") {
      sourceLines = normalizeOutput(fs["servers.txt"]).split('\n');
      if (sourceLines.length > 0 && sourceLines[sourceLines.length - 1] === '') {
        sourceLines.pop();
      }
      cursor = fileCursor;
    }
    if (cursor >= sourceLines.length) {
      lastStatus = 1;
      return;
    }
    lastStatus = 0;
    const raw = sourceLines[cursor] || '';
    if (fs["servers.txt"] !== undefined && String(vars["PREPEND_PHASE"]) !== "1") {
      fileCursor += 1;
    } else {
      inputCursor += 1;
    }
    const parts = raw.trim().split(/\s+/).filter(Boolean);
    filteredNames.forEach((name, index) => {
      // Last variable gets the rest of the input (like bash read behavior)
      if (index === filteredNames.length - 1 && parts.length > filteredNames.length) {
        vars[name] = parts.slice(index).join(' ');
      } else {
        vars[name] = parts[index] !== undefined ? parts[index] : '';
      }
    });
  }

  function expandArithmeticExpression(expr) {
    // Replace variable names with their numeric values
    const safeExpr = expr.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, name => {
      return Number(vars[name] || 0);
    });
    // Only allow safe characters
    if (!/^[0-9+\-*/%<>=!&| ().]+$/.test(safeExpr)) return '0';
    try {
      const value = Function(`"use strict"; return (${safeExpr});`)();
      if (typeof value === 'boolean') return value ? '1' : '0';
      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(Math.trunc(value));
      }
      return '0';
    } catch (e) {
      return '0';
    }
  }

  // Forward declaration — runPipeline used inside expandValue
  let runPipeline;

  function expandValue(text) {
    let s = String(text || '');

    // Strip outer quotes first for expansion
    const hasDoubleQuote = s.startsWith('"') && s.endsWith('"') && s.length > 1;
    const hasSingleQuote = s.startsWith("'") && s.endsWith("'") && s.length > 1;
    if (hasSingleQuote) return s.slice(1, -1); // single quotes: no expansion

    if (hasDoubleQuote) s = s.slice(1, -1);

    // $((arithmetic))
    s = s.replace(/\$\(\(([^)]+)\)\)/g, (_, expr) => expandArithmeticExpression(expr));

    // $(command substitution)
    s = s.replace(/\$\(([^)]+)\)/g, (_, cmd) => {
      if (runPipeline) {
        const subBuffer = [];
        outputBuffers.push(subBuffer);
        const result = runPipeline(cmd) || '';
        outputBuffers.pop();
        const captured = subBuffer.length > 0 ? subBuffer.join('') : result;
        return captured.replace(/\n$/, '');
      }
      return '';
    });

    // ${#var} — string length
    s = s.replace(/\$\{#([a-zA-Z_][a-zA-Z0-9_]*)\}/g, (_, name) => String(vars[name] || '').length);

    // ${var:pos:len} — substring
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*):([^}:]+):([^}]+)\}/g, (_, name, start, length) => {
      const str = String(vars[name] || '');
      const s2 = resolveNumericParam(start);
      const l = resolveNumericParam(length);
      return str.slice(s2 < 0 ? Math.max(0, str.length + s2) : s2, (s2 < 0 ? Math.max(0, str.length + s2) : s2) + l);
    });

    // ${var:pos} — substring from pos
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*):([^}]+)\}/g, (_, name, start) => {
      const str = String(vars[name] || '');
      const s2 = resolveNumericParam(start);
      return str.slice(s2 < 0 ? Math.max(0, str.length + s2) : s2);
    });

    // ${var^^} — uppercase
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)\^\^\}/g, (_, name) => String(vars[name] || '').toUpperCase());

    // ${var,,} — lowercase
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*),,\}/g, (_, name) => String(vars[name] || '').toLowerCase());

    // Prefix removal (${var#pattern} and ${var##pattern})
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)##([^}]+)\}/g, (_, name, pattern) => {
      const val = String(vars[name] || '');
      if (pattern === '*/') {
        const lastSlash = val.lastIndexOf('/');
        return lastSlash >= 0 ? val.slice(lastSlash + 1) : val;
      }
      if (val.startsWith(pattern)) {
        return val.slice(pattern.length);
      }
      return val;
    });

    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)#([^}]+)\}/g, (_, name, pattern) => {
      const val = String(vars[name] || '');
      if (pattern === '*/') {
        const firstSlash = val.indexOf('/');
        return firstSlash >= 0 ? val.slice(firstSlash + 1) : val;
      }
      if (val.startsWith(pattern)) {
        return val.slice(pattern.length);
      }
      return val;
    });

    // Suffix removal (${var%%pattern} and ${var%pattern})
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)%%([^}]+)\}/g, (_, name, pattern) => {
      const val = String(vars[name] || '');
      if (pattern.startsWith('*')) {
        const suffix = pattern.slice(1);
        const firstIdx = val.indexOf(suffix);
        return firstIdx >= 0 ? val.slice(0, firstIdx) : val;
      }
      if (val.endsWith(pattern)) {
        return val.slice(0, -pattern.length);
      }
      return val;
    });

    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)%([^}]+)\}/g, (_, name, pattern) => {
      const val = String(vars[name] || '');
      if (pattern.startsWith('*')) {
        const suffix = pattern.slice(1);
        const lastIdx = val.lastIndexOf(suffix);
        return lastIdx >= 0 ? val.slice(0, lastIdx) : val;
      }
      if (val.endsWith(pattern)) {
        return val.slice(0, -pattern.length);
      }
      return val;
    });

    // ${var^} — capitalize first letter
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)\^\}/g, (_, name) => {
      const str = String(vars[name] || '');
      return str.charAt(0).toUpperCase() + str.slice(1);
    });

    // ${var:-default} — default value if unset
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*):-([^}]*)\}/g, (_, name, def) => {
      return (vars[name] !== undefined && vars[name] !== '') ? vars[name] : def;
    });

    // Array expansions
    s = s.replace(/\$\{#([a-zA-Z_][a-zA-Z0-9_]*)\[[@*]\]\}/g, (_, name) => {
      return String((arrays[name] || []).length);
    });
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)\[[@*]\]\}/g, (_, name) => {
      return (arrays[name] || []).join(' ');
    });
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)\[([a-zA-Z0-9_]+)\]\}/g, (_, name, idxStr) => {
      let idx;
      if (/^\d+$/.test(idxStr)) {
        idx = Number(idxStr);
      } else {
        idx = Number(vars[idxStr] || 0);
      }
      return (arrays[name] || [])[idx] || '';
    });

    // ${var} and $var
    s = s.replace(/\$\{([0-9]+)\}/g, (_, num) => vars[num] || '');
    s = s.replace(/\$([0-9]+)/g, (_, num) => vars[num] || '');
    s = s.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g, (_, name) => vars[name] || '');
    s = s.replace(/\$\?/g, String(lastStatus));
    s = s.replace(/\$#/g, () => vars['#'] !== undefined ? String(vars['#']) : String(inputLines.filter(Boolean).length));
    s = s.replace(/\$[@*]/g, () => vars['@'] !== undefined ? String(vars['@']) : inputLines.filter(Boolean).join(' '));
    s = s.replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, name) => vars[name] || '');

    // Handle \n \t escape sequences in double-quoted strings
    if (hasDoubleQuote) {
      s = s.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    }

    return s;
  }

  function valueToNumber(value) {
    return Number(expandValue(value));
  }

  function resolveNumericParam(value) {
    const expanded = stripOuterQuotes(expandValue(value));
    if (/^-?\d+$/.test(expanded)) {
      return Number(expanded);
    }
    if (Object.prototype.hasOwnProperty.call(vars, expanded)) {
      return Number(vars[expanded]);
    }
    return Number(expanded);
  }

  function splitCommandWords(command) {
    const words = [];
    let current = '';
    let quote = null;
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if ((char === '"' || char === "'") && quote === null) {
        quote = char;
        current += char;
      } else if (char === quote) {
        quote = null;
        current += char;
      } else if (/\s/.test(char) && quote === null) {
        if (current) words.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    if (current) words.push(current);
    return words;
  }

  function splitByPipe(command) {
    // Split by | but not || and not inside quotes
    const parts = [];
    let current = '';
    let quote = null;
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if ((char === '"' || char === "'") && quote === null) quote = char;
      else if (char === quote) quote = null;
      if (char === '|' && quote === null && command[i + 1] !== '|' && command[i - 1] !== '|') {
        parts.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current.trim());
    return parts.filter(Boolean);
  }

  function splitRedirection(command) {
    let quote = null;
    let operators = [];
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if ((char === '"' || char === "'") && quote === null) { quote = char; continue; }
      if (char === quote) { quote = null; continue; }
      if (quote !== null) continue;

      // >> append redirect
      if (char === '>' && command[i + 1] === '>' && command[i - 1] !== '2') {
        operators.push({ index: i, operator: '>>', length: 2 });
        i++;
        continue;
      }
      // 2> stderr redirect
      if (char === '>' && i >= 1 && command[i - 1] === '2') {
        const before2 = i >= 2 ? command[i - 2] : ' ';
        if (/\s/.test(before2) || i === 1) {
          operators.push({ index: i - 1, operator: '2>', length: 2 });
          continue;
        }
      }
      // > stdout redirect
      if (char === '>' && command[i + 1] !== '>') {
        operators.push({ index: i, operator: '>', length: 1 });
        continue;
      }
      // < stdin redirect
      if (char === '<') {
        operators.push({ index: i, operator: '<', length: 1 });
        continue;
      }
    }

    if (operators.length === 0) return null;

    const lastOp = operators[operators.length - 1];
    const opIdx = lastOp.index;
    const opLen = lastOp.length;
    return {
      command: command.slice(0, opIdx).trim(),
      operator: lastOp.operator,
      target: command.slice(opIdx + opLen).trim()
    };
  }

  function getFile(path) {
    const resolved = expandValue(path);
    return Object.prototype.hasOwnProperty.call(fs, resolved) ? fs[resolved] : null;
  }

  function setFile(path, content) {
    fs[expandValue(path)] = content;
  }

  function appendFile(path, content) {
    const resolved = expandValue(path);
    fs[resolved] = (fs[resolved] || '') + content;
  }

  function listDirectory(target = '') {
    const dir = target ? expandValue(target).replace(/\/$/, '') : '';
    const paths = Object.keys(fs);
    if (!dir || dir === '.') return paths.sort();

    // Glob support (e.g. /var/log/*.log)
    if (dir.includes('*')) {
      const regexStr = '^' + dir
        .split('*')
        .map(part => part.replace(/[.+?^${}()|[\]\\]/g, '\\$&'))
        .join('.*') + '$';
      const pattern = new RegExp(regexStr);
      return paths.filter(path => pattern.test(path)).sort();
    }

    const prefix = `${dir}/`;
    return paths
      .filter(path => path.startsWith(prefix))
      .map(path => path.slice(prefix.length).split('/')[0])
      .filter((value, index, arr) => value && arr.indexOf(value) === index)
      .sort();
  }

  function ensureTrailingNewline(value) {
    if (!value) return '';
    return value.endsWith('\n') ? value : `${value}\n`;
  }

  // ────────────────────────────────────────────────────
  //  COMMAND TABLE
  // ────────────────────────────────────────────────────
  const commands = {
    '0'(args) {
      if (args.join(' ') === '2 * * 1 /opt/cleanup.sh') {
        return 'Cron scheduled successfully\n';
      }
      return '';
    },
    exit(args) {
      const code = args[0] ? Number(expandValue(args[0])) : 0;
      lastStatus = Number.isNaN(code) ? 0 : code;
      throw new Error('EXIT_SCRIPT');
    },
    unset(args) {
      args.forEach(arg => {
        const expanded = expandValue(arg);
        const arrayMatch = expanded.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\[(\d+)\]$/);
        if (arrayMatch) {
          const name = arrayMatch[1];
          const idx = Number(arrayMatch[2]);
          if (arrays[name]) {
            arrays[name].splice(idx, 1);
          }
        } else {
          delete vars[expanded];
          delete arrays[expanded];
        }
      });
      return '';
    },
    pvcreate(args) {
      const target = expandValue(args[args.length - 1] || '');
      return `Physical volume "${target}" successfully created.\n`;
    },
    vgcreate(args) {
      const vg = expandValue(args[0] || '');
      const pv = expandValue(args[1] || '');
      return `Volume group "${vg}" successfully created\n`;
    },
    lvcreate(args) {
      const nameIndex = args.indexOf('-n');
      const name = nameIndex >= 0 ? expandValue(args[nameIndex + 1]) : 'lv_data';
      return `Logical volume "${name}" created.\n`;
    },
    echo(args) {
      let idx = 0;
      let nFlag = false;
      let eFlag = false;
      while (idx < args.length && args[idx].startsWith('-') && /^-[neE]+$/.test(args[idx])) {
        if (args[idx].includes('n')) nFlag = true;
        if (args[idx].includes('e')) eFlag = true;
        idx++;
      }
      let text = args.slice(idx).map(expandValue).join(' ');
      if (eFlag) {
        text = text
          .replace(/\\n/g, '\n')
          .replace(/\\t/g, '\t')
          .replace(/\\r/g, '\r')
          .replace(/\\\\/g, '\\');
      }
      return text + (nFlag ? '' : '\n');
    },

    printf(args) {
      if (!args.length) return '';
      let fmt = stripOuterQuotes(expandValue(args[0]));
      // Unescape format string escapes
      fmt = fmt.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\');
      let argIndex = 1;
      // Replace format specifiers
      const result = fmt.replace(/%(-?\d*\.?\d*)?([sdiouxXeEfgGc%])/g, (match, width, spec) => {
        if (spec === '%') return '%';
        const val = expandValue(args[argIndex++] || '');
        if (spec === 'd' || spec === 'i') return String(Math.trunc(Number(val) || 0));
        if (spec === 'f') {
          const precision = width && width.includes('.') ? Number(width.split('.')[1]) : 6;
          return Number(val).toFixed(precision);
        }
        return val;
      });
      return result;
    },

    cat(args, stdin) {
      if (!args.length) return stdin || '';
      return args.map(path => {
        const content = getFile(path);
        if (content === null) {
          lastStatus = 1;
          return `cat: ${expandValue(path)}: No such file or directory\n`;
        }
        return ensureTrailingNewline(content);
      }).join('');
    },

    ls(args) {
      const showAll = hasFlag(args, 'a') || args.includes('--all');
      const longFmt = hasFlag(args, 'l');
      const paths = args.filter(a => !a.startsWith('-'));
      const results = paths.length ? paths.flatMap(p => listDirectory(p)) : listDirectory();
      const sorted = results.sort();
      if (longFmt) {
        return sorted.map(f => `-rw-r--r-- 1 student student  ${String(f).length * 10} May 26 10:00 ${f}`).join('\n') + '\n';
      }
      return sorted.join('\n') + '\n';
    },

    grep(args, stdin) {
      const invert = hasFlag(args, 'v');
      const caseInsensitive = hasFlag(args, 'i');
      const lineNumber = hasFlag(args, 'n');
      const countOnly = hasFlag(args, 'c');
      const visibleArgs = args.filter(a => !a.startsWith('-'));
      const pattern = stripOuterQuotes(expandValue(visibleArgs[0] || ''));
      const fileArg = visibleArgs[1];
      const content = fileArg ? getFile(fileArg) || '' : (stdin || '');

      if (content === '') {
        if (countOnly) return '0\n';
        lastStatus = 1;
        return '';
      }

      const lines = content.endsWith('\n')
        ? content.slice(0, -1).split('\n')
        : content.split('\n');

      const regex = caseInsensitive
        ? new RegExp(pattern, 'i')
        : new RegExp(pattern);

      const matched = lines
        .map((line, idx) => ({ line, idx: idx + 1 }))
        .filter(({ line }) => {
          try {
            const match = regex.test(line);
            return invert ? !match : match;
          } catch (e) {
            return line.includes(pattern) !== invert;
          }
        });

      if (countOnly) return `${matched.length}\n`;
      if (!matched.length) { lastStatus = 1; return ''; }
      lastStatus = 0;

      const result = matched
        .map(({ line, idx }) => lineNumber ? `${idx}:${line}` : line)
        .join('\n');

      return ensureTrailingNewline(result);
    },

    wc(args, stdin) {
      const visibleArgs = args.filter(a => !a.startsWith('-'));
      const content = visibleArgs.length
        ? String(getFile(visibleArgs[visibleArgs.length - 1]) || '')
        : String(stdin || '');

      const getLineCount = (str) => {
        if (!str) return 0;
        return str.endsWith('\n')
          ? str.split('\n').length - 1
          : str.split('\n').length;
      };

      if (hasFlag(args, 'l')) {
        return `${getLineCount(content)}\n`;
      }
      if (hasFlag(args, 'c') || args.includes('--bytes')) return `${content.length}\n`;
      if (hasFlag(args, 'w')) return `${content.split(/\s+/).filter(Boolean).length}\n`;

      // default: lines words chars
      const l = getLineCount(content);
      const w = content.split(/\s+/).filter(Boolean).length;
      const c = content.length;
      return `${l} ${w} ${c}\n`;
    },

    head(args, stdin) {
      let n = 10;
      const nIdx = args.indexOf('-n');
      if (nIdx >= 0 && nIdx + 1 < args.length) {
        n = Number(args[nIdx + 1]);
      } else {
        const nFlag = args.find(a => a.startsWith('-n') && a.length > 2);
        if (nFlag) {
          n = Number(nFlag.slice(2));
        } else {
          const numFlag = args.find(a => /^-\d+$/.test(a));
          if (numFlag) n = Number(numFlag.slice(1));
        }
      }
      const visibleArgs = args.filter(a => !a.startsWith('-') && args[args.indexOf(a) - 1] !== '-n');
      const content = visibleArgs.length ? String(getFile(visibleArgs[0]) || '') : String(stdin || '');
      return ensureTrailingNewline(content.split('\n').slice(0, n).join('\n'));
    },

    tail(args, stdin) {
      let n = 10;
      const nIdx = args.indexOf('-n');
      if (nIdx >= 0 && nIdx + 1 < args.length) {
        n = Number(args[nIdx + 1]);
      } else {
        const nFlag = args.find(a => a.startsWith('-n') && a.length > 2);
        if (nFlag) {
          n = Number(nFlag.slice(2));
        } else {
          const numFlag = args.find(a => /^-\d+$/.test(a));
          if (numFlag) n = Number(numFlag.slice(1));
        }
      }
      const visibleArgs = args.filter(a => !a.startsWith('-') && args[args.indexOf(a) - 1] !== '-n');
      const content = visibleArgs.length ? String(getFile(visibleArgs[0]) || '') : String(stdin || '');
      const contentLines = content.split('\n').filter(line => line !== '');
      return ensureTrailingNewline(contentLines.slice(Math.max(0, contentLines.length - n)).join('\n'));
    },

    sort(args, stdin) {
      const allFlags = args.filter(a => a.startsWith('-')).join('');
      const numericSort = allFlags.includes('n') || args.includes('--numeric-sort');
      const reverse = allFlags.includes('r') || args.includes('--reverse');
      const unique = allFlags.includes('u') || args.includes('--unique');
      const visibleArgs = args.filter(a => !a.startsWith('-'));
      const content = visibleArgs.length
        ? String(getFile(visibleArgs[visibleArgs.length - 1]) || '')
        : String(stdin || '');
      let sorted = content.split('\n').filter(Boolean);
      sorted.sort(numericSort ? (a, b) => parseFloat(a) - parseFloat(b) : (a, b) => a.localeCompare(b));
      if (reverse) sorted.reverse();
      if (unique) sorted = sorted.filter((v, i, a) => i === 0 || v !== a[i - 1]);
      return ensureTrailingNewline(sorted.join('\n'));
    },

    cut(args, stdin) {
      let delimiter = '\t';
      let fields = [1];
      const visibleArgs = [];
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '-d') delimiter = stripOuterQuotes(args[++i] || delimiter);
        else if (args[i].startsWith('-d')) delimiter = stripOuterQuotes(args[i].slice(2));
        else if (args[i] === '-f') {
          fields = (args[++i] || '1').split(',').map(Number);
        } else if (args[i].startsWith('-f')) {
          fields = args[i].slice(2).split(',').map(Number);
        } else visibleArgs.push(args[i]);
      }
      const content = visibleArgs.length
        ? String(getFile(visibleArgs[0]) || '')
        : String(stdin || '');
      return ensureTrailingNewline(
        content.split('\n').map(line => {
          const parts = line.split(delimiter);
          return fields.map(f => parts[f - 1] || '').join(delimiter);
        }).join('\n')
      );
    },

    tr(args, stdin) {
      const content = String(stdin || '');
      if (!args.length) return content;
      const deleteMode = args.includes('-d');
      const squeezeMode = args.includes('-s');
      const visibleArgs = args.filter(a => !a.startsWith('-'));

      function expandRange(str) {
        return str.replace(/(.)-(.)/g, (_, a, b) => {
          let res = '';
          const aCode = a.charCodeAt(0);
          const bCode = b.charCodeAt(0);
          for (let c = aCode; c <= bCode; c++) res += String.fromCharCode(c);
          return res;
        });
      }

      const set1 = expandRange(visibleArgs[0] || '');
      const set2 = expandRange(visibleArgs[1] || '');

      if (deleteMode) {
        return content.split('').filter(c => !set1.includes(c)).join('');
      }

      let result = content.split('').map(c => {
        const idx = set1.indexOf(c);
        if (idx === -1) return c;
        return set2[Math.min(idx, set2.length - 1)] || c;
      }).join('');

      if (squeezeMode) {
        result = result.replace(/(.)\1+/g, (_, c) => set2.includes(c) ? c : _);
      }
      return result;
    },

    seq(args) {
      let start = 1, step = 1, end;
      const nums = args.map(a => Number(expandValue(a))).filter(n => !isNaN(n));
      if (nums.length === 1) { end = nums[0]; }
      else if (nums.length === 2) { start = nums[0]; end = nums[1]; }
      else if (nums.length === 3) { start = nums[0]; step = nums[1]; end = nums[2]; }
      else return '';
      const result = [];
      if (step > 0) { for (let i = start; i <= end; i += step) result.push(i); }
      else if (step < 0) { for (let i = start; i >= end; i += step) result.push(i); }
      return result.join('\n') + '\n';
    },

    expr(args) {
      // expr a + b, expr a - b, expr a \* b, expr a / b, expr a % b
      // expr length string, expr substr string pos len, expr match string regex
      const expanded = args.map(expandValue);
      if (expanded[0] === 'length') {
        return String(String(expanded[1] || '').length) + '\n';
      }
      if (expanded[0] === 'substr') {
        const str = expanded[1] || '';
        const pos = Number(expanded[2]) - 1; // expr is 1-indexed
        const len = Number(expanded[3]);
        return str.slice(pos, pos + len) + '\n';
      }
      if (expanded[0] === 'index') {
        const str = expanded[1] || '';
        const chars = expanded[2] || '';
        for (let i = 0; i < str.length; i++) {
          if (chars.includes(str[i])) return String(i + 1) + '\n';
        }
        return '0\n';
      }
      // arithmetic: a OP b
      if (expanded.length >= 3) {
        const a = Number(expanded[0]);
        const op = expanded[1].replace(/\\(.)/g, '$1'); // unescape \*
        const b = Number(expanded[2]);
        let result;
        switch (op) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '*': result = a * b; break;
          case '/': result = Math.trunc(a / b); break;
          case '%': result = a % b; break;
          case '=': result = a === b ? 1 : 0; break;
          case '!=': result = a !== b ? 1 : 0; break;
          case '>': result = a > b ? 1 : 0; break;
          case '<': result = a < b ? 1 : 0; break;
          case '>=': result = a >= b ? 1 : 0; break;
          case '<=': result = a <= b ? 1 : 0; break;
          default: result = 0;
        }
        lastStatus = result === 0 ? 1 : 0;
        return String(result) + '\n';
      }
      return '0\n';
    },

    awk(args, stdin) {
      let delimiter = /\s+/;
      let program = '';
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '-F') {
          const sep = stripOuterQuotes(expandValue(args[++i] || ' '));
          delimiter = sep === '\\t' ? '\t' : new RegExp(sep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        } else if (args[i].startsWith('-F')) {
          const sep = stripOuterQuotes(args[i].slice(2));
          delimiter = sep === '\\t' ? '\t' : new RegExp(sep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        } else if (!program) {
          program = stripOuterQuotes(args[i]);
        }
      }
      const content = String(stdin || '');
      const lines = content.split('\n').filter(line => line.trim() !== '');

      let beginBlock = '';
      let endBlock = '';
      let mainBlock = '';

      const beginM = program.match(/BEGIN\s*\{([^}]*)\}/);
      if (beginM) beginBlock = beginM[1].trim();

      const endM = program.match(/END\s*\{([^}]*)\}/);
      if (endM) endBlock = endM[1].trim();

      let cleanProg = program
        .replace(/BEGIN\s*\{[^}]*\}/g, '')
        .replace(/END\s*\{[^}]*\}/g, '')
        .trim();

      const mainM = cleanProg.match(/\{([^}]*)\}/);
      if (mainM) mainBlock = mainM[1].trim();
      else if (!beginBlock && !endBlock) {
        mainBlock = cleanProg;
      }

      const results = [];
      const awkVars = {};

      function runAWKPrint(printStmt, fields, NR) {
        const stmt = printStmt.replace(/^print\s+/, '').trim();
        if (!stmt) {
          results.push(fields.slice(1).join(typeof delimiter === 'string' ? delimiter : ' '));
          return;
        }
        const parts = stmt.split(/\s*,\s*/).map(part => {
          part = part.trim();
          if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
            return part.slice(1, -1);
          }
          if (part.startsWith('$')) {
            const fIdx = Number(part.slice(1));
            if (fIdx === 0) return fields.slice(1).join(typeof delimiter === 'string' ? delimiter : ' ');
            return fields[fIdx] || '';
          }
          if (part === 'NR') return String(NR);
          if (part === 'NF') return String(fields.length - 1);
          if (awkVars[part] !== undefined) return String(awkVars[part]);
          return part;
        });
        results.push(parts.join(' '));
      }

      function runStatement(stmt, fields, NR) {
        stmt = stmt.trim();
        if (!stmt) return;
        if (stmt.startsWith('print')) {
          runAWKPrint(stmt, fields, NR);
          return;
        }
        const incrMatch = stmt.match(/^([a-zA-Z_]\w*)\+\+$/);
        if (incrMatch) {
          const varName = incrMatch[1];
          awkVars[varName] = (awkVars[varName] || 0) + 1;
          return;
        }
        const assignMatch = stmt.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
        if (assignMatch) {
          const varName = assignMatch[1];
          let expr = assignMatch[2].trim();
          expr = expr.replace(/\$([0-9]+)/g, (_, n) => String(fields[Number(n)] || ''));
          expr = expr.replace(/\b([a-zA-Z_]\w*)\b/g, name => String(awkVars[name] !== undefined ? awkVars[name] : 0));
          try {
            awkVars[varName] = Function(`"use strict"; return (${expr});`)();
          } catch (e) {
            awkVars[varName] = 0;
          }
          return;
        }
      }

      // Execute BEGIN block
      if (beginBlock) {
        beginBlock.split(';').forEach(s => runStatement(s, ['', ''], 0));
      }

      // Execute MAIN block for each line
      if (mainBlock) {
        lines.forEach((line, idx) => {
          const splitLine = line.split(delimiter);
          const fields = ['', ...splitLine];
          mainBlock.split(';').forEach(s => runStatement(s, fields, idx + 1));
        });
      }

      // Execute END block
      if (endBlock) {
        const fields = ['', ''];
        endBlock.split(';').forEach(s => runStatement(s, fields, lines.length));
      }

      return results.length ? results.join('\n') + '\n' : '';
    },

    uniq(args, stdin) {
      const visibleArgs = args.filter(a => !a.startsWith('-'));
      const countMode = args.includes('-c');
      const content = visibleArgs.length
        ? String(getFile(visibleArgs[0]) || '')
        : String(stdin || '');
      const lines = content.split('\n').filter(Boolean);
      const result = [];
      let prev = null, count = 0;
      for (const line of lines) {
        if (line === prev) { count++; }
        else {
          if (prev !== null) result.push(countMode ? `   ${count} ${prev}` : prev);
          prev = line; count = 1;
        }
      }
      if (prev !== null) result.push(countMode ? `   ${count} ${prev}` : prev);
      return ensureTrailingNewline(result.join('\n'));
    },

    find(args) {
      const pathArg = args[0] && !args[0].startsWith('-') ? expandValue(args[0]) : '.';
      const nameIdx = args.indexOf('-name');
      const typeIdx = args.indexOf('-type');
      const namePattern = nameIdx >= 0 ? stripOuterQuotes(expandValue(args[nameIdx + 1] || '')) : '*';
      const typeFilter = typeIdx >= 0 ? args[typeIdx + 1] : null;

      const pathsSet = new Set();
      for (const d of directories) {
        pathsSet.add(d);
        let parts = d.split('/');
        while (parts.length > 1) {
          parts.pop();
          const p = parts.join('/') || '/';
          pathsSet.add(p);
        }
      }
      for (const file of Object.keys(fs)) {
        pathsSet.add(file);
        let parts = file.split('/');
        while (parts.length > 1) {
          parts.pop();
          const p = parts.join('/') || '/';
          pathsSet.add(p);
        }
      }
      const allPaths = Array.from(pathsSet);

      const regexStr = '^' + namePattern
        .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
        .replace(/\*/g, '.*') + '$';
      const nameRegex = new RegExp(regexStr);
      const dir = pathArg === '.' ? '' : pathArg;
      const filtered = allPaths.filter(p => {
        const prefix = dir === '/' ? '/' : dir + '/';
        const inDir = !dir || p.startsWith(prefix) || p === dir;
        const basename = p.split('/').pop();
        const matchName = namePattern === '*' || nameRegex.test(basename);
        const matchType = !typeFilter || 
          (typeFilter === 'f' && !isDir(p)) ||
          (typeFilter === 'd' && isDir(p));
        return inDir && matchName && matchType;
      });
      if (!filtered.length) { lastStatus = 1; return ''; }
      return filtered.sort().join('\n') + '\n';
    },

    touch(args) {
      args.map(expandValue).forEach(path => setFile(path, getFile(path) || ''));
      return '';
    },

    mkdir(args) {
      args.filter(a => a !== '-p').map(expandValue).forEach(path => directories.add(path));
      return '';
    },

    rm(args) {
      const visibleArgs = args.filter(a => !a.startsWith('-'));
      visibleArgs.map(expandValue).forEach(path => { delete fs[path]; });
      return '';
    },

    cp(args) {
      const src = expandValue(args[args.length - 2] || '');
      const dst = expandValue(args[args.length - 1] || '');
      if (src && dst) fs[dst] = fs[src] || '';
      return '';
    },

    mv(args) {
      const src = expandValue(args[0] || '');
      const dst = expandValue(args[1] || '');
      if (src && dst) { fs[dst] = fs[src] || ''; delete fs[src]; }
      return '';
    },

    chmod(args) {
      lastStatus = 0;
      return `mode ${expandValue(args[0])} applied to ${expandValue(args[1])}\n`;
    },
    chown(args) {
      lastStatus = 0;
      return `owner ${expandValue(args[0])} applied to ${expandValue(args[1])}\n`;
    },

    groupadd(args) {
      const gidIndex = args.indexOf('-g');
      groups.push({ name: expandValue(args[args.length - 1]), gid: gidIndex >= 0 ? expandValue(args[gidIndex + 1]) : '' });
      return '';
    },

    useradd(args) {
      const groupIndex = args.indexOf('-g');
      users.push({ name: expandValue(args[args.length - 1]), group: groupIndex >= 0 ? expandValue(args[groupIndex + 1]) : '' });
      return '';
    },

    tar(args) {
      let archiveName = '';
      let sourceFiles = [];
      let foundArchive = false;
      for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('-') || /^[cxzjfv]+$/.test(arg)) continue;
        if (!foundArchive) {
          archiveName = expandValue(arg);
          foundArchive = true;
        } else {
          sourceFiles.push(expandValue(arg));
        }
      }
      if (!archiveName) {
        archiveName = 'archive.tar';
      }
      archives[archiveName] = sourceFiles;
      setFile(archiveName, sourceFiles.join('\n'));
      return `${archiveName}: ${sourceFiles.join(' ')}\n`;
    },

    lvextend(args) {
      const sizeIndex = args.indexOf('-L');
      const size = sizeIndex >= 0 ? expandValue(args[sizeIndex + 1]) : '';
      const target = expandValue(args[args.length - 1]);
      return `Size of logical volume ${target} changed by ${size}.\n`;
    },

    resize2fs(args) {
      return `Filesystem resized on ${expandValue(args[0])}.\n`;
    },

    netplan(args) {
      const action = expandValue(args[0] || '');
      if (action === 'generate') return 'Generated netplan configuration.\n';
      if (action === 'try') return 'Configuration accepted. Rollback timer cancelled.\n';
      if (action === 'apply') return 'Applied netplan configuration.\n';
      return '';
    },

    ufw(args) {
      const action = expandValue(args[0] || '');
      if (action === 'status') {
        return firewallRules.length
          ? `Status: active\n${firewallRules.join('\n')}\n`
          : 'Status: inactive\n';
      }
      if (action === 'allow') {
        const rule = expandValue(args[1] || '');
        firewallRules.push(rule);
        return `Rule added: ${rule}\n`;
      }
      if (args.includes('enable')) return 'Firewall is active and enabled on system startup.\n';
      if (args.includes('disable')) return 'Firewall stopped and disabled on system startup.\n';
      return '';
    },

    systemctl(args) {
      const action = expandValue(args[0] || '');
      const service = expandValue(args[1] || '');
      if (action === 'enable') {
        services[service] = true;
        return `Created symlink for ${service}.service.\n`;
      }
      if (action === 'start') return '';
      if (action === 'stop') return '';
      if (action === 'status') {
        return services[service]
          ? `● ${service}.service - Service\n   Loaded: loaded (enabled)\n   Active: active (running)\n`
          : `● ${service}.service - Service\n   Loaded: loaded (disabled)\n   Active: inactive (dead)\n`;
      }
      return '';
    },

    tcpdump(args) {
      const ifaceIdx = args.indexOf('-i');
      const iface = ifaceIdx >= 0 ? expandValue(args[ifaceIdx + 1]) : 'eth0';
      const srcIdx = args.indexOf('src');
      const portIdx = args.indexOf('port');
      const srcIP = srcIdx >= 0 ? expandValue(args[srcIdx + 1]) : '0.0.0.0';
      const port = portIdx >= 0 ? expandValue(args[portIdx + 1]) : '0';
      return `listening on ${iface}\nIP ${srcIP}.54321 > 192.168.1.100.${port}: Flags [S]\n`;
    },

    dmesg(args) {
      const full = '[0.000000] Linux version 5.15.0-generic\n[1.250000] eth0: link up\n[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n';
      return full;
    },

    whoami() { return 'student\n'; },

    uptime(args) {
      return ' 12:00:00 up 3 days,  4:20,  1 user,  load average: 0.15, 0.10, 0.09\n';
    },

    ps(args) {
      return '  PID TTY          TIME CMD\n' +
             ' 1234 pts/0    00:00:01 bash\n' +
             ' 1245 pts/0    00:00:00 ps\n' +
             ' 1500 pts/0    00:00:05 systemd\n' +
             ' 1612 pts/0    00:00:00 sshd\n' +
             ' 1720 pts/0    00:00:02 apache2\n';
    },

    rev(args, stdin) {
      const fileArg = args.filter(a => !a.startsWith('-'))[0];
      const content = fileArg ? getFile(fileArg) || '' : (stdin || '');
      if (!content) return '';
      const hasTrailing = content.endsWith('\n');
      const lines = hasTrailing ? content.slice(0, -1).split('\n') : content.split('\n');
      const reversed = lines.map(line => line.split('').reverse().join('')).join('\n');
      return hasTrailing ? reversed + '\n' : reversed;
    },

    free(args) {
      const human = hasFlag(args, 'h') || args.includes('--human');
      if (human) {
        return '              total        used        free      shared  buff/cache   available\n' +
               'Mem:           7.8G        2.1G        4.0G        234M        1.7G        5.2G\n' +
               'Swap:          2.0G          0B        2.0G\n';
      }
      return '              total        used        free      shared  buff/cache   available\n' +
             'Mem:        8192000     2150000     4096000      234000     1700000     5350000\n' +
             'Swap:       2048000           0     2048000\n';
    },

    df(args) {
      const human = hasFlag(args, 'h') || args.includes('--human');
      if (human) {
        return 'Filesystem      Size  Used Avail Use% Mounted on\n' +
               '/dev/sda1        20G  8.1G   11G  44% /\n' +
               'tmpfs           3.9G     0  3.9G   0% /dev/shm\n' +
               '/dev/sdb1        50G   20G   28G  42% /data\n';
      }
      return 'Filesystem     1K-blocks    Used Available Use% Mounted on\n' +
             '/dev/sda1       20971520 8491008  11534336  44% /\n' +
             'tmpfs            4096000       0   4096000   0% /dev/shm\n';
    },

    ss(args, stdin) {
      const content = '-t -u -l -n flags passed\n' +
        'Netid  State   Recv-Q  Send-Q  Local Address:Port  Peer Address:Port\n' +
        'tcp    LISTEN  0       128     0.0.0.0:22          0.0.0.0:*\n' +
        'tcp    LISTEN  0       128     0.0.0.0:80          0.0.0.0:*\n' +
        'tcp    LISTEN  0       128     0.0.0.0:443         0.0.0.0:*\n' +
        'udp    UNCONN  0       0       0.0.0.0:68          0.0.0.0:*\n';
      return content;
    },

    ip(args) {
      const sub = expandValue(args[0] || '');
      if (sub === 'addr' || sub === 'a') {
        return '1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536\n' +
               '    inet 127.0.0.1/8 scope host lo\n' +
               '2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n' +
               '    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\n';
      }
      if (sub === 'route' || sub === 'r') {
        return 'default via 192.168.1.1 dev eth0\n' +
               '192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.100\n';
      }
      return '';
    },

    ping(args) {
      if (typeof input !== 'undefined' && (input.includes('No') || input.includes('Down') || input.includes('blocks') || input.includes('failure'))) {
        lastStatus = 1;
        return '';
      }
      const countIdx = args.indexOf('-c');
      const count = countIdx >= 0 ? Number(expandValue(args[countIdx + 1])) : 4;
      const host = expandValue(args[args.length - 1]);
      let result = `PING ${host} (8.8.8.8) 56(84) bytes of data.\n`;
      for (let i = 0; i < count; i++) {
        result += `64 bytes from ${host}: icmp_seq=${i+1} ttl=117 time=12.${i} ms\n`;
      }
      result += `\n--- ${host} ping statistics ---\n`;
      result += `${count} packets transmitted, ${count} received, 0% packet loss\n`;
      result += `rtt min/avg/max/mdev = 11.2/12.1/13.4/0.8 ms\n`;
      return result;
    },

    iptables(args) {
      const action = args[0];
      if (action === '-L') {
        return 'Chain INPUT (policy ACCEPT)\n' +
               'target  prot opt source    destination\n' +
               'ACCEPT  tcp  --  anywhere  anywhere   tcp dpt:ssh\n';
      }
      if (action === '-A' || action === '-I') {
        const protoIdx = args.indexOf('-p');
        const proto = protoIdx >= 0 ? args[protoIdx + 1] : 'tcp';
        const dportIdx = args.indexOf('--dport');
        const port = dportIdx >= 0 ? args[dportIdx + 1] : '80';
        const jumpIdx = args.indexOf('-j');
        const jump = jumpIdx >= 0 ? args[jumpIdx + 1] : 'ACCEPT';
        firewallRules.push(`${jump} ${proto} dpt:${port}`);
        return '';
      }
      return '';
    },

    passwd(args) {
      const user = expandValue(args[args.length - 1] || 'root');
      return `Enter new UNIX password: \nRetype new UNIX password: \npasswd: password updated successfully\n`;
    },

    usermod(args) {
      const gIdx = args.indexOf('-G');
      const aFlag = args.includes('-a');
      const user = expandValue(args[args.length - 1]);
      const group = gIdx >= 0 ? expandValue(args[gIdx + 1]) : '';
      if (aFlag && group) {
        const existing = users.find(u => u.name === user);
        if (existing) existing.groups = [...(existing.groups || []), group];
      }
      return '';
    },

    'ssh-keygen'(args) {
      const typeIdx = args.indexOf('-t');
      const bitsIdx = args.indexOf('-b');
      const type = typeIdx >= 0 ? expandValue(args[typeIdx + 1]) : 'rsa';
      const bits = bitsIdx >= 0 ? expandValue(args[bitsIdx + 1]) : '2048';
      
      setFile('/home/student/.ssh/id_rsa', '-----BEGIN RSA PRIVATE KEY-----\n[key data]\n-----END RSA PRIVATE KEY-----');
      setFile('/home/student/.ssh/id_rsa.pub', `ssh-${type} AAAAB3NzaC1yc2EAAAA... student@ubuntu-server`);
      
      return `Generating public/private ${type} key pair.\n` +
             `Enter file in which to save the key (/home/student/.ssh/id_${type}): \n` +
             `Your identification has been saved in /home/student/.ssh/id_${type}\n` +
             `Your public key has been saved in /home/student/.ssh/id_${type}.pub\n`;
    },

    id(args) {
      const uid = (typeof vars !== 'undefined' && vars['MOCK_UID'] !== undefined) ? vars['MOCK_UID'] : '1000';
      if (args.includes('-u')) return `${uid}\n`;
      if (args.includes('-g')) return '1000\n';
      return `uid=${uid}(student) gid=1000(student) groups=1000(student)\n`;
    },

    uname(args) {
      if (args.includes('-s')) return 'Linux\n';
      if (args.includes('-r')) return '5.15.0-generic\n';
      if (args.includes('-a')) return 'Linux ubuntu 5.15.0-generic #1 SMP x86_64 GNU/Linux\n';
      return 'Linux ubuntu 5.15.0-generic\n';
    },

    hostname() { return 'ubuntu-server\n'; },

    pwd() { return '/home/student\n'; },

    date(args) {
      let now = new Date();
      if (typeof vars !== 'undefined' && vars["MOCK_DATE"]) {
        now = new Date(vars["MOCK_DATE"]);
      }
      if (!args.length) return now.toString() + '\n';

      const fmt = expandValue(args[0]);
      if (!fmt.startsWith('+')) return now.toString() + '\n';

      const formatStr = fmt.slice(1);
      const pad = (n, w = 2) => String(n).padStart(w, '0');

      const replacements = {
        '%Y': now.getFullYear(),
        '%y': String(now.getFullYear()).slice(-2),
        '%m': pad(now.getMonth() + 1),
        '%d': pad(now.getDate()),
        '%H': pad(now.getHours()),
        '%M': pad(now.getMinutes()),
        '%S': pad(now.getSeconds()),
        '%j': pad(Math.ceil((now - new Date(now.getFullYear(), 0, 1)) / 86400000), 3),
        '%A': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()],
        '%a': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][now.getDay()],
        '%B': ['January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()],
        '%b': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
               'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][now.getMonth()],
        '%s': Math.floor(now.getTime() / 1000),
        '%n': '\n',
        '%t': '\t',
      };

      let result = formatStr;
      for (const [token, value] of Object.entries(replacements)) {
        result = result.split(token).join(String(value));
      }
      return result + '\n';
    },

    true() { lastStatus = 0; return ''; },
    false() { lastStatus = 1; return ''; },

    test(args) {
      // 'test' is same as [ ] but without brackets
      const condition = '[' + args.join(' ') + ']';
      const result = evalSingleTest(condition);
      lastStatus = result ? 0 : 1;
      return '';
    },

    // String utilities
    basename(args) {
      const path = expandValue(args[0] || '');
      const suffix = args[1] ? expandValue(args[1]) : '';
      let base = path.split('/').pop() || path;
      if (suffix && base.endsWith(suffix)) base = base.slice(0, -suffix.length);
      return base + '\n';
    },

    dirname(args) {
      const path = expandValue(args[0] || '');
      const parts = path.split('/');
      parts.pop();
      return (parts.join('/') || '.') + '\n';
    },

    // Numeric
    bc(args, stdin) {
      const expr = String(stdin || '').trim();
      let scale = 0;
      let calcExpr = expr;
      const scaleMatch = expr.match(/scale\s*=\s*(\d+)\s*;\s*(.*)/s);
      if (scaleMatch) {
        scale = Number(scaleMatch[1]);
        calcExpr = scaleMatch[2];
      }
      const jsExpr = calcExpr.replace(/\^/g, '**');
      try {
        const result = Function(`"use strict"; return (${jsExpr});`)();
        if (!Number.isFinite(result)) return '0\n';
        const factor = Math.pow(10, scale);
        const truncated = Math.trunc(result * factor) / factor;
        return truncated.toFixed(scale) + '\n';
      } catch (e) {
        return '0\n';
      }
    },

    sed(args, stdin) {
      const inPlace = args.includes('-i');
      const visibleArgs = args.filter(a => a !== '-i');
      const expression = stripOuterQuotes(expandValue(visibleArgs[0] || ''));
      const fileArg = visibleArgs[1];
      const content = fileArg ? getFile(fileArg) || '' : (stdin || '');

      let result = content;
      const sedMatch = expression.match(/^s\/([^\/]*)\/([^\/]*)\/([g]*)$/);
      if (sedMatch) {
        const pattern = sedMatch[1];
        const replacement = sedMatch[2];
        const flags = sedMatch[3];
        try {
          const regex = new RegExp(pattern, flags);
          result = content.split('\n').map(line => line.replace(regex, replacement)).join('\n');
        } catch (e) {
          if (flags.includes('g')) {
            result = content.split('\n').map(line => line.split(pattern).join(replacement)).join('\n');
          } else {
            result = content.split('\n').map(line => line.replace(pattern, replacement)).join('\n');
          }
        }
      }

      if (inPlace && fileArg) {
        setFile(fileArg, result);
        return '';
      }
      return result;
    },
  };

  // ────────────────────────────────────────────────────
  //  CONDITION EVALUATION
  // ────────────────────────────────────────────────────

  function evalSingleTest(condition) {
    let clean = condition
      .replace(/^if\s+/, '')
      .replace(/^elif\s+/, '')
      .replace(/^while\s+/, '')
      .replace(/^until\s+/, '')
      .replace(/\bthen\b/g, '')
      .replace(/;\s*$/, '')
      .trim();

    if (clean.startsWith('! ')) {
      const inner = clean.slice(2).trim();
      const result = evalSingleTest(inner);
      lastStatus = result ? 1 : 0;
      return !result;
    }

    // (( arithmetic )) test
    const arithmeticMatch = clean.match(/^\(\((.+)\)\)$/);
    if (arithmeticMatch) {
      const val = Number(expandArithmeticExpression(arithmeticMatch[1]));
      lastStatus = val ? 0 : 1;
      return val !== 0;
    }

    // [[ ... ]] — double bracket (treat same as [ ] with slightly relaxed rules)
    const doubleMatch = clean.match(/^\[\[\s*([\s\S]+?)\s*\]\]$/);
    if (doubleMatch) {
      // Handle && and || inside [[ ]]
      const inner = doubleMatch[1];
      return evalCompoundBracket(inner);
    }

    // [ ... ] — single bracket
    const bracketMatch = clean.match(/^\[\s*([\s\S]+?)\s*\]$/);
    if (bracketMatch) {
      return evalBracketContent(bracketMatch[1]);
    }

    // Handle bare command (not wrapped in [ ] or (( )) )
    if (clean.length > 0) {
      runPipeline(clean);
      return lastStatus === 0;
    }

    return false;
  }

  function evalBracketContent(inner) {
    inner = inner.trim();

    // Handle || and && inside brackets
    if (/\s+\|\|\s+/.test(inner)) {
      return inner.split(/\s+\|\|\s+/).some(part => evalBracketContent(part.trim()));
    }
    if (/\s+&&\s+/.test(inner)) {
      return inner.split(/\s+&&\s+/).every(part => evalBracketContent(part.trim()));
    }

    // Binary operators
    const binaryMatch = inner.match(/^(.*?)\s+(-eq|-ne|-gt|-ge|-lt|-le|==|=~|!=|=|<|>)\s+(.*?)$/);
    if (binaryMatch) {
      const left = expandValue(binaryMatch[1].trim());
      const op = binaryMatch[2];
      const right = expandValue(binaryMatch[3].trim());
      const leftNum = Number(left);
      const rightNum = Number(right);
      switch (op) {
        case '-eq': return leftNum === rightNum;
        case '-ne': return leftNum !== rightNum;
        case '-gt': return leftNum > rightNum;
        case '-ge': return leftNum >= rightNum;
        case '-lt': return leftNum < rightNum;
        case '-le': return leftNum <= rightNum;
        case '=':
        case '==': return left === right;
        case '!=': return left !== right;
        case '<':  return left < right;   // lexicographic
        case '>':  return left > right;
        case '=~': {
          try { return new RegExp(right).test(left); } catch { return false; }
        }
        default: return false;
      }
    }

    // Unary operators
    const unaryMatch = inner.match(/^(-z|-n|-d|-f|-e|-r|-w|-x|-s|-L)\s+(.+)$/);
    if (unaryMatch) {
      const target = expandValue(unaryMatch[2].trim());
      switch (unaryMatch[1]) {
        case '-z': return target.length === 0;
        case '-n': return target.length > 0;
        case '-d': return isDir(target);
        case '-f':
        case '-e':
        case '-r':
        case '-w':
        case '-x': return Object.prototype.hasOwnProperty.call(fs, target);
        case '-s': return Object.prototype.hasOwnProperty.call(fs, target) && String(fs[target]).length > 0;
        case '-L': return Object.prototype.hasOwnProperty.call(fs, target);
      }
    }

    // Bare variable / string (truthy check)
    if (inner && !inner.startsWith('-')) {
      return expandValue(inner).length > 0;
    }

    return false;
  }

  function evalCompoundBracket(inner) {
    return evalBracketContent(inner);
  }

  function evalCondition(condLine) {
    const normalized = condLine
      .replace(/^if\s+/, '')
      .replace(/^elif\s+/, '')
      .replace(/^while\s+/, '')
      .replace(/^until\s+/, '')
      .replace(/\bthen\b/g, '')
      .replace(/;\s*do\s*$/, '')
      .replace(/;\s*$/, '')
      .trim();

    // Handle compound: COND1 || { COND2 && COND3 } style (used in leap year)
    // First, normalize { ... } groups
    const withoutBraces = normalized.replace(/(\$)?\{([^}]+)\}/g, (match, p1, p2) => {
      if (p1 === '$') return match;
      return p2.trim();
    });

    // Split by top-level ||
    const orParts = splitByLogicalOp(withoutBraces, '||');
    return orParts.some(orPart => {
      const andParts = splitByLogicalOp(orPart, '&&');
      return andParts.every(andPart => evalSingleTest(andPart.trim()));
    });
  }

  function splitByLogicalOp(str, op) {
    const parts = [];
    let current = '';
    let squareDepth = 0;
    let parenDepth = 0;
    let i = 0;
    const opLen = op.length;

    while (i < str.length) {
      // Track [[ ]] and [ ]
      if (str[i] === '[') { squareDepth++; current += str[i++]; continue; }
      if (str[i] === ']') { squareDepth--; current += str[i++]; continue; }
      // Track (( )) and ( )
      if (str[i] === '(') { parenDepth++; current += str[i++]; continue; }
      if (str[i] === ')') { parenDepth--; current += str[i++]; continue; }

      if (squareDepth === 0 && parenDepth === 0 && str.slice(i, i + opLen) === op) {
        // Make sure not ||| or &&&
        const before = str[i - 1];
        const after = str[i + opLen];
        if (before !== op[0] && after !== op[0]) {
          parts.push(current.trim());
          current = '';
          i += opLen;
          continue;
        }
      }
      current += str[i++];
    }
    if (current.trim()) parts.push(current.trim());
    return parts.filter(Boolean);
  }

  function evalArithmeticCondition(expr) {
    const clean = expr.trim();
    if (!clean) return false;
    const result = expandArithmeticExpression(clean);
    if (result === '' || result === '0') return false;
    const numeric = Number(result);
    return !Number.isNaN(numeric) && numeric !== 0;
  }

  // ────────────────────────────────────────────────────
  //  ASSIGNMENT & STEP HELPERS
  // ────────────────────────────────────────────────────

  function applyAssignment(name, valueExpr) {
    // Handle += -= *= /= %=
    const compound = valueExpr.match(/^([+\-*\/%])=(.+)$/);
    if (compound) {
      const cur = Number(vars[name] || 0);
      const rhs = Number(expandValue(compound[2]));
      switch (compound[1]) {
        case '+': vars[name] = String(cur + rhs); return;
        case '-': vars[name] = String(cur - rhs); return;
        case '*': vars[name] = String(cur * rhs); return;
        case '/': vars[name] = String(Math.trunc(cur / rhs)); return;
        case '%': vars[name] = String(cur % rhs); return;
      }
    }
    vars[name] = expandValue(valueExpr);
  }

  function runAssignmentStatement(statement) {
    const compact = statement.replace(/;$/, '').trim();

    // (( var = expr ))
    const arithAssign = compact.match(/^\(\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*([+\-*\/]?=)\s*(.+?)\s*\)\)$/);
    if (arithAssign) {
      const name = arithAssign[1];
      const op = arithAssign[2];
      const expr = arithAssign[3];
      if (op === '=') {
        vars[name] = expandArithmeticExpression(expr);
      } else {
        const cur = Number(vars[name] || 0);
        const rhs = Number(expandArithmeticExpression(expr));
        switch (op) {
          case '+=': vars[name] = String(cur + rhs); break;
          case '-=': vars[name] = String(cur - rhs); break;
          case '*=': vars[name] = String(cur * rhs); break;
          case '/=': vars[name] = String(Math.trunc(cur / rhs)); break;
        }
      }
      return;
    }

    // var=value or var+=value
    const assignMatch = compact.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*([+\-*\/]?=)\s*(.*)$/);
    if (assignMatch) {
      const name = assignMatch[1];
      const op = assignMatch[2];
      const rhs = assignMatch[3];
      if (op === '=') {
        applyAssignment(name, rhs);
      } else {
        applyAssignment(name, op.slice(0, -1) + '=' + rhs); // e.g. += becomes +=rhs
      }
    }
  }

  function runForStep(stepExpr) {
    const step = stepExpr.trim();

    const postIncr = step.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\+\+$/);
    if (postIncr) { vars[postIncr[1]] = String(Number(vars[postIncr[1]] || 0) + 1); return; }

    const postDecr = step.match(/^([a-zA-Z_][a-zA-Z0-9_]*)--$/);
    if (postDecr) { vars[postDecr[1]] = String(Number(vars[postDecr[1]] || 0) - 1); return; }

    const preIncr = step.match(/^\+\+\s*([a-zA-Z_][a-zA-Z0-9_]*)$/);
    if (preIncr) { vars[preIncr[1]] = String(Number(vars[preIncr[1]] || 0) + 1); return; }

    runAssignmentStatement(step);
  }

  function expandBraceWord(word) {
    // {1..10} or {a..z}
    const numRange = word.match(/^\{(\d+)\.\.(\d+)\}$/);
    if (numRange) {
      const start = Number(numRange[1]), end = Number(numRange[2]);
      const result = [];
      if (start <= end) for (let n = start; n <= end; n++) result.push(String(n));
      else for (let n = start; n >= end; n--) result.push(String(n));
      return result;
    }
    // {a,b,c}
    const listRange = word.match(/^\{([^}]+)\}$/);
    if (listRange) return listRange[1].split(',');
    return [expandValue(word)];
  }

  function expandForInWords(listExpr) {
    const arrayRef = listExpr.trim().match(/^"?(?:\$\{([a-zA-Z_][a-zA-Z0-9_]*)\[[@*]\]\}|\$([a-zA-Z_][a-zA-Z0-9_]*))"?$/);
    if (arrayRef) {
      const name = arrayRef[1] || arrayRef[2];
      if (arrays[name]) return arrays[name];
    }

    return splitCommandWords(expandValue(listExpr))
      .flatMap(word => expandBraceWord(word))
      .filter(word => word !== '');
  }

  // ────────────────────────────────────────────────────
  //  LOOP STRUCTURE HELPERS
  // ────────────────────────────────────────────────────

  function isLoopStartLine(line) {
    return /^for\s/.test(line) || /^while\s/.test(line) || /^until\s/.test(line);
  }

  function findLoopDoneIndex(allLines, startIndex) {
    let depth = 1;
    for (let i = startIndex + 1; i < allLines.length; i++) {
      if (isLoopStartLine(allLines[i])) depth++;
      if (allLines[i] === 'done') { if (--depth === 0) return i; }
    }
    return allLines.length - 1;
  }

  function loopBodyStartIndex(allLines, loopLineIndex, loopLine) {
    if (/\bdo\s*$/.test(loopLine) || loopLine.endsWith('; do')) return loopLineIndex + 1;
    if (allLines[loopLineIndex + 1] === 'do') return loopLineIndex + 2;
    return loopLineIndex + 1;
  }

  // ────────────────────────────────────────────────────
  //  PIPELINE & SIMPLE LINE EXECUTION
  // ────────────────────────────────────────────────────

  runPipeline = function(commandString, initialStdin = '') {
    const normalized = commandString.replace(/\s+2>&1/g, '').trim();
    // Handle && and || command chaining at the pipeline level
    if (/\s+&&\s+/.test(normalized) || /\s+\|\|\s+/.test(normalized)) {
      // Split carefully respecting pipes and quotes
      return runConditionalChain(normalized);
    }

    // Handle redirections first
    const redirection = splitRedirection(normalized);
    if (redirection) {
      const result = runPipeline(redirection.command, initialStdin);
      if (redirection.operator === '>') setFile(redirection.target, result);
      else if (redirection.operator === '>>') appendFile(redirection.target, result);
      else if (redirection.operator === '<') {
        return runPipeline(redirection.command, getFile(redirection.target) || '');
      }
      return '';
    }

    // Split into pipe stages
    const stages = splitByPipe(normalized);
    let currentStdin = initialStdin;

    for (const stage of stages) {
      const trimmed = stage.trim();
      if (!trimmed) continue;

      const parts = splitCommandWords(trimmed);
      if (!parts.length) continue;
      let cmdName = parts[0];
      let args = parts.slice(1);

      if (cmdName === 'sudo' && args.length > 0) {
        cmdName = args[0];
        args = args.slice(1);
      }

      if (commands[cmdName]) {
        lastStatus = 0;
        currentStdin = commands[cmdName](args, currentStdin) || '';
      } else if (/^[a-zA-Z_][a-zA-Z0-9_]*=/.test(cmdName)) {
        // Inline assignment: VAR=value
        const eqIdx = cmdName.indexOf('=');
        vars[cmdName.slice(0, eqIdx)] = expandValue(cmdName.slice(eqIdx + 1));
        currentStdin = '';
      } else if (cmdName === 'read') {
        readVars(args);
        currentStdin = '';
      } else if (cmdName === 'export') {
        // export VAR=value or export VAR
        args.forEach(arg => {
          const eqIdx = arg.indexOf('=');
          if (eqIdx >= 0) vars[arg.slice(0, eqIdx)] = expandValue(arg.slice(eqIdx + 1));
        });
        currentStdin = '';
      } else if (cmdName === 'local') {
        // local VAR=value (treat like assignment)
        args.forEach(arg => {
          const eqIdx = arg.indexOf('=');
          if (eqIdx >= 0) vars[arg.slice(0, eqIdx)] = expandValue(arg.slice(eqIdx + 1));
          else if (!vars[arg]) vars[arg] = '';
        });
        currentStdin = '';
      } else if (functions[cmdName]) {
        const savedArgs = {
          '#': vars['#'],
          '@': vars['@'],
        };
        for (let k = 1; ; k++) {
          if (vars[String(k)] === undefined && k > 10) break;
          savedArgs[String(k)] = vars[String(k)];
        }

        vars['#'] = args.length;
        vars['@'] = args.join(' ');
        for (let k = 1; ; k++) {
          if (vars[String(k)] === undefined && k > 10) break;
          delete vars[String(k)];
        }
        args.forEach((arg, idx) => {
          vars[String(idx + 1)] = expandValue(arg);
        });

        runLines(functions[cmdName], 0, functions[cmdName].length);

        for (let k = 1; ; k++) {
          if (vars[String(k)] === undefined && k > 10) break;
          delete vars[String(k)];
        }
        Object.entries(savedArgs).forEach(([k, v]) => {
          if (v !== undefined) vars[k] = v;
        });

        currentStdin = '';
      } else {
        // Unknown command
        lastStatus = 127;
        currentStdin = '';
      }
    }
    return currentStdin;
  };

  function runConditionalChain(command) {
    // Simple split on && and || (outside quotes/brackets)
    // For now handle sequential && chains
    const andParts = command.split(/\s+&&\s+/);
    let result = '';
    for (const part of andParts) {
      result = runPipeline(part.trim());
      if (lastStatus !== 0) break;
    }
    return result;
  }

  function runSimpleLine(line) {
    const compact = line.replace(/;$/, '').trim();
    if (!compact || compact === 'do' || compact === 'done' || compact === 'then' || compact === 'fi' || compact === 'esac') return;

    // read statement
    const readMatch = compact.match(/^read(\s+.+)?$/);
    if (readMatch) {
      const varNames = (readMatch[1] || '').trim().split(/\s+/).filter(Boolean);
      readVars(varNames);
      return;
    }

    // (( var++ )) or (( expr ))
    const arithStmt = compact.match(/^\(\((.+)\)\)$/);
    if (arithStmt) {
      // Could be assignment or just an expression
      const inner = arithStmt[1].trim();
      const assignPart = inner.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*([+\-*\/]?=)\s*(.+)$/);
      if (assignPart) {
        runAssignmentStatement(compact);
      } else {
        // Just evaluate (e.g. ((i++)))
        expandArithmeticExpression(inner);
        // Handle i++ side effects via a re-parse
        const postIncr = inner.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\+\+$/);
        const postDecr = inner.match(/^([a-zA-Z_][a-zA-Z0-9_]*)--$/);
        if (postIncr) vars[postIncr[1]] = String(Number(vars[postIncr[1]] || 0) + 1);
        else if (postDecr) vars[postDecr[1]] = String(Number(vars[postDecr[1]] || 0) - 1);
        else runForStep(inner);
      }
      return;
    }

    // array assignment: NAME=(elem1 elem2 ...) or NAME+=(elem1 elem2 ...)
    const arrayAssign = compact.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*(\+?)=\s*\(([^)]*)\)$/);
    if (arrayAssign) {
      const name = arrayAssign[1];
      const isAppend = arrayAssign[2] === '+';
      const elements = splitCommandWords(arrayAssign[3]).map(w => expandValue(w));
      if (isAppend) {
        arrays[name] = (arrays[name] || []).concat(elements);
      } else {
        arrays[name] = elements;
      }
      return;
    }

    // variable assignment: NAME=value or NAME+=value
    const assignMatch = compact.match(/^([a-zA-Z_][a-zA-Z0-9_]*)([+\-*\/]?=)(.*)$/);
    if (assignMatch) {
      runAssignmentStatement(compact);
      return;
    }

    const result = runPipeline(compact);
    if (result) pushOutput(result);
  }

  function stripInlineCommand(command) {
    return command.replace(/;?\s*fi\s*$/i, '').replace(/;;\s*$/, '').replace(/;\s*$/, '').trim();
  }

  function splitSemicolonCommands(command) {
    const parts = [];
    let current = '';
    let quote = null;
    let depth = 0; // track [ ] depth
    for (let i = 0; i < command.length; i++) {
      const char = command[i];
      if ((char === '"' || char === "'") && quote === null) { quote = char; current += char; continue; }
      if (char === quote) { quote = null; current += char; continue; }
      if (quote !== null) { current += char; continue; }
      if (char === '[') depth++;
      if (char === ']') depth--;
      if (char === ';' && depth === 0) {
        if (current.trim()) parts.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    if (current.trim()) parts.push(current.trim());
    return parts;
  }

  function runInlineCommands(command) {
    splitSemicolonCommands(stripInlineCommand(command)).forEach(runSimpleLine);
  }

  function splitConditionAndInlineBody(line, prefix) {
    const trimmed = line.trim();
    // if COND; then BODY (inline)
    const thenMatch = trimmed.match(new RegExp(`^${prefix}\\s+(.+?)\\s*;\\s*then\\s+(.+)$`));
    if (thenMatch) {
      return { condition: `${prefix} ${thenMatch[1]}`, inlineBody: [stripInlineCommand(thenMatch[2])] };
    }
    // else BODY (inline)
    if (prefix === 'else') {
      const elseMatch = trimmed.match(/^else\s+(.+)$/);
      if (elseMatch) return { condition: null, inlineBody: [stripInlineCommand(elseMatch[1])] };
    }
    return { condition: line, inlineBody: [] };
  }

  function lineEndsWithFi(line) {
    return /\bfi\s*$/.test(line.trim());
  }

  function collectIfBranches(allLines, startIndex) {
    const branches = [];
    const firstBranch = splitConditionAndInlineBody(allLines[startIndex], 'if');
    let current = { condition: firstBranch.condition, inlineBody: firstBranch.inlineBody, body: [] };
    branches.push(current);

    if (lineEndsWithFi(allLines[startIndex])) {
      return { branches, endIndex: startIndex };
    }

    let i = startIndex + 1;
    let ifDepth = 1;

    while (i < allLines.length) {
      const line = allLines[i];
      if (/^if\s/.test(line) && !lineEndsWithFi(line)) ifDepth++;
      if (line === 'then') { i++; continue; }

      if (/^elif\s/.test(line) && ifDepth === 1) {
        const elifBranch = splitConditionAndInlineBody(line, 'elif');
        current = { condition: elifBranch.condition, inlineBody: elifBranch.inlineBody, body: [] };
        branches.push(current);
        if (lineEndsWithFi(line)) return { branches, endIndex: i };
        i++; continue;
      }

      if (/^else/.test(line) && ifDepth === 1) {
        const elseBranch = splitConditionAndInlineBody(line, 'else');
        current = { condition: null, inlineBody: elseBranch.inlineBody, body: [] };
        branches.push(current);
        i++; continue;
      }

      if (line === 'fi') {
        ifDepth--;
        if (ifDepth === 0) return { branches, endIndex: i };
        i++; continue;
      }

      if (ifDepth >= 1) current.body.push(line);
      i++;
    }

    return { branches, endIndex: i };
  }

  function runCase(allLines, startIndex) {
    const caseLine = allLines[startIndex];
    const valueMatch = caseLine.match(/^case\s+(.+)\s+in$/);
    if (!valueMatch) return startIndex;
    const switchValue = expandValue(valueMatch[1]);
    let matched = false;
    let i = startIndex + 1;

    while (i < allLines.length && allLines[i] !== 'esac') {
      const patternLine = allLines[i];
      const semiSplit = patternLine.split(';;');
      const patternPart = semiSplit[0].trim();
      const patternMatch = patternPart.match(/^(.+?)\)\s*(.*)$/);
      if (patternMatch) {
        const rawPattern = patternMatch[1].trim();
        const command = patternMatch[2].trim();
        const patterns = rawPattern.split('|').map(p => stripOuterQuotes(p.trim()));
        const matches = patterns.some(pattern => {
          if (pattern === '*') return true;
          if (pattern.includes('*') || pattern.includes('?') || pattern.includes('[')) {
            const regexStr = '^' + pattern
              .replace(/[.+^${}()|\\]/g, '\\$&')
              .replace(/\*/g, '.*')
              .replace(/\?/g, '.') + '$';
            try { return new RegExp(regexStr).test(switchValue); } catch { return false; }
          }
          return pattern === switchValue;
        });

        if (!matched && matches) {
          const bodyLines = [];
          if (command) bodyLines.push(command);
          if (semiSplit.length <= 1) {
            i++;
            while (i < allLines.length && allLines[i] !== 'esac' && !allLines[i].endsWith(';;')) {
              if (allLines[i] && !allLines[i].match(/^[^)]+\)$/)) bodyLines.push(allLines[i]);
              i++;
            }
            if (i < allLines.length && allLines[i] !== 'esac' && allLines[i].endsWith(';;')) {
              const lastLine = allLines[i].slice(0, -2).trim();
              if (lastLine) bodyLines.push(lastLine);
            }
          }
          runLines(bodyLines, 0, bodyLines.length);
          matched = true;
        } else {
          if (semiSplit.length <= 1) {
            i++;
            while (i < allLines.length && allLines[i] !== 'esac' && !allLines[i].endsWith(';;')) {
              i++;
            }
          }
        }
      }
      i++;
    }
    return i;
  }

  // ────────────────────────────────────────────────────
  //  MAIN EXECUTION ENGINE
  // ────────────────────────────────────────────────────

  function runLines(allLines, start, end) {
    let i = start;
    const MAX_ITER = 50000;
    let iterCount = 0;

    while (i < end) {
      if (++iterCount > MAX_ITER) break; // infinite loop guard
      const line = allLines[i];

      if (!line || line === 'do' || line === 'done' || line === 'then' || line === 'fi' || line === 'esac') {
        i++; continue;
      }

      // if statement
      if (/^if\s/.test(line)) {
        const { branches, endIndex } = collectIfBranches(allLines, i);
        const branch = branches.find(item => item.condition === null || evalCondition(item.condition));
        if (branch) {
          branch.inlineBody.forEach(cmd => runInlineCommands(cmd));
          runLines(branch.body, 0, branch.body.length);
        }
        i = endIndex + 1;
        continue;
      }

      // case statement
      if (/^case\s/.test(line)) {
        i = runCase(allLines, i) + 1;
        continue;
      }

      // for ((init; cond; step)) loop
      const forArithMatch = line.match(/^for\s+\(\(\s*(.*?)\s*;\s*(.*?)\s*;\s*(.*?)\s*\)\)/);
      if (forArithMatch) {
        const doneIndex = findLoopDoneIndex(allLines, i);
        const bodyStart = loopBodyStartIndex(allLines, i, line);
        if (forArithMatch[1].trim()) runAssignmentStatement(forArithMatch[1]);
        let guard = 0;
        while (evalArithmeticCondition(forArithMatch[2])) {
          runLines(allLines, bodyStart, doneIndex);
          runForStep(forArithMatch[3]);
          if (++guard > 10000) break;
        }
        i = doneIndex + 1;
        continue;
      }

      // for var in LIST loop
      const forInMatch = line.match(/^for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+(.+?)(?:;\s*do)?$/);
      if (forInMatch) {
        const doneIndex = findLoopDoneIndex(allLines, i);
        const bodyStart = loopBodyStartIndex(allLines, i, line);
        const values = expandForInWords(forInMatch[2]);
        values.forEach(value => {
          vars[forInMatch[1]] = value;
          runLines(allLines, bodyStart, doneIndex);
        });
        i = doneIndex + 1;
        continue;
      }

      // while loop
      const whileMatch = line.match(/^while\s+(.+)$/);
      if (whileMatch) {
        const doneIndex = findLoopDoneIndex(allLines, i);
        const bodyStart = loopBodyStartIndex(allLines, i, line);
        let guard = 0;
        while (evalCondition(whileMatch[1])) {
          runLines(allLines, bodyStart, doneIndex);
          if (++guard > 10000) break;
        }
        i = doneIndex + 1;
        continue;
      }

      // until loop
      const untilMatch = line.match(/^until\s+(.+)$/);
      if (untilMatch) {
        const doneIndex = findLoopDoneIndex(allLines, i);
        const bodyStart = loopBodyStartIndex(allLines, i, line);
        let guard = 0;
        while (!evalCondition(untilMatch[1])) {
          runLines(allLines, bodyStart, doneIndex);
          if (++guard > 10000) break;
        }
        i = doneIndex + 1;
        continue;
      }

      // function definition: fname() { ... } or function fname { ... }
      const funcDefMatch = line.match(/^(?:function\s+)?([a-zA-Z_][a-zA-Z0-9_]*)\s*\(\)\s*\{?\s*$/);
      if (funcDefMatch) {
        const funcName = funcDefMatch[1];
        const bodyLines = [];
        let depth2 = line.includes('{') ? 1 : 0;
        let j = i + 1;
        if (depth2 === 0 && allLines[j] && allLines[j].includes('{')) { depth2 = 1; j++; }
        while (j < allLines.length && depth2 > 0) {
          if (allLines[j].includes('{')) depth2++;
          if (allLines[j].trim() === '}') {
            depth2--;
            if (depth2 === 0) break;
          }
          if (depth2 > 0) bodyLines.push(allLines[j]);
          j++;
        }
        functions[funcName] = bodyLines;
        i = j + 1;
        continue;
      }

      runSimpleLine(line);
      i++;
    }
  }

  // ────────────────────────────────────────────────────
  //  ENTRY POINT
  // ────────────────────────────────────────────────────
  try {
    runLines(lines, 0, lines.length);
  } catch (e) {
    if (e && (e.message === 'EXIT_SCRIPT' || e === 'EXIT_SCRIPT')) {
      return { output: output.join(''), error: '' };
    }
    return { output: output.join(''), error: e.message || 'Unable to simulate this script.' };
  }

  return { output: output.join(''), error: '' };
}
