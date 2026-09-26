# Problem Management

Problem management is a question governance tool provided by the LiuMing platform for administrators, supporting question removal, republishing, field-level partial rejection, and other functions.

## 1. Feature Overview

Problem management provides the following core functions:

- **Question Removal**: Remove violating or problematic questions.
- **Republishing**: Re-review and republish removed questions.
- **Field-level Partial Rejection**: Individually block listening audio, answers, solutions, and other fields.
- **Report Handling Linkage**: One-click removal of reported questions when handling reports.

## 2. Question Removal

### 2.1 Removal Scenarios

Question removal is applicable in the following situations:
- **Content Violation**: Question contains violating content (e.g., pornographic, violent, politically sensitive, etc.).
- **Low Quality**: Question has serious quality problems (e.g., unclear stem, wrong answer, etc.).
- **Copyright Issues**: Question involves infringing content.
- **Report Handling**: After verifying that the report content is true.

### 2.2 Removal Process

1. Administrator finds the question to be removed in the backend.
2. Click the "Remove" button.
3. Fill in the removal reason (required).
4. Confirm the removal operation.

### 2.3 Removal Impact

- **Not Practiceable**: Removed questions cannot be practiced or answered by students.
- **Records Preserved**: Historical answer records are preserved, but question content is not visible.
- **Statistics Preserved**: Related statistical data is preserved for traceability.

## 3. Republishing

### 3.1 Republishing Conditions

Removed questions can apply for republishing, which requires:
- **Content Rectification**: Question content has been corrected for violations or quality issues.
- **Review Approval**: Administrator review approved.

### 3.2 Republishing Process

1. Creator submits revision to fix problem content.
2. Administrator reviews the revision.
3. After approval, the question is automatically republished.

### 3.3 Republishing Status

Republished questions retain the original question number but are marked as "Republished" for traceability.

## 4. Field-level Partial Rejection

### 4.1 Feature Description

Field-level partial rejection allows administrators to individually block specific fields of a question without affecting other content:
- **Listening Audio**: Can individually block listening audio without affecting the question stem and answer.
- **Answer**: Can individually block the answer without affecting the question stem and solution.
- **Solution**: Can individually block the solution without affecting the question stem and answer.

### 4.2 Usage Scenarios

Applicable in the following situations:
- **Poor Audio Quality**: Audio is unclear or contains errors, but the question itself is fine.
- **Wrong Answer**: Answer is incorrect, but the question stem and solution are correct.
- **Incomplete Solution**: Solution is missing or incorrect, but the question and answer are correct.

### 4.3 Operation Method

1. Administrator selects "Partial Rejection" on the review page.
2. Check the fields to be rejected (listening audio/answer/solution).
3. Fill in the rejection reason.
4. Confirm the operation, and the rejected fields will be blocked from publishing.

## 5. Report Handling Linkage

### 5.1 Linkage Mechanism

When handling reports, administrators can one-click remove reported questions:
- **One-click Removal**: Directly remove the question on the report handling page without jumping.
- **Automatic Recording**: Removal operation is automatically recorded in the report handling log.
- **Notify Creator**: System automatically notifies the question creator of the removal reason.

### 5.2 Handling Process

1. Administrator receives report notification.
2. View report content and reported question.
3. Verify report content.
4. If true, click "One-click Removal" and fill in the reason.
5. System automatically handles removal and notifies relevant parties.

## 6. Management Log

All management operations are recorded in the management log, including:
- **Operator**: The administrator who performed the operation.
- **Operation Time**: When the operation was performed.
- **Operation Type**: Removal/Republishing/Partial Rejection.
- **Operation Target**: The question ID being operated on.
- **Operation Reason**: The reason provided by the administrator.

## 7. Related Features

- [Question Bank](/en/basic/bank) - Understand question contribution and review process
- [Contribution Flow Sheet](/en/basic/flow-sheet) - Understand question flow records
- [Version Rollback](/en/basic/version-rollback) - Learn how to rollback to historical versions
