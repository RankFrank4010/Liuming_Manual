# Competition Details

Competitions are LiuMing's online contest feature: you can **organize a contest** (customizing questions, question setters, graders and participants), or **sign up to take part**, testing your strength through real-time rankings.

## Creating a Competition

On the "Competition" page, click create and fill in:

- **Title, description**: describe the theme and rules of the competition.
- **Visibility**:
  - **Public**: open to the whole site, anyone can sign up freely; public competitions require **administrator review** before being published.
  - **Private**: visible only to designated participants via invitations or invite codes.
  - **Team private**: visible only within the bound team.
- **Grading method**:
  - **Only the creator grades**: all subjective questions are scored only by the creator.
  - **Designated graders**: scored jointly by several designated graders.
  - **Self-grading by participants**: participants grade their own subjective questions.
- **Subjects / questions**: specify the subjects involved and add questions (selected from the question bank, or custom stems, answers and solutions).
- **Time**: set the start and end times (can also be started / ended manually at any time).

### Managing Questions

- **Add questions**: pick from the question bank, or create a custom question on the spot (stem, question type, answer, solution, subject, education stage, tags).
- **Edit / remove**: update a question's content, or delete a question.
- **Order**: arrange and adjust the order of questions in the competition.
- **Publish questions**: once configured, "Publish questions" to make them visible to participants (objective questions only appear when answering).

## Question-Setting Collaboration (Question Setters)

The creator can **invite question setters** to jointly maintain the competition's questions. Question setters can add and edit questions and configurations. Question setters are added / removed by the creator.

## Participating and Joining

- **Public competitions**: one-click "Join" to become a participant.
- **Private / team private competitions**: join via **invite code**, or invitees "accept" the invitation to join.
- Participants can **withdraw** from a competition at any time; administrators / creators can remove a participant.

## Answering Online and Grading

- **Answering**: participants answer and submit question by question during the competition (objective questions are judged instantly).
- **Grading**:
  - Objective questions (fill-in-the-blank, multiple-choice, reading comprehension, cat-fishing) are graded automatically by the system.
  - Subjective questions (short-answer, essay, and other types without a standard answer) are marked right or wrong by the **graders** or via **self-grading by participants**, depending on the grading method.
  - **Speaking questions**: support recording answers, AI auto-scores (0-10 points, 0.5 step), reading student recordings against reference text.
- Each submission records its grading result and analysis; the grader view centrally shows every question's submissions from all participants and their pending-review status.
- **Leaderboard speaking total**: the competition leaderboard includes speaking question totals, reflecting participants' speaking proficiency.

## Leaderboard

The real-time **leaderboard** ranks participants by their answering status:

- Correct count, submitted count / pending-review count, total score.
- The leaderboard includes the total number of questions and the competition's current status, directly reflecting who is leading and what is still pending review.

## Exporting the Paper

A competition can **export a paper in one click**:

1. On the competition's **manage** page, **group questions into "sections"** (e.g. "1. Multiple choice", "2. Free response") and set titles and marks (the big-question structure aligned with paper generation, supported since v1.0).
2. Click "**Export paper**" to generate a **PDF** in question order (compiled by the backend with LaTeX).
3. The version with solutions (teacher version) is available only to administrators, suitable for printing before the contest and for explanation afterwards.

## Replay Competition

The creator can enable a **replay competition** for a finished competition: clone all of the original competition's questions and configuration, reset into a brand new competition instance (with new start and end times), to achieve:

- Repeated practice or simulation with the same questions;
- Hosting series / second rounds and finals with the same questions.

The visibility of the replay competition is customizable: making it public requires administrator review.

## Management and Review

- **Competition list**: filter by status (draft / ongoing / ended) and subject, and view participant counts and question counts.
- **Creator management**: edit description / grading method / visibility / subjects, delete the competition, start / end the event.
- **Administrator review**: competitions that require review (public, team public, etc.) are approved / rejected (with a reason) by administrators in the backend.
- **Scoring (marks)**: competition questions can have marks and scoring rules configured, contributing to the total score and ranking.

## Related

- Competition questions can be **inherited into a paper** or a team **assignment** (see [Paper Generation Details](/en/basic/paper), [Team Details](/en/basic/team)).
