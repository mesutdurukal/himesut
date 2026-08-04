# Test Workflow Generation Prompt

/generate-test-workflow #context <*-component.ts, *-page.ts, *-steps.ts, *.test.ts, [additional files as needed]>

This prompt generates a step class and a test suite in one turn, using the file `../../test_preparation/tmt-documentation.txt` (always present in the same location), and the attached files for selectors, page object, steps, and test suite. **Selectors must be taken only from the attached `*-component.ts` files, accessed via the attached page file.** You may optionally attach other relevant files (such as additional component, steps, test files) to provide more context and improve the accuracy and completeness of generated steps and tests.

---

## Purpose

Automate the creation of a step class and test suite for a new feature or scenario, using TMT documentation and the provided files. Steps must use selectors only from the attached `*-component.ts` files, accessed via the attached page file according to the Page Object pattern. Optionally, you may attach additional files (e.g., other components, steps, tests, helpers) to provide further context for more robust and maintainable code.

---

## Instructions

**Files used:**
- `../../test_preparation/tmt-documentation.txt` (TMT documentation)
- Required: `*-component.ts` (selectors—**must be used exclusively**), `*-page.ts` (page object), `*-steps.ts` (steps), `*.test.ts` (test suite)
- Optional: Any other relevant files (e.g., additional components, steps, tests, helpers) that may help generate more accurate steps and tests

### 1. Steps (`*-steps.ts`)
- Read all test scenarios from TMT documentation.
- For each scenario, generate step methods that imitate user actions described in the scenario.
- **Use selectors only from the attached `*-component.ts` files, accessed via the attached page file. Do not use hardcoded selectors, raw CSS, or selectors from any other source.**
- You may reference additional attached files for context, but only use selectors from the main attached component file.
- Extend `BaseSteps` from your project.
- Use decorators: `@logStep()` for user actions, `@logAction()` for utility methods.
- Method names should closely imitate user actions from TMT documentation.
- Use `waitUntilCondition()` for waiting logic, always in the following form:
  ```
  await this.waitUntilCondition(
    async () => {
      const isPresent = await this.isElementPresent(await dashboardPage.sapButtonComponent.selectorName);
      return isPresent === true;
    },
    'Selector not present'
  );
  ```
- Use `clickElement()` for clicking elements.
- Use `expect` assertions as required.
- Export an instance of the class.
- Format code with Prettier.

### 2. Test Suite (`*.test.ts`)
- For each scenario in TMT documentation, generate a separate test case.
- The `describe` block must use the format:  
  `describe('Test scenario description @FeatureId= @Author=', () => { ... })`
- Each `it` block must use the format:  
  `it('01 Test case description', async () => { ... })`, `it('02 Test case description', async () => { ... })`, etc.
- **Include preconditions, minimal data set (if present), and steps from TMT documentation in a block comment at the top of each test, inside the `it` block.**
- Use step methods for test implementation.
- Each test must be independent and reusable.
- Format code with Prettier.

---

## Output Structure

- Write all required step methods to the attached `*-steps.ts` file, following the /generate-steps prompt.
- Write all required test cases to the attached `*.test.ts` file, following the /generate-test-suite prompt.
- Reference additional attached files for context only if needed.
- Do not include comments or documentation unless required by ESLint or TypeScript.
- All code must be formatted with Prettier before finalizing.

---

## Checklist

- [ ] Steps use decorators, correct waiting/clicking logic, and **selectors only from the attached `*-component.ts` files accessed via the page file**
- [ ] Test suite uses scenario description, preconditions, minimal data set, and step methods
- [ ] Preconditions, minimal data set, and steps are in a block comment at the top of each test, inside the `it` block
- [ ] Each scenario from TMT documentation is covered by a separate test case, numbered 01, 02, 03, ...
- [ ] No unnecessary `console.log`
- [ ] No hardcoded/mock data unless created via API and deleted after use
- [ ] All code formatted with Prettier
- [ ] All files follow project conventions and ESLint rules

---

## Example

**Input:**
- TMT documentation contains multiple scenarios, each with its own steps and expected results.
- Additional files (e.g., other components, steps, tests, helpers) may be attached for context.

**Output:**
- For each scenario, a corresponding step method is generated in the steps file, using selectors only from the attached `*-component.ts` files via the page object.
- For each scenario, a corresponding test case is generated in the test suite file, with numbering (01, 02, 03, ...), and a block comment at the top of each test inside the `it` block containing preconditions, minimal data set (if present), and steps.

---

**Instructions:**  
Attach the relevant `*-component.ts`, `*-page.ts`, `*-steps.ts`, and `*.test.ts` files, plus any other files that may help generate more accurate steps and tests.  
Run `/generate-test-workflow #context <*-component.ts, *-page.ts, *-steps.ts, *.test.ts, [additional files as needed]>` to generate steps and test suite in one turn.  
The prompt will automatically use `../../test_preparation/tmt-documentation.txt` for context.