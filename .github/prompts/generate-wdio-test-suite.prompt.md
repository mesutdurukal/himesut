# Test Suite Generation Prompt

/generate-wdio-test-suite #context <*-steps.ts, *.test.ts, [additional files as needed]>

This prompt generates a TypeScript test suite using:
- TMT documentation from `../../test_preparation/tmt-documentation.txt`
- The attached `*-steps.ts` file for step methods
- The attached `*.test.ts` file as the output location for all generated tests

Each test must include scenario description, preconditions, minimal data set (if present), and steps, using step methods and following project standards.

---

## Purpose

Generate a TypeScript test suite using WebdriverIO that follows project conventions and best practices. The suite must use scenario descriptions, preconditions, minimal data set (if present), and steps from the TMT documentation, and leverage step methods from the attached `*-steps.ts` file. All tests must be written to the attached `*.test.ts` file.

---

## Instructions

- Read TMT documentation from `../../test_preparation/tmt-documentation.txt`.
- Use the attached `*-steps.ts` file for all step method calls.
- Write all generated tests to the attached `*.test.ts` file.
- Generate a test suite that:
  1. **Test Suite Description:**  
     - The `describe` block must use the format:  
       `describe('Test scenario description @FeatureId= @Author=', () => { ... })`
     - The description should be taken directly from the TMT documentation.
  2. **Test Case Structure:**  
     - Each `it` block must use the format:  
       `it('01 Test case description', async () => { ... })`, `it('02 Test case description', async () => { ... })`, etc.
     - The test case description, preconditions, and steps must be taken from the TMT documentation.
     - If "Minimal data set" is present in the TMT documentation, include it after preconditions in the test comment block.
     - Steps must be listed in a block comment at the top of each test, including preconditions, minimal data set (if present), and numbered steps.
  3. **Test Context:**  
     - The test implementation must use step methods from the attached `*-steps.ts` file.
     - The context and workflow of the test should be constructed using these step methods.
  4. **Formatting and Standards:**  
     - Apply Prettier formatting and follow ESLint rules.
     - Do not use unnecessary `console.log`.
     - Do not use hardcoded or mock data unless created via API and deleted after use.
     - Ensure each test is independent and reusable.

---

## Output Structure

- Write all generated TypeScript test cases to the attached `*.test.ts` file.
- Do not include comments or documentation unless required by ESLint or TypeScript.
- All code must be formatted with Prettier before finalizing.

---

## Checklist

- [ ] Test suite description matches TMT documentation format
- [ ] Test case description, preconditions, and steps are taken from TMT documentation
- [ ] If "Minimal data set" is present in TMT documentation, it is included after preconditions in the test comment block
- [ ] Test context and workflow use step methods from attached `*-steps.ts` file
- [ ] All tests are written to the attached `*.test.ts` file
- [ ] Prettier formatting applied
- [ ] ESLint rules followed
- [ ] No unnecessary `console.log`
- [ ] No hardcoded/mock data unless created via API and deleted after use
- [ ] Each test is independent and reusable

---

## Example

**Input:**
- TMT documentation contains multiple scenarios, each with its own steps and expected results.

**Output:**
```typescript
import { myNewSteps } from '../../main/steps/mynew-steps';

describe('Publish to SAP button scenario @FeatureId=SAP-001 @Author=QA', () => {
  it('01 Verify the "Publish to SAP" button has the aria-label attribute set to "Publish to SAP"', async () => {
    /*
      Preconditions:
      User is logged into the application and has access to the Draft plan.

      Steps:
      1. Log in to the application
      2. Navigate to the Draft plan page
      3. Verify the "Publish to SAP" button has the aria-label attribute set to "Publish to SAP"
    */
    await myNewSteps.verifyPublishToSapButtonAriaLabel();
  });

  it('02 Verify a success toast is displayed after publishing', async () => {
    /*
      Preconditions:
      User is logged into the application and has access to the Draft plan.

      Steps:
      1. Log in to the application
      2. Navigate to the Draft plan page
      3. Click the "Publish to SAP" button
      4. Verify the success toast is displayed
    */
    await myNewSteps.clickPublishToSapButton();
    await myNewSteps.verifyPublishSuccessToast();
  });
});
```

---

**Instructions:**  
Attach the relevant `*-steps.ts` and `*.test.ts` files.  
Run `/generate-wdio-test-suite #context <*-steps.ts, *.test.ts>` to generate the test suite using the TMT documentation and attached steps file. All tests will be written to the attached test file.