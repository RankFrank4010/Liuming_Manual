# Version Rollback

Version rollback is a historical version recovery feature provided by the LiuMing platform for questions, supporting rollback of published questions to any historical version.

## 1. Feature Overview

Version rollback provides the following core functions:

- **Historical Version Viewing**: View all historical versions of a question.
- **Version Comparison**: Compare content differences between different versions.
- **One-click Rollback**: Restore a question to a specified historical version.
- **Rollback Records**: Record all rollback operations for traceability.

## 2. Usage Scenarios

### 2.1 Content Error Correction

When the current version has errors but a historical version is correct, you can rollback to the correct version.

### 2.2 Accidental Operation Recovery

When question content is accidentally modified or deleted, you can rollback to the version before the modification.

### 2.3 Version Management

Through the version rollback feature, you can flexibly manage historical versions of questions.

## 3. Operation Process

### 3.1 View Historical Versions

1. Click the "Version History" tab on the question detail page.
2. View the list of all historical versions.
3. Click any version to view its complete content.

### 3.2 Version Comparison

1. Select two versions on the version history page.
2. Click the "Compare" button.
3. System highlights content differences.

### 3.3 Execute Rollback

1. Select the historical version to rollback to on the version history page.
2. Click the "Rollback to This Version" button.
3. Confirm the rollback operation.
4. System creates a new version with the content of the selected historical version.

## 4. Rollback Rules

### 4.1 Version Creation

Rollback operations create a **new version** instead of directly modifying the current version:
- **History Preserved**: The original version is preserved and not deleted.
- **New Version Content**: The new version content is completely consistent with the selected historical version.
- **Version Number Increment**: The new version number increments based on the current maximum version number.

### 4.2 Status Changes

After rollback, the question status may change:
- **Published → Pending Review**: If the version being rolled back to has never been approved.
- **Published → Published**: If the version being rolled back to has been approved.
- **Re-review Required**: Administrators can require re-review after rollback.

### 4.3 Permission Requirements

The following roles can perform rollback operations:
- **Administrators**: Can rollback any question to any version.
- **Creators**: Can rollback questions they created.
- **Contributors**: Can rollback questions they contributed (requires approval).

## 5. Rollback Records

All rollback operations are recorded:
- **Operator**: The user who performed the rollback.
- **Operation Time**: When the rollback operation was performed.
- **Target Version**: The historical version number rolled back to.
- **Operation Reason**: Rollback reason description (optional).

## 6. Notes

- **Irreversible Operation**: The rollback operation itself is irreversible, but you can rollback to other versions again.
- **Content Completely Consistent**: Rollback version content is completely consistent with the historical version, including attachments.
- **Review Status**: Re-review may be required after rollback.
- **Statistics Preserved**: Historical statistical data is preserved and unaffected by rollback.

## 7. Related Features

- [Contribution Flow Sheet](/en/basic/flow-sheet) - Understand question flow records
- [Problem Management](/en/basic/problem-management) - Understand question removal and republishing
- [Question Bank](/en/basic/bank) - Understand question contribution and review process
