# TMT Documentation Generation Prompt

/generate-tmt-documentation

This prompt transforms test cases from the file `../../test_preparation/test-cases.txt` into structured documentation for test management systems. It also reads HTML code from the file `../../test_preparation/html-code.txt` (the file will always exist, but may be empty) and takes it into account when generating TMT documentation, especially for describing UI elements, actions, and selectors.  
The generated TMT documentation must be written to `../../test_preparation/tmt-documentation.txt`.

---

## Purpose

Transform a list of test cases from the specified file into structured documentation for test management systems, using HTML code to improve accuracy and detail in UI-related steps and descriptions, and save the result to `../../test_preparation/tmt-documentation.txt`.

---

## Instructions

- Read test cases from `../../test_preparation/test-cases.txt`.
- Read HTML code from `../../test_preparation/html-code.txt` (the file will always exist, but may be empty).
- Use HTML code to improve the accuracy and detail of UI element descriptions, selectors, and actions in the generated documentation.
- Do **not** include the HTML code as a separate section in the output.
- For EACH main numbered item (e.g., "1.", "2.", "3."):
  - If sub-items (e.g., "1.1.", "1.2.") exist, treat the main item as the test case title and list sub-items under "Covered test cases".
  - If no sub-items exist, treat the main item as the test case title and omit the "Covered test cases" section.
- Write the generated TMT documentation to `../../test_preparation/tmt-documentation.txt`.

## Documentation Structure

```
1. [Test case title - main numbered item text]

[Covered test cases:
  - [Sub-item 1.1 text]
  - [Sub-item 1.2 text]
  - [...]
] (Include only if sub-items exist)

Preconditions: 
[Copy preconditions from the provided list. Specify which plan should be opened (Draft plan or Live plan).]

Steps: 
1. Log in to the application
2. [Action step]
3. [Action step]
[...]

Expected results:
1. A user is logged into the application
2. [Expected outcome matching step 2]
3. [Expected outcome matching step 3]
[...]

Comment:
When a user logs in to the application and [describe the complete test flow in narrative form, connecting all steps and referencing UI details from HTML code if relevant]
```

---

## Example

**Input (from ../../test_preparation/test-cases.txt):**
```
Preconditions:
A user is logged in to the conflicting product locations page and switched to the Stock and Requirements section. The product location which has deletable and undeletable run is opened

TEST cases
Draft plan
1. Verify the number of runs have been deleted notification is displayed in the top-right corner after successful deleting
1.1. Verify the number of runs have been deleted notification is displayed in the top-right corner after successful deleting without ODM validation
1.2. Verify an ODM validation modal appears if at least one run requires ODM approval
```
(HTML code is read from ../../test_preparation/html-code.txt and used to improve step and UI element descriptions, but is not shown as a separate section.)

**Output (written to ../../test_preparation/tmt-documentation.txt):**
```
01 Verify the number of runs have been deleted notification is displayed in the top-right corner after successful deleting

Covered test cases:
  - Verify the number of runs have been deleted notification is displayed in the top-right corner after successful deleting without ODM validation
  - Verify an ODM validation modal appears if at least one run requires ODM approval

Preconditions: 
A user is logged in to the conflicting product locations page and switched to the Stock and Requirements section in Draft plan. The product location which has deletable and undeletable run is opened

Steps: 
1. Log in to the application
2. Click on needed product location to open the compact view
3. Navigate to the Stock and Requirements section
4. Select several runs: one of them should require ODM validation
5. Click on the "Delete" button
6. Leave a comment
7. Click on the "Delete" button

Expected results: 
1. A user is logged into the application
2. The compact view is displayed
3. The Stock and Requirements section is displayed
4. Several runs are selected
5. A confirmation modal appears and displays the correct content
6. A comment is displayed
7. ODM validation modal is displayed, selected runs are deleted, the number of runs have been deleted notification is displayed

Comment:
When a user logs in to the application and opens the compact view, navigates to the Stock and Requirements section, ProductFlows list is displayed. When a user selects several runs and clicks on the "Delete" button, a confirmation modal appears. When a user leaves a comment and clicks on the "Delete" button, ODM validation modal is displayed, selected runs are deleted, the number of runs have been deleted notification is displayed. UI elements such as the notification and ODM modal are referenced according to the HTML code, but the HTML code itself is not shown as a separate section.
```

---

## Notes

- Only include "Covered test cases" if sub-items exist.
- Always start steps with "Log in to the application".
- Match expected results to steps, starting with "A user is logged into the application".
- The comment should narrate the test flow starting with "When a user logs in to the application and...".

---

**Instructions:**  
Run `/generate-tmt-documentation` to generate documentation from the test cases file, taking into account the HTML code file at `../../test_preparation/html-code.txt`, and write the result to `../../test_preparation/tmt-documentation.txt`. No additional context or input is needed.