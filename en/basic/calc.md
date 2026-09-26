# Calculation Zone Guide

The Calculation Zone is dedicated practice designed for arithmetic training in primary and junior high school: the **system generates the questions and grades them automatically**, with no manual scoring needed. It's ideal for repeated drills on mental math and basic arithmetic.

## Ten Types of Calculation Questions

It covers the following ten types of questions, matching arithmetic training across different grades:

| Category | Description |
| --- | --- |
| Mental math | Simple mental arithmetic of addition, subtraction, multiplication and division |
| Clever four-operation arithmetic | Clever computation using the laws of arithmetic |
| Integral expressions | Operations on integral expressions |
| Linear equations in one variable | Solving linear equations in one variable |
| Factorization | Factorization practice |
| Linear inequalities in one variable | Solving linear inequalities in one variable |
| Systems of linear inequalities | Solving systems of linear inequalities in one variable |
| Quadratic equations in one variable | Solving quadratic equations in one variable |
| Systems of linear equations | Solving systems of linear equations |
| Trigonometric functions | Evaluating trigonometric functions at special angles |

::: tip Where did decimal and fraction calculation go?
Decimals and fractions are no longer separate categories; they are now **options** that can be layered on top of other categories (see "Options" below). Selecting the relevant option makes the numbers in the questions include decimals or fractions.
:::

## Options

Some categories support extra number options that control the range of numbers in the questions:

- **Allow negative numbers**: numbers may be negative.
- **Allow decimals**: numbers may be decimals (e.g. 1.25).
- **Allow fractions**: numbers may be fractions (e.g. 3/4).
- **Allow irrational numbers**: numbers may be irrational (e.g. √2).

Trigonometric function questions support the following function options:

- **Include sin**: questions include the sin function.
- **Include cos**: questions include the cos function.
- **Include tan**: questions include the tan function.

Polynomial expression questions support the following extension options:

- **Include trigonometric functions**: polynomial expressions contain trigonometric functions (e.g., sinα, cosβ).
- **Include fractions**: polynomial expressions contain fractions (e.g., (x+1)/(x-2)).

The available options differ by category; follow what the page displays.

## Difficulty

Each category supports three difficulty levels:

- **Easy**
- **Medium**
- **Hard**

The difficulty controls the size of the coefficients, the number of computation steps and the overall complexity.

## Generating a Set of Questions

1. Choose a **category** and a **difficulty**.
2. Choose the **number of questions**: 10 / 20 / 30.
3. The system generates a set of questions and displays them all at once.

**The same set can be reproduced**: every set carries a fixed "seed"; generate again with the same seed and you'll get **exactly the same set of questions**, which lets you:

- Repeat the same set to reinforce memory;
- Use the same set for side-by-side comparison practice with others.

::: tip Doing the same set with others
Want to compare with classmates? Just pick the same category and difficulty and generate the same batch of questions (same question count), and both of you will get exactly the same set to practice together on the spot.
:::

## Automatic Grading and Result Feedback

Submit your answers when done, and the system grades the whole set question by question:

- For each question, it returns **whether you got it right** and its **standard answer**.
- Summary: **total questions, correct count, accuracy (integer percentage)**.

Grading records the time spent and the results, which go into **My Calculation Practice Statistics**.

## Answer Format and Grading Rules

### How to Answer

- Type your answer directly into the input box; you can also click the **"Formula"** button next to it to open the GUIMath formula editor and build fractions, roots, superscripts, etc. graphically, then insert a LaTeX snippet into the answer box.
- After submission the system grades automatically — **each question has only two outcomes, "correct / wrong"; there are no process or partial-credit points**.

### Input Normalization (all question types)

Before grading, the system cleans up your answer uniformly, so the following writing differences **do not affect the verdict**:

- Full-width characters are converted to half-width (e.g. `＋` → `+`, `３` → `3`);
- Multiplication `×`, division `÷`, and the various minus dashes (`−`, `–`, `—`) are treated as `*`, `/`, `-` respectively;
- **All spaces are removed** — adding spaces never matters;
- LaTeX inserted by the formula editor is converted to plain text: `\frac{3}{4}` counts as `3/4`, `\sqrt{3}` as `√3`, `\times` as `*`, etc.;
- Polynomial / factorization answers additionally ignore case, so `x²` equals `x^2`.

### Grading Rules by Question Type

| Type | Standard-answer form | Grading rule |
| --- | --- | --- |
| Mental math / clever four-op | Numeric | Equal in value counts as correct (tolerance 10⁻⁶); the fraction form `a/b` is accepted |
| Linear equation in one variable | Numeric (the statement already prints `x=`) | Fill in x's value only; equal in value counts as correct |
| Linear inequality | Form `x>3` | Both direction and boundary must match; the flipped `3<x` is equivalent; `>=`, `<=`, `=>`, `=<` all count as ≥, ≤ |
| System of linear inequalities | Interval or simultaneous conditions | The solution set must match exactly: "no solution / empty set / ∅" all accepted; interval open/closed must match; `(2,5)`, `2<x<5`, multiple conditions `x>2 and x<5` (separated by "and" / comma / semicolon, intersected automatically), and an `x∈` prefix are all accepted |
| Quadratic equation in one variable | Two roots | **The root set is what matters; order is irrelevant**: the `x1=2 or x2=3` prefix can be omitted; "or / and / comma / semicolon" separators are all fine; roots may be integers, decimals, fractions, and irrationals of the forms `√b`, `a√b`, `a±√b` |
| System of linear equations | `x=…,y=…` (with z for three unknowns) | Compared per unknown; **writing order is irrelevant**; every unknown only needs its value to match |
| Trigonometric functions | Special-angle function value | Judged by **numeric equivalence**: `√3/2`, `sqrt(3)/2`, and the formula editor's `\frac{\sqrt{3}}{2}` are all equivalent; parentheses around numerator/denominator are allowed |
| Polynomial / factorization | Algebraic expression | Identical after normalization, or equal at all three sample points `x=0/1/2`; implicit multiplication is recognized (`2x` = `2*x`, `(x+1)(x-2)` auto-inserts `*`); polynomials with sin/cos/tan are compared exactly by coefficient (`sinα`, `sina`, `\sin\alpha` are interchangeable); answers with division are sampled at several integer points |

::: tip How to write a fraction
Both `3/4` and the formula editor's `\frac{3}{4}` work; for value-compared types, an equivalent decimal such as `0.75` also counts.
:::

### Cases That Will Be Marked Wrong

- The question is **left unanswered** (submitted blank);
- The input cannot be parsed into a form the type accepts (e.g. text in a numeric question);
- The inequality direction differs (and it is not a flipped spelling), or the interval's open/closed ends do not match;
- A quadratic equation has one too few or too many roots;
- The equation system omits a value for one unknown.

::: warning No process points
The Calculation Zone grades fully automatically and only looks at the final result; it does not grade solution steps. If you need step-by-step grading, use question practice (manual / AI grading).
:::

## Practice Statistics

The "Calculation" page provides statistics by category:

- **Total questions / correct count / accuracy**.
- **Today's practice / today's correct / today's accuracy**: your performance for the day at a glance.
- Per-category totals for each of the **ten types**, with questions, correct count and accuracy, helping you locate the categories where you're weakest in arithmetic.

## Also Included: Integration with Paper Generation

Calculation questions can not only be practiced online, they also participate in paper generation as a **"calculation question group"** (see [Paper Generation Details](/en/basic/paper)): you can add a "calculation question group" to a paper by category / difficulty / question count, and the system generates the same batch of calculation questions from a fixed seed and renders them into the PDF. Great for making mental math sheets and calculation sheets.

::: warning No Need to Contribute Duplicates
All ten types in the Calculation Zone are **auto-generated and auto-graded** by the system and already provide complete support for the corresponding knowledge points. Therefore, such questions **do not need to be and will not be accepted** if submitted to the question bank through "Contribute Question" (see [Problem & Problem Set Standards](/en/academic/problem)). Practice them directly in the Calculation Zone, or generate the corresponding calculation question group through paper assembly.
:::
