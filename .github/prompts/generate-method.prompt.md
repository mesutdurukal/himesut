# Method Generation Prompt

/generate-method #context <your request, attached files>

This prompt generates a public WebdriverIO step method based on your request and any attached files. The method will strictly follow senior engineering best practices, including DRY, single responsibility, and clear structure. If the requested logic is large, it will be split into smaller, reusable methods. The output will use project conventions, decorators, and utilities as appropriate.

---

## Senior Engineering Principles

- **DRY (Don't Repeat Yourself):** Avoid duplicating logic; reuse helper methods where possible.
- **Single Responsibility:** Each method should perform one clear action or verification.
- **Modularity:** Split complex logic into smaller, reusable methods.
- **Clear Naming:** Use descriptive, intention-revealing method names.
- **Maintainability:** Write code that is easy to read, update, and extend.
- **Project Conventions:** Follow established patterns, decorators, and utilities.

---

## Instructions

- Place your method request in the context (describe the action or verification you need).
- Attach any relevant files (e.g., component files for selectors, base-steps.ts for utilities).
- The generated method must:
  - Be public (not private).
  - Use the correct decorator: `@logStep()` for user actions or verifications, `@logAction()` for utility/helper methods.
  - Use selectors and utilities from attached files.
  - Use `waitUntilCondition()` for waiting logic, in the following form:
    ```
    await this.waitUntilCondition(
      async () => {
        const isPresent = await this.isElementPresent(await Component.selector);
        return isPresent === true;
      },
      'Selector not present'
    );
    ```
  - Use `clickElement()` for clicking elements.
  - Use `expect` assertions for verifications.
  - Follow DRY and single responsibility principles—split large logic into smaller methods if needed.
  - Use clear, descriptive method names that reflect the action or verification.
  - Apply Prettier formatting and follow ESLint rules.
  - Do not use unnecessary `console.log`.
  - Do not use hardcoded/mock data unless created via API and deleted after use.

---

## Output Structure

- Only generate the TypeScript code for the requested method(s).
- If the logic is complex, split it into several smaller, reusable methods.
- All code must be formatted with Prettier before finalizing.

---

## Example Requests

**Request:**  
"Verify the dashboard page title is 'Expected Title' and the status label is visible after clicking refresh."

**Output:**  
```typescript
@logStep()
async verifyDashboardPageTitle(): Promise<void> {
  await this.waitUntilCondition(
    async () => {
      const isPresent = await this.isElementPresent(await DashboardComponent.pageTitle);
      return isPresent === true;
    },
    'Page Title not present in the header'
  );
  await expect(DashboardComponent.pageTitle).toHaveText('Expected Title');
}

@logStep()
async verifyStatusLabelVisible(): Promise<void> {
  await this.waitUntilCondition(
    async () => {
      const isPresent = await this.isElementPresent(await DashboardComponent.statusLabel);
      return isPresent === true;
    },
    'Status label not present'
  );
}

@logAction()
async clickRefreshButton(): Promise<void> {
  await this.clickElement(
    await DashboardComponent.refreshButton,
    'Refresh button not clickable'
  );
}
```

---

**Instructions:**  
Describe your method request in the context and attach any needed files.  
Run `/generate-method #context <your request, attached files>` to generate the method(s) following senior engineering best practices.