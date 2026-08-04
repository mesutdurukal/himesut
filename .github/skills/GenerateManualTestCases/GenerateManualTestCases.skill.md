---
name: GenerateManualTestCases
description: 'Generates manual test cases from Azure DevOps User Stories or Features. Use when: user asks to create test cases, QA scenarios, or convert ADO user stories into manual test cases.'
argument-hint: 'Generate Test Cases for Feature ID (e.g., 576216) / generate manual test cases for user story 1234 / generate test cases for task 1234'
---

# Generate Manual Test Cases from ADO User Stories

## Step 1: Fetch the Work Item Details
- Use the `mcp_azure-devops-_wit_work_item` tool with action `get`, project `OMP`, and the provided work item ID.
- Use `expand: All` to retrieve the full description, acceptance criteria, and relations.
- **If the fetched work item is a Task**: check its `relations` array for a parent link (`rel: "System.LinkTypes.Hierarchy-Reverse"`). Fetch that parent work item (User Story or Feature) using the same tool and use it as the primary source for test case generation. Note in the output that the provided ID was a Task and that test cases are based on its parent (include both IDs).

## Step 2: Extract Key Information
From the work item, extract and analyze:
- **Title**: The user story statement
- **Description**: Full scope, user flows, use cases, preconditions, exceptions, and comments
- **Acceptance Criteria**: The GIVEN/WHEN/THEN conditions
- **Tags / Area Path**: For context on the feature area
- **Relations**: Check for child work items or related items that may add scope
- **Attachments**: Check the `relations` array for entries with `rel: "AttachedFile"`. For each attachment found, note the file name and treat it as a functional reference document. If the description or acceptance criteria are sparse, the attached document is the primary source of functional scope — explicitly note its name in the test cases under Comments and base test coverage on its documented functionality.

## Step 2b: Search BugParade for Related Known Issues
- Use `mcp_bugparade_list_bugs` to search for existing bugs related to the functionality under test. Derive search terms from the work item title, module, product, and tags.
- Try multiple searches: by `free_text` using key terms from the title/description, and by `application_by_name` or `company_by_name` if identifiable from the work item's area path.
- Filter by `status` values `['Open', 'Reproduce', 'Reproduced', 'WorkInProgress', 'Verify']` to focus on unresolved issues.
- For each related bug found, note the bug ID, title, severity, and current status.
- Use these known issues to generate additional **regression test cases** that specifically cover the reported failure scenarios, ensuring the functionality under test is not affected by those bugs.

## Step 2c: Compose the Business Use Case Summary
- Based on the extracted information (Step 2) and the story's functional scope, write a concise **Business Use Case** section that explains the real-world business scenario and value the user story addresses.
- Keep it brief (2–4 sentences or a short bullet list): who the users/stakeholders are, what business problem or goal it serves, and the expected business outcome.
- Use the exact domain terminology from the story; do not introduce assumptions beyond the documented scope.
- This is a **markdown-only** section presented once at the top of the output (before the test case tables). It is **NOT** added to the Excel outputs (Step 6/Step 7).

## Step 3: Generate Test Cases
For each use case and acceptance criterion, create test cases covering:

### Positive scenarios
- Happy path for each distinct user flow described in the story
- Keep distinct flows (different objectives or outcomes) as separate test cases
- **Club closely related variations of the *same* flow** (e.g., the same action with different valid inputs that behave identically) into a single test case, listing the variations

### Negative / Edge-case scenarios
- **Club negative/edge variations that pass the clubbing rule** (same action, same type of expected outcome, differing only by input value) into a single test case. For example, one "invalid input handling" test case can cover several invalid values (negative numbers, non-numeric text, empty, past dates) that are all rejected the same way.
- List each variation compactly as `input → expected result` within the Steps/Expected Result so the single test case stays clear.
- Split into separate test cases when a variation produces a different expected behavior, error/validation message, or downstream state.
- Items explicitly listed as out of scope (verify they are NOT implemented) can be grouped into one "out-of-scope verification" test case.

### Interaction scenarios
- Create a dedicated test case for each distinct state transition or input-change behavior
- Club minor variations of the same transition into that single test case

## Step 4: Format Output
Begin the output with the **Business Use Case** section (from Step 2c), then present each test case in a table with:

| Field | Details |
|---|---|
| **ID** | TC-{WorkItemID}-{NN} |
| **Priority** | High / Medium / Low |
| **Area** | Concise phrase stating the **aim** of the test case — what it verifies — not just the feature name (~3–6 words), e.g., `Create new details page from selector`, not `Selector`. |
| **Preconditions** | Numbered list: `1. ...` `2. ...` — each prerequisite on its own line |
| **Steps** | Numbered steps to execute; if the case groups related variations, list them compactly as `input → expected result` |
| **Expected Result** | Observable outcome(s) to verify; if variations are grouped, address each one |
| **Status** | Leave empty when generating (filled in during execution) |
| **Comments** | Leave empty when generating (filled in during execution) |
| **Actual Result** | Leave empty when generating (filled in during execution) |


## Step 5: Provide Summary Table
At the end, include a summary table listing all test cases with their IDs, areas, and priorities.

## Step 6: Generate Excel File
After presenting the test cases in markdown, generate a `.xlsx` Excel file:
- File name: `TC-{WorkItemID}_ManualTestCases.xlsx`
- Save location: `X:\Public\Testing\AI\GeneratedTestCases\{WorkItemID}\`
- Before saving, create the folder `X:\Public\Testing\AI\GeneratedTestCases\{WorkItemID}` if it does not already exist (use `New-Item -ItemType Directory -Force`)
- Columns (in this exact order): `Test Case ID`, `Priority`, `Area`, `Preconditions`, `Steps`, `Expected Result`, `Status`, `Comments`, `Actual Result`
- Leave the `Status`, `Comments`, and `Actual Result` columns empty when generating test cases (they are filled in during test execution)
- Use PowerShell with the `ImportExcel` module (`Install-Module ImportExcel -Scope CurrentUser -Force` if not installed)
- Build an array of PSCustomObject rows and pipe to `Export-Excel`. Every row **must** include all 9 properties — the three empty columns (`Status`, `Comments`, `Actual Result`) must still be present as empty strings so the columns appear in the output:	
  ```powershell
  [PSCustomObject]@{
      'Test Case ID'   = 'TC-{WorkItemID}-01'
      'Priority'       = 'High'
      'Area'           = 'Feature Area'
      'Preconditions'  = "1. Precondition one`n2. Precondition two"
      'Steps'          = "1. Step one`n2. Step two"
      'Expected Result'= 'Expected outcome'
      'Status'         = ''   # leave empty
      'Comments'       = ''   # leave empty
      'Actual Result'  = ''   # leave empty
  }
  ```
- **Steps formatting**: In the Steps and Preconditions columns, separate each numbered step with a newline character (`` `n ``) so each step appears on its own line within the cell
- **Header styling**: Apply a light blue fill color (e.g., `#DCE6F1`) to the header row using `Set-ExcelRange`
- **Cell formatting**: Enable text wrapping on all data cells so multi-line content is visible, and auto-size columns
- **Row height**: Allow row heights to auto-fit the wrapped content
- **Saving**: Close and save with `Close-ExcelPackage $excel -SaveAs $excelPath` — do **NOT** use `-Save` (it does not exist and causes a silent failure)
- Notify the user of the file location after creation

### Step 6 (continued): Include the Business Use Case Summary worksheet
As part of generating this **same** main workbook (`TC-{WorkItemID}_ManualTestCases.xlsx`), also add a worksheet named `Summary` that carries the Business Use Case (from Step 2c) and execution roll-up metrics — without touching the `Test Cases` grid.
- **Do NOT add this worksheet to the TMT copy** (Step 7) — the TMT copy must keep only the `Test Cases` sheet so its import stays clean.
- **Columns** (in this exact order): `Business Use Case`, `Number of Tests Executed`, `Number of Tests Succeeded`, `Number of Tests Failed`, `Bugs`
- **Single data row**:
  - `Business Use Case` — the concise Business Use Case text composed in Step 2c.
  - `Number of Tests Executed`, `Number of Tests Succeeded`, `Number of Tests Failed` — leave **empty** when generating (filled in during test execution).
  - `Bugs` — leave **empty** when generating (filled in during execution with bug IDs raised/related).
- Place the `Summary` worksheet **first** (before `Test Cases`) using `-MoveToStart`.
- **Do NOT use `-AutoSize` on the Summary sheet** — the long Business Use Case text would make column A extremely wide. Instead set fixed, viewer-friendly widths and wrap the text:
  - `Business Use Case` (column A): fixed width ~60 with wrap text.
  - `Number of Tests Executed` / `Succeeded` / `Failed` and `Bugs` (columns B–E): fixed width ~18 with wrap text.
  - Set the data row (row 2) to auto-fit the wrapped content, and top-align cells for readability.
- Apply the same header styling (light blue `#DCE6F1`, bold).
  ```powershell
  $businessUseCase = "..."   # the Business Use Case text from Step 2c
  $summaryRow = [PSCustomObject]@{
      'Business Use Case'         = $businessUseCase
      'Number of Tests Executed'  = ''   # leave empty
      'Number of Tests Succeeded' = ''   # leave empty
      'Number of Tests Failed'    = ''   # leave empty
      'Bugs'                      = ''   # leave empty
  }
  $sumExcel = $summaryRow | Export-Excel -Path $excelPath -WorksheetName "Summary" -MoveToStart -PassThru
  $sumWs = $sumExcel.Workbook.Worksheets["Summary"]
  Set-ExcelRange -Worksheet $sumWs -Range "A1:E1" -BackgroundColor ([System.Drawing.Color]::FromArgb(220, 230, 241)) -Bold
  # viewer-friendly widths + wrapping (no AutoSize)
  $sumWs.Column(1).Width = 60
  2..5 | ForEach-Object { $sumWs.Column($_).Width = 18 }
  Set-ExcelRange -Worksheet $sumWs -Range "A1:E2" -WrapText -VerticalAlignment Top
  $sumWs.Row(2).CustomHeight = $false   # auto-fit wrapped content
  Close-ExcelPackage $sumExcel -SaveAs $excelPath
  ```
- Notify the user that the Summary worksheet was added to the main file.

## Step 7: Generate TMT Copy Excel File
After Step 6, create a second copy of the Excel file with renamed column headers (same row data, different header names):
- File name: `TC-{WorkItemID}_ManualTestcases_TMTCopy.xlsx`
- Save location: same folder as Step 6 — `X:\Public\Testing\AI\GeneratedTestCases\{WorkItemID}\`
- **Column mapping** (rename headers only; all cell content stays identical):
  | Original Column | TMT Column Name |
  |---|---|
  | `Test Case ID` | `Test Case ID` *(unchanged)* |
  | `Priority` | `Priority` *(unchanged)* |
  | `Area` | `TestSubject` |
  | `Preconditions` | `TestSubSubject` |
  | `Steps` | `TestDetails` |
  | `Expected Result` | `TestSubDetails` |
  | `Status` | `Status` *(unchanged)* |
  | `Comments` | `Comments` *(unchanged)* |
  | `Actual Result` | `Actual Result` *(unchanged)* |
- Reuse the same `$rows` array from Step 6. Build a new array mapping each row to the renamed properties:
  ```powershell
  $tmtRows = $rows | ForEach-Object {
      [PSCustomObject]@{
          'Test Case ID'   = $_.'Test Case ID'
          'Priority'       = $_.'Priority'
          'TestSubject'    = $_.'Area'
          'TestSubSubject' = $_.'Preconditions'
          'TestDetails'    = $_.'Steps'
          'TestSubDetails' = $_.'Expected Result'
          'Status'         = ''
          'Comments'       = ''
          'Actual Result'  = ''
      }
  }
  $tmtPath = "$folder\TC-$workItemId`_ManualTestcases_TMTCopy.xlsx"
  $tmtExcel = $tmtRows | Export-Excel -Path $tmtPath -WorksheetName "Test Cases" -AutoSize -FreezeTopRow -PassThru
  Set-ExcelRange -Worksheet $tmtExcel.Workbook.Worksheets["Test Cases"] -Range "A1:I1" -BackgroundColor ([System.Drawing.Color]::FromArgb(220, 230, 241)) -Bold
  $tmtWs = $tmtExcel.Workbook.Worksheets["Test Cases"]
  $tmtLastRow = $tmtWs.Dimension.End.Row
  Set-ExcelRange -Worksheet $tmtWs -Range "A2:I$tmtLastRow" -WrapText
  Close-ExcelPackage $tmtExcel -SaveAs $tmtPath
  ```
- Apply the same header styling (light blue `#DCE6F1`, bold) and text wrapping as in Step 6
- Notify the user of the TMT copy file location after creation

## Guidelines

### Test quality and coverage
- Prioritize quality over quantity — the goal is confidence in the user story, not a high test count.
- **Club as many similar cases as possible.** When several variations exercise the *same* behavior (e.g., multiple invalid inputs that must all be rejected the same way), group them into one test case rather than creating a separate case for each — list the variations as `input → expected result`.
- **Clubbing rule (objective test, not judgment):** Club variations into one test case only when they share **all three**: (a) the **same action/steps**, (b) the **same type of expected outcome**, and (c) they **differ only by input value**. Split into separate test cases whenever the **expected behavior, error/validation message, or resulting downstream state differs**.
- Keep genuinely different scenarios (different objectives, flows, or outcomes) as separate test cases.
- Create meaningful, high-value test cases that thoroughly validate the user story's requirements, edge cases, and failure modes.

### Test suite optimization
- Before finalizing, use equivalence partitioning and boundary value analysis to identify the minimum set of inputs needed for full coverage — don't enumerate every possible input value.
- Every test case must map to a unique requirement, condition, edge case, or risk area. If two test cases would exercise the same logic path or validate the same condition, merge them or drop the redundant one.
- Do not add test cases solely to increase count or hit a coverage number — only add one if it covers something no existing test case already covers.
- **Self-check:** after drafting the full list, review it once and remove any test case that doesn't add unique coverage.

### Preconditions format
- Always write preconditions as a **numbered list** (e.g., `1. User is logged in.` `2. Data is loaded.`).

### Steps format
- Write clear, numbered steps for the test case's objective.
- When a test case groups several variations, list them compactly as `input → expected result` (e.g., a short numbered list of variations) rather than repeating full step sequences for each.

### Area labels
- The Area should state the **aim of the test case** — what it is trying to verify — rather than simply repeating the feature name or the `TestSubject`.
- Keep it a concise phrase (~3–6 words) that makes the test case's objective clear on its own.
- Describe the intent/behavior, e.g., `Create new details page from selector`, `SplitFilter dropdown shows valid filters only`, `Save failure keeps modal open`.
- It's fine to reference the main feature/area in the label, as long as the phrase still conveys the aim of the test case.

### Terminology and wording
- Use the exact terminology from the user story; do not rephrase domain terms.
- Keep steps actionable and specific.
- Avoid vague instructions such as "verify it works".

### Priority rules
- Assign **High** priority to acceptance criteria and primary user flows.
- Assign **Medium** priority to edge cases and secondary flows.
- Assign **Low** priority to cosmetic or minor UX details.

### Documentation references
- If the description references functional documents, explicitly note them for manual review.
