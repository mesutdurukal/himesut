# Test Files Creation Prompt

/generate-test-files

This prompt creates seven empty files for a new feature or scenario. **All folder names must always be lowercase.** File names can use uppercase letters if required.

## File List
Always use lowercase for all folders, especially `test_preparation`.

1. `./src/main/page_objects/components/dashboard/NEW-component.ts`
2. `./src/main/steps/NEW-steps.ts`
3. `./src/test/NEW.test.ts`
4. `./test_preparation/tmt-documentation.txt`
5. `./test_preparation/test-cases.txt`
6. `./test_preparation/html-code.txt`
7. `./test_preparation/acceptance-criteria.txt`

No context or input is required. The files will be created with the correct paths and names, following project conventions. This prompt should be used ONLY with "Agent" mode in the test copilot chat.

---

## Instructions

- **Never use uppercase letters in any folder name.** Always use lowercase for all folders, especially `test_preparation`.
- When invoked, generate seven empty files at the exact locations listed above.
- File names can use uppercase letters as shown.
- Do not add any code, comments, or documentation to the files.
- Ensure all folder names are lowercase and formatted according to project standards.

## Output
Always use lowercase for all folders, especially `test_preparation`.

- Seven empty files:
  - `./src/main/page_objects/components/dashboard/NEW-component.ts`
  - `./src/main/steps/NEW-steps.ts`
  - `./src/test/NEW.test.ts`
  - `./test_preparation/tmt-documentation.txt`
  - `./test_preparation/test-cases.txt`
  - `./test_preparation/html-code.txt`
  - `./test_preparation/acceptance-criteria.txt`

---

**Instructions:** 
Always use lowercase for all folders, especially `test_preparation`.
Run `/generate-test-files` to create the empty files. No additional context or input is needed. **Always use lowercase for all folder names. File names can use uppercase.**