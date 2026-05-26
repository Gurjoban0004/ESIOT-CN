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

assert(problems.length >= 12, 'Linux Bash Practice should include the organized prep problem set.');

for (const problem of problems) {
  assert(problem.solutionCode && problem.solutionCode.includes('read'), `${problem.id} needs a reveal-only solutionCode.`);
  assert(!problem.starterCode.includes('echo "'), `${problem.id} starterCode must not reveal the answer.`);
  assert(problem.tests.filter(test => test.visible).length >= 2, `${problem.id} needs at least two visible tests.`);
  assert(problem.tests.some(test => !test.visible), `${problem.id} needs at least one hidden test.`);

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
