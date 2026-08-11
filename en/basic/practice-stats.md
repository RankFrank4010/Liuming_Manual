# Learning Data and the Mistake Notebook

LiuMing automatically records every practice session, building a multi-dimensional learning profile that helps you discover the strengths and weaknesses of your knowledge structure, so you can review more purposefully.

## Practice Statistics

"Profile → Practice" shows your overall practice overview:

- **Total submissions**: The cumulative number of answers submitted.
- **Correct submissions / accuracy rate**: The number of correct answers and the accuracy percentage.
- **Total time / average time**: The total time invested and the average time per submission.
- **Consecutive check-in days**: The number of consecutive days with practice every day, a direct signal of study consistency.
- **This week's practice volume**: The number of submissions completed this week.

The statistics can be filtered by subject, so you can view each subject's performance separately.

## Mistake Notebook

The system automatically collects the questions you got wrong into the mistake notebook:

- **View**: Lists all mistakes, including question code, title, subject, question type, difficulty stars, school level, tags, attempt count, and most recent attempt time.
- **Filter / search**: Supports searching by subject or keyword (title / question code), with paginated browsing.
- **Remove**: When you have fully mastered a mistake and don't plan to practice it again, you can remove it from the notebook manually.

> The mistake notebook is linked to your practice records: if you get the question wrong again in the future, it re-enters the notebook.

## Knowledge Radar

Practice data is aggregated by **subject / sub-discipline**, showing each area's practice volume, correct answers, average time, and accuracy rate, giving a direct picture of the distribution of strengths and weaknesses in your knowledge:

- Without a subject specified, data is aggregated by **main subject** (the sub-disciplines of science subjects like math, physics, and chemistry are each aggregated independently).
- With a main subject specified, it returns the per-**sub-discipline** breakdown under that subject (such as algebra, geometry, calculus ... for math).
- Areas with low accuracy appear "dented" on the radar chart, letting you spot knowledge gaps at a glance.

## Knowledge Graph

Practice data is organized into a **tree-shaped knowledge graph**, where each knowledge-point node is marked with one of three mastery states:

- **Mastered**: Accuracy meets the target.
- **Developing**: Making progress.
- **Weak**: Low accuracy, needs reinforcement.

Each node shows practice volume, correct answers, the number of distinct questions involved, and the accuracy rate. The graph supports viewing in isolation per main subject, making it easy to focus on a single subject.

## Weakness Analysis and Question Recommendations

Based on all your practice data, the system:

1. Computes the accuracy rate for each subject and identifies **"weak subjects" with notably low accuracy**.
2. Reports your **overall accuracy rate**.
3. **Recommends questions suited for continued practice** targeting weak subjects and knowledge points, helping you strengthen precisely where needed.

When you are not logged in, the homepage shows a generic welcome page; once logged in, it shows your profile, statistics, weak-spot reminders, and recommended questions.

::: tip How to use the weakness analysis?
Start with the **knowledge radar** or **knowledge graph** to locate your weak spots, then use the recommended questions from the **weakness analysis** to reinforce them. This is exactly the value of LiuMing automatically pooling your learning data.
:::

## AI Learning Analysis

Generate an **AI learning analysis report** with one click: based on your practice data (the raw data is not listed separately here), the system calls AI to output targeted written analysis, pointing out your current learning situation and suggestions for improvement. This feature is meant to support self-awareness; the final results are based on your actual data.

## Practice Heatmap

Your profile shows **daily practice volume over the past year** (a GitHub-style heatmap); clicking a day shows that day's practice. The day-by-day cells give a direct view of your consistency and rhythm.

## Public Profile and Recent Practice

- **Public profile**: Through your public homepage, others can view your nickname, avatar, role, join date, last active time, practice heatmap, **submission record list**, and **recently practiced questions**.
- **Practice records**: Lists the questions you practiced by submission time (question code, title, subject, question type, difficulty, school level, correct or not), with filtering (subject / question type / right or wrong) and pagination.
- **Search users**: Search for other users by nickname and visit their public profiles.

## What Parents Can See

After a guardianship relationship is bound, **parents** can view most of the learning data described above (statistics, submissions, mistake notebook, knowledge graph, radar, weak spots, heatmap, favorites, recent practice, and AI analysis). See [Parental Guardianship](/en/basic/guardian) for details. The data can only be viewed after the student agrees to the binding.
