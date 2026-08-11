# Question Bank Guide

The question bank is the core of LiuMing. All questions are contributed by community users and published after review by administrators, available for every user on the site to practice with and reference.

## Subject System

The question bank covers **nine major subjects**, and the science subjects are further divided into sub-disciplines:

| Main Subject | Sub-disciplines |
| --- | --- |
| Math | Algebra, geometry, calculus, probability, number theory, combinatorics, analysis, other |
| Physics | Physics, mechanics, thermodynamics, acoustics, optics, electromagnetism, physics (other) |
| Chemistry | Chemistry, inorganic, organic, physical chemistry, analytical, structure |
| Biology | (Keeps its sub-discipline system) |
| Geography | Physical geography, human geography, other |
| History | Ancient Chinese history, modern Chinese history, contemporary Chinese history, ancient world history, modern world history, contemporary world history |
| Chinese / English / Politics | No sub-disciplines |

- Math, physics, chemistry, biology, geography, and history keep a sub-discipline hierarchy; Chinese / English / politics are single-level.
- The subject system is configured dynamically on the admin side (each subject can set its question code prefix, allowed school levels, scoring baseline, and so on), and the frontend loads it dynamically, so adding a new subject requires no code changes.

## Question Types

The supported question types vary by subject (different subjects support different types):

- **Math**: fill-in-the-blank, multiple choice, equivalent expressions, true-false, proof, application
- **Physics**: fill-in-the-blank, multiple choice, equivalent expressions, true-false, proof, application, short-answer
- **Chemistry**: fill-in-the-blank, multiple choice, equivalent expressions, true-false, application, short-answer
- **Biology**: multiple choice, fill-in-the-blank, true-false, application, short-answer
- **Chinese / English**: multiple choice, fill-in-the-blank, short-answer (answering questions), essay
- **Geography / History**: multiple choice, fill-in-the-blank, true-false, short-answer (history also includes essays)
- **Politics**: multiple choice, fill-in-the-blank, true-false, short-answer, essay, application

Multiple choice supports **single-answer / multiple-answer / unspecified-answer** modes. The English subject supports **listening questions** (question stem + listening audio + listening material).

## School Levels and Difficulty

- **School levels**: Questions are divided into lower elementary, upper elementary, middle school, and high school. Physics, chemistry, geography, history, and politics do not offer elementary levels.
- **Difficulty stars** (chosen when submitting a question): two systems:
  - **Basic stars**: giveaway, easy, medium, hard, extremely hard.
  - **Competition stars** (kept only for science subjects): Comp-, Comp, Comp+, CMO-, CMO, CMO+, IMO, IMO+.
  - Chinese, English, geography, history, and politics keep only the basic stars and do not offer competition stars.

### Dynamic Difficulty Rating

Besides the difficulty stars chosen at submission time, every question also carries a **dynamic numeric rating** (range 100 to 3500) that reflects the true difficulty observed through actual community practice:

- **Base value**: Derived from the "school-level baseline + difficulty-star increment" in the subject configuration. For example, a school level with a 500-point baseline, when marked "hard", adds extra points on top.
- **Dynamic adjustment**: Once cumulative submissions reach a threshold, the rating is adjusted based on the actual accuracy rate: a higher accuracy rate (too easy) lowers the rating, while a lower rate (too hard) raises it.
- **Confidence weighting**: The more submissions there are, the more reliable the adjustment basis, and the more stable and trustworthy the rating becomes.
- **Adjustment cap**: A cap is set on each adjustment to prevent the rating from swinging wildly.

You can therefore sort by the dynamic rating in ascending or descending order to find easy or hard questions calibrated by real answering data.

## Search and Filtering

The question bank list supports multi-dimensional combined filtering:

- **Keyword**: Fuzzy match on the title or question code.
- **Subject**: Multiple subjects can be selected, with **strict mode / any mode**. Strict mode requires a question to cover all selected subjects at once; any mode accepts a match on any of them.
- **Question type / school level / difficulty stars**: All support multiple selection.
- **Tags**: A match on any tag is enough, with tag cloud support (sorted by popularity).
- **Dynamic rating range**: Filter by a numeric range of the dynamic rating.
- **Listening questions**: Show only listening questions.
- **Sorting**: Defaults to publish time; can be switched to ascending / descending order by dynamic rating.

::: tip About sub-disciplines
When filtering physics, its sub-discipline tags and questions (mechanics, optics, etc.) are matched at the same time, so you don't need to filter each separately.
:::

## Question Codes

Each question has a unique code in the format "subject prefix + 4-digit number", such as `M0001` for math, `C0002` for chemistry, `J0001` for physics (mechanics), and so on. Codes are generated automatically by the system from the current maximum sequence number, serving as a stable identifier for **paper assembly**, referencing, and discussion.

## Favorites

Once logged in, you can favorite questions, with support for adding, removing, and checking whether a question has been favorited. The favorites list can be viewed and searched under "Profile → Favorites", making it convenient to review the questions you practice often.

## Contributing Questions

Anyone can contribute questions to the community (via "Contribute a Question" in the navigation).

### What to Fill In

- **Title, school level, difficulty stars, subject / sub-discipline, and question type**.
- **Question stem**: Supports Markdown text (for science subjects, **visual formula input** is enabled automatically, letting you build LaTeX formulas graphically and attach images; see [Input and Editor Guide](/en/basic/editor) for how to use the editor).
- **Answer**: Choose the subjective / objective question type and fill in the corresponding answer (see [Practice and Auto-grading](/en/basic/judge) for details).
- **Solution**: An optional explanation of the solving process.
- **Tags**: Optional knowledge-point tags (new tags can be proposed).
- **Listening questions** (English only): Check the listening-question box, fill in the listening material, and upload the listening audio (audio format only, up to 50 MB).

> **Solutions can be images**: Attachments are categorized by purpose (`purpose`), such as "stem image / illustration / solution image". Among these, **images marked with the solution purpose** are displayed as the question's solution (a solution can be a written explanation or an image).

If you truly cannot provide certain optional content (solution / answer / listening material), you can explicitly mark it as "missing" and leave it to the reviewer's judgment.

### Submission and Review Flow

1. After submission, the question's status is **pending review (pending)**. The system automatically generates a question code and registers a work order.
2. An administrator reviews it in the **Review Console**: **approve → published (published)**, or **reject** and fill in the rejection reason.
3. Published questions are marked as available for practice. Your "My Contributions" page shows the approved / rejected status and the rejection reason.
4. After modifying a question (updating content, uploading listening audio), the question **returns to the pending review state** and must be reviewed again.
5. Every review action is fully logged (reviewer, time, reason) and traceable.

### Change Requests (New-Version Tasks)

For published questions, besides editing them directly, you can also submit a "change request" (a complete new version), which goes through the same review flow. Once approved, it replaces the live question. A question's past change requests can be viewed and traced.

## Review

**Review Console** (admin only):

- **Questions pending review**: Lists all pending questions, including stem, answer, solution, attachments, and listening material. Approve or reject (with a reason).
- **Review logs**: The complete review log for each question (action, operator, time, reason).
- **New-version review**: Review change requests submitted by users.
- Reviewing questions is also linked to the workbench / ticket system logs.

## Security Boundaries

- **Anonymous browsing**: Users who are not logged in can browse the public question bank, but browsing is subject to necessary access restrictions. Once logged in, all features work normally.
- **Answer unlocking**: Question answers and solutions are **not exposed directly** to practicing users by default; they are unlocked through submissions (see [Auto-grading and Unlocking](/en/basic/judge)).
- **Paper assembly with solutions**: When querying in bulk by question code, only administrators can request the standard answers and solutions to be included, preventing the unlocking mechanism from being bypassed.

## AI Solutions

For some questions, after the **answer is unlocked**, an **AI-generated solution** is offered below the answer area (a Markdown explanation generated by AI from the question, its reference answer, and the standard solution):

- Only **unlocked** questions show the AI solution area.
- The **contributor or an administrator** can **generate / regenerate** a question's AI solution with one click.
- When a question's standard answer / solution content is updated, the old AI solution is marked as "update pending" and can be regenerated to stay in sync.

> AI solutions are for auxiliary reference and share the AI configuration with "AI Grading". Whether they are enabled is controlled centrally on the admin side (see [Account & Security · Admin Panel](/en/basic/account-safety#admin-console)).
