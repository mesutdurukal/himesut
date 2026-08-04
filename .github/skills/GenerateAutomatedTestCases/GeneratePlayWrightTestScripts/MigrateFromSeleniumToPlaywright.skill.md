---
name: MigrateFromSeleniumToPlaywright
description: 'Converts Selenium automation test scripts (written with Webdrivr.IO framework) to Playwright test code. Use when: user asks to convert a Selenium test to Playwright'
argument-hint: 'Provide the Selenium test file'
---

# Test Script Generation

## Step 1: Identify and Fetch Test Case Details

- Understand the current implementation by resolving all dependencies.

### Extract:

- Test Preparation Steps
- Test Steps
- Expected Result Assertions
- Tear Down (Clean-up) steps

---

## Step 2: Decide the migration strategy

After understanding the current test implementation, make the relevant Playwright code.

### CRITICAL: Do NOT migrate one-to-one

The Selenium code you are migrating is likely of **poor quality**. It may have:

- Buried verifications inside page objects or helper methods
- Bad locators (CSS/XPath instead of role-based)
- Over-abstracted "god functions" that hide the test flow
- Missing or misplaced assertions
- Anti-patterns that violate modern test design principles

**Do NOT replicate these patterns.** The purpose of migration is not copying structure — it is rewriting the test in Playwright **while improving code quality**. Treat the Selenium code as a **requirements source** (what should be tested), not as a **design template** (how it should be structured).

Always prefer the ImplementationGuideline.md rules over the Selenium code's patterns. When in doubt, follow the guideline, not the original implementation.

### What to extract from Selenium code

- The **business scenario** being tested (what user flow is covered)
- The **expected outcomes** (what should be verified)
- The **test data** and preconditions

### What to ignore or fix from Selenium code

- Structural patterns (how code is organized into classes/methods)
- Locator strategies (rewrite using the locator priority from the guideline)
- Assertion placement (move all assertions to spec file regardless of where Selenium had them)
- Over-abstraction (flatten hidden logic back into readable spec steps)
- Unnecessary wrappers and indirection layers

### Migration rules

- There might be steps which could be covered with component tests. Refer to .github\skills\Automated Test Cases\Playwright\ComponentVsFeatureTests.md for this decision.
- Follow a **spec-first migration style** from .github\skills\Automated Test Cases\Playwright\ImplementationGuideline.md.
- Keep the main scenario steps visible in the spec file.
- Keep business assertions in the spec file by default.
- Use page classes for reusable actions and locators, not for hiding the whole scenario flow.
- Remove or avoid component-level verifications (label presence, static existence checks, decorative UI checks) unless they are explicitly required by the acceptance criteria.
- Rewrite locators following the locator priority order from the guideline (`getByRole` > `getByLabel` > ... > CSS/XPath). Do NOT copy Selenium selectors as-is.

### Test merging: avoid step duplication

When migrating multiple Selenium tests that share the same preconditions or setup steps, and one test's outcome is another test's precondition, **merge them into a single sequential Playwright test**.

Example — instead of migrating separately:

- Test 1: navigate > create comment > verify comment created
- Test 2: navigate > create comment > edit comment > verify comment edited

Merge into one Playwright test:

- Test: navigate > create comment > verify comment created > edit comment > verify comment edited

**When to merge:**

- Test B's precondition is Test A's outcome (create → edit, create → delete)
- Tests share 80%+ identical setup steps with only different final actions
- The combined test still covers a coherent user flow

**When NOT to merge:**

- Tests cover independent scenarios with different setups
- Merging would create a massive test (>~15 meaningful steps) that tests too many things
- Tests need different preconditions or fixtures
- A failure in an early step would mask all later verifications for unrelated features

Find the sweet spot: avoid duplication of long setup sequences, but don't create monster tests that are hard to debug when they fail.

### Migration decision rules

- If the Selenium test contains both transactional flow and component checks, keep the transactional flow in the migrated feature test and drop the component checks unless they are essential to the scenario outcome.
- If the Selenium test is mostly component verification, consider migrating it as a component-oriented Playwright test instead of a feature-style scenario.
- If multiple assertions in the Selenium code are hidden inside step/helper methods, pull the meaningful business assertions back into the spec file.

### Preferred migration shape

Preferred:

1. Spec opens the scenario.
2. Spec calls a small page action.
3. Spec asserts the outcome (`expect()` in the spec file).
4. Spec continues to the next visible step.

Avoid:

1. Spec calls one high-level page method per phase.
2. Page methods contain the business assertions.
3. The scenario is unreadable without opening several helper files.

### Assertion rule for migrated code (STRICT)

- **ALL `expect()` calls belong in the spec file**, not in page classes.
- **Do NOT migrate or create verification methods in page classes** (e.g., `verifyCommentText()`, `assertRowCount()`, `checkTabValues()`).
- If the Selenium code has assertion/verification logic inside page objects or helper methods, **pull those assertions back into the spec file** during migration.
- Page classes are for **actions only** (click, fill, navigate, select, open menu).
- Any method in a page class whose name starts with verify/check/assert/validate/confirm is a code smell — the assertion belongs in the spec.

---

## Step 3: Generate Automation Script

Make the Playwright test code following the guideline: .github\skills\Automated Test Cases\Playwright\ImplementationGuideline.md.

**The guideline ALWAYS wins over the Selenium code's patterns.** Do not preserve Selenium structure, locator strategies, or assertion placement if they conflict with the guideline. Treat the migration as a **rewrite with quality improvement**, not a translation.

---

## Step 4: Output Format

### Script Summary

- Test Case ID
- Scenario

### Generated Script

- Clean, formatted, ready-to-use script

### Notes / Assumptions

- Missing selectors / endpoints
- Assumed data
- Environment dependencies

---

## Guidelines

- Do NOT generate pseudo-code
- Always include assertions
- Follow repository conventions if identifiable
- Use meaningful naming
- Clearly flag assumptions
- Keep the final spec readable as a test case narrative
- Do not move business-result checks into page objects unless needed as a technical guardrail

---

## Expected Behavior

- Converts Selenium test code to executable Playwright scripts
