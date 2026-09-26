# Practice and Auto-grading

This page explains in detail how LiuMing handles answering, grading, and the answer unlocking mechanism, helping you understand how different question types behave.

## Answering Online

Once logged in, you can answer any question you open. The answering experience is determined by the **question type**:

- **Fill-in-the-blank / multiple choice**: Fill in or select directly in the answer area (the former "equivalent expressions" are folded into fill-in-the-blank, and "true-false" into multiple choice). For science subjects, fill-in-the-blank supports entering math formulas via **visual formula input** (see [Input and Editor Guide](/en/basic/editor)).
- **Cat-fishing** (English): click a word in the **word-bank box** above the passage → it fills the first gap; click a **used word** → withdraw; click a **filled gap** in the passage → clear. The system auto-grades gap by gap in order. See the [Special Question Types Guide](/en/basic/special-types).
- **Reading comprehension** (Chinese): read the centered passage, then answer its **sub-questions one by one**, each graded independently. See the [Special Question Types Guide](/en/basic/special-types).
- **Multiple choice**: Configured per question as single-answer / multiple-answer / unspecified-answer.
- **Short-answer / essay questions** (and other types without a standard answer): after answering, they enter the **pending grading** state and need [grading](/en/basic/grading) or self-grading; submitting also automatically triggers **AI-assisted grading** (consuming no quota).
- **Listening questions**: You can play the listening audio while answering, and the listening material can help with grading.
- **Speaking questions**: Record audio answers, AI auto-scores (0-10 points, 0.5 step), reading student recordings against reference text.

### Multi-Part Questions

A large question can be split into several parts (up to 20). Each part is answered and scored independently:

- Each part is checked on its own, and **getting some parts right counts as correct** (as long as each part's answer matches).
- **Unanswered parts are skipped** and do not affect the results of answered parts.
- As long as any part is "pending grading" (such as a proof sub-question), the whole submission stays pending grading; it does not skip human grading because some parts were auto-correct.

## Auto-grading Mechanism

The system **automatically compares** your answer with the standard answer for "equivalence": the same content written differently still counts as correct. Grading covers fill-in-the-blank, multiple choice, cat-fishing, and reading comprehension (by sub-question). Short-answer, essay, and other types without a standard answer return "pending grading".

::: note Language questions are not auto-graded
Fill-in-the-blank, short-answer, and essay questions in Chinese / English are **not auto-graded** even if an answer is configured. Right or wrong, they go to human grading or self-grading (to avoid rigidly applying a single standard to language answers).
:::

### Speaking Question Scoring Rules

Speaking questions use **score-based grading** (0-10 points, 0.5 step), with the following scoring process:

1. The student records audio answers, and the system calls a speech recognition service.
2. The AI model scores against the **reference text**, evaluating dimensions such as pronunciation accuracy, fluency, and content completeness.
3. The score is 0-10 points with 0.5 step, supporting half-point precision.
4. After scoring, students can view detailed comments and scores.

### Answer Normalization

Both your submission and the standard answer are "normalized" before comparison, so different common forms are correctly recognized as the same answer. For example:

- All extra whitespace is removed; full-width symbols are converted to half-width (`，`→`,`、`（）`→`()`).
- Common math command forms are unified: `\cdot` and `\times` are treated as multiplication, `\div` as division, `\frac{a}{b}` as `(a)/(b)`, and so on.
- Everything is converted to lowercase.

So forms like `π/2` and `\frac{\pi}{2}`, or `1/2` and `0.5`, are judged as the same answer.

### Tolerance and Numeric Comparison

Fill-in-the-blank and equivalent-expression questions support precision-based numeric comparison:

- **Absolute tolerance**: For example, `0.01` accepts answers within ±0.01 of the standard value.
- **Percentage tolerance**: For example, 5% accepts answers whose relative error from the standard value is within ±5%.
- Without a tolerance, values are compared at a very small default precision.

In addition, normalized expressions support **safe mathematical evaluation**: constants like `π` and `e` are automatically replaced with their exact values, then common math functions are computed (absolute value, square root, trigonometric functions, exponents and logarithms, powers, rounding, floor / ceiling, min / max, etc.), so `π`, `e`, `sin(...)` and similar are all compared correctly.

::: warning Evaluation safety
To allow "different forms" to be judged correct, the system performs restricted evaluation on expressions containing math functions. However, the evaluation only allows whitelisted functions and is strictly protected, so it **never executes arbitrary code**. You can use it with confidence.
:::

### Conditional Judging (AND / OR)

Standard answers support **multi-level conditional structures**, forming flexible judging rules:

- **OR group**: A match on any rule counts as correct (for example, accepting both `pi/2` and the numeric value `1.57`).
- **AND group**: All rules must match to count as correct.
- Conditions can be **nested** to form tree-shaped judging logic (suitable for questions with multiple equivalent forms).

### True-False Tokens

True-false questions do token matching on yes / no style answers, so multiple forms are judged correct:

- Treated as **true**: `true / t / 1 / √ / 是 / 对 / yes`.
- Treated as **false**: `false / f / 0 / × / 否 / 错 / no / x`.

### Multiple-Choice Grading

- **Single-answer**: Your choice matching the correct option exactly counts as correct.
- **Multiple-answer / unspecified-answer**: Your selected **option set** is compared with the correct **option set** for **set equality**: you must select all correct options to score, regardless of selection order.

## Answer Unlocking

To protect reference answers and encourage independent thinking, question answers and solutions are **not exposed directly**; they are unlocked through practice:

- Unlock conditions: **answer the question correctly**, or **reach a certain number of cumulative submissions**.
- Before unlocking, the standard answer and solution are not returned (multi-part questions hide each part's answer as well); multiple choice keeps its option markers for answering.
- Once unlocked, you can view the standard answer and the detailed solution.

::: tip Want to see the answer sooner?
Answer carefully once and it unlocks (a correct answer shows it right away)! If you keep missing it, submitting a few more times will automatically unlock the reference answer and explanation.
:::

After unlocking, an **AI-generated solution** may also appear below the answer area (for some questions; see [Question Bank Guide · AI Solutions](/en/basic/bank#ai-solutions)).

## Accuracy and Dynamic Difficulty

Every submission updates the question's submission count and correct count, and the **difficulty rating is dynamically recalculated** from these (see [Question Bank Guide · Dynamic Difficulty Rating](/en/basic/bank#dynamic-difficulty-rating)):

- Correct: the submission count and correct count each increase by 1.
- Once a question's cumulative submissions reach the threshold, the difficulty value is adjusted dynamically based on the accuracy rate versus the expected accuracy rate (50%).

## Self-Grading

For answers **pending grading** (short-answer and essay questions, plus fill-in-the-blank, short-answer, and essay questions in Chinese / English), you can:

- **Self-grade**: Judge the answer correct or wrong against the solution. Objective computational questions can also be self-graded part by part.
- **Upload answer images**: When self-grading, if you need to show the full handwritten process, you can upload images for convenient recording and review.

The "pending grading" state carries through to your practice records, mistake notebook, and grading center until a grade is finalized.

::: tip Short on time?
When you don't want to wait for someone to grade, prefer **self-grading** or use **AI grading** (see [Grading Center](/en/basic/grading)); it grades and is instant.
:::
