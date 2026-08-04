# TMT Test Case Generation Prompt

/generate-test-cases

This prompt converts acceptance criteria from the file `../../test_preparation/acceptance-criteria.txt` into clear, actionable test cases for test management systems. The generated test cases must be written to `../../test_preparation/test-cases.txt`. Each criterion is covered and titles are concise and descriptive.

---

## Purpose
Transform acceptance criteria from the specified file into clear, actionable test cases for test management systems, and save them to `../../test_preparation/test-cases.txt`.

---

## Instructions

- Read acceptance criteria from `../../test_preparation/acceptance-criteria.txt`.
- For each acceptance criterion, create at least one corresponding test case.
- If an acceptance criterion contains multiple validation rules or options, create separate test cases for each rule or option.
- Use concise, descriptive titles for each test case.
- If applicable, indicate the relevant plan (Live plan / Draft plan) at the top of the test case list.
- Write the generated test cases to `../../test_preparation/test-cases.txt`.

---

## Test Case Structure

```
TEST cases
Live plan / Draft plan
1. [Test case title based on acceptance criterion 1]
2. [Test case title based on acceptance criterion 2]
3. [Test case title based on validation rule or option]
4. [Test case title based on form submission or other actions]
...
```

---

## Example

**Input (acceptance criteria from file):**
```
1. As a user, I can select a start date and an end date.
2. As a user, I can select a start date and a duration (instead of an explicit end date).
3. Form validation rules:
- The end date must not be earlier than the start date.
- As a user, if I select the second option (Duration), I must choose one option from the list.
4. As a user, I can submit the form to filter conflicting product locations.
```

**Output (written to ../../test_preparation/test-cases.txt):**
```
TEST cases
Live plan / Draft plan
1. Verify a user can select a start date and an end date
2. Verify a user can select a start date and a duration instead of an end date
3. Verify the form does not allow the end date to be earlier than the start date
4. Verify a user must choose a duration option when selecting duration
5. Verify a user can submit the form to filter conflicting product locations
```

---

## Requirements Checklist

- [ ] Acceptance criteria are read from `../../test_preparation/acceptance-criteria.txt`
- [ ] Each criterion is covered by at least one test case
- [ ] Multiple validation rules or options result in separate test cases
- [ ] Test case titles are concise and descriptive
- [ ] Relevant plan (Live plan / Draft plan) is indicated if applicable
- [ ] Test cases are written to `../../test_preparation/test-cases.txt`

---

**Instructions:**  
Run `/generate-privatebackend-test-cases` to generate the test cases from the acceptance criteria file and write them to `../../test_preparation/test-cases.txt`. No additional context or input is needed.