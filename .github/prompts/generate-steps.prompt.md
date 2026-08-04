# Steps Class Generation Prompt

/generate-steps #context <*-page.ts, *-component.ts, *-steps.ts, [additional files as needed]>

This prompt generates a reusable WebdriverIO step class using:
- TMT documentation from `../../test_preparation/tmt-documentation.txt`
- The base steps file from `../../src/main/core/base-steps.ts`
- The attached page file (e.g., `*-page.ts`), which provides access to the relevant component class according to the Page Object pattern
- The attached main component file (e.g., `*-component.ts`), which contains the selectors
- The attached steps file (e.g., `*-steps.ts`), where all generated step methods must be written
- Optionally, any other relevant files (e.g., additional component or steps files) that may help avoid duplication and improve accuracy

The output strictly follows project conventions, type safety, error handling, and best practices as described in [CONTRIBUTING.md](../../CONTRIBUTING.md) and [.eslintrc](../../.eslintrc).

---

## Instructions

- Read TMT documentation from `../../test_preparation/tmt-documentation.txt`.
- Read and reuse functions from `../../src/main/core/base-steps.ts`.
- Use the attached page file (`*-page.ts`) for accessing the component class.
- Use selectors only from the attached main component file (`*-component.ts`), accessed via the page file.
- Optionally, use additional attached files for context to avoid duplicating selectors and steps, and to improve accuracy.
- **Write all generated step methods to the attached steps file (`*-steps.ts`).**
- Generate a TypeScript class that:
  - **Extends** `BaseSteps`
  - **Imports** only components and pages (never other steps)
  - **Uses Decorators:**
    - Use `@logStep()` for step methods that imitate user behavior or represent test steps
    - Use `@logAction()` for simple utility methods
  - **Method Naming:** Method names must closely imitate user actions described in TMT documentation
  - **Selectors:** Use only selectors from the attached main component file, accessed via the page file if needed
  - **Expectations:** Use `expect` assertions as required by the scenario
  - **Export:** Export an instance of the class (e.g., `export const newSteps = new NewSteps();`)
  - **Formatting:** Apply Prettier formatting and follow ESLint rules
  - **No hardcoded/mock data** unless created via API and deleted after use
  - **No unnecessary console.log**
  - **No steps import other steps**
  - **Each step is independent and reusable**
  - **File naming:** Use kebab-case for files, snake_case for folders
  - **Reuse functions from `base-steps.ts` when possible**
  - **Do not use `waitForElementExistAndDisplayed`**
  - **Use `waitUntilCondition()` from `base-steps.ts` for waiting logic, always in the following form:**
    ```
    await this.waitUntilCondition(
      async () => {
        const isPresent = await this.isElementPresent(await Page.Component.selector);
        return isPresent === true;
      },
      'Selector not present'
    );
    ```
  - **Use `clickElement()` from `base-steps.ts` for clicking elements instead of direct `.click()`**
  - **For element presence checks, use either `isDisplayed()` or `isElementPresent()` from `base-steps.ts` as appropriate**

---

## Output Structure

- Write all generated step methods to the attached steps file (`*-steps.ts`).
- Only generate TypeScript code for the step class, following the example below.
- Do not include comments or documentation unless required by ESLint or TypeScript.
- All code must be formatted with Prettier before finalizing.

---

## Checklist

- [ ] Each method uses the correct decorator (`@logStep()` or `@logAction()`)
- [ ] Method names imitate user actions from TMT documentation
- [ ] All step methods are written to the attached steps file
- [ ] No steps import other steps
- [ ] No unnecessary console.log
- [ ] No hardcoded/mock data unless created via API and deleted after use
- [ ] Prettier formatting applied
- [ ] ESLint rules followed
- [ ] All imports are correct and minimal
- [ ] Each step is independent and reusable
- [ ] `waitUntilCondition()` is used for waiting logic in the specified form
- [ ] `clickElement()` is used for clicking elements
- [ ] For element presence checks, use either `isDisplayed()` or `isElementPresent()` from `base-steps.ts`
- [ ] Optionally use additional attached files for context to avoid duplication and improve accuracy

---

## Example

**Input:**
- TMT documentation contains multiple scenarios, each with its own steps and expected results.
- Additional files (e.g., other components, steps) may be attached for context.

**Output:**
// filepath: src/main/steps/mynew-steps.ts
```typescript
import BaseSteps from '../core/base-steps';
import { logStep, logAction } from '../core/';
import { dashboardPage } from '../page_objects/pages/dashboard-page';

class MyNewSteps extends BaseSteps {
  @logStep()
  async verifyPublishToSapButtonAriaLabel(): Promise<void> {
    await this.waitUntilCondition(
      async () => {
        const isPresent = await this.isElementPresent(await dashboardPage.sapButtonComponent.publishToSapButton);
        return isPresent === true;
      },
      'Publish to SAP button not present'
    );
    await expect(await dashboardPage.sapButtonComponent.publishToSapButton).toHaveAttribute('aria-label', 'Publish to SAP');
  }

  @logStep()
  async clickPublishToSapButton(): Promise<void> {
    await this.clickElement(
      await dashboardPage.sapButtonComponent.publishToSapButton,
      'Publish to SAP button not clickable'
    );
  }

  @logStep()
  async verifyPublishSuccessToast(): Promise<void> {
    await this.waitUntilCondition(
      async () => {
        const isPresent = await this.isElementPresent(await dashboardPage.sapButtonComponent.successToast);
        return isPresent === true;
      },
      'Success toast not present'
    );
    await expect(await dashboardPage.sapButtonComponent.successToastTitle).toHaveText('Publish to SAP succeeded');
    await expect(await dashboardPage.sapButtonComponent.successToastDescription).toHaveText('Your changes were published successfully.');
  }
}

export const myNewSteps = new MyNewSteps();
```

---

**Instructions:**  
Attach the relevant `*-page.ts`, `*-component.ts`, and `*-steps.ts` files, plus any other files that may help avoid duplication and improve step quality.  
Run `/generate-steps #context <*-page.ts, *-component.ts, *-steps.ts, [additional files as needed]>` to generate the step class using the TMT documentation, base steps file, and attached files. All step methods will be written to the attached steps file.