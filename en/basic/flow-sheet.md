# Contribution Flow Sheet

The contribution flow sheet is a complete tracking record provided by the LiuMing platform for question contributions, summarizing the entire process from question creation to review.

## 1. Feature Overview

The contribution flow sheet provides the following core functions:

- **Creation Information**: Records question creator, creation time, and initial status.
- **Revision History**: All revision submission records, review status, and reasons.
- **Review Log**: Operator, time, reason, and result of each review.
- **Role-based Trimming**: Visible fields trimmed by administrator/creator/contributor roles to protect privacy.

## 2. Flow Sheet Content

### 2.1 Creation Information

The following information is recorded when a question is created:
- **Creator**: The user who submitted the question.
- **Creation Time**: When the question was first submitted.
- **Initial Status**: The status when the question was created (usually "Pending Review").
- **Question Content**: Core content including question stem, answer, and solution.

### 2.2 Revision History

For published questions, revisions (new versions) can be submitted, and all revisions are recorded:
- **Submitter**: The user who submitted the revision.
- **Submission Time**: When the revision was submitted.
- **Review Status**: Pending Review / Approved / Rejected.
- **Review Reason**: The approval or rejection reason given by the reviewer.
- **Version Comparison**: View content differences between versions.

### 2.3 Review Log

Each review operation is recorded:
- **Operator**: The administrator who performed the review.
- **Operation Time**: When the review operation was performed.
- **Operation Type**: Approved / Rejected / Rolled Back.
- **Operation Reason**: The reason provided by the reviewer.

## 3. Role Permissions

The contribution flow sheet trims visible fields based on user roles:

### 3.1 Administrators

Can view the complete flow sheet, including:
- All user information
- All review records
- Content modification history
- System operation logs

### 3.2 Creators

Can view records related to themselves:
- Their own creation information
- Revisions they submitted
- Review results and reasons (excluding reviewer information)

### 3.3 Contributors

Can view limited information:
- Basic question information
- Current status
- Public review results (excluding detailed reasons)

## 4. Usage Scenarios

### 4.1 View Question Flow Status

Contributors can view the review progress and historical records of their submitted questions at any time.

### 4.2 Trace Content Changes

When a question is modified or rejected, you can view the change history and reasons through the flow sheet.

### 4.3 Review Traceability

Administrators can view complete review logs for traceability and auditing.

## 5. Access Methods

### 5.1 Question Detail Page

Click the "Contribution Flow Sheet" tab on the question detail page to view the complete flow record of the question.

### 5.2 Personal Center

On the "My Contributions" page in the personal center, you can view an overview of the flow status of all contributed questions.

## 6. Related Features

- [Question Bank](/en/basic/bank) - Understand question contribution and review process
- [Problem & Problem List Standards](/en/academic/problem) - Understand question contribution standards
- [Version Rollback](/en/basic/version-rollback) - Learn how to rollback to historical versions
