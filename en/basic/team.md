# Team Details

A team is a collaboration space for classes, clubs, and interest groups: manage members, share private problems, assign homework, host team competitions, and track member performance in one place.

## Creating and Joining a Team

- **Create a team**: fill in the name, description, and an **application reason** to create it. The creator automatically becomes the team **admin**; after creation, the team goes through **review** (see [Team Review](#team-review) below).
- **Invite members**: admins invite members through user search; members can **accept or decline** the invitation.
- **Join a team**: you can view a team using its **team invite code** and apply to join.
- **Roles**: members are divided into **admins** and **regular members**.
- **Member management**: admins can promote / demote member roles and remove members; members can leave or decline a team.
- Team information can be edited (name, description), and a team can be deleted by its creator.
- The team list shows each member's status (invited / joined / declined) and the member count.

## Team Review

To prevent abuse, **new teams require admin review** before they can be used normally:

- When creating a team, you must fill in an **application reason** (creation rationale / purpose).
- After creation, the team status is **pending**; until the review passes, the creator is not yet a formal member.
- Admins review in the backend: **approve** (automatically adds the creator as a team admin) or **reject** (optionally with review notes / rejection reason).
- The review status (pending / approved / rejected) is visible in the team list; if rejected, you can recreate the team or contact the admin.

## Team Private Problems

The team problem bank holds **private problems visible only to this team**, for internal team use:

- **Create a private problem**: fill in the title, problem statement (Markdown), problem type, subject, grade level, answer, and solution.
- **Edit / delete**: manage team private problems according to permissions.
- **Use cases**: team private problems can be used to assign **homework** and can be brought into **paper generation**.

## Homework System

Homework lets a team assign, grade, and track practice tasks in a unified way.

### Assigning Homework

- Pick problems from three sources: the **problem bank** (global problems), **team private problems**, or a problem sequence **inherited from a problem list / competition**.
- Set a **title and description**, an optional **deadline**, and specify the **participating members**.

### Student Submissions

- Members answer the problems one by one in the homework and submit; objective problems are auto-graded, while subjective problems go through weighted grading (correct / wrong / pending).
- Each submission has its own record (submitted answer, correctness, grading result).

### Homework Management (Admin)

- **Edit a problem**: modify a single problem's statement / answer / solution (only overrides this homework, **does not affect the problem bank**).
- **Add / remove / reorder**: append problems at the end, delete a problem, or replace the full problem set (add / remove / edit / reorder in a single submission).
- **Paper generation**: homework problems can be exported / used for paper generation.

### Statistics and Leaderboards

- **Homework statistics**: total problem count, number of participants, submitted / answered-correctly counts, and total submissions.
- **Leaderboard**: ranked by submission rate / correct count / completion rate.
- **Export CSV**: one-click export of the homework grade sheet (name, submissions, correct answers, completion rate, etc.) as a downloadable CSV file.

## Team Competitions

- Teams can create **team-private competitions** (with a dedicated invite code) to run as internal contests.
- Participants join via the invite code; objective problems are auto-judged and subjective problems are graded per configuration.
- Team competitions have their own rankings and statistics.

## Team Data Dashboard

The team homepage shows at a glance:

- **Member structure**: joined / invited / declined / admin counts.
- **Resource counts**: team private problems, competitions (draft / ongoing / ended), and homework counts.
- **Homework submissions**: total submissions, correct / wrong / pending.
- **Competition submissions**: total / correct / wrong.
- **Member contribution leaderboard**: each member's problem count, homework submissions and accuracy, and competition submissions and accuracy, all in one view.

Competition and homework data are aggregated by team and are independent of the personal [learning data](/en/basic/practice-stats) system.

::: tip Homework and the problem bank do not affect each other
When you "edit a problem" in homework (modifying a single problem's content), it only affects this homework and **will not change the original problem in the problem bank**, so you can use it with confidence.
:::

## Related

- Team competition and homework problems can be **inherited into paper generation** (see [Paper Generation Details](/en/basic/paper)).
- Teams can create private competitions (see [Competition Details](/en/basic/competition)).
