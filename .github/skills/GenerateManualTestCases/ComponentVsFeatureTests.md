The most important aspect in generating test definitions is respecting the test pyramid. Generate test definitions in two main categories (will be explained in Format Output section), which are component and Feature tests. Prioritize component test coverage wherever possible.

- Component tests should verify isolated UI behavior, component states, and component-level validations.

- Feature tests should represent realistic end-user workflows. A feature test should validate that multiple components work together to achieve a user goal.

# Test Type Guidelines

## Component Tests

Use component tests to verify:

- Component existence
- Component properties and attributes:
  - color
  - type
  - size
  - text/font
  - visibility
  - enabled/disabled state
- Component behavior:
  - input handling
  - validation messages
  - state changes
  - UI updates

Do NOT create feature tests only to verify visual/component changes.

Examples that should be component tests:

- Dropdown options are updated
- Button size changes
- Input validation behavior changes
- Component is disabled/enabled based on state

## Feature Tests

Create feature tests only for real user flows.

A feature test should cover:

- User actions
- Navigation between steps/pages
- Multiple components working together
- Expected user outcome

# Real User Flow Rule (Mandatory)

Feature tests MUST represent a business task completion, not page exploration.

Each feature test must include all of the following:

- **Actor intent**: why the user performs the flow (business goal)
- **Transactional action**: a user action that changes state/data (create/update/delete/confirm/assign/publish/sync/approve)
- **Outcome validation**: verify the business result of the transaction
- **Persistence validation**: verify the change remains visible after refresh, navigation, or reopening relevant screen
- **Cleanup or isolation note**: ensure idempotent execution or explicit rollback/cleanup step

Do NOT classify as feature tests:

- Open page/tab and only verify visibility
- Switch tabs and verify static UI only
- Read-only checks without user decision/action that affects data or system state

If no transactional flow exists in the story, keep tests as component tests unless there is a clear end-to-end user goal with stateful outcome.

# Feature Test Quality Gate (Use Before Finalizing)

Before outputting a feature test, validate all checks below:

1. Is there a clear business goal in user language?
2. Does the scenario include at least one state-changing action?
3. Is there a verifiable system outcome tied to that action?
4. Is persistence of the result validated?
5. Is this scenario distinct from component-level UI validation?

If any answer is "No", reclassify as component test or rewrite the feature flow.

# Feature Test Template Requirements

For each feature test case, include these fields in addition to the existing template:

- **User Goal**
- **Transactional Step(s)**
- **Business Outcome**
- **Persistence Check**

In the **Steps & Expected Results** table, include explicit steps for:

- Performing the transaction
- Verifying immediate success result
- Verifying persisted result after refresh/reopen/navigation

It is acceptable to have only component tests and no feature test if there is no meaningful user workflow.

For both categories (component and feature tests), consider covering:

# Positive scenarios

- Happy path for each user flow described in the story
- For each primary acceptance criterion, include at least one end-to-end feature scenario that executes a business action and validates persisted outcome
- **Club closely related flows into a single test case** using `Scenario A - ...`, `Scenario B - ...` labels within the Steps field (e.g., all override types grouped into one TC, all team-access scenarios grouped into one TC)
- Club state transitions and input-change scenarios into existing positive TCs where logical
- Avoid creating unnecessary duplicate test cases. The number of test cases should depend on:
  - Complexity of the flow
  - Number of different states
  - Risk level
  - Business importance

# Negative / Edge-case scenarios

- Cover: boundary conditions, invalid inputs (e.g., negative numbers, non-numeric text), past dates, unauthorized access, empty states
- Items explicitly listed as out of scope (verify they are NOT implemented)
- They are mostly supposed to be component tests
