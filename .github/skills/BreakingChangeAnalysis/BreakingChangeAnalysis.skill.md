---
name: BreakingChangeAnalysis
description: 'Determines the existing test coverage for a particular Breaking Change (or all BCs in an OMP release). Extracts the BC from ADO/documentation, scans all test packages across the workspace for coverage evidence in .frm file content (Import chains, OPAL operations, table accesses, feature flags), maps coverage per area (REF, CHS, LCS, IOP, etc.), and generates an Excel report with per-area tabs, a coverage verdict per BC, risk assessment, and recommendations for closing coverage gaps. Also performs general test coverage analysis for any OMP package. Use when: user asks to figure out the test coverage for a breaking change, analyze breaking changes, check BC coverage, assess breaking change impact, generate a breaking change report, or perform test coverage analysis on a package.'
argumentHint: 'Provide a single Breaking Change name or description (e.g., BC_PPS_LengthLossPerSpliceRemoval), OR a release to analyze all BCs (e.g., R07_10), OR the path to a Breaking Changes document, OR a package name for general coverage analysis'
---

# Breaking Change Analysis & Test Coverage Report

## Overview

This skill performs end-to-end analysis of Breaking Changes (BCs) for an OMP release:
1. Extract all BCs from the source document or ADO
2. Scan ALL test packages across the workspace
3. Analyze .frm file **content** (not just descriptions) for coverage evidence
4. Map coverage per product area (REF, CHS, LCS, IOP, etc.)
5. Generate an Excel report with separate area tabs, risk assessment, and recommendations

---

## Step 1: Extract Breaking Changes

### 1.1 From a .docx document
- Read the `.docx` file using `System.IO.Compression` (ZIP → `word/document.xml` → strip XML tags)
- Extract each BC entry with:
  - **BC Name**: e.g., `BC_REF_SpellingError_Capacition_MacroRename`
  - **ADO ID**: The work item number (e.g., `#619664`)
  - **ADO URL**: Link to the work item
  - **Linked Bug IDs**: Any bug cards linked to the BC
  - **Release Note**: Description of the change
  - **Area**: Derive from the BC name prefix (e.g., `BC_REF_*` → REF, `BC_CHS_*` → CHS, `BC_IOP_*` → IOP)

### 1.2 From ADO directly

Breaking Changes live in the **`Functional Release Notes`** ADO project as work items of type **`Breaking Change`**. Handle the two ways a user can ask:

#### Case A — User provides a specific BC (name or description)
The user gives a BC name (e.g., `BC_PPS_LengthLossPerSpliceRemoval`) or a free-text description of the change.
1. Search for the work item:
   - Use `mcp_azure-devops-_search_workitem` with `searchText` set to the BC name and/or key terms from the description (e.g., `LengthLossPerSplice CFISolSolverParameters`).
   - Optionally scope with `project: ['Functional Release Notes']` and `workItemType: ['Breaking Change']`.
2. From the results, identify the **Breaking Change** work item (note its `system.id`). There is often a companion **Functional Release Note** work item — capture it too, as it holds the data-model/OPAL/setting details.
3. Fetch full details with `mcp_azure-devops-_wit_work_item` (`action: get` or `get_batch`, `expand: All`, `project: Functional Release Notes`) for the BC id and any linked Functional Release Note id.
4. Extract the BC fields (see 1.3) from the description, in particular:
   - **Purpose of the breaking change**, **Type** (e.g., Data model change), **Relevant Solutions** (area), **Data model updates** (obsolete attribute/object), **OPAL / setting / user-exit updates**, **Upgrade effort**, and linked **Bug** IDs.

##### Worked example (name only)
When the user supplies only the name `BC_PPS_LengthLossPerSpliceRemoval`:
- Call `mcp_azure-devops-_search_workitem` with `searchText: "BC_PPS_LengthLossPerSpliceRemoval LengthLossPerSplice"`. This returns two items:
  - **Breaking Change `#623796`** — title `BC_PPS_LengthLossPerSpliceRemoval`, State `Final`.
  - **Functional Release Note `#638739`** — title `PPS: SPCUT Removal of attribute LengthLossPerSplice from CFISolSolverParameters` (holds the data-model detail).
- Then call `mcp_azure-devops-_wit_work_item` with `action: get_batch`, `ids: [623796, 638739]`, `expand: All`, `project: 'Functional Release Notes'` to read the full descriptions.
- From the Functional Release Note, harvest the concrete facts for the registry and keyword derivation, e.g.: obsolete attribute `LengthLossPerSplice` removed from object `CFISolSolverParameters`, Area `PPS`, Contact team `OMP/PD/VCT-PPP/PPP_CFI`, related work items `Bug 454635 > User story 602744 > Feature 588946`, available since `R07_10`.

#### Case B — User asks to analyze ALL breaking changes in a release
The user gives only a release (e.g., "analyze all breaking changes in R07_10").
1. Query every Breaking Change for that release using `mcp_azure-devops-_wit_query` (`action: get_results`) or a WIQL query in the `Functional Release Notes` project, e.g.:
   ```sql
   SELECT [System.Id], [System.Title], [System.State]
   FROM WorkItems
   WHERE [System.TeamProject] = 'Functional Release Notes'
     AND [System.WorkItemType] = 'Breaking Change'
     AND [System.State] = 'Final'
     AND ([Microsoft.VSTS.Build.FoundIn] = 'R07_10'
          OR [System.Description] CONTAINS 'R07_10'
          OR [System.Tags] CONTAINS 'R07_10')
   ORDER BY [System.Title]
   ```
   - If the release is not exposed as a field, fall back to `mcp_azure-devops-_search_workitem` with `searchText` = the release token (e.g., `R07_10`) and `workItemType: ['Breaking Change']`, then filter results whose description states `Available since: <release>` or `Developed in: <release>`.
2. Fetch full details for all returned ids in batches via `mcp_azure-devops-_wit_work_item` (`action: get_batch`, `expand: All`).
3. Build the BC Registry (1.3) with **one row per BC** and proceed through Steps 2–7 for the whole set.

- Extract the same fields as the .docx path (see 1.3) regardless of which case applies.

### 1.3 Build a BC Registry
Create a structured list of all BCs with:

| Field | Description |
|-------|-------------|
| BC_ID | Sequential identifier (BC1, BC2, ...) |
| ADO_ID | Work item number |
| Name | Full BC name |
| Area | Primary product area (REF, CHS, LCS, IOP, PPS, OM) |
| Description | Release note / summary of the change |
| Keywords | Extract searchable terms from the BC name and description for .frm scanning |

### 1.4 Derive Search Keywords per BC
From each BC name and description, extract keywords to search in .frm files. Examples:
- `BC_REF_SpellingError_Capacition_MacroRename` → keywords: `Capacit`, `Capacition`
- `BC_CHS_UsePeggingEngine_APL` → keywords: `PeggingEngine`, `UsePegging`, `AlignPegging`, `RICAR`, `ReplenishByCharacteristic`, `PegProductLocations`
- `BC_IOP_RemoveBOMElementWithNoFixedQuantityFilter` → keywords: `BOMElement`, `FixedQuantity`, `BOMUsage`
- `BC_OM_RecalculateDurationIfMoveOnSameMachine` → keywords: `RecalculateDuration`, `DragDrop`, `DragAndDrop`, `DurationFormula`

**IMPORTANT**: Include both the specific BC term AND related functional terms that production/test code would use.

---

## Step 2: Inventory All Test Packages

### 2.1 Discover test packages
Scan the entire workspace for test packages:
```powershell
Get-ChildItem "E:\Users\SVI\Packages" -Directory -Recurse |
  Where-Object { $_.Name -match "_test$" -and (Test-Path "$($_.FullName)\config\tests.proj") }
```

### 2.2 Parse each test package
For each test package with a `tests.proj`:
1. Parse the XML to extract test definitions:
   - Test name (`<Tests Include="...">`)
   - DataSet, Check, Feature, Comments, OPAL, CmdArgs, ScrumStoryId, Responsible
2. Count .frm files: `Get-ChildItem $testPkg -Recurse -Filter "*.frm"`
3. Record the parent area from the folder path (e.g., `REF`, `ChemicalSolution`, `LCS`, `IOP`)

### 2.3 Build test package inventory
Output format:
```
Area | TestPackage | TestCount | FRM_Count
REF  | ref_sop_test | 41 | 43
LCS  | lcs_opr_pls_pegging_onfile_test | 11 | 19
```

### 2.4 Also discover shared test resources
- `__TestFormulas` folders (e.g., `ChemicalSolution/last/COMMON/__TestFormulas/`)
- `__TestDataModel` folders
- `COMMON` folders with shared .frm files used by multiple test packages

---

## Step 3: Analyze .frm File Content for BC Coverage

### 3.1 Search test .frm files for BC keywords
For each BC, search ALL test .frm files for its keywords:
```powershell
Get-ChildItem "<PackagePath>" -Recurse -Filter "*.frm" |
  Where-Object { $_.FullName -match "_test|__TestFormula" } |
  Select-String -Pattern "<keyword1>|<keyword2>|<keyword3>" -List
```

### 3.2 Search production .frm files for context
Also scan production (non-test) .frm files to understand which production macros are affected by each BC:
```powershell
Get-ChildItem "<PackagePath>" -Recurse -Filter "*.frm" |
  Where-Object { $_.FullName -notmatch "_test" } |
  Select-String -Pattern "<keywords>" -List
```

### 3.3 Read matching .frm files for evidence
For each match found in Step 3.1, read the .frm file content to determine:
- **What the test actually does** with the matched keyword
- **Import statements**: Does it import the affected production macro?
- **Call statements**: Does it call the affected function?
- **Settings/Feature flags**: Does it activate the relevant feature flag in `CmdArgs` or `.set` files?
- **Assertions**: Does it validate output related to the BC change?

### 3.4 Check test configuration files
Search `.set` files in test datasets for relevant settings:
```powershell
Get-ChildItem "<TestPackage>\datasets" -Recurse -Filter "*.set" |
  Select-String -Pattern "<setting_name>"
```

Also check `tests.proj` `<CmdArgs>` for feature flags:
```
/OMP_FeatureFlagsConfiguration_<FeatureName>=ACTIVE
```

### 3.5 Evidence Classification

| Evidence Type | Strength | Example |
|---------------|----------|---------|
| **Direct test** | Strong | Test .frm calls `Import AffectedMacro;` or `Call AffectedFunction()` |
| **Feature flag active** | Strong | `CmdArgs` contains `/OMP_FeatureFlagsConfiguration_<Feature>=ACTIVE` |
| **Setting exercised** | Strong | `.set` file contains the setting changed by the BC |
| **Table/object used** | Medium | Test uses the same OMP objects (e.g., `BOMElement`, `ContiProcess`) |
| **Keyword in comment only** | Weak | Keyword appears in `//!EXPLANATION:` but not in executable code |
| **No match** | None | No reference to BC keywords in any test .frm file |

---

## Step 4: Determine Coverage Status per BC

For each BC, classify coverage based on the evidence collected:

| Status | Criteria |
|--------|----------|
| **Covered** | At least one test directly exercises the affected functionality: imports the macro, calls the function, activates the feature flag, AND validates output |
| **Partially Covered** | Tests exercise related functionality but don't directly validate the specific BC change (e.g., uses the object but not the specific removed/changed method) |
| **Not Covered** | No test .frm file references the BC keywords in executable code |

### 4.1 Cross-area coverage
A BC prefixed with one area (e.g., `BC_CHS_*`) may have test coverage in another area's test packages (e.g., LCS pegging tests cover `BC_CHS_UsePeggingEngine_APL`). Always scan ALL areas, not just the BC's own area.

### 4.2 Determine risk level

| Risk | Criteria |
|------|----------|
| **High** | BC is Not Covered AND involves logic/calculation changes |
| **Medium** | BC is Partially Covered OR Not Covered but low-impact (e.g., module-specific, no test packages in workspace) |
| **Low** | BC is Covered, OR is a UI-only/spelling/additive change |

---

## Step 5: Generate Excel Report

### 5.1 Report structure
Generate an `.xlsx` file using ImportExcel PowerShell module with these sheets:

| Sheet | Content |
|-------|---------|
| **Coverage Summary** | Overall metrics, per-area breakdown, test package counts |
| **Detailed Coverage** | All BCs with status, evidence summary, risk rating |
| **REF Coverage** | BCs relevant to REF with test-level evidence |
| **CHS Coverage** | BCs relevant to CHS with test-level evidence |
| **LCS Coverage** | BCs relevant to LCS with test-level evidence |
| **Risk Assessment** | Per-BC risk rating with rationale and recommendation |
| **Recommendations** | Prioritized action items for coverage gaps |
| **Test Packages Scanned** | Full inventory of all test packages with test counts and .frm counts |

### 5.2 Report generation approach

**CRITICAL**: Use `Open-ExcelPackage` / `Close-ExcelPackage` pattern in a **single script file**. Do NOT use `-Append` flag (causes corruption) and do NOT write worksheets across separate terminal commands (data loss due to variable scoping).

```powershell
# Create a .ps1 script file with ALL sheet definitions, then execute it once
$pkg = Open-ExcelPackage -Path $outputFile -Create

# Write each sheet using cell-level addressing
$ws = Add-Worksheet -ExcelPackage $pkg -WorksheetName "Sheet Name"
$ws.Cells[$row, $col].Value = "data"

# Save everything at the end
Close-ExcelPackage $pkg
```

### 5.3 Per-area coverage tabs
Each area tab (REF, CHS, LCS) should include:

| Column | Description |
|--------|-------------|
| BC_ID | BC identifier |
| BC_Name | Full BC name |
| Status | Covered / Partially Covered / Not Covered |
| TestPackage | Which test package provides coverage |
| TestName | Specific test name from tests.proj |
| Evidence_File | Path to the .frm file containing evidence |
| Evidence_Content | Key line(s) from the .frm showing what's tested |
| CoverageDetail | Explanation of how the test covers (or doesn't cover) the BC |

### 5.4 Output location
Save to: `X:\Public\Testing\AI\BrakingChanges\<version>\<version>_BreakingChange_TestCoverage.xlsx`

---

## Step 6: Summary and Recommendations

### 6.1 Coverage summary format
```
Overall: X Covered (Y%), Z Partially Covered (W%), N Not Covered (V%)

By Area:
  REF: A BCs relevant, B covered
  CHS: C BCs relevant, D covered
  LCS: E BCs relevant, F covered
```

### 6.2 Recommendations prioritization
1. **HIGH**: BCs that are Not Covered AND involve calculation/logic changes → recommend creating new tests
2. **MEDIUM**: BCs that are Partially Covered → recommend extending existing tests
3. **LOW**: BCs that are UI-only or where the area has no test packages in workspace → recommend manual verification or coordination with other teams

### 6.3 Cross-reference with bugs
If the BC has linked bug ADO cards, note the bug severity and customer impact to help prioritize test creation.

---

## Step 7: Propose Test Cases for Uncovered Breaking Changes (Test-Steps Template)

For every BC classified as **Not Covered** (and any **Partially Covered** BC flagged **High** or **Medium** risk), generate a proposed manual test case so QA can close the coverage gap. Each proposed test case **must** follow the OMP test-steps template (same structure as the reference doc `teststeps/Testing Possible Machines Tab in SubPlanning View.md`).

### 7.1 Document header (once per BC report section)
| Field | Value |
|-------|-------|
| **Test Suite Name** | `<Area> Breaking Change coverage — <release>` |
| **Description** | One line describing the BC being covered |
| **Covered Feature** | `[TASK {ADO_ID}](<ADO URL>)` for the BC work item |
| **Priority** | LP / MP / HP (map from the BC risk: High→HP, Medium→MP, Low→LP) |
| **Reviewed by** | Leave empty (filled in during review) |

### 7.2 Per proposed test case
Emit one `TC-NN` section per uncovered BC behavior, in this exact structure:

```
### TC-01: Verify <affected behavior> after <BC name>

**Purpose:**
- <what this test verifies about the changed/removed functionality>

**Required Environment Setup & Data:**
- <PAK options, feature flags, dataset, or objects needed (e.g., BOMElement data)>

**Preconditions:**
- <numbered prerequisites, e.g., feature flag ACTIVE, profile switched, plan opened>

**Postconditions:**
- <cleanup steps, or "None">

**Steps & Expected Results:**

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | <action exercising the affected macro/function> | <observable, validated outcome> |
| 2 | <action> | <expected result> |

**Execution Type:** Automated (UI: Selenium) / Automated (API) / Manual

**Priority:** LP / MP / HP

**Comment:**
<narrative summary; reference the affected production macro(s) and the evidence gap found in Step 3>
```

### 7.3 Rules for proposed test cases
- Derive the **Action** steps from the affected production macro(s) identified in Step 3 (e.g., import the macro, call the function, activate the feature flag, then validate output via `ExportObjects` + `Check` comparison).
- Set **Execution Type** to `Automated (UI: Selenium)` for UI flows, `Automated (API)` for OPAL/data operations, and `Manual` only when automation is not feasible.
- Use exact OMP terminology and object names (e.g., `BOMElement`, `PeggingEngine`, `RecalculateDuration`) — do not paraphrase.
- Give empty-state, fallback, and cross-area scenarios their own `TC-NN` sections.
- Add these proposed test cases to the Excel report as an extra **"Proposed Test Cases"** sheet, with columns: `BC_ID`, `Test Case ID`, `Test Case Title`, `Priority`, `Execution Type`, `Purpose`, `Preconditions`, `Postconditions`, `Steps`, `Expected Results`.

---

## Guidelines

### What to analyze
- **Always read .frm file CONTENT** — never rely solely on test names, `<Comments>`, or `<Feature>` descriptions as they may be outdated
- **Scan ALL areas** — a BC in one area may have test coverage in another area's test packages
- **Check shared __TestFormulas** — these are used by multiple test packages and contain critical test logic
- **Include both `_onfile_test` and regular `_test` variants** — these test the same functionality against file vs database backends
- **Check `.set` files and `CmdArgs`** for feature flags and settings relevant to BCs

### What NOT to do
- Don't assume coverage from test package names alone
- Don't ignore cross-area coverage (e.g., LCS pegging tests covering CHS BC)
- Don't count `BasicSmokeTest` as coverage for specific BC changes (smoke tests only verify startup, not specific logic)
- Don't rely on `<OPAL>` field alone — many tests have production macro calls in their `.frm` files that aren't listed in the `<OPAL>` metadata

### Performance tips for large workspaces
- Use `Select-String -Pattern "keyword1|keyword2" -List` for fast first-pass scanning (returns only first match per file)
- Use `Get-ChildItem -Filter "*.frm"` instead of `-Include` for better performance
- For multi-keyword searches, combine patterns with `|` alternation rather than running separate searches
- Read full .frm files only for matches found in the first pass
- Run the final report generation as a single `.ps1` script to avoid terminal variable scoping issues

---

## Appendix A: Detailed .frm Analysis Techniques (from GetCoverage)

### A.1 Extracting Coverage from .frm File Content

For each test `.frm` file, extract these patterns:

| Pattern | Meaning | Example |
|---------|---------|---------|
| `Import MacroName;` | References a production macro being called | `Import LSS_Menu_PlanAllocation_PLS;` |
| `Call FunctionName(...)` | Invokes a function from production code | `Call AlignPeggingWithSolver(MySolverDef);` |
| `Vector Object <TableName>` | Table declaration / usage | `Vector Object BOMElement myBOMElements;` |
| `All("<TableName>")` | Full table load | `All('Run')` |
| `OMPGET/SET/PUT/DEL/SAVE/LOAD` | OPAL data operations | `Call Save();` |
| `ExportObjects(...)` | Assertion via file output | `Call ExportObjects(vecRun,"OutputFile.txt",["ProcessId"]);` |
| `OpenTextFileForWrite / WriteToFile` | Test result validation | `Call WriteToFile("Results","Test Passed.");` |
| `//!EXPLANATION:` | Intent documentation (context only) | `//!EXPLANATION: Validates EMD propagation` |
| `/set_*` or setting name in `.set` | Configuration being tested | `SDP_LoadInUnits_UseRunQuantity:YES` |
| `LocateSolverDef(...)` | Solver configuration | `LocateSolverDef("OMSCH_ReplenishByCharacteristicsSolver_LCSRICAR")` |
| `#IF IsPAKOptionActive(...)` | Conditional PAK option logic | `#IF IsPAKOptionActive("NewPegging")` |

### A.2 Following the Import Chain

When a test macro imports `MacroA` which imports `MacroB`, the test **indirectly** covers `MacroB`. Follow the chain:

```
Test.frm → Import MacroA → Import MacroB → Call ProductionFunction()
```

To trace:
1. Read the test .frm — find `Import MacroA;`
2. Find `MacroA.frm` in the test package (checks/ or datasets/)
3. Read `MacroA.frm` — find `Import MacroB;` or `Call FunctionName()`
4. `MacroB` may be a production macro in the source package

### A.3 Four-Level Coverage Classification

| Status | Criteria |
|--------|----------|
| **Directly Covered** | Test `.frm` explicitly imports or calls the production macro affected by the BC |
| **Indirectly Covered** | Test calls a parent macro that chains into the affected macro |
| **Functionally Covered** | Test exercises same tables/operations/objects without naming the macro (e.g., uses `BOMElement` objects but doesn't call the removed filter function) |
| **Not Covered** | No test exercises this functionality |

### A.4 Test Quality Assessment

| Quality Level | Indicators |
|---------------|-----------|
| **Deep coverage** | Test calls production function, validates output via `ExportObjects` + `Check` folder comparison, exercises multiple code paths |
| **Medium coverage** | Test loads the relevant PAK options and runs a scenario but doesn't explicitly validate the specific BC change |
| **Shallow coverage** | `BasicSmokeTest` only — verifies startup without errors, doesn't exercise specific logic |
| **No coverage** | No test references the affected code |

### A.5 Uncovered Macro Risk Prioritization

When listing uncovered production macros, prioritize by data impact:
- **Critical**: Macros performing `OMPSAVE`, `OMPDEL`, `OMPPUT` (data-modifying operations)
- **High**: Macros with complex logic (branching, loops) and multiple table operations
- **Medium**: Macros with `OMPGET`, `OMPCALC`, `OMPLOAD` (read/compute operations)
- **Low**: Utility/helper macros, UI formatting, tooltip macros

### A.6 Production Macro Scanning (for General Coverage Analysis)

When analyzing general test coverage (not BC-specific), scan production folders:
- `<Package>/last/SOP/` — SOP production macros
- `<Package>/last/OPR/` — OPR production macros
- `<Package>/last/FCT/` — FCT production macros
- `<Package>/last/UTL/` — Utility macros
- `<Package>/last/OPR-SOP/` — Cross-layer macros (common in LCS)

For each production `.frm` file, extract:
- **Macro name** (from filename)
- **Key OPAL operations** performed
- **Tables modified** (data-modifying = higher priority)
- **Functions defined** (`Function FunctionName(...)`)
- **Dependencies**: Other macros it imports or calls

### A.7 Detecting Stale Tests

Flag tests whose `.frm` files reference macros that no longer exist in production:
```powershell
# Extract Import references from test .frm files
$imports = Select-String -Path $testFrm -Pattern "^Import\s+(\w+);" | ForEach-Object { $_.Matches.Groups[1].Value }
# Check if referenced macro exists in production
$imports | Where-Object { -not (Get-ChildItem $prodPath -Recurse -Filter "$_.frm") }
```

### A.8 Cross-Reference with Bug History

Use `mcp_bugparade_list_bugs` or ADO queries to check if uncovered macros have historical bugs — prioritize those for new test coverage. Bug severity and customer impact inform test creation priority.
