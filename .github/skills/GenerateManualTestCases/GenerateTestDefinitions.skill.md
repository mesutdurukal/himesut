---
name: GenerateTestDefinitions
description: 'Generates test definitions from Azure DevOps User Stories or Features. Use when: user asks to create test definitions from ADO user stories.'
argument-hint: 'Give the ADO User Story or Feature ID (e.g., 576216) or manually paste User Story/Feature context: Title, Description, Acceptance Criteria and Comments'
---

# Generate Test Definitions from ADO User Stories

## Step 1: Fetch the Work Item Details

- Use the `mcp_azure-devops-_wit_work_item` tool with action `get`, project `OMP`, and the provided work item ID.
- Use `expand: All` to retrieve the full description, acceptance criteria, and relations.
- If ADO connection is not available (ie mcp or azure cli is not installed or authentication is not done etc), ask user to give the User Story/Feature context manually.

## Step 2: Extract Key Information

From the work item or provided context, extract and analyze:

- **Title**: The user story statement
- **Description**: Full scope, user flows, use cases, preconditions, exceptions, and comments
- **Acceptance Criteria**: The GIVEN/WHEN/THEN conditions
- **Tags / Area Path**: For context on the feature area
- **Relations**: Check for child work items or related items that may add scope

## Step 2b: Search BugParade for Related Known Issues

- If BugParade connection is not available (ie mcp or cli is not installed or authentication is not done etc), skip this step.
- Use `mcp_bugparade_list_bugs` to search for existing bugs related to the functionality under test. Derive search terms from the work item title, module, product, and tags.
- Try multiple searches: by `free_text` using key terms from the title/description, and by `application_by_name` or `company_by_name` if identifiable from the work item's area path.
- Filter by `status` values `['Open', 'Reproduce', 'Reproduced', 'WorkInProgress', 'Verify']` to focus on unresolved issues.
- For each related bug found, note the bug ID, title, severity, and current status.
- Use these known issues to generate additional **regression test definitions** that specifically cover the reported failure scenarios, ensuring the functionality under test is not affected by those bugs.

## Step 3: Generate Test Definitions

Follow .\ComponentVsFeatureTests.md to generate test definitions

## Step 4: Format Output

Make an md file with the generated test cases under the folder src\test\playwright\test-definitions by following the template: .\test-definition-template.md (Example is .\test-definition-example.md)

## Step 5: Provide Summary Table

At the end, include a summary table listing all test cases with their IDs, areas, and priorities.

## Additional Guidelines

- **Data Agnostic Tests**

  - Try to make data agnostic tests, which means instead of assuming any data is already existing, make relevant data creation steps as a pre-condition and at the end of the test, add clean up steps to delete the transactional data created for this purpose.

- **Acceptance criteria traceability**

  - Add a short mapping line per feature TC such as: `Covers AC: AC1, AC3`.
  - If a criterion is not covered, state why (out of scope, non-testable in UI, or deferred).

- **Test quality and coverage**

  - Prioritize quality over quantity.
  - Create meaningful, high-value test cases that thoroughly validate the user story.
  - Avoid redundant or trivially similar test cases created only to increase count.
  - Ensure each test case covers a distinct scenario or risk area.

- **Test merging: avoid step duplication**

  - When multiple test cases share the same preconditions or setup steps, and one test's outcome is another test's precondition, **merge them into a single sequential test**.
  - Example — instead of:
    - Test 1: navigate > create comment > verify comment created
    - Test 2: navigate > create comment > edit comment > verify comment edited
  - Merge into one test:
    - Test: navigate > create comment > verify comment created > edit comment > verify comment edited
  - **When to merge:**
    - Test B's precondition is Test A's outcome (create → edit, create → delete)
    - Tests share 80%+ identical setup steps with only different final actions
    - The combined test still covers a coherent user flow
  - **When NOT to merge:**
    - Tests cover independent scenarios with different setups
    - Merging would create a massive test (>~15 meaningful steps) that tests too many things
    - Tests need different preconditions or fixtures
    - A failure in an early step would mask all later verifications for unrelated features
  - Find the sweet spot: avoid duplication of long setup sequences, but don't create monster tests that are hard to debug when they fail.

- **Preconditions format**

  - Always write preconditions as a **numbered list** (e.g., `1. User is logged in.` `2. Data is loaded.`).

- **Terminology and wording**

  - Use the exact terminology from the user story; do not rephrase domain terms.
  - Keep steps actionable and specific.
  - Avoid vague instructions such as "verify it works".

- **Documentation references**
  - If the description references functional documents, explicitly note them for manual review.

## Anti-Pattern Examples

Bad feature test examples (should be component tests):

- "Open page, verify tab exists, switch tab, verify table exists"
- "Navigate to details page and confirm header is visible"

Good feature test examples:

- "User changes allocation value, saves, sees recalculated totals, refreshes page, and confirms saved value and totals persist"
- "User publishes draft changes, verifies publish confirmation, opens affected view, and validates new values are available to expected profile"
