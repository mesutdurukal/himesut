# Selector Generation Prompt

/generate-selectors #context <*-component.ts, [additional component files as needed]>

This prompt generates stable, maintainable WebdriverIO selector getters for the attached main component file using TMT documentation from `../../test_preparation/tmt-documentation.txt` and HTML code from `../../test_preparation/html-code.txt`. You may optionally attach other relevant component files for additional context, which can help avoid selector duplication and improve accuracy. The generated selectors must be added directly to the attached main `*-component.ts` file. All output must follow best practices, unique selectors, and project coding standards.

---

## Purpose

Transform TMT documentation and provided HTML code into robust WebdriverIO selector getters for the attached main component file, following best practices and project coding standards. Use additional attached component files for context only, to avoid duplication and ensure selector uniqueness.

---

## Instructions

- Read TMT documentation from `../../test_preparation/tmt-documentation.txt`.
- Read HTML code from `../../test_preparation/html-code.txt` (the file will always exist, but may be empty).
- Use HTML code to improve selector accuracy and stability when available.
- Optionally, use additional attached component files for context to avoid duplicating selectors and ensure uniqueness.
- Add the generated TypeScript selector getters directly to the attached main `*-component.ts` file as follows:
  - For non-parameterized selectors, do not include comments, documentation, or return types in getters/methods.
  - For parameterized selectors, include JSDoc.
  - Use the `dataOmp` function for selectors, prioritizing `data-omp` attributes.
  - Each component must have a `root` getter as the base selector.
  - All other selectors should use the component's `root` as the starting point.
  - Getter names must use camelCase and clearly describe the element's purpose.
  - Avoid dynamic CSS classes and positional selectors.
  - Use semantic/ARIA attributes if `data-omp` is unavailable; use XPath only as a last resort.
  - For all selectors, create a getter or method that only returns the selector itself (e.g., `get avatarIcon() { return this.root.$(dataOmp('avatar')); }`).
  - Do not duplicate selectors already present in other attached components/pages.
  - Do not use hardcoded or mock data as arguments.
  - Follow rules from [CONTRIBUTING.md](../../CONTRIBUTING.md) and [.eslintrc](../../.eslintrc).
  - Format code with Prettier before finalizing.

---

## Output Structure

- Write the generated TypeScript selector getters directly to the attached main `*-component.ts` file.
- Only generate TypeScript code for selector getters, following the examples below.

---

## Example

**Input (TMT documentation, HTML code, and additional component files):**
- TMT documentation: The top bar contains an avatar icon and a page title. The app switcher menu contains buttons with app names.
- HTML code: Use to refine selectors if present; if empty, rely on TMT documentation.
- Additional component files: Use only for context to avoid duplicating selectors.

**Output (selectors added to main *-component.ts):**
```typescript
import dataOmp from '../../../core/index';

export class TopBarComponent {
  get root() {
    return browser.$(dataOmp('top-bar'));
  }

  get avatarIcon() {
    return this.root.$(dataOmp('avatar'));
  }

  get pageTitle() {
    return this.root.$(dataOmp('app-info-title'));
  }

  /**
   * Returns the app switcher menu item button by its name.
   * @param itemName - The visible name of the app switcher menu item.
   */
  getAppSwitcherMenuItem(itemName: string) {
    return this.pageTitle.$(`//button[contains(text(), '${itemName}')]`);
  }
}
```

---

## Notes

- Always check for existing selectors/components in all attached files before creating new ones.
- Each selector must be unique within its context.
- Avoid using `browser.pause()`; use wait methods instead.
- Add a description for each new component or selector.
- Use Prettier for code formatting before commit.

---

## Checklist

- [ ] No comments, documentation, or return types in getters/methods for non-parameterized selectors
- [ ] All getters use camelCase naming
- [ ] All selectors start from the component's root
- [ ] Prioritizes data-omp/data-testid attributes
- [ ] Avoids dynamic CSS classes and positional selectors
- [ ] No selector duplication (check all attached component files)
- [ ] No hardcoded/mock data in arguments
- [ ] Parameterized selectors include JSDoc
- [ ] Code formatted with Prettier

---

**Instructions:**  
Attach the relevant main `*-component.ts` file and any other component files that may help avoid duplication and improve selector quality.  
Run `/generate-selectors #context <*-component.ts, [additional component files as needed]>` to generate and add selector getters directly to the attached main component file, using TMT documentation, HTML code, and additional component files for context.