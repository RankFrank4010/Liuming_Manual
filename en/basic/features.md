# Feature Overview

LiuMing (https://liuming.franj2.top) is an exercise community founded in 2026, covering all grades from primary school to senior high school across nine subjects, and offering one-stop learning services including online practice, automatic grading, paper assembly, contests, team collaboration, and AI grading.

This page systematically introduces LiuMing's features to new users. Please read [Read This First](/en/) before using the platform.

## Input and Editor

Every text input box on LiuMing uses a unified editor with **visual mode** and **code mode**, plus built-in **visual formula input** (graphically assembling LaTeX with live preview):

- **Visual editor**: a what-you-see-is-what-you-get rich text editor. Use the toolbar to format text and insert formulas, which render instantly. Very friendly for users unfamiliar with Markdown.
- **Code mode**: classic Markdown source editing, with quick toolbars for headings / bold / lists / links and a math symbol panel.
- **Visual formula input**: in science subject inputs (Math / Physics / Chemistry / Biology) you can "assemble" formulas by clicking symbols and function templates (Greek letters, operators, fractions, radicals, superscripts and subscripts, integrals and sums, trigonometric functions, etc.), with no need to memorize LaTeX.
- **Switchable modes**: choose one of the two in "Account Settings → Editor Mode"; the choice applies uniformly to every input box across the site, and since both modes save Markdown, switching never loses content.

For a detailed tutorial, see [Input and Editor](/en/basic/editor).

## Question Bank

The question bank is the core of LiuMing. Problems are contributed by community users and published after review by admins.

- **Nine subjects**: Math, Chinese, Physics, Chemistry, Biology, English, Geography, History, and Politics. Math, Physics, Chemistry, Biology, Geography, and History are further divided into sub-disciplines (such as algebra, geometry, calculus, mechanics, electricity, physical geography, and ancient Chinese history).
- **Multiple question types**: fill-in-the-blank, multiple choice (single / multiple / indeterminate), short answer, essay, and speaking questions; Chinese adds **reading comprehension** (passage + sub-questions), and English adds **cat-fishing** (word-bank cloze) and **listening**. The former "equivalent expression" and "true / false" types are now folded into fill-in-the-blank / multiple choice, and "proof / application" into short answer.
- **Grade levels and difficulty**: problems are divided into the grade levels "lower primary / upper primary / junior high / senior high"; difficulty ranges from the basic star rating of "easy ~ extremely hard" to subject-specific contest star ratings (STEM subjects name them by their own olympiad system, e.g. CMO/IMO for mathematics and CPhO/IPhO for physics; non-STEM subjects use 国- / 国 / 国家队 — provincial / national / national team; see the [Difficulty Star Rating Standards](/en/academic/difficulty)).
- **Tag system**: problems carry tags for subject, grade level, question type, and knowledge point, with multi-dimensional filtering (keyword, subject, question type, grade level, difficulty, tag) and sorting by difficulty for precise searching.
- **Problem ID (Code)**: every problem has a unique ID (for example `M0001`) used for paper assembly, references, and discussion.
- **Favorites**: add the problems you practice often to favorites for quick review.
- **Contribute problems**: anyone can contribute problems, with formula editing and attachment uploads (such as images and listening audio). Contributed problems are published after admin review; suggested revisions (new versions) of problems also go through the review process and are fully traceable.
- **Contribution flow sheet**: view the complete flow record of a problem from creation to review, including creation information, revision history, and review logs, with fields trimmed by role (admin/creator/contributor).
- **Version rollback**: for published problems, you can roll back to a historical version, ensuring content safety and traceability.

## Practice and Grading

- **Answer online**: open a problem and answer it. Objective questions such as fill-in-the-blank, multiple choice, cat-fishing, and reading comprehension (by sub-question) are graded automatically by the system with instant correct / incorrect feedback.
  - Fill-in-the-blank supports exact matching, numeric tolerance (±0.01, etc.), percentage tolerance, and constant evaluation (such as π, e).
  - Multiple choice supports single, multiple, and indeterminate modes.
  - Subjective questions such as short answer and essay can be **self-graded**, **graded by someone you invite and trust**, or — for questions without a standard answer — **AI-assisted graded** shortly after submission (asynchronous, consumes no quota), which then updates the standard answer.
  - **Speaking questions**: record audio answers, AI auto-scores (0-10 points, 0.5 step), ideal for English speaking practice and contests.
  - **Listening questions**: play listening audio to answer, with listening materials to assist grading.
- **Multi-part problems**: a large problem can be split into multiple sub-parts, answered and graded separately.
- **Answer images**: graders and self-graders can upload images of answers to show handwritten work.

## Learning Data and the Wrong Answer Notebook

The system automatically records every practice session and builds a multi-dimensional learning profile:

- **Practice statistics**: total submissions, accuracy rate, cumulative time, consecutive check-in days, and this week's practice volume.
- **Wrong answer notebook**: automatically collects the problems you got wrong, filterable and searchable by subject, with the option to remove problems you've mastered.
- **Knowledge point radar**: shows accuracy by subject (and sub-discipline), giving an intuitive picture of the strong and weak areas of your knowledge structure.
- **Knowledge graph**: organizes your practice data into a knowledge graph with three-level statuses of "mastered / developing / weak".
- **Weak point analysis and recommendations**: the system identifies subjects with low accuracy and recommends targeted practice problems for you.
- **AI learning analysis**: generates an AI analysis report based on your practice data in one click.
- **Practice heatmap**: your personal homepage shows your daily practice volume over the past year, recording your consistency.
- **Public profile**: your practice data is shown as a public profile (submission history, recent problems, heatmap) that others can view.

## Calculation Zone

A dedicated practice area designed for primary and junior high calculation training, with automatic problem generation and automatic grading:

- **Ten calculation types**: mental arithmetic, clever four-operation arithmetic, polynomial expressions, one-variable linear equations, factoring, linear inequalities, systems of linear inequalities, quadratic equations in one variable, systems of linear equations, and trigonometric functions.
- **Selectable difficulty**: easy / medium / hard.
- **Batch generation**: generate any number of problems at once.
- **Instant grading**: after submitting, each problem is graded individually, with accuracy and category statistics returned.
- **Rich options**: some question types support options for allowing negatives, decimals, fractions, and irrational numbers; trigonometric functions support sin/cos/tan function selection; polynomial expressions support trigonometric function and fraction extensions.

## Paper Assembly

Enter problem IDs to generate a complete paper PDF:

- **Assemble by ID**: one ID per line (comma and space separated supported); the system parses the problems automatically, and you can remove, clear, or reorder them.
- **AI smart compose**: describe your requirement in natural language (e.g. "a grade-9 math midterm focused on quadratic functions and similar triangles, 10 multiple-choice + 4 fill-in-the-blank + 3 free-response, 100 points"); the AI picks problems from the bank and designs the whole paper structure, with an optional subject scope and a selection cap; each run consumes 1 AI quota credit and is refunded automatically on failure.
- **Major problem groups**: drag sub-parts into "major problem" groups, with titles and point values you can set.
- **Paper information**: set the paper title, subtitle, subject (optionally auto-inferred from the problems), total score, completion time, candidate instructions, and footer page numbers; supports automatic point distribution and consistency checks.
- **Two layouts**:
  - **Simple layout**: quick generation.
  - **Complex layout**: fine-grained configuration of the seal line (range, line style, circles, candidate info), header, candidate information field, multiple choice option layout (columns, labels, spacing), fill-in-the-blank styles (underline / parentheses / circles, etc.), fonts (Western + math fonts), paper size (A4 / A3 / custom), booklet mode (cover, reserved answer areas), and teacher version (answers shown in blanks / parentheses, with solutions attached), among others.
- **Export options**: supports attaching solutions (teacher version) and copy protection; the PDF is compiled by the backend LaTeX, so formula typesetting is professional.
- **Save online**: paper drafts can be saved, loaded, and edited online, with the PDF downloadable at any time.
- **Inherit from problem lists / contests**: import problem lists from problem lists or contests into paper assembly in one step.
- **Pure self-designed problems**: support completely custom problems, not dependent on the question bank.
- **Listening paper generation**: support English listening paper generation, with listening audio on separate pages, configurable voice gender and reading repetitions.
- **Essay answer area**: essays can use an answer-area style (auto / grid essay paper / ruled lines / none), with configurable rows, columns per row, and line spacing.
- **Problem images**: adjust the size of statement images and auto-generate "Figure N" captions.

## Full Paper Library

The full paper library is a **sharing community for complete paper files**, complementing the "Paper Assembly" generation feature:

- **Upload full papers**: upload complete paper files (PDF / Word / PPT / TXT, up to 50MB), fill in the title, subject, and grade level, and optionally link a public problem list; submissions are reviewed by admins.
- **Browse and download**: browse full papers uploaded by the community (filter by subject, grade level, and status), and download them after logging in.
- **Report violations**: report rule-breaking / infringing content; reports enter the ticket system for admin review.

For details, see [Full Paper Library](/en/basic/paper-uploads).

## Contests

LiuMing supports organizing and taking part in online contests:

- **Create a contest**: customize the title, description, visibility (public / private / team private), grading method (graded by the organizer / designated graders / self-grading), subjects, and problems.
- **Collaborative problem setting**: organizers can invite problem setters to jointly maintain problems.
- **Participation management**: anyone can sign up for public contests; private contests are joined via an invitation code or designated participants. Contests can have a start / end time, and can start or end at any time.
- **Online answering and grading**: answer problem by problem during the contest; objective questions are graded automatically, while subjective questions are graded by graders (or self-graded by participants).
- **Leaderboard**: real-time ranking by number of correctly answered problems.
- **Export papers**: contests generate a PDF paper in one click (with solutions attached, admins only).
- **Replay contests**: clone a contest's problems and configuration and reopen it in one click, great for repeated practice or running series.
- **Public review**: public contests are published after admin review to ensure content quality.

## Teams

Teams are collaboration spaces for classes, clubs, and interest groups:

- **Team management**: create a team (generating a team invitation code), invite members, set admins, handle member joins / leaves, and remove members.
- **Team private problems**: a team-internal question bank where you can upload private problems used only within the team.
- **Homework system**:
  - Assign homework: inherit problems from the question bank, team private problems, problem lists, or contests, set a deadline, and designate participating members.
  - Do homework: members answer online; objective questions are graded automatically, and subjective questions can be graded manually (AC / WA / PENDING).
  - Manage homework: edit, add or remove, reorder, or fully replace homework problems (affects only this assignment, not the question bank).
  - Leaderboard and statistics: homework completion rate and accuracy ranking; export CSV grade sheets.
- **Team contests**: teams can host private contests (joined via an invitation code) with independent statistics and rankings.
- **Team data dashboard**: member contributions (number of problems set, homework / contest submissions and accuracy) at a glance.

## Problem Lists

Problem lists are collections of problems organized by topic for systematic learning:

- **Create a problem list**: customize the title, description, tags, and subject, and add problems or adjust their order as needed.
- **Public and private**: public problem lists are visible site-wide after admin review; private ones are visible only to you (or a designated team).
- **Use cases**: teachers organizing topic practice, students sharing exam preparation materials, contest problem collections, and more.

## Grading Center

Centralized management of all answers that need manual grading:

- **Invited grading**: answers to subjective questions can invite any user to grade; the invitee sees the problem, the standard answer, and the solution, then scores it.
- **Self-grading**: score your own answers against the solution.
- **AI grading**: for certain subjects, AI can grade automatically and return detailed feedback (score + comments).
- **Quota management**: paper assembly and AI grading have weekly quotas based on your plan; extra quotas are granted by admins, and usage is visible in real time in your personal center.

## Parental Supervision

Parents can view the learning of their child (student account); the supervision relationship must be **initiated by the child**:

- **Binding**: the child (student account) initiates a supervision invitation by entering the parent's **nickname + email**; once the parent accepts, the supervision relationship is established and can be removed at any time.
- **Viewing learning data**: after binding, parents can view the student's practice statistics, submission history, wrong answer notebook, knowledge graph, knowledge point radar, weak point analysis, favorites and recent practice, and practice heatmap, and can generate AI learning analysis reports.

## Discussion and Columns

- **Discussion forum**: exchange study insights and problem solutions with community users.
- **Columns**: publish articles to share experience and knowledge.

## Achievements

Practicing and taking part in community activities unlock achievements that record your learning milestones.

## Points and Benefits

Community contributions turn into points that can be redeemed for practical benefits:

- **Earning points**: points are granted when your problem / problem list contributions pass review (the amount is decided by the admin at review time).
- **Points ledger**: every point earned and spent has a complete ledger record.
- **Redeeming benefits**: spend 15 points to redeem **30 days of triple quota** (weekly quota ×3 for paper assembly and AI grading).

See [Points and Benefits](/en/basic/rewards) for details.

## Account and Security

- **Unified login**: supports **username + password, phone number + SMS, Passkey (passwordless fingerprint / face), and OTP dynamic codes**, with secure login, automatic renewal, and free combination and switching (see [Registration and Login](/en/basic/account)).
- **Bans and appeals**: violating the [Community Rules](/en/policies/rule) leads to penalties based on the violation cycle and the repeat-offense mechanism (warning / mute / ban, etc.). Banned users can submit appeals through ban tickets, attach supporting materials, and have an admin review them.
- **Reporting and tickets**: report rule-breaking problems / problem lists (images supported); the ticket system records every incident in full, and results can be appealed.
- **Account data**: your personal homepage shows your profile, practice heatmap, submission history, recent practice, favorites, and wrong answer notebook; account information syncs automatically after login.
