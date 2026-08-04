---
name: GeneratePlaywrightScripts
description: 'Generates automation test scripts from manual test cases. Use when: user asks to automate a test case'
argument-hint: 'Provide Test Case ID, Work Item ID, or paste the test case steps'
---

# Playwright Script Generation

## Step 1: Identify and Fetch Test Case Details

- If Test Case steps are directly provided:

  - Use input as-is

- If a Work Item ID is provided:

  - Use mcp_azure-devops-\_wit_work_item with action get, project OMP, expand All
  - Extract associated test cases or acceptance criteria

- If a Bug ID is provided:

  - Use:
    - mcp_azure-devops-\_wit_work_item OR
    - mcp_bugparade_get_bug
  - Extract validation test cases from RCA

### Extract:

- Test Scenario
- Test Steps
- Expected Result
- Preconditions (if available)

If details are incomplete:

- Clearly state assumptions before generating scripts

---

## Step 2: Translate Test Steps into Script Logic

Map manual steps to script actions:

- Navigate → browser.url() / navigation
- Submit → form submit / API request

---

## Step 3: Generate Automation Script

Make the Playwright test code following the guideline: .github\skills\Automated Test Cases\Playwright\ImplementationGuideline.md.

### Test merging: avoid step duplication

When multiple test cases share the same preconditions or setup steps, and one test's outcome is another test's precondition, **merge them into a single sequential test**.

Example — instead of:

- Test 1: navigate > create comment > verify comment created
- Test 2: navigate > create comment > edit comment > verify comment edited

Merge into one test:

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

### Spec-first assertion rule (STRICT)

- ALL assertions (`expect()`) must be placed in the spec file, NOT in page classes.
- Page classes are for **actions only** (navigate, click, fill, select, open menu).
- Do NOT create verification/check/assert methods in page classes.
- The spec file must read as a clear narrative: action → assertion → action → assertion.

### Preferred shape

1. Spec calls a page action method (e.g., `await commentsPage.addComment(text)`).
2. Spec asserts the result (e.g., `await expect(commentsPage.commentText).toHaveText(text)`).
3. Spec calls the next action.
4. Spec asserts the next result.

### Avoid

- Page methods that contain `expect()` for business outcomes.
- Methods named `verify*`, `check*`, `assert*` in page classes.
- Spec files with only function calls and no visible assertions.

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

---

## Expected Behavior

- Converts manual test cases into executable Playwright scripts
- Aligns with existing framework in repository
- Produces integration-ready scripts
