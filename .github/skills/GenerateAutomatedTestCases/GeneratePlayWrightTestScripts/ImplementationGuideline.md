# Playwright Implementation Guideline

## Folder Structure

For making Playwright tests, apply Page Object Model with this folder structure:

- Test spec file under folder: tests
- Page classes under folder: pages
- Components (locators) under folder: components

If needed:

- Constants under folder: test-data
- Fixture under folder: fixtures

## Test Design

- In the test spec file, make enough number of tests in the suite. Make it balanced between maintainability and avoiding duplication. If there are many repeated steps but only few different verification in multiple tests, consider merging them.

Example:

Suppose two tests doing:

    - login > select profile > change mode > open products list > create a run > add a comment > Verify comment text

    - login > select profile > change mode > open products list > create a run > add a comment > Edit the comment

    - What we can do is, merging them and run: login > select profile > change mode > open products list > create a run > add a comment > Verify comment text > Edit the comment

- Login flow is tested in a dedicated flow. It does not need to be repeated in all tests. Just use loginFixture to re-use the logged in session. Example:

`import { test, expect } from '../fixtures/loginFixture';
test('My Test', { tag: ['@priority:tbd'] }, async ({ loggedInPage }) => {});`

- Use before-beforeEach hooks for test preparation steps.
- Use after-afterEach hooks for tear-down steps.
- For test preparations, clean up steps try to use API queries instead of UI. If you are not clear about the endpoint to use, leave a #TODO comment to the user to correct with the relevant query.

## Spec-First Readability (Mandatory)

For migrated tests, prefer a spec-first style.

- Keep the business flow visible in the spec file as sequential steps.
- Keep assertions in the spec file for business outcomes and state transitions.
- Use page classes mainly for reusable actions (navigate, open context menu, perform edit), not for complete end-to-end scenario orchestration.
- Avoid hiding the entire scenario behind 5-10 page methods where the spec only shows method names.

### What MUST stay in spec files

- Main scenario steps (create, edit, cancel, delete, save, publish, etc.)
- Outcome assertions after each meaningful action
- Transaction lifecycle checks (before/after state)

### What can stay in page/component files

- Locators
- Small reusable **actions** that do one clear thing (click, fill, navigate, select, open menu)
- Low-level technical waits tied to action stability
- **NOT**: verification methods, assertion helpers, or any method whose primary purpose is calling `expect()`

### What should NOT be in migrated feature specs

- Pure component checks (label text, section existence, static visibility) unless explicitly required by acceptance criteria
- Assertion wrappers that hide expected result intent
- "God" page methods like runWholeCommentLifecycle() that execute full scenario internally

### Assertion placement rule (STRICT)

- **Default: ALL expect() calls belong in the spec file.**
- **Do NOT create verification/assertion methods in page classes** (e.g., `verifyCommentText()`, `assertRowCount()`, `checkTabValues()`).
- Page classes must NOT contain `expect()` for business outcomes.
- Exception: keep assertions in page methods **only** for technical guardrails that prevent flaky interactions (e.g., wait until input is enabled before fill, confirm navigation completed before proceeding). These are stability guards, not test verifications.
- If you feel the urge to create a "verify" or "check" or "assert" method in a page class, that is a signal the assertion belongs in the spec file instead.

### Why this matters

- When a test fails, the developer should see the failing assertion directly in the spec — not buried inside a page method.
- Verification methods in page classes hide what the test actually checks, making failures harder to diagnose.
- Page classes are for **actions** (click, fill, navigate, select). Spec files are for **expectations** (expect, assert, verify).

### Quick pattern

Preferred style:

1. Spec calls action method.
2. Spec asserts the result.
3. Spec calls next action method.
4. Spec asserts next result.

Avoid style:

1. Spec calls one method per phase that also includes hidden assertions.
2. Spec has minimal or no explicit expects.

## Duplication

Avoid duplicated code. If there is repeated code blocks, move them to functions in proper files.

## Understandability

Do not mix making functions for avoiding duplication with wrapping code in extra abstraction. Do not make a pass-through functions (ie with 1 line in it) whci just takes arguments and calls another function without additional behavior. Too much abstraction or calls makes maintenance and readability difficult.

Test spec file should be self-explanatory. Avoid having hidden logic, but look for a balance between reusability and understandability. (we dont want huge test spec files either)

For migration tasks, optimize for readability of the scenario in the spec over maximum abstraction.

**Core Principles**

- Over-abstracted test code hides intent

- In tests, clarity, trust, readability and debuggability are the most important quality aspects.

- Hidden logic does not give a clue about what test is doing

- Avoid having related test smells: Obscure test, Conditional verifications

**When to create a function**

- Reusable user actions (selectTab, changeMode, editCell etc)
- Technical navigation/setup actions that are repeated and do not hide scenario intent

**When NOT to create a function**

- Wrapping assertions just to reuse them (checkTabValues(tab, expectedState))

- Verification/assertion methods in page classes (verifyCommentAdded(), assertCellValue(), checkRowExists())

- Parametrized "GOD FUNCTIONS" (verifyVisibilityAndAccuracyAndOrder(tab, {isVisible, order}))

- End-to-end lifecycle wrappers that hide test steps (createEditDeleteCommentFlow())

- Any method in a page class whose name starts with verify/check/assert/validate/confirm

## Single Responsibility Principle

One function should have a main responsibility. When you read the name of the function, you should already understand what it is supposed to do. Nothing less, nothing more. When you add several checks/logic to the function, reusability would be limited.

## Locators

https://playwright.dev/docs/locators

Playwright advocates End Users. “We recommend prioritizing role locators to locate elements, as it is the closest way to how users and assistive technology perceive the page.”

FUlly aligns with the agreement done between devs and qa [here](https://teams.microsoft.com/l/meetingrecap?driveId=b%21JIK_khCnNEWuJO4z8dDF9ngjXJY-qUBEpTL90DtpQRz6ljXxx9stTpkpJePu55Mk&driveItemId=01NREGJHQ4BOYOYYZ65JBLVJUBZYBWBH2H&sitePath=https%3A%2F%2Fompartners-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fldebersaques_omp_com%2FIQAcC7DsYz7qQrqmgc4DYJ9HAY6dmqIbO6Qlcyrpkb0RM6o&fileUrl=https%3A%2F%2Fompartners-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fldebersaques_omp_com%2FIQAcC7DsYz7qQrqmgc4DYJ9HAY6dmqIbO6Qlcyrpkb0RM6o&iCalUid=040000008200E00074C5B7101A82E008000000004FC6A38437EFDC0100000000000000001000000061D7711B3735E6459FB6E39807F2289B&threadId=19%3Ameeting_MzI5N2VhODktMGZiZi00Mzk4LTg0MjUtNTA3NDA4MWVlZTI1%40thread.v2&organizerId=06a92c77-6aa9-4bc1-86bb-73ff4413f5bd&tenantId=124c8710-6982-4fb1-89e5-409544d9b334&callId=875007be-7280-4bb8-b711-8de75b915f8c&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapChiclet).

As a result, follow this order:

1. `getByRole()`

2. `getByLabel()`

3. `getByPlaceholder()`

4. `getByText()`

5. `getByAltText()`

6. `getByTitle()`

7. `getByTestId()`

8. `omp-data-id`

9. CSS or XPath selectors (`locator()`) > in this case, leave a TODO comment: "to be communicated with fe dev team to replace with more robust selectors"

## Tags

Add feature and priority tags to the suite. And also priority to each test. Example:

`test.describe('Suite Name', { tag: ['@priority:tbd', '@feature:tbd'] }, () => {
test('Test Name1', { tag: ['@priority:tbd'] }, async ({ page }) => {});
test('Test Name2', { tag: ['@priority:tbd'] }, async ({ page }) => {});
});`

## ESLint/Prettier

Follow repo's ESLint/Prettier configuration (more details to be defined)
