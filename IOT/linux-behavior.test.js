const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

function elementStub() {
  return {
    style: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    addEventListener() {},
    querySelectorAll() { return []; },
    querySelector() { return null; },
    setAttribute() {},
    appendChild() {},
    scrollIntoView() {},
    innerHTML: '',
    textContent: '',
    value: ''
  };
}

function loadSandbox() {
  const sandbox = {
    console,
    localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    document: {
      getElementById() { return elementStub(); },
      querySelector() { return elementStub(); },
      querySelectorAll() { return []; },
      createElement() { return elementStub(); },
      addEventListener() {},
      documentElement: { style: { setProperty() {} } }
    },
    window: { addEventListener() {} },
    setInterval() {},
    confirm() { return false; }
  };
  vm.createContext(sandbox);
  const dataSource = fs.readFileSync('IOT/linux-data.js', 'utf8')
    .replace('const LINUX_MCQ_BANK', 'var LINUX_MCQ_BANK')
    .replace('const LINUX_BASH_PROBLEMS', 'var LINUX_BASH_PROBLEMS');
  vm.runInContext(dataSource, sandbox);
  vm.runInContext(fs.readFileSync('IOT/app.js', 'utf8'), sandbox);
  return sandbox;
}

const sandbox = loadSandbox();
const problems = sandbox.LINUX_BASH_PROBLEMS;
const appSource = fs.readFileSync('IOT/app.js', 'utf8');
const styleSource = fs.readFileSync('IOT/style.css', 'utf8');

assert(appSource.includes('renderLandingPage'), 'App should render a distinctive landing page before subject study.');
assert(appSource.includes('bash-reset-btn'), 'Bash practice should include a reset editor button.');
assert(styleSource.includes('resize: horizontal'), 'Bash question panel should be horizontally resizable to expand editor space.');
assert(styleSource.includes('.landing-page'), 'Landing page styles should be present.');

const mcqCount = sandbox.LINUX_MCQ_BANK.flatMap(unit => unit.questions).length;
assert.strictEqual(mcqCount, 65, 'Linux MCQs should include all 65 organized prep questions.');
assert(problems.length >= 26, 'Linux Bash Practice should include all 26 organized prep problems.');

const questionText = sandbox.LINUX_MCQ_BANK
  .flatMap(unit => unit.questions)
  .map(question => question.question);
[
  'Which command mounts a file system at a specified mount point?',
  'Which sysctl parameter controls the maximum number of open file descriptors system-wide?',
  'Which command enables a service to start automatically at boot time?'
].forEach(requiredQuestion => {
  assert(questionText.includes(requiredQuestion), `Missing organized prep MCQ: ${requiredQuestion}`);
});

const problemTitles = problems.map(problem => problem.title);
[
  'Multiplication Table',
  'Multi-User Setup',
  'Directory Structure',
  'Rectangle Perimeter',
  'FizzBuzz Logic',
  'Star Patterns',
  'Substring Extraction',
  'LVM Management',
  'Network Traffic Monitor',
  'Secure Backup',
  'Remote Network Safety',
  'SSH Security Setup',
  'System Troubleshooting',
  'Log Analysis'
].forEach(requiredTitle => {
  assert(problemTitles.includes(requiredTitle), `Missing organized prep bash problem: ${requiredTitle}`);
});

const headResult = sandbox.simulateBash('head -n 3 /etc/passwd\n', '');
assert(
  headResult.output.startsWith('root:x:0:0:root') && headResult.output.split('\n').filter(Boolean).length === 3,
  'Terminal simulator should execute head against the virtual filesystem.'
);

const pipelineResult = sandbox.simulateBash('cat /etc/passwd | grep root | wc -l\n', '');
assert.strictEqual(pipelineResult.output.trim(), '1', 'Terminal simulator should support simple pipes.');

const redirectionResult = sandbox.simulateBash('grep error /var/log/server.log > errors.txt\ncat errors.txt\n', '');
assert(redirectionResult.output.includes('error: database unavailable'), 'Terminal simulator should support output redirection into the virtual filesystem.');

const terminalProblemTitles = [
  'Network Monitor Command',
  'Backup Script Command',
  'Log Filtering Command',
  'Enable Service At Boot',
  'File Archiving',
  'Directory Structure',
  'Permission Management',
  'File Ownership',
  'File Search & Filter',
  'Count Elements',
  'Advanced Filtering',
  'Error Capturing',
  'LVM Management',
  'Network Traffic Monitor',
  'Secure Backup',
  'Remote Network Safety',
  'SSH Security Setup',
  'System Troubleshooting',
  'Log Analysis'
];

for (const problem of problems) {
  assert(problem.solutionCode, `${problem.id} needs a reveal-only solutionCode.`);
  assert(!problem.starterCode.includes('echo "'), `${problem.id} starterCode must not reveal the answer.`);
  assert(problem.tests.filter(test => test.visible).length >= 2, `${problem.id} needs at least two visible tests.`);
  assert(problem.tests.some(test => !test.visible), `${problem.id} needs at least one hidden test.`);

  if (terminalProblemTitles.includes(problem.title)) {
    assert.strictEqual(problem.kind, 'terminal', `${problem.id} should be marked as a terminal lab problem.`);
    assert(!/\becho\b|\bprintf\b/.test(problem.solutionCode), `${problem.id} terminal solution should use real commands, not echo.`);
  } else {
    assert(problem.solutionCode.includes('read'), `${problem.id} script problem should read input.`);
  }

  const solutionResults = sandbox.evaluateBashProblem(problem, problem.solutionCode, 'submit');
  assert(
    solutionResults.every(result => result.passed),
    `${problem.id} reveal-only solution must pass every submit test.`
  );

  const constantScript = `#!/usr/bin/env bash\necho "${problem.examples[0].expectedOutput.trim()}"\n`;
  const constantResults = sandbox.evaluateBashProblem(problem, constantScript, 'submit');
  assert(
    constantResults.some(result => !result.passed),
    `${problem.id} should not pass all tests with a constant echo of the sample answer.`
  );

  if (problem.kind === 'terminal') {
    const echoCommandResults = sandbox.evaluateBashProblem(problem, `echo "${problem.solutionCode.trim()}"\n`, 'submit');
    assert(
      echoCommandResults.every(result => !result.passed),
      `${problem.id} should reject echoing the right command instead of executing it.`
    );
  }
}

const hiddenFailureHtml = sandbox.renderBashResults([{
  name: 'hidden',
  visible: false,
  input: '42\n',
  expectedOutput: 'secret expected\n',
  actualOutput: 'wrong\n',
  error: '',
  passed: false
}]);
assert(!hiddenFailureHtml.includes('secret expected'), 'Hidden failed tests must not reveal expected output.');
assert(!hiddenFailureHtml.includes('42'), 'Hidden failed tests must not reveal input.');

const correctLetters = sandbox.LINUX_MCQ_BANK
  .flatMap(unit => unit.questions)
  .map(question => question.correct);
const distribution = correctLetters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
assert(Object.keys(distribution).length >= 4, 'Linux MCQ answers should be distributed across A, B, C, and D.');

console.log('linux behavior checks passed');
