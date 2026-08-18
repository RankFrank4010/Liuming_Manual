# Difficulty Star Rating Determination Standards

The difficulty star rating is one of the most important pieces of metadata for a question: it determines where the question sits in search, paper assembly, and learning recommendations, and it directly shapes students' expectations of a question's difficulty. If star ratings are inaccurate, the whole difficulty system of the site becomes distorted.

This page clarifies "how many stars should this question get?" The determination standards are developed using mathematics as the worked example (anchored to the new Gaokao I paper and mathematics competitions) and are generalized to all subjects by the same principles; everything follows the difficulty system actually running on the platform.

## 1. The Platform Difficulty System

The platform's difficulty system consists of **two star scales** and one **dynamic numeric rating**:

| System | Levels | Applicable Subjects |
| --- | --- | --- |
| Basic star rating | Gimme / Easy / Medium / Hard / Extremely Hard | All subjects |
| Competition star rating | Comp- / Comp / Comp+ (shared entry level); STEM subjects named by their own olympiad system: CMO/IMO (math), CPhO/IPhO (physics), CChO/IChO (chemistry), CBO/IBO (biology); non-STEM subjects use 国- / 国 / 国家队 (provincial / national / national team) | All subjects |
| Dynamic difficulty rating (Rating) | Numeric 100–3500 | All subjects (automatically calibrated from real answer data) |

- The **basic star rating** describes how hard a question is within regular school exams (gaokao, zhongkao, finals, etc.) and applies to all subjects.
- The **competition star rating** describes a question's level within subject competitions and is available for all subjects. STEM subjects name their levels by their own olympiad system (CMO/IMO for mathematics, CPhO/IPhO for physics, CChO/IChO for chemistry, CBO/IBO for biology); non-STEM subjects (Chinese, English, geography, history, politics) use the general competition ratings 国- / 国 / 国家队 (provincial / national / national team).
- The **dynamic rating** is automatically calibrated by the system from real answer data across the site and serves as a continuous complement to the star ratings (see [Dynamic Difficulty Rating (Rating)](/en/basic/bank)).

::: tip On the Number of Levels
Competition difficulty spans an enormous range, from entry level to the International Olympiad; five levels are far from sufficient to distinguish it, which is why the competition star rating adds a shared entry level (Comp- / Comp / Comp+) and then subdivides per subject: five olympiad levels for STEM subjects, three national-team levels for non-STEM subjects. Combined with the continuous dynamic rating, even the hardest problems can be precisely distinguished and sorted. The five-level basic star rating mirrors the structure of regular exams, and together with the dynamic rating it covers the complete spectrum from "gimme" to "IMO+".
:::

## 2. Basic Star Rating Determination

The basic star rating answers the question: **where does this question sit in a regular exam?**

Determination is anchored to the **question-position structure of the subject's benchmark exam** — for mathematics, the new Gaokao I paper. Stand in the shoes of an above-average student at the target grade level: a question you can see through at a glance is a gimme, one that takes some thought before putting pen to paper is medium, and one most students cannot solve is hard.

### Mathematics: New Gaokao I Paper Anchors

| Star rating | Determination points | New Gaokao I paper position |
| --- | --- | --- |
| Gimme | Direct application of a single formula / concept yields the answer; almost no thinking required, solvable upon reading | Questions 1–4 (early single-choice) |
| Easy | A single knowledge point; one conventional transformation or a little computation | Questions 5–6, 9, 12, 15 |
| Medium | Two to three knowledge points combined; a moderate amount of transformation and computation; conventional approach but requiring an extra step of thought | Questions 7, 10, 13, 16, 17 |
| Hard | Deep combination of multiple knowledge points; requires construction, case discussion, or heavy computation; error-prone | Questions 8, 11, 14, 18, 19 |
| Extremely Hard | The especially difficult among the "hard" ones: the last sub-question of a final question, requiring unconventional thinking or lengthy derivation | The final sub-question level of questions 18 / 19 |

### Generalizing to Other Subjects

The determination principle is the same: **anchor to the question-position structure of the subject's benchmark exam**, rather than relying on personal feelings.

- **Gimme**: early-paper recall and direct-application items (Chinese dictation, basic English vocabulary / grammar items, physics concept single-choice, direct chemical equation writing, etc.).
- **Easy**: conventional single-knowledge-point items (the first two sub-questions of a reading passage, direct fill-ins in a lab question, etc.).
- **Medium**: items combining two to three knowledge points that require proper procedural steps (the main body of a Chinese modern reading question, a long difficult English reading passage, multi-step small physics problems, the main body of a chemistry inference question).
- **Hard**: comprehensive final questions (Chinese essay elevation, English cloze / reading finales, physics final computation, chemistry industrial process / experiment design).
- **Extremely Hard**: the hardest sub-question of a final question, or the single item with the highest discrimination.

## 3. Competition Star Rating Determination

The competition star rating answers the question: **what level is this question within subject competitions?**

Anchored to mathematics competitions: the national high school mathematics league consists of **Paper 1** (gaokao-style questions) and **Paper 2** (additional contest paper, four problems, usually covering plane geometry, algebra, number theory, and combinatorics respectively), above which sit the **CMO** (six problems) and the **IMO** (six problems). Difficulty roughly ascends in the order "Paper 1 → Paper 2 problem 1 → Paper 2 problem 2 → Paper 2 problem 3 → Paper 2 problem 4 ≈ CMO problems 1 / 4 → CMO problems 2 / 5 → CMO problems 3 / 6."

| Star rating | Determination points | Mathematics competition anchor |
| --- | --- | --- |
| Comp- | Competition entry: the harder problems on Paper 1, or the easier years of Paper 2 problem 1 | Paper 1 final fill-in, easier years of Paper 2 problem 1 |
| Comp | The standard difficulty of league Paper 2 problem 1 | League Paper 2 problem 1 |
| Comp+ | The easier of Paper 2 problem 2, or the easier of CMO problems 1 / 4 | Easier years of Paper 2 problem 2, easier CMO problems 1 / 4 |
| CMO- | The standard difficulty of Paper 2 problem 2; the standard difficulty of CMO problems 1 / 4 | League Paper 2 problem 2, CMO problems 1 / 4 |
| CMO | The easier of Paper 2 problem 3; the easier of CMO problems 2 / 5 | Easier years of Paper 2 problem 3, easier CMO problems 2 / 5 |
| CMO+ | The harder of Paper 2 problem 3; the harder of CMO problems 2 / 5 | Harder years of Paper 2 problem 3, harder CMO problems 2 / 5 |
| IMO | Paper 2 problem 4; the easier of CMO problems 3 / 6 | Paper 2 problem 4, easier years of CMO problems 3 / 6 |
| IMO+ | The harder of CMO problems 3 / 6, or reaching IMO level | Harder years of CMO problems 3 / 6, IMO problems |

### Generalizing to Other STEM Subjects

The competition star rating is anchored to each subject's competition progression structure (preliminary / first round → league / second round → national final → international olympiad), with levels named after the subject's olympiad abbreviation; "Comp- / Comp / Comp+" is the shared entry level for every subject:

- **Physics**: above the entry level sit **CPhO- / CPhO / CPhO+** (national-final level) and **IPhO / IPhO+** (International Physics Olympiad level), corresponding to "preliminary / second round → national final (CPhO) → International Physics Olympiad (IPhO)".
- **Chemistry**: above the entry level sit **CChO- / CChO / CChO+** and **IChO / IChO+**, corresponding to "preliminary round → national final (CChO) → International Chemistry Olympiad (IChO)".
- **Biology**: above the entry level sit **CBO- / CBO / CBO+** and **IBO / IBO+**, corresponding to "preliminary round → league → national final (CBO) → International Biology Olympiad (IBO)".

### General Competition Ratings (Non-STEM Subjects)

Chinese, English, geography, history, politics and other non-STEM subjects also offer competition star ratings, expressed with the **general competition ratings** (entry level is likewise "Comp- / Comp / Comp+"):

- **国- (Provincial-)**: near-provincial level (ranked near the top in provincial competitions).
- **国 (National)**: national level (award tier in national / nationwide competitions).
- **国家队 (National Team)**: national training-team level (representing the country in international events).

The difficulty of specific years fluctuates; anchors use "typical difficulty," and determination should be made with reference to the conventional difficulty of that level.

## 4. General Determination Principles

For every subject, star rating determination follows these principles:

- **Anchor to a frame of reference, not to feelings**: the basic star rating anchors to the question positions of the subject's gaokao / zhongkao or grade-level exams; the competition star rating anchors to the subject's competition tiers. When no reference point can be found, it is better to rate conservatively than to inflate arbitrarily.
- **Stand in the student's shoes**: difficulty is relative — the same question is completely different for a middle schooler versus a high schooler. Always use "an above-average student at the target grade level" as the frame of reference.
- **The star rating classifies, the dynamic rating calibrates**: the star rating is assigned manually at submission and determines the grouping for search, paper assembly, and recommendations; the dynamic rating is automatically calibrated by real answer data and compensates for the bias of manual judgment. The two work together, and an incorrect star rating pollutes the initial value of the dynamic rating (see the [Question Bank Guide](/en/basic/bank)).
- **Rate honestly**: deliberately inflating or deflating difficulty interferes with the site-wide difficulty search and learning recommendations and counts as improper behavior (see the [Problem & Problem Set Standards](/en/academic/problem)).

## 5. FAQ

**Q: For the same question, some people find it easy and others hard. Whose judgment prevails?**
A: The anchored frame of reference prevails, not individual ability. Stand in the shoes of an above-average student at the target grade level and compare against the question-position structure of the subject's exams. Individual students finding it hard does not affect the star rating; the dynamic rating continuously reflects the real answer data.

**Q: Can a competition question only be given a basic star rating?**
A: Yes. When a competition question qualifies for both, it is recommended to rate both: the basic star rating describes what difficulty it would be in a regular exam (many entry-level competition questions are only "medium"), and the competition star rating describes its level within the competition. Adapted competition questions are rated by their actual post-adaptation difficulty.

**Q: Aren't five levels too few?**
A: The basic star rating corresponds to the structure of regular exams, where five levels are enough; the competition segment has per-subject competition star ratings (olympiad levels for STEM subjects, national-team levels for non-STEM subjects), and with the continuous dynamic rating, even hard problems can be precisely distinguished. If that is still insufficient, sorting by the dynamic rating is available (see the [Question Bank Guide](/en/basic/bank)).

**Q: How should the star rating for AI-generated questions be determined?**
A: After AI generates a question, the difficulty must be manually verified against the standards on this page (see the [Generative AI Usage Standards](/en/academic/ai)); the AI's own difficulty estimate must not be trusted directly.

**Q: What if I find someone has misrated a question?**
A: You can report the question; an administrator will re-check and adjust it according to the actual situation. Deliberately inflating / deflating ratings across many questions is handled as a violation.

## Related Links

- The platform's difficulty system and dynamic rating mechanics are covered in the [Question Bank Guide](/en/basic/bank).
- The requirements for filling in the difficulty star rating when contributing a question are in the [Problem & Problem Set Standards](/en/academic/problem).
- How the dynamic rating changes with practice data is covered in [Practice & Auto-Grading](/en/basic/judge).
- The difficulty verification requirements for AI-generated questions are in the [Generative AI Usage Standards](/en/academic/ai).
