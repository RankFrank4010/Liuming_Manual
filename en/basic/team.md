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
- **Speaking questions**: support recording answers, AI auto-scores (0-10 points, 0.5 step), reading student recordings against reference text.
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

## Group Mode (v1.0+)

A **group** (kind=`group`) is the higher-level form of a team: a group can host multiple **sub-teams** under it, and a group's admins have the same authority as a sub-team admin across every sub-team. Use it for **multi-class / multi-project** coordination.

### Groups and Sub-teams

1. **Create a group**: from the same entry as creating a team, toggle the form to "**Group**" and submit (platform review still applies); once approved, you become the group admin.
2. **Create a sub-team**: on the group home page's "**Sub-teams**" tab, click create (**no platform review needed**) and fill in the name, description, and default score rules.
3. **Members follow by default**: when a sub-team is created, every currently-joined group member is auto-added as a regular member; sub-team admins are configured separately.
4. **Manage sub-teams**: in the "Sub-teams" list, view member counts and status, then click into any sub-team to perform sub-team admin actions (edit problems, grade, delete).

**Authority and limits**:

- A group admin has full control over the group itself and is **equal to a sub-team admin** for every sub-team; they **cannot** interfere with sibling groups (authority is bounded by `parent_id`).
- **No nesting** (v1): a group cannot be a child of another group, and cannot have its own `parent_id`.

### Group Ranking

A new **Group ranking** tab on the group home page compares sub-teams by:

- Member count, homework submission total, correct total, **excellent count**, competitions, participants.
- Default sort: member count DESC, name ASC.
- Use it to gauge activity and output across sub-teams at a glance.

### Sub-team Management

In the **Sub-teams** tab the group admin can:

- Create sub-teams (name, description, default score rules).
- Browse all sub-teams (member count, approval status, created at).
- Click into a sub-team to perform any sub-team admin action (edit problems, grade, delete).

## Team Event-based Scoring

Starting v1.0, teams support an **event-based scoring** system for internal ranking. Admins tune the rules; members are ranked by total points; the ledger is auditable and supports manual adjustments.

### Default Rules (seeded at team creation)

| Event | Default | Trigger |
| --- | --- | --- |
| Assignment submitted | +2 | First submission per learner per problem |
| Assignment correct | +3 | First correct verdict per learner per problem (AC, manual or auto) |
| Speaking scored | +1 | Each speaking submission scored once |
| Excellent homework | +10 | When an admin marks a submission as excellent |
| Problem created | +5 | When a team-problem is successfully created |
| Competition joined | +5 | Learner's first submission in a given team competition |
| Competition correct | +5 | Learner's first AC in a given team competition |
| Manual adjustment | -100 to +100 | Admin entry; **note required** for audit |

> **Anti-farming**: a learner only counts once per `(problem, event)`; a submission only counts once for `Excellent homework` (unmarking reverses it); a competition only counts once per `(learner, event)`.

### Managing Scoring

- **Rules** (admin only): on the **Ranking → Rules** sub-tab, tune each event's points (-100 to +100) or disable an event. Already-recorded events keep their original value — the ledger is the historical record.
- **Leaderboard** (everyone): ranked by `total_points DESC, joined_at ASC`; joined members with 0 points still appear.
- **Ledger** (members see their own, admins see anyone): every event with time, member, event, points, note, operator; filter by user.
- **Manual adjustment** (admin only): form at the bottom of the Rules tab — pick a target member, points (can be negative), and a mandatory note.

### Where to Find It

- Team home page → **Ranking** tab: leaderboard, rules, ledger, manual form.
- Group home page → **Group ranking** tab: sub-team comparison.
- Member contribution leaderboard: two new columns — **excellent_count** and **total_points**.

## Excellent Homework

Starting v1.0, team admins can mark any submission as **excellent homework**. The team home page adds a dedicated **Excellent** tab where all members can browse them; marking also awards points automatically.

### Mark / Unmark (admin)

- In the homework **Grading** tab, every submission has a "Mark excellent / Unmark" toggle.
- After marking, the submission becomes visible to every team member in the Excellent tab.
- Unmarking **reverses** the `excellent_homework` ledger entry to avoid double-rewarding.

### Display Area

- Team home page → **Excellent** tab: by `excellent_at DESC`, default **30 most recent** (configurable).
- Each card shows: assignment title, problem title, student, answer, verdict (AC/WA/SCORED), score (for speaking), `excellent_at`, who marked it.
- Students see their own marked submissions in the personal "My homework" view.

### Score Impact

- Mark → `excellent_homework` +10 (default), auto-recorded in the ledger.
- Unmark → ledger row reversed.
- Counts toward the member's leaderboard total and the **excellent_count** column.

## Excellent Answer (team / assignment)

Starting v1.0, team problems and assignment problems support an **excellent answer** field that admins can set as a reference for learners. See [Problem & Bank Specs: Excellent Answer](/en/academic/problem#excellent-answer).

## Related

- Team competition and homework problems can be **inherited into paper generation** (see [Paper Generation Details](/en/basic/paper)).
- Teams can create private competitions (see [Competition Details](/en/basic/competition)).
