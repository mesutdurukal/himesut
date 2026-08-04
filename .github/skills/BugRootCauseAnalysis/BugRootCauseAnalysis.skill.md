---
name: BugRootCauseAnalysis
description: 'Performs deep Root Cause Analysis (RCA) for Azure DevOps or BugParade bugs using functional documentation and historical bug patterns, and generates validation test cases. Use when: user asks to analyze a bug, identify root cause, explain failure, or validate a defect fix.'
argument-hint: 'Provide the Bug ID (e.g., BUG227427 or BUG 227427 or BUG-227427)'
---

# Bug Root Cause Analysis (RCA)

## Step 1: Fetch the Bug Details
- Use `mcp_bugparade_get_bug` with the provided bug ID to fetch the full bug details.
- Also fetch bug events/history using `mcp_bugparade_get_bug_events` for timeline context.
- Optionally use `mcp_bugparade_get_bug_links` to retrieve linked bugs or related items.
- Also fetch if there is documents in the bug folders associated with the bug under (\\domain.ompartners.com\allhqdrives\Development\BugParade\Bugs\{BugID}\) and add those documents to the context for analysis.


## Step 2: Extract Bug Information
From the bug, extract and analyze:
- **Title & Description**: What is the reported issue?
- **Repro Steps**: How to reproduce the bug
- **Acceptance Criteria / Expected vs Actual**: What should happen vs what happens
- **Area Path / Tags**: Feature area and module
- **State & Priority**: Current status and severity
- **Relations**: Parent user story, related bugs, linked work items
- **Attachments**: Screenshots, logs, or error messages (note them for manual review)

## Step 3: Search for Historical Patterns
- Use `mcp_bugparade_list_bugs` to find similar bugs in the same module, application, or with related keywords.
- Use `mcp_bugparade_aggregate_bugs` to identify patterns by module, status, or assignee.
- Look for recurring patterns: same module, same title, same description, same product, similar symptoms.
- Use `mcp_omp-documenta_omp_documentation_lookup` to find relevant functional documentation for the affected feature.

## Step 4: Perform Root Cause Analysis
Structure the analysis as:

### 4.1 Bug Summary
- One-paragraph summary of the defect

### 4.2 Impact Assessment
- Which users/roles are affected
- Which features/workflows are broken
- Severity classification (Critical / Major / Minor / Cosmetic)

### 4.3 Root Cause Identification
- Analyze the failure chain: Trigger → Fault → Error → Failure
- Identify the root cause category:
  - **Code defect**: Logic error, missing condition, wrong calculation
  - **Data issue**: Incorrect data mapping, missing defaults, corrupt data
  - **Configuration**: Wrong settings, missing environment variables or configurations
  - **Integration**: API contract mismatch, timing issue, dependency failure
  - **Regression**: Previously working feature broken by a recent change
  - **Requirements gap**: Missing requirement and logged as bug

### 4.4 Related Bugs & Patterns
- List similar historical bugs and whether they share a common root cause
- Identify if this is a symptom of a systemic issue

## Step 5: Generate Validation Test Cases
Create test cases to verify the fix:

| Field | Details |
|---|---|
| **ID** | VTC-{BugID}-{NN} |
| **Type** | Fix Validation / Regression / Edge Case |
| **Preconditions** | Setup needed before the test |
| **Steps** | Numbered steps to verify the fix |
| **Expected Result** | Correct behavior after the fix |

Include:
- **Fix validation**: Directly tests the reported scenario works after the fix
- **Regression tests**: Ensures related functionality is not broken
- **Edge cases**: Tests boundary conditions around the fixed area

## Step 6: Output Format
Present the full RCA report with sections:
1. Bug Summary
2. Impact Assessment
3. Root Cause Analysis report
4. Historical Bug Patterns on this functionality
5. Validation Test Cases
6. Recommendations ( preventive measures )

## Guidelines
- Be specific — Specify Bug IDs, Product names, and exact error messages
- Do not speculate on code-level fixes unless source code is available
- Flag if the bug appears to be a duplicate of an existing bug
- If OMP documentation contradicts the reported behavior, highlight the discrepancy
