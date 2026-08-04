# SubPlanning View Possible Machines Tab Tests

## General Information

| Field               | Value                                                                         |
| ------------------- | ----------------------------------------------------------------------------- |
| **Test Suite Name** | Possible Machines tab tests                                                   |
| **Description**     | Testing Possible Machines tab in subPlanning view                             |
| **Covered Feature** | [FEATURE 311757](https://dev.azure.com/OMPartners/OMP/_workitems/edit/311757) |
| **Priority**        | LP                                                                            |
| **Reviewed by**     | Niels                                                                         |

## Impact on Existing Tests

Impact analysis with relevant action plan.

---

## Component Tests

### Test Suite

| #   | Test Case                                                                                                    |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 1   | Verify the "Possible machines" tab is displayed on the ProductLocation details page in subPlanning view      |
| 2   | Verify the "Possible machines" tab is displayed next to "Possible components" and "Where possibly used" tabs |
| 3   | Verify each machine in the "Possible machines" tab displays its Machine Label                                |
| 4   | Verify the Machine ID is shown as a fallback when Machine Label is not maintained                            |
| 5   | Verify "No items to display." text is shown when no machines can produce the selected ProductLocation        |

### TC-01: Verify the "Possible machines" tab is visible on the ProductLocation details page in subPlanning view

**Purpose:**

- Verify the "Possible machines" tab is displayed

**Required Environment Setup & Data:**

- At least one product location

**Preconditions:**

- User is logged in and switched to the "INT-PLANNER1" profile in Live plan
- The ProductLocation details page is opened
- The subPlanningView section is displayed

**Postconditions:**

- Close draft plan (if it is open) for the "INT-PLANNER1" profile

**Steps & Expected Results:**

| Step | Action                                     | Expected Result                                                     |
| ---- | ------------------------------------------ | ------------------------------------------------------------------- |
| 1    | Navigate to the subPlanningView section    | The "Possible machines" tab is visible in the subPlanningView tabs  |
| 2    | Verify position of "Possible machines" tab | Tab is next to "Possible components" and "Where possibly used" tabs |

**Execution Type:** Automated (UI: Playwright)

**Priority:** LP

**Comment:**
further comments.

---

## Feature Tests

### Test Suite

| #   | Test Case                                                                                                                                                                 | Priority |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 1   | Verify right-mouse-click on a data cell shows "Copy" and "Copy with headers" context menu actions and clicking a cell shows empty state in cell details panel (Live plan) | LP       |

---

### TC-01: Verify context menu and cell details panel empty state in Live plan

**Purpose:**

- Verify right-mouse-click on a data cell (not header row) shows a context menu
- Verify the context menu contains exactly "Copy" and "Copy with headers" actions
- Verify clicking a cell in the Possible Machines tab refreshes the cell details panel and shows the empty state

**User Goal:**

- As a planner, I want to copy machine data from the Possible Machines tab and see that the cell details panel shows empty state for this view so I can efficiently extract and share planning information

**Transactional Step(s):**

- User right-clicks on a data cell in the Possible Machines tab and selects "Copy" action
- User clicks on another cell in the Possible Machines tab to view cell details

**Business Outcome:**

- Context menu appears with exactly two options: "Copy" and "Copy with headers"
- Cell data is copied to clipboard
- Cell details panel refreshes and displays empty state for Possible Machines data

**Persistence Check:**

- Context menu remains available for other cells when clicked
- Empty state message persists when clicking different cells within the Possible Machines tab
- Copied data remains in clipboard and can be pasted

**Required Environment Setup & Data:**

- A product location with available machines

**Preconditions:**

- User is logged in and switched to the "PLAN-VIEWER" profile in Live plan
- The ProductLocation details page is opened
- The subPlanningView section is displayed
- The "Possible Machines" tab is selected
- The machine list is displayed with collapsed rows
- For the cell details panel step, the panel is first opened by clicking a cell in the main planning view

**Postconditions:**

- Close all tabs, switch to first one and switch to the draft plan

**Steps & Expected Results:**

| Step | Action                                                                               | Expected Result                                                          |
| ---- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 1    | Navigate to the product location details page and open the sub-Planning view section | The sub-Planning view section is displayed                               |
| 2    | Switch to the "Possible Machines" tab                                                | The "Possible Machines" tab is selected                                  |
| 3    | Right-mouse-click on a data cell (not the header row)                                | A context menu is displayed                                              |
| 4    | Verify the context menu actions                                                      | The context menu contains exactly "Copy" and "Copy with headers" actions |
| 5    | Open the cell details panel by clicking a cell in the main planning view             | The cell details panel is opened                                         |
| 6    | Click on a cell in the Possible Machines sub-planning view                           | The cell details panel refreshes and shows the empty state               |

**Execution Type:** Automated (UI: Playwright)

**Priority:** LP

**Comment:**
tbd.
