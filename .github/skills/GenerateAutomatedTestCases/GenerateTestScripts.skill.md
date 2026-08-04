---
name: GenerateTestScripts
description: 'Generates automation test scripts from manual test cases derived from User Stories or Bug RCA reports. Automatically selects the scripting framework based on existing repository standards (Selenium WebdriverIO, API, Postman, OPAL). Use when: user asks to automate a test case, convert QA steps into scripts, or generate validation scripts.'
argument-hint: 'Provide Test Case ID, Work Item ID, or paste the test case steps'
---

# Test Script Generation

## Step 1: Identify and Fetch Test Case Details

- If a Work Item ID is provided:
  - Use mcp_azure-devops-_wit_work_item with action get, project OMP, expand All
  - Extract associated test cases or acceptance criteria

- If a Bug ID is provided:
  - Use:
    - mcp_azure-devops-_wit_work_item OR
    - mcp_bugparade_get_bug
  - Extract validation test cases from RCA

- If Test Case steps are directly provided:
  - Use input as-is

### Extract:
- Test Scenario
- Test Steps
- Expected Result
- Preconditions (if available)

If details are incomplete:
- Clearly state assumptions before generating scripts

---

## Step 2: Determine Automation Framework

### 2.1 Repository-Based Detection (Preferred)

- Analyze existing repository patterns:
  - File extensions (.js, .ts, .json, .frm)
  - Framework usage (WebdriverIO, API frameworks, Postman collections, OPAL scripts)
  - Naming conventions

### 2.2 Fallback Decision Logic

- UI / Browser workflows → Selenium WebdriverIO
- API / backend validation → API / Postman
- OMP internal workflows → OPAL

### Output:
- Selected Framework
- Reason for selection

---

## Step 3: Fetch Framework-Specific Guidance and Syntax References

### Selenium WebdriverIO
- Follow existing repo structure
- Use Page Object Model if applicable
- Use stable selectors (id, data-testid, etc.)
- Refer to official WebdriverIO API docs for syntax (async/await, `$()`, `browser.url()`, `expect()`)
- Make the code in a view of less flakiness - more wait loops in the code when needed 

### Playwright
- Follow existing repo structure
- Use Page Object Model if applicable
- Use stable selectors (id, data-testid, etc.)
- Make the code in a view of less flakiness - more wait loops in the code when needed 


### API / Postman
- Identify:
  - Endpoint
  - HTTP method
  - Headers / authentication
  - Request payload
- Define response validations
- Refer to Postman collection schema for correct JSON structure
- For code-based API tests, follow the repo's HTTP client library conventions (e.g., axios, fetch, supertest)

### OPAL
- **Always** use the OPAL Help MCP server (`mcp_opal-sources_omp_documentation_lookup` and `mcp_opal-sources_opal_macros_lookup`) for syntax, style guides, and existing macro patterns before generating any OPAL script
- Extract:
  - Actions
  - Workflow steps
  - Field mappings
  - Script structure

### Python

- Use type hints where the repo uses them
- Refer to relevant library docs (requests, selenium, etc.)

### JavaScript / TypeScript
- Follow repo's ESLint/Prettier configuration
- Use `describe/it` blocks for test structure (Mocha/Jest)
- Use async/await for asynchronous operations
- Refer to the framework's official API docs for correct method signatures

---

## Step 4: Translate Test Steps into Script Logic

Map manual steps to script actions:

- Navigate → browser.url() / navigation
- Submit → form submit / API request


---

## Step 5: Generate Automation Script

### Metadata
- Test Name
- Framework
- Preconditions

### Script Body
- Structured code
- Framework-compliant syntax
- Readable and maintainable

### Framework Rules

#### Selenium WebdriverIO
- Use async/await
- Use page objects if possible
- Include assertions (expect)

#### API / Postman
- Include:
  - Endpoint
  - Method
  - Headers
  - Payload
- Validate:
  - Status code
  - Response body

#### OPAL
- Use correct OPAL commands
- Follow workflow sequence
- Use proper field names

---

## Step 6: Add Validation and Assertions

- Ensure expected result is validated
- Include negative/failure checks where applicable
- Ensure assertions are explicit

---

## Step 7: Output Format

### Script Summary
- Test Case ID
- Scenario
- Framework Used

### Generated Script
- Clean, formatted, ready-to-use script

### Notes / Assumptions
- Missing selectors / endpoints
- Assumed data
- Environment dependencies

---

## Guidelines

- Do NOT mix frameworks in one script
- Do NOT generate pseudo-code
- Always include assertions
- Follow repository conventions if identifiable
- Use meaningful naming
- Clearly flag assumptions

---

## Expected Behavior

- Converts manual test cases into executable automation scripts
- Aligns with existing framework in repository
- Supports Selenium WebdriverIO, API/Postman, and OPAL
- Produces integration-ready scripts
