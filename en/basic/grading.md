# Grading Center Details

Subjective problems (short answers, essays, etc.) and some fill-in-the-blank, short-answer, and essay questions in Chinese / English have no automatic standard answer and need **manual grading**. The Grading Center centrally manages these submissions awaiting grading and offers several grading methods: invite grading, self-grading, AI grading, and AI-assisted grading that triggers automatically after submission.

## Which Submissions Need Grading

Submissions marked as **"awaiting grading"** by [automatic judging](/en/basic/judge):

- **Short-answer / essay problems** and other types without a standard answer (the former "proof / application" types are now merged into short answer).
- **Chinese / English** fill-in-the-blank, short-answer, and essay questions (not auto-graded even when an answer exists).
- **Speaking questions**: AI auto-scores (0-10 points, 0.5 step), reading student recordings against reference text.
- If a multi-part problem contains any part awaiting grading, the whole submission stays awaiting grading.

## Self-Grading

The simplest approach: judge correctness yourself against the **solution**.

- After viewing the solution in the submission details, mark the submission correct / wrong.
- Multi-part problems can be **graded part by part**.
- When self-grading, you can **upload an answer image**, handy for recording handwritten answers or keeping an archive.

## Invite Grading

When you want a more authoritative person to grade, you can **invite someone else to grade** your submission:

1. **Send the invitation**: on the awaiting-grading submission, choose "invite to grade," specify the invitee, and attach a note.
2. **The other party handles it**: the invitee sees the pending grading invitation in the "Grading Center" (including the problem, standard answer, solution, and your submission), can **grade on the spot** (correct / wrong), and the invitation status becomes graded once done.
3. **Re-grade / remove**: you can change the grader or withdraw the invitation.

The full flow of an invitation is: **awaiting the other party → accepted / declined → handed over to the other party for grading (usually graded at the same time)**. The inviter and the invitee can track progress in the "Sent Invitations" and "Pending Grading Invitations" lists respectively.

::: note The grader will see the answer
The invited grader will see the problem's **full statement, standard answer, and solution** so they can grade accurately.
:::

## AI Grading

For eligible awaiting-grading submissions, you can invoke **AI auto-grading** with one click:

- The system assembles the **problem, reference answer, and your submission** into a prompt and calls an AI model to output a grading result with written feedback.
- It returns a **grading result (correct / wrong)** and **detailed written feedback** so you can understand your mistakes.
- If the AI output cannot be parsed, the system retries automatically; if it ultimately fails, **the consumed quota is refunded**.

::: tip Note
The model, temperature, and limits for AI grading are configured centrally on the admin side (see [Admin Console](/en/basic/account-safety#admin-console)). AI grading is meant to assist; make your final judgment based on the actual feedback combined with your own understanding.
:::

### Common Situations

AI grading can return notices such as: **quota exhausted**, **already graded** (cannot be repeated), **grading failed**, **service not enabled**, **submission not found or cannot be graded**; just handle them according to the notice.

### Speaking Question AI Scoring

Speaking questions use **score-based grading** (0-10 points, 0.5 step), with the following AI scoring process:

- The system reads student recordings and performs speech recognition and scoring against the **reference text**.
- Scoring dimensions include pronunciation accuracy, fluency, content completeness, etc.
- The score is 0-10 points with 0.5 step, supporting half-point precision.
- Speaking questions support recording answers and score-based grading in problem answering, contests, and team assignments.

### AI-Assisted Grading (questions without a standard answer)

Starting v1.0, questions **without a standard answer** (self-graded / invite-graded short-answer, essay, etc.) **automatically trigger AI-assisted grading after you submit** — no manual action, and it **consumes no AI quota**.

You'll see one of the following; just follow the prompt:

| What you see | What it means and what to do |
| --- | --- |
| "AI-assisted grading in progress, please wait… (no AI quota consumed)" | Grading runs asynchronously; just wait. |
| "AI finished grading and updated this question's standard answer" | It's graded; view the result — the standard answer has been updated accordingly. |
| "AI graded some sub-questions; please self-grade the rest" | Only some sub-questions were graded — **self-grade the rest**. |
| "This question cannot be auto-judged; it has been sent to an admin for review; you can also self-grade first" | Sent to an admin; you may self-grade first. |
| "AI cannot grade this question (e.g. it contains an image and AI doesn't support it); manual grading is needed, please self-grade" | **Self-grade** or ask someone to grade. |
| "AI-assisted grading failed, please self-grade" | **Self-grade**. |

- Controlled by the master switch on the admin "AI Grading" page; when it's off, submitting won't trigger it and the submission is handled as an ordinary pending-grading item (self-grade / invite grading).

## Quota Management

Both **paper generation (PDF export)** and **AI grading** are subject to **plan quotas**:

- **Plan**: assigns each user a **weekly paper-generation quota** and a **weekly AI-grading quota**. Without a plan, the quota is 0 (or only a basic allowance).
- **Extra quota**: admins can grant a user additional paper-generation / AI-grading credits, stacked on top of the plan quota.
- **Usage**: the paper-generation / AI-grading credits used this week.
- **Available quota**: `plan quota + extra quota - used this week`, visible in real time in the "Personal Center".
- If AI grading ultimately fails, the **quota consumed for that attempt is refunded**.

::: info What consumes quota?
Only the two "compute-intensive" capabilities, **paper generation export** and **AI grading**, are billed against quota; invite grading and self-grading **consume no** plan quota.
:::

::: tip Why is the quota limited?
Quotas exist to prevent the server from running overloaded: paper generation (PDFs compiled by LaTeX on the backend) and AI grading (calling large models) both consume heavy compute, and without limits a few users' excessive usage could bring down the server and affect everyone. **This site does not offer paid plans**; quota cannot be bought or recharged, and is allocated free and uniformly by the platform. Extra quota can only be obtained through [exchanging points for triple quota](/en/basic/rewards#redeeming-rewards) or by admin grants.
:::

## Marking Excellent Homework (team admin)

In the team homework **Grading** tab, a team admin can mark any already-graded submission (AC / WA / SCORED) as **excellent homework**:

- The submission then appears in the team's **Excellent** tab, visible to every member.
- The system auto-records an `excellent_homework` event (default +10, configurable in **Ranking → Rules**) into the points ledger.
- **Unmarking reverses** the ledger entry to avoid double-rewarding.
- See [Team Details: Excellent Homework](/en/basic/team#excellent-homework) for the full display and rules.

## Related

- For what triggers judging and the differences between judging types, see [Practice and Automatic Judging](/en/basic/judge).
- In **competitions**, subjective problems are graded per the competition's grading method (creator / designated graders / participant self-grading), see [Competition Details](/en/basic/competition).
- In **team homework**, subjective problems are graded with weighted grading (AC / WA), see [Team Details](/en/basic/team).
