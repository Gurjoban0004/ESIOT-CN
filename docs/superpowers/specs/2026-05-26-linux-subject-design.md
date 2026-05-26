# Linux Subject Design

## Goal

Add Linux as a third Prep Hub subject while keeping the current app aesthetic and study flow. Linux should be more practice-led than theory-led:

- MCQs first, using the provided Linux folder content.
- Bash Practice second, using a LeetCode-style split workspace.
- No heavy Linux theory pages in the first version.

## Source Content

Linux content must be based on files already provided in the repository:

- `Linux/linux.jpeg`: syllabus structure and topic coverage.
- `Linux/MCQ Practice solution.pdf`: primary MCQ source.
- `Linux/drive-download-20260526T120507Z-3-001/*.jpg`: additional provided question images.
- `Linux/Shell_Scripting_CODING.pdf`: Bash practice problem source.

Generated MCQs are allowed only when they are syllabus-aligned with `linux.jpeg`. Provided MCQs should be used before generated additions.

## Information Architecture

Linux appears as a third subject in the existing subject switcher.

Top-level Linux sections:

- `MCQs`
- `Bash Practice`

The MCQ area is further grouped by syllabus/exam coverage:

- `ST-1 MCQs`
- `ST-2 MCQs`
- `End Term MCQs`
- optional `Mixed Practice`

The Bash Practice area lists individual scripting problems in the sidebar. It should use problem titles and topic tags rather than theory topic pages.

## MCQ Experience

Linux MCQs should reuse the existing practice interaction model where possible:

- Show questions with four options.
- Allow click-to-answer.
- Show correct/incorrect state immediately.
- Preserve progress in local storage under a Linux-specific key.
- Track completion separately from ES & IoT and Computer Networks.

Each MCQ should carry metadata:

- `id`
- `examGroup`: `st1`, `st2`, `endTerm`, or `mixed`
- `source`: `provided-pdf`, `provided-image`, or `syllabus-generated`
- `topic`
- `question`
- `options`
- `correct`
- optional `explanation`

The UI does not need to display all metadata, but the data should retain it so questions remain auditable against the supplied Linux materials.

## Bash Practice Experience

Bash Practice should resemble the provided reference screenshots in structure, adapted to Prep Hub aesthetics.

Layout:

- Left pane: description tabs or sections for problem statement, examples, constraints, hints, and solution notes.
- Right pane: Bash editor area with starter code.
- Top action row: `Run` and `Submit`.
- Bottom results panel: appears after Run or Submit and shows test outcomes.

Problem display:

- title
- difficulty
- tags
- problem statement
- examples with input and expected output
- constraints
- optional hints
- optional solution after submit or reveal

The experience should feel like a focused coding workspace, not a separate app pasted inside Prep Hub.

## Simulated Bash Checking

The app will not execute Bash. It will use transparent simulated output checking.

The grading contract is output-first:

- A user is graded on whether their submitted output matches expected output.
- The checker should not require a specific command or syntax style.
- Intended concepts can be shown as guidance, but should not be used as hidden grading rules.

Reliable first-version problem types:

- printing text
- stdin transformations
- variables
- conditionals
- loops
- arithmetic
- string and number tests
- simple sorting/filtering from provided input
- interpreting simulated file lists or command outputs

Avoid live-system mutation tasks in Bash Practice:

- `chmod`, `chown`, `mount`, `useradd`, `systemctl`, firewall, and service-management questions should be MCQs or "predict the output/result" tasks unless they can be represented as deterministic text transformation problems.

Each Bash problem should be data-driven:

```js
{
  id: "linux-bash-001",
  title: "Count Matching Lines",
  difficulty: "Easy",
  tags: ["grep", "stdin", "text-processing"],
  prompt: "...",
  starterCode: "#!/usr/bin/env bash\n# Write your solution here\n",
  examples: [
    {
      input: "apple\nbanana\napple\n",
      expectedOutput: "2\n"
    }
  ],
  tests: [
    {
      name: "sample",
      input: "apple\nbanana\napple\n",
      expectedOutput: "2\n",
      visible: true
    }
  ],
  checker: "stdoutExact"
}
```

Checkers should normalize line endings and optionally trim trailing whitespace where a problem allows it. The UI must show expected output and submitted output on failed visible tests.

## Data And State

Add Linux-specific config alongside the existing subjects:

- `linux` subject config
- Linux theme colors
- Linux local storage keys
- Linux MCQ bank
- Linux Bash problem bank

State should track:

- active Linux section
- answered Linux MCQs
- Bash editor content per problem
- Bash run/submit results per problem
- solved Bash problems

Existing ES & IoT and Computer Networks behavior should remain unchanged.

## Visual Direction

Preserve the Prep Hub interface language:

- same header/sidebar/content shell
- same progress widget style
- same button and card polish
- same responsive behavior

Linux can have its own accent palette, but it should not overpower the existing design. Suggested direction: terminal-inspired green accents balanced with the app's warm neutral surfaces.

Bash Practice may use a darker editor surface for code readability, but the surrounding layout should still feel connected to the current app.

## Error Handling

MCQs:

- If a group has no questions, show a calm empty state rather than a broken page.

Bash Practice:

- If no code/output has been submitted, show an idle results state.
- If the output differs, show expected vs submitted output.
- If the answer field is empty, explain that output is required before checking.
- If a problem has malformed test data, fail gracefully with a developer-friendly message in the console and a user-friendly message in the UI.

## Testing

Manual verification should cover:

- subject switching among all three subjects
- Linux MCQ grouping and answer persistence
- Bash problem navigation
- Run and Submit result states
- expected vs submitted output mismatch rendering
- mobile layout for MCQs and Bash Practice
- no regressions in ES & IoT or Computer Networks

If automated tests are not already present, use browser-based smoke testing after implementation.
