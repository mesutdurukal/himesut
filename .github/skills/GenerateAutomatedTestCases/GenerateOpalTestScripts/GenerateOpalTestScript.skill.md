---
name: GenerateOpalTestScript
description: 'Generates OPAL (.frm) test/verification macros from manual test cases, User Stories, or Bug RCA reports for OMP Plus internal workflows. Use when: the test targets OMP data-model, expressions/formulas, solver/connector behavior, or any internal OMP workflow that is validated with an OPAL macro rather than UI/API automation.'
argument-hint: 'Provide Test Case ID, Work Item ID, Bug ID, or paste the test case steps'
---

# OPAL Test Script Generation

Generate ready-to-run OPAL verification macros (`.frm`) that validate OMP Plus internal
behavior and assert an explicit PASS/FAIL result, following the conventions already used by
the `*VerificationMacro.frm` / `__*_TST_*.frm` macros in this repository.

## When to use OPAL (vs. other frameworks)

Choose OPAL when the scenario is an **internal OMP workflow**, for example:
- Validating data-model attributes, far attributes, or the dot operator
- Verifying expression/formula results (CategoryDef.Formula, CalcAttribute, ConditionFormula, etc.)
- Checking solver / connector / datahub outcomes against expected aggregates
- Asserting table state after an import, rollout, or planning action

If the scenario is a UI/browser flow use WebdriverIO/Playwright, and if it is an HTTP/backend
flow use API/Postman — those stay in the parent `GenerateTestScripts` skill.

---

## Step 1: Identify and Fetch Test Case Details

- If a **Work Item ID** is provided:
  - Use `mcp_azure-devops-_wit_work_item` with `action: get`, `project: OMP`, `expand: All`
  - Fetch the parent User Story/Feature and the work item comments for the recorded scenario
- If a **Bug ID** is provided:
  - Use `mcp_azure-devops-_wit_work_item` or `mcp_bugparade_get_bug`
  - Extract validation steps from the RCA
- If **Test Case steps** are pasted directly:
  - Use the input as-is

### Extract
- Test Scenario and the specific assertion(s)
- Test Steps
- Expected Result (the concrete values / state to verify)
- Preconditions (dataset, application/profile, objects required)

If details are incomplete, **state assumptions explicitly** before generating the script
(e.g. assumed leaf attribute, assumed dataset, assumed object that holds the data).

---

## Step 2: ALWAYS Consult the OPAL Sources MCP First

Before writing any OPAL, look up syntax, the data model, and existing macro patterns:

- `mcp_opal-sources_omp_documentation_lookup` — for:
  - Language constructs (dot operator, operators, statements, functions)
  - The **object model** of the objects you traverse (e.g. `Step`, `Run`, `Order`, `ProductLocation`) to confirm attribute names, base types, and references
  - Expression-host documentation (which identifiers are available in a given formula)
- `mcp_opal-sources_opal_macros_lookup` — for real `.frm` examples of:
  - Far-attribute chains (`Step.OperationId.ProductId.MinStockQuantity`)
  - Verification/test macros (`__*_TST_*.frm`) and their PASS/FAIL structure
  - Helper usage: `All`, `FilterWithValue`, `Size`, `Locate<Object>`, `SetValue`, `Refresh`

Verify every attribute name and reference against the object model — do **not** invent fields.

---

## Step 3: Confirm Repository Conventions

- Test macros live under a suite's `…/testData/testmacro/` (or `…/testdata/testmacro/`) folder.
- Existing reference macros to mirror:
  - `PPS/.../PPS_SOPSolverVerificationMacro.frm`
  - `PCK/.../PCK_OPR_*_*.frm`
  - `__*_TST_*.frm` (Packaging) for the verify-and-fail pattern
- Naming: `<SOLUTION>_<LAYER>_<Area>_<Description>.frm` or `<SOLUTION>_TST_<Description>.frm`,
  optionally suffixed with the test case id (e.g. `_TC411094_02`).

---

## Step 4: Generate the OPAL Macro (required structure)

Follow this skeleton (matches the repo's verification macros):

```opal
//! AUTHOR         GitHub Copilot (generated)
//! CREATED        <yyyy-mm-dd>
//! TESTCASE       <TC-id>  (Work Item <id> / User Story <id>)
//! EXPLANATION    <what is verified and the scenario(s)>
//! KEYWORDS       OPAL, <topic>
//! CHANGES        <yyyy-mm-dd>  Initial version

// 1) Typed variable declarations (Object/Vector/Integer/Float/String)
Object Step MyStep;
Integer     ModuleOK = TRUE;

// 2) Logging setup
String ExpressionName = GetExpressionName();
String envUserName    = GetEnvironment("USERNAME");
String Path           = ENVVAR_OMDRIVE + "\log\user\" + envUserName + "\plus\";
Try
   Call CloseFile("alias");
Catch
EndCatch;
Call OpenTextFileForWrite("alias", Path + ExpressionName + "_R0" + ToString(RELEASE) + "_" + ToString(SUBRELEASE) + "_" + ToDateString(CurrentDate(),"YYYYMMDD") + ".tsv");
Call WriteToFile("alias","START of test : " + ExpressionName);
Call WriteMessage("START of test : " + ExpressionName);

// 3) Arrange: locate / select the data under test (guard for empty results)

// 4) Act + Assert: evaluate the expression(s), compare to expected, set ModuleOK = False on mismatch
//    Log every checked value and every FAIL reason to "alias".

// 5) Result
If ModuleOK Then
   Call WriteMessage("SUCCESS: Module OK");
   Call WriteToFile("alias", NEWLINE + "END of test : " + ExpressionName + ": Module OK");
Else
   Call WriteMessage("FAILURE: Module NOT OK", MESSAGE_ERROR);
   Call WriteToFile("alias", NEWLINE + "END of test : " + ExpressionName + ": Module NOT OK");
EndIf;
Call CloseFile("alias");
Call WriteMessage(ExpressionName + " completed execution");

1
```

### Mandatory rules
- Use a `ModuleOK` flag; set it to `False` on any failed assertion and report failure with
  `Call WriteMessage("FAILURE: ...", MESSAGE_ERROR);`.
- Always **end the macro with a return value** (`1` on completion); return `0` early only when
  preconditions cannot be met (no suitable data), after logging the reason.
- **Guard every lookup**: if `All(...)` / `Locate...` yields nothing, log a FAIL and exit cleanly
  instead of dereferencing a null/invalid object.
- Compare floats via `ToString(...)` equality (as the existing repo macros do) to avoid binary
  float mismatch.
- Log every evaluated value and every FAIL reason to the `"alias"` file so the result is auditable.
- Use exact attribute names/casing from the object model retrieved in Step 2.

---

## Step 5: Output

### Script Summary
- Test Case ID
- Scenario(s) covered
- Framework: OPAL (`.frm`)
- Target file path / suite location

### Generated Script
- The complete `.frm` macro, formatted and ready to drop into `…/testData/testmacro/`.

### Notes / Assumptions
- Dataset / object dependencies (e.g. the leaf attribute must exist on the dataset)
- Any assumed field names or objects
- Where to copy the file to wire it into the suite (and the `test.js` reference if relevant)

---

## Guidelines
- Do NOT mix OPAL with other frameworks in one file.
- Do NOT generate pseudo-code — only valid OPAL.
- Always include explicit assertions and an explicit PASS/FAIL outcome.
- Always verify attributes against the object model before using them.
- Prefer far attributes over OPAL loops when only navigating references (performance), matching
  OMP guidance, but keep loops where aggregation/iteration is required.
- Flag every assumption clearly.

## Expected Behavior
- Converts manual test cases / work items into executable OPAL verification macros.
- Mirrors the repository's existing `.frm` verification-macro conventions.
- Produces integration-ready, auditable, self-asserting OPAL scripts.
