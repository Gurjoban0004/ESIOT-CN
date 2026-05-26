# Linux Subject Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Linux as a third Prep Hub subject with grouped MCQs and a LeetCode-style Bash Practice workspace using transparent simulated output checking.

**Architecture:** Keep the current static `IOT/index.html`, `IOT/app.js`, `IOT/style.css` app structure. Add a focused `IOT/linux-data.js` file for Linux MCQs and Bash problems, extend the existing subject config/state, then add specialized rendering for Linux MCQs and Bash Practice without changing existing ES & IoT or Computer Networks flows.

**Tech Stack:** Static HTML/CSS/JavaScript, localStorage, existing Prep Hub rendering patterns, no backend execution.

---

## File Structure

- Modify `IOT/index.html`: add Linux subject buttons and load `linux-data.js` before `app.js`.
- Create `IOT/linux-data.js`: store `LINUX_MCQ_BANK` and `LINUX_BASH_PROBLEMS`.
- Modify `IOT/app.js`: add Linux config/state, generic MCQ section support, Bash Practice rendering, editor persistence, and simulated output checking.
- Modify `IOT/style.css`: add Linux subject styling, grouped MCQ polish if needed, and Bash workspace split-pane/editor/results styles.
- Use `docs/superpowers/specs/2026-05-26-linux-subject-design.md` as the governing spec.

## Task 1: Add Linux Subject Shell

**Files:**
- Modify: `IOT/index.html`
- Modify: `IOT/app.js`

- [ ] **Step 1: Add Linux buttons to both subject switchers**

In `IOT/index.html`, add a Linux button after the Computer Networks button in the desktop switcher and sidebar switcher:

```html
<button class="subject-btn" id="subject-linux" data-subject="linux">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
  Linux
</button>
```

For the sidebar copy, omit the duplicate `id`:

```html
<button class="subject-btn" data-subject="linux">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
  Linux
</button>
```

- [ ] **Step 2: Load Linux data before app logic**

In `IOT/index.html`, change the script loading block to:

```html
<script src="data.js"></script>
<script src="linux-data.js"></script>
<script src="app.js"></script>
```

- [ ] **Step 3: Add Linux subject config**

In `IOT/app.js`, add this `linux` config inside `CONFIG.subjects` after `cn`:

```js
linux: {
  label: "Linux",
  examTime: new Date("2026-06-05T09:30:00+05:30").getTime(),
  storageKey: "linux_mastered_topics",
  storageKeyPractice: "linux_mcq_answers",
  storageKeyBash: "linux_bash_progress",
  data: {},
  mcqs: null,
  bashProblems: null,
  themeColors: {
    linuxMcq: '#3A8F65',
    bashPractice: '#2F6F5E'
  },
  sectionNames: {
    linuxMcq: 'Linux MCQs',
    bashPractice: 'Bash Practice'
  },
  tabs: [
    { id: 'linuxMcq', label: 'MCQs' },
    { id: 'bashPractice', label: 'Bash Practice' }
  ]
}
```

- [ ] **Step 4: Extend initial state**

In `state`, add Linux keys:

```js
mastered: {
  iot: { st1: [], st2: [], endTerm: [], cheatSheet: [], practice: [] },
  cn:  { unit1_2: [], unit3_4: [], unit5_6: [], unit7_8: [], unit9: [], practice: [] },
  linux: { linuxMcq: [], bashPractice: [] }
},
practiceAnswers: {
  iot: {},
  cn: {},
  linux: {}
},
bashProgress: {
  linux: {}
}
```

- [ ] **Step 5: Link Linux data during init**

In `init()`, after the existing data links, add:

```js
CONFIG.subjects.linux.mcqs = typeof LINUX_MCQ_BANK !== 'undefined' ? LINUX_MCQ_BANK : [];
CONFIG.subjects.linux.bashProblems = typeof LINUX_BASH_PROBLEMS !== 'undefined' ? LINUX_BASH_PROBLEMS : [];
```

- [ ] **Step 6: Run a browser smoke check**

Run:

```bash
cd /Users/gurjobansingh/Desktop/iot/IOT
python3 -m http.server 4173
```

Open `http://localhost:4173`. Expected: header and sidebar show Linux as a third subject; clicking it does not throw console errors, even before Linux data exists.

- [ ] **Step 7: Commit**

```bash
git add IOT/index.html IOT/app.js
git commit -m "feat: add linux subject shell"
```

## Task 2: Add Linux Data Banks

**Files:**
- Create: `IOT/linux-data.js`

- [ ] **Step 1: Create the Linux data file**

Create `IOT/linux-data.js` with this structure and initial source-bound seed content:

```js
// Linux subject data.
// Sources:
// - Linux/linux.jpeg
// - Linux/MCQ Practice solution.pdf
// - Linux/drive-download-20260526T120507Z-3-001/*.jpg
// - Linux/Shell_Scripting_CODING.pdf

const LINUX_MCQ_BANK = [
  {
    unitName: "ST-1 MCQs",
    examGroup: "st1",
    questions: [
      {
        id: 3001,
        source: "syllabus-generated",
        topic: "Linux distributions",
        question: "Which option best describes a Linux distribution?",
        options: {
          a: "Only the Linux kernel without user tools",
          b: "A complete operating system package built around the Linux kernel with tools, package manager, and defaults",
          c: "A hardware device used to boot Ubuntu",
          d: "A shell script used only for installing packages"
        },
        correct: "b",
        explanation: "The syllabus covers Ubuntu, Debian-based distributions, and derivatives. A distribution packages the Linux kernel with system tools, software repositories, defaults, and a package manager."
      },
      {
        id: 3002,
        source: "syllabus-generated",
        topic: "Basic commands",
        question: "Which command prints the current working directory?",
        options: {
          a: "pwd",
          b: "whoami",
          c: "uname",
          d: "hostname"
        },
        correct: "a",
        explanation: "`pwd` prints the present working directory."
      },
      {
        id: 3003,
        source: "syllabus-generated",
        topic: "File permissions",
        question: "Which command changes file permissions in Linux?",
        options: {
          a: "chown",
          b: "chmod",
          c: "chgrp",
          d: "passwd"
        },
        correct: "b",
        explanation: "`chmod` changes permissions; `chown` changes ownership."
      }
    ]
  },
  {
    unitName: "ST-2 MCQs",
    examGroup: "st2",
    questions: [
      {
        id: 3101,
        source: "syllabus-generated",
        topic: "Redirection and piping",
        question: "What does `>>` do in shell redirection?",
        options: {
          a: "Overwrites a file with command output",
          b: "Appends command output to the end of a file",
          c: "Pipes output into another command",
          d: "Redirects errors only"
        },
        correct: "b",
        explanation: "`>>` appends output, while `>` overwrites."
      },
      {
        id: 3102,
        source: "syllabus-generated",
        topic: "Shell scripting tests",
        question: "Which test operator checks whether two numbers are equal in POSIX shell style?",
        options: {
          a: "-eq",
          b: "-ne",
          c: "-gt",
          d: "-lt"
        },
        correct: "a",
        explanation: "`-eq` tests numeric equality."
      }
    ]
  },
  {
    unitName: "End Term MCQs",
    examGroup: "endTerm",
    questions: [
      {
        id: 3201,
        source: "syllabus-generated",
        topic: "Advanced shell scripting",
        question: "What does a shell function's exit status usually represent?",
        options: {
          a: "The number of lines in the function",
          b: "The status code of the last command run inside the function unless explicitly returned",
          c: "The size of the script file",
          d: "The process ID of the parent shell"
        },
        correct: "b",
        explanation: "Shell functions return an exit status, commonly the status of the last command or an explicit `return` value."
      }
    ]
  }
];

const LINUX_BASH_PROBLEMS = [
  {
    id: "bash-001",
    title: "Echo The Input",
    difficulty: "Easy",
    tags: ["stdin", "echo", "variables"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read one line from standard input and print the same line.",
    constraints: ["Input contains one line of text.", "Output must contain exactly that line followed by a newline."],
    starterCode: "#!/usr/bin/env bash\nread value\necho \"$value\"\n",
    examples: [
      { input: "Linux\n", expectedOutput: "Linux\n" }
    ],
    tests: [
      { name: "sample", input: "Linux\n", expectedOutput: "Linux\n", visible: true },
      { name: "word with spaces", input: "hello shell\n", expectedOutput: "hello shell\n", visible: true },
      { name: "numeric text", input: "2026\n", expectedOutput: "2026\n", visible: false }
    ]
  },
  {
    id: "bash-002",
    title: "Add Two Numbers",
    difficulty: "Easy",
    tags: ["stdin", "arithmetic"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read two integers from standard input and print their sum.",
    constraints: ["Both integers fit in normal JavaScript number range.", "Print only the sum."],
    starterCode: "#!/usr/bin/env bash\nread a b\necho $((a + b))\n",
    examples: [
      { input: "2 3\n", expectedOutput: "5\n" }
    ],
    tests: [
      { name: "sample", input: "2 3\n", expectedOutput: "5\n", visible: true },
      { name: "zero", input: "0 8\n", expectedOutput: "8\n", visible: true },
      { name: "negative", input: "-4 9\n", expectedOutput: "5\n", visible: false }
    ]
  },
  {
    id: "bash-003",
    title: "Print Larger Number",
    difficulty: "Easy",
    tags: ["if", "test", "numbers"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read two integers and print the larger value. If both values are equal, print either value once.",
    constraints: ["Input has two integers on one line.", "Output one integer followed by a newline."],
    starterCode: "#!/usr/bin/env bash\nread a b\nif [ \"$a\" -ge \"$b\" ]; then\n  echo \"$a\"\nelse\n  echo \"$b\"\nfi\n",
    examples: [
      { input: "7 4\n", expectedOutput: "7\n" }
    ],
    tests: [
      { name: "first larger", input: "7 4\n", expectedOutput: "7\n", visible: true },
      { name: "second larger", input: "3 11\n", expectedOutput: "11\n", visible: true },
      { name: "equal", input: "5 5\n", expectedOutput: "5\n", visible: false }
    ]
  }
];
```

- [ ] **Step 2: Replace seed/generated MCQs with extracted provided MCQs where available**

Read `Linux/MCQ Practice solution.pdf` and the image files under `Linux/drive-download-20260526T120507Z-3-001/`. For each readable provided MCQ, add it to `LINUX_MCQ_BANK` with:

```js
source: "provided-pdf"
```

or:

```js
source: "provided-image"
```

Use `syllabus-generated` only to cover syllabus topics from `Linux/linux.jpeg` that lack enough provided MCQs. Keep the seed IDs starting at `3001`, provided PDF IDs at `3301+`, and provided image IDs at `3601+`.

- [ ] **Step 3: Verify data loads**

Run:

```bash
node -c IOT/linux-data.js
```

Expected: no syntax errors.

- [ ] **Step 4: Commit**

```bash
git add IOT/linux-data.js
git commit -m "feat: add linux question data"
```

## Task 3: Generalize MCQ Sections

**Files:**
- Modify: `IOT/app.js`

- [ ] **Step 1: Add section helpers above `setActiveSection`**

Add:

```js
function isMcqSection(sectionId = state.activeSection) {
  return sectionId === 'practice' || sectionId === 'linuxMcq';
}

function isBashSection(sectionId = state.activeSection) {
  return sectionId === 'bashPractice';
}

function getActiveMcqBank() {
  return CONFIG.subjects[state.activeSubject].mcqs || [];
}

function getActiveBashProblems() {
  return CONFIG.subjects[state.activeSubject].bashProblems || [];
}
```

- [ ] **Step 2: Replace practice-only conditions**

In `setActiveSection`, replace:

```js
if (state.activeSection === 'practice') {
```

with:

```js
if (isMcqSection()) {
```

In `renderSidebar`, `selectTopic`, `updateProgressBar`, and the MCQ click handler, replace practice-only checks with `isMcqSection()` where the behavior should apply to both existing practice banks and Linux MCQs.

- [ ] **Step 3: Keep Bash Practice separate in section switching**

In `setActiveSection`, add this block before normal data-topic handling:

```js
if (isBashSection()) {
  const bashProblems = getActiveBashProblems();
  if (bashProblems.length > 0) {
    selectTopic(0);
  } else {
    elements.welcomeScreen.style.display = 'flex';
    elements.readingPane.style.display = 'none';
  }
  return;
}
```

- [ ] **Step 4: Update progress loading and saving**

In `loadAllProgress()`, after CN practice loading, add:

```js
const linuxPracticeSaved = localStorage.getItem(CONFIG.subjects.linux.storageKeyPractice);
if (linuxPracticeSaved) {
  try {
    state.practiceAnswers.linux = JSON.parse(linuxPracticeSaved) || {};
  } catch (e) { console.error("Error loading Linux MCQ progress", e); }
}

const linuxBashSaved = localStorage.getItem(CONFIG.subjects.linux.storageKeyBash);
if (linuxBashSaved) {
  try {
    state.bashProgress.linux = JSON.parse(linuxBashSaved) || {};
  } catch (e) { console.error("Error loading Linux Bash progress", e); }
}
```

Add:

```js
function saveBashProgress() {
  const subjectConfig = CONFIG.subjects[state.activeSubject];
  if (!subjectConfig.storageKeyBash) return;
  localStorage.setItem(subjectConfig.storageKeyBash, JSON.stringify(state.bashProgress[state.activeSubject] || {}));
}
```

- [ ] **Step 5: Verify existing subjects still work**

Run the app locally and check:

- ES & IoT Practice answers still persist.
- Computer Networks Practice answers still persist.
- Linux MCQs render as a grouped MCQ bank.

- [ ] **Step 6: Commit**

```bash
git add IOT/app.js
git commit -m "feat: support linux mcq sections"
```

## Task 4: Add Bash Simulator And Checker

**Files:**
- Modify: `IOT/app.js`

- [ ] **Step 1: Add output normalization**

Add above Bash rendering:

```js
function normalizeOutput(value) {
  return String(value || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/[ \t]+\n/g, '\n');
}

function outputsMatch(actual, expected) {
  return normalizeOutput(actual).trimEnd() === normalizeOutput(expected).trimEnd();
}
```

- [ ] **Step 2: Add a small deterministic Bash simulator**

Add:

```js
function simulateBash(script, input) {
  const inputLines = normalizeOutput(input).split('\n');
  let inputCursor = 0;
  const vars = {};
  const output = [];
  const lines = script
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#') && line !== '#!/usr/bin/env bash');

  function readVars(names) {
    const raw = inputLines[inputCursor] || '';
    inputCursor++;
    const parts = raw.trim().split(/\s+/).filter(Boolean);
    names.forEach((name, index) => {
      vars[name] = parts[index] !== undefined ? parts[index] : '';
    });
  }

  function expandValue(text) {
    return text
      .replace(/\$\(\(([^)]+)\)\)/g, (_, expr) => {
        const safeExpr = expr.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, name => {
          return Number(vars[name] || 0);
        });
        if (!/^[0-9+\-*/% ().]+$/.test(safeExpr)) return '';
        try {
          return String(Function(`"use strict"; return (${safeExpr});`)());
        } catch (e) {
          return '';
        }
      })
      .replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, name) => vars[name] || '')
      .replace(/^['"]|['"]$/g, '');
  }

  function runSimpleLine(line) {
    const readMatch = line.match(/^read\s+(.+)$/);
    if (readMatch) {
      readVars(readMatch[1].split(/\s+/));
      return;
    }

    const assignMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)=(.+)$/);
    if (assignMatch) {
      vars[assignMatch[1]] = expandValue(assignMatch[2]);
      return;
    }

    const echoMatch = line.match(/^echo\s+(.+)$/);
    if (echoMatch) {
      output.push(expandValue(echoMatch[1]));
      return;
    }

    const printfMatch = line.match(/^printf\s+["']%s\\n["']\s+(.+)$/);
    if (printfMatch) {
      output.push(expandValue(printfMatch[1]));
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('if ')) {
      const condition = line;
      const thenLines = [];
      const elseLines = [];
      let target = thenLines;
      i++;
      while (i < lines.length && lines[i] !== 'fi') {
        if (lines[i] === 'else') {
          target = elseLines;
        } else if (lines[i] !== 'then') {
          target.push(lines[i]);
        }
        i++;
      }
      const match = condition.match(/\[\s*"?\$?([a-zA-Z_][a-zA-Z0-9_]*)"?\s+(-ge|-gt|-le|-lt|-eq|-ne)\s+"?\$?([a-zA-Z_][a-zA-Z0-9_]*|-?\d+)"?\s*\]/);
      let passed = false;
      if (match) {
        const left = Number(vars[match[1]] || 0);
        const right = /^-?\d+$/.test(match[3]) ? Number(match[3]) : Number(vars[match[3]] || 0);
        const op = match[2];
        passed = (op === '-ge' && left >= right) || (op === '-gt' && left > right) || (op === '-le' && left <= right) || (op === '-lt' && left < right) || (op === '-eq' && left === right) || (op === '-ne' && left !== right);
      }
      (passed ? thenLines : elseLines).forEach(runSimpleLine);
    } else {
      runSimpleLine(line);
    }
  }

  return {
    output: output.length ? output.join('\n') + '\n' : '',
    error: ''
  };
}
```

- [ ] **Step 3: Add problem evaluation**

Add:

```js
function evaluateBashProblem(problem, script, mode) {
  const tests = mode === 'run'
    ? problem.tests.filter(test => test.visible)
    : problem.tests;

  return tests.map(test => {
    const result = simulateBash(script, test.input);
    const passed = !result.error && outputsMatch(result.output, test.expectedOutput);
    return {
      name: test.name,
      visible: test.visible,
      input: test.input,
      expectedOutput: test.expectedOutput,
      actualOutput: result.output,
      error: result.error,
      passed
    };
  });
}
```

- [ ] **Step 4: Add quick simulator checks in browser console**

With the local app open, run:

```js
simulateBash('read a b\necho $((a + b))\n', '2 3\n').output
```

Expected:

```text
5
```

Run:

```js
simulateBash('read a b\nif [ "$a" -ge "$b" ]; then\n echo "$a"\nelse\n echo "$b"\nfi\n', '3 11\n').output
```

Expected:

```text
11
```

- [ ] **Step 5: Commit**

```bash
git add IOT/app.js
git commit -m "feat: add simulated bash checker"
```

## Task 5: Render Bash Practice Workspace

**Files:**
- Modify: `IOT/app.js`

- [ ] **Step 1: Route Bash topics from `selectTopic`**

In `selectTopic(index)`, add before normal topic rendering:

```js
if (isBashSection()) {
  renderBashProblem(index);
  return;
}
```

- [ ] **Step 2: Render Bash problems in the sidebar**

In `renderSidebar()`, add before MCQ handling:

```js
if (isBashSection()) {
  const problems = getActiveBashProblems();
  problems.forEach((problem, index) => {
    const matchesSearch = problem.title.toLowerCase().includes(state.searchQuery) || problem.tags.join(' ').toLowerCase().includes(state.searchQuery);
    if (!matchesSearch) return;

    const progress = state.bashProgress[state.activeSubject][problem.id] || {};
    const isSolved = progress.solved === true;
    const isActive = index === state.activeTopicIndex;

    const button = document.createElement('button');
    button.className = `topic-item ${isActive ? 'active' : ''} ${isSolved ? 'mastered' : ''}`;
    button.setAttribute('data-index', index);
    button.innerHTML = `
      <div class="checkbox-circle">${isSolved ? '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}</div>
      <span class="topic-title-text">${problem.title}</span>
    `;
    button.addEventListener('click', () => {
      selectTopic(index);
      closeMobileSidebar();
    });
    elements.topicList.appendChild(button);
  });
  return;
}
```

- [ ] **Step 3: Add Bash progress calculation**

At the top of `updateProgressBar()`, before MCQ handling, add:

```js
if (isBashSection()) {
  const problems = getActiveBashProblems();
  const solvedCount = problems.filter(problem => {
    const progress = state.bashProgress[state.activeSubject][problem.id] || {};
    return progress.solved === true;
  }).length;
  const total = problems.length;
  const percentage = total > 0 ? Math.round((solvedCount / total) * 100) : 0;
  elements.progressPercent.textContent = `${percentage}% Solved (${solvedCount}/${total})`;
  elements.progressBar.style.width = `${percentage}%`;
  return;
}
```

- [ ] **Step 4: Add `renderBashProblem`**

Add:

```js
function renderBashProblem(index) {
  const problems = getActiveBashProblems();
  const problem = problems[index];
  if (!problem) return;

  const progress = state.bashProgress[state.activeSubject][problem.id] || {};
  const currentCode = progress.code || problem.starterCode;
  const lastResults = progress.lastResults || [];
  const resultSummary = lastResults.length
    ? `${lastResults.filter(r => r.passed).length} passed / ${lastResults.length} total`
    : 'No run yet';

  elements.welcomeScreen.style.display = 'none';
  elements.readingPane.style.display = 'block';
  elements.sectionBadge.textContent = CONFIG.subjects[state.activeSubject].sectionNames[state.activeSection];
  elements.mainTitle.textContent = problem.title;

  const examplesHtml = problem.examples.map(example => `
    <div class="bash-example">
      <label>Input</label>
      <pre>${escapeHtml(example.input)}</pre>
      <label>Expected Output</label>
      <pre>${escapeHtml(example.expectedOutput)}</pre>
    </div>
  `).join('');

  const constraintsHtml = problem.constraints.map(item => `<li>${escapeHtml(item)}</li>`).join('');

  elements.contentArea.innerHTML = `
    <div class="bash-workspace">
      <section class="bash-description-pane">
        <div class="bash-problem-header">
          <h3>${escapeHtml(problem.title)}</h3>
          <div class="bash-tags">
            <span>${escapeHtml(problem.difficulty)}</span>
            ${problem.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
        <div class="bash-section-block">
          <h4>Problem</h4>
          <p>${escapeHtml(problem.prompt)}</p>
        </div>
        <div class="bash-section-block">
          <h4>Examples</h4>
          ${examplesHtml}
        </div>
        <div class="bash-section-block">
          <h4>Constraints</h4>
          <ul>${constraintsHtml}</ul>
        </div>
      </section>
      <section class="bash-editor-pane">
        <div class="bash-editor-toolbar">
          <span>Bash</span>
          <div>
            <button class="bash-run-btn" id="bash-run-btn">Run</button>
            <button class="bash-submit-btn" id="bash-submit-btn">Submit</button>
          </div>
        </div>
        <textarea class="bash-code-editor" id="bash-code-editor" spellcheck="false">${escapeHtml(currentCode)}</textarea>
        <div class="bash-results-panel">
          <div class="bash-results-header">
            <strong>Test Results</strong>
            <span>${resultSummary}</span>
          </div>
          <div id="bash-results-body">${renderBashResults(lastResults)}</div>
        </div>
      </section>
    </div>
  `;

  document.getElementById('bash-code-editor').addEventListener('input', event => {
    state.bashProgress[state.activeSubject][problem.id] = {
      ...state.bashProgress[state.activeSubject][problem.id],
      code: event.target.value
    };
    saveBashProgress();
  });

  document.getElementById('bash-run-btn').addEventListener('click', () => runBashProblem(problem, 'run'));
  document.getElementById('bash-submit-btn').addEventListener('click', () => runBashProblem(problem, 'submit'));

  elements.prevBtn.disabled = index === 0;
  elements.prevBtn.style.opacity = index === 0 ? '0.5' : '1';
  elements.nextBtn.innerHTML = index === problems.length - 1 ? 'Practice Complete' : 'Next Problem';
  elements.nextBtn.style.cursor = index === problems.length - 1 ? 'default' : 'pointer';
}
```

- [ ] **Step 5: Add HTML escaping and results helpers**

Add:

```js
function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderBashResults(results) {
  if (!results.length) {
    return '<p class="bash-idle-state">Run sample tests or submit all tests to see output comparison.</p>';
  }

  return results.map(result => `
    <div class="bash-result-card ${result.passed ? 'passed' : 'failed'}">
      <div class="bash-result-title">
        <strong>${escapeHtml(result.name)}</strong>
        <span>${result.passed ? 'Passed' : 'Failed'}</span>
      </div>
      ${result.visible || !result.passed ? `
        <div class="bash-result-grid">
          <div><label>Input</label><pre>${escapeHtml(result.input)}</pre></div>
          <div><label>Expected</label><pre>${escapeHtml(result.expectedOutput)}</pre></div>
          <div><label>Your Output</label><pre>${escapeHtml(result.actualOutput || '(empty)')}</pre></div>
        </div>
      ` : '<p class="bash-hidden-case">Hidden case passed.</p>'}
    </div>
  `).join('');
}

function runBashProblem(problem, mode) {
  const editor = document.getElementById('bash-code-editor');
  const code = editor ? editor.value : '';
  const results = evaluateBashProblem(problem, code, mode);
  const passedCount = results.filter(result => result.passed).length;
  const solved = mode === 'submit' && passedCount === results.length;

  state.bashProgress[state.activeSubject][problem.id] = {
    ...state.bashProgress[state.activeSubject][problem.id],
    code,
    lastResults: results,
    solved: solved || (state.bashProgress[state.activeSubject][problem.id] || {}).solved === true
  };
  saveBashProgress();

  const body = document.getElementById('bash-results-body');
  if (body) body.innerHTML = renderBashResults(results);

  renderSidebar();
  updateProgressBar();
}
```

- [ ] **Step 6: Verify Bash workspace behavior**

Run locally and check:

- Linux > Bash Practice opens the first problem.
- Editing code persists when switching problems and returning.
- Run checks only visible tests.
- Submit checks all tests.
- Passing all submit tests marks sidebar item solved.

- [ ] **Step 7: Commit**

```bash
git add IOT/app.js
git commit -m "feat: render bash practice workspace"
```

## Task 6: Style Linux And Bash Practice

**Files:**
- Modify: `IOT/style.css`

- [ ] **Step 1: Add active tab styling for Linux sections**

Add:

```css
nav.top-nav button.active[data-section="linuxMcq"],
nav.top-nav button.active[data-section="bashPractice"] {
  background-color: #EAF5EF;
  color: #2F6F5E;
  font-weight: 600;
}
```

- [ ] **Step 2: Add Bash workspace styles**

Add:

```css
.bash-workspace {
  display: grid;
  grid-template-columns: minmax(320px, 0.9fr) minmax(420px, 1.35fr);
  min-height: calc(100vh - 190px);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background: #FFFDFB;
}

.bash-description-pane {
  padding: 1.5rem;
  border-right: 1px solid var(--border-color);
  overflow: auto;
  background: #FFFDFB;
}

.bash-problem-header h3 {
  font-size: 1.65rem;
  margin-bottom: 1rem;
}

.bash-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.bash-tags span {
  border-radius: 999px;
  background: #EAF5EF;
  color: #2F6F5E;
  padding: 0.25rem 0.7rem;
  font-size: 0.78rem;
  font-weight: 700;
}

.bash-section-block {
  border-top: 1px solid var(--border-color);
  padding-top: 1.2rem;
  margin-top: 1.2rem;
}

.bash-section-block h4 {
  color: #8C6A5C;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.7rem;
}

.bash-example {
  border-left: 4px solid var(--active-accent);
  background: #F8F3EC;
  border-radius: 6px;
  padding: 0.9rem;
  margin-bottom: 0.9rem;
}

.bash-example label,
.bash-result-grid label {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-secondary);
  margin-bottom: 0.35rem;
}

.bash-example pre,
.bash-result-grid pre {
  background: #FFFDFB;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.7rem;
  font-family: var(--font-mono);
  white-space: pre-wrap;
}

.bash-editor-pane {
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: #1F2421;
}

.bash-editor-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #DDE7DF;
  font-weight: 700;
}

.bash-editor-toolbar button {
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 6px;
  padding: 0.45rem 0.85rem;
  font-family: var(--font-sans);
  font-weight: 700;
  cursor: pointer;
  margin-left: 0.5rem;
}

.bash-run-btn {
  background: transparent;
  color: #DDE7DF;
}

.bash-submit-btn {
  background: #83B799;
  color: #102017;
}

.bash-code-editor {
  flex: 1;
  min-height: 360px;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  padding: 1rem;
  background: #1F2421;
  color: #E9F1EA;
  font-family: var(--font-mono);
  font-size: 0.95rem;
  line-height: 1.65;
}

.bash-results-panel {
  max-height: 340px;
  overflow: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: #FFFDFB;
}

.bash-results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--border-color);
}

.bash-idle-state,
.bash-hidden-case {
  padding: 1rem;
  color: var(--text-secondary);
}

.bash-result-card {
  margin: 1rem;
  border: 1px solid var(--border-color);
  border-left-width: 4px;
  border-radius: 8px;
  padding: 1rem;
}

.bash-result-card.passed {
  border-left-color: #4A8F68;
  background: #F1F8F4;
}

.bash-result-card.failed {
  border-left-color: #C26B5A;
  background: #FFF3EE;
}

.bash-result-title {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.bash-result-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

@media (max-width: 900px) {
  .bash-workspace {
    grid-template-columns: 1fr;
  }

  .bash-description-pane {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }

  .bash-result-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Verify responsive layout**

Use browser widths around `390px`, `768px`, and desktop width. Expected: Bash panes stack on mobile, no text overlaps, editor remains usable.

- [ ] **Step 4: Commit**

```bash
git add IOT/style.css
git commit -m "style: add linux bash workspace"
```

## Task 7: Final Verification

**Files:**
- Verify: `IOT/index.html`
- Verify: `IOT/app.js`
- Verify: `IOT/style.css`
- Verify: `IOT/linux-data.js`

- [ ] **Step 1: Run syntax checks**

```bash
node -c IOT/app.js
node -c IOT/data.js
node -c IOT/linux-data.js
```

Expected: all commands exit successfully.

- [ ] **Step 2: Run local server**

```bash
cd /Users/gurjobansingh/Desktop/iot/IOT
python3 -m http.server 4173
```

Expected: server starts at `http://localhost:4173`.

- [ ] **Step 3: Manual smoke test**

Check:

- ES & IoT opens and existing sections render.
- Computer Networks opens and existing sections render.
- Linux opens and shows `MCQs` and `Bash Practice`.
- Linux MCQ answer selection persists after switching subjects.
- Bash Run checks visible tests.
- Bash Submit checks all tests and marks solved only when all pass.
- Browser console has no runtime errors.

- [ ] **Step 4: Commit any fixes**

If verification required fixes:

```bash
git add IOT/index.html IOT/app.js IOT/style.css IOT/linux-data.js
git commit -m "fix: polish linux subject verification"
```

If no fixes were needed, do not create an empty commit.

## Self-Review

- Spec coverage: Linux subject switcher, two top-level Linux sections, ST-grouped MCQs, source metadata, Bash split workspace, output-first simulated checking, persistence, styling, and verification are all covered.
- Placeholder scan: no deferred-work markers or unspecified implementation steps remain.
- Type consistency: plan uses `linuxMcq`, `bashPractice`, `LINUX_MCQ_BANK`, `LINUX_BASH_PROBLEMS`, `state.practiceAnswers.linux`, and `state.bashProgress.linux` consistently.
