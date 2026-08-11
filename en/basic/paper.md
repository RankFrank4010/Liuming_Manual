# Paper Generation Details

Paper Generation lets you **enter question numbers to automatically generate a professionally typeset exam paper PDF**, suitable for unit tests, midterms and finals, topic-specific practice, mental math sheets and more.

Go to the "Paper Generation" page, enter the question numbers, and once the question list has been resolved you can configure and export the paper.

## Choosing Questions (by Question Number)

1. **Enter question numbers**: put one question number per line in the "Question number list" (e.g. `M0001` / `C0002`), or separate them with commas or spaces. Up to 100 question numbers can be queried at once.
2. **Resolve question numbers**: click "Confirm question numbers" and the system queries the **published** questions by number in batches:
   - Matched questions enter the "Question list";
   - Unmatched numbers are clearly reported as "Not found", so you can double-check and re-enter them.
3. **Manage the list**: you can "Remove" mis-selected questions one by one, or "Clear" everything; each question keeps its public information such as options and question type, for layout rendering.

::: warning About answers and solutions
Questions queried by Paper Generation do **not include standard answers or solutions by default** (the Ministry of Education does not allow answers to be exposed directly); only teachers / administrators can request the accompanying solution set (teacher version PDF).
:::

## Configuring the Paper

- **Paper title**: defaults to "LiuMing Paper Generation", customizable.
- **Total score / completion time**: set the total score of the whole paper and the suggested duration.
- **Show marks**: assign a mark to each question, with support for **automatic equal distribution**; the system verifies that the sum of the assigned marks matches the total score.
- **Examinee instructions**: explanatory text below the title and above the questions (e.g. "1. The exam duration is 120 minutes...").
- **Footer**: can show "Page N of M".
- **Question sections**: drag smaller questions into a "section", give each section a title (e.g. "1. Reading comprehension (modern Chinese)") and a mark; each section automatically summarizes "X questions, Y points in total" from its contained questions.
- **Anti-copy**: can be enabled to protect the paper surface.

### Calculation Question Group

You can insert a **calculation question group** into a paper: choose a category, difficulty, question count and mark, and the system generates a batch of **deterministic** calculation questions and renders them into the PDF (the sample composition follows the same rules as online practice batches), ideal for making mental math / calculation sheets.

## Two Layout Modes

### Simple Layout

Quick to generate and easy to learn, offering several answer layouts:

- **Fill-in-the-blank answering**: questions are laid out with blank spaces.
- **Multiple-choice answering**: choices are laid out in option form.
- **Answer sheet mode**: multiple-choice / fill-in-the-blank questions are laid out as a markable sheet, for centralized answering and machine scoring.

The simple layout also supports basic settings such as font size (scaled proportionally).

### Complex Layout

Based on the **LaTeX exam-zh** template, providing the greatest degree of fine-grained control, including:

- **Page / paper**: A4 / A3 / custom (custom supports margins and page size), header text, footer type.
- **Fonts**: Western fonts (newcm / lm / times / stix / libertinus / garamond, etc.), math fonts (cambria / stix / xits, etc.), body font size (pt).
- **Seal line**: appearance range (every page / first page only / odd pages only / first and last pages), line style (solid / dashed / dotted, etc.), whether to show the circle, and examinee info inside the seal line (name / exam number / class / seat number, with customizable labels and width).
- **Examinee info bar**: name / exam number / class / seat number; the exam number supports a configurable number of markable digits (8 / 9 / 10 digits).
- **Multiple-choice layout**: number of option columns (auto / 1–4 columns), option labels (circled numbers, etc.), option spacing.
- **Blank styles**: underline / parentheses / circle / rectangle / blank, with configurable width.
- **Question spacing**: elastic spacing before / after questions.
- **Answer sheet marking configuration**: marking legend, number of digits in the exam-number marking table.
- **Booklet mode**: generates a booklet cover (first page as an instruction cover), with cover content configurable in Markdown; blank answer areas can be reserved for non-multiple-choice / fill-in-the-blank questions.
- **Teacher version / solutions**: can **show answers** inside blanks / parentheses / choices, and **attach solutions** (display mode: hidden / hover / flip up), plus grading box styles and more.
- **Scratch paper / grading boxes / info boxes / list names** and other advanced items.

## Preview and Export

- **Preview the paper**: preview the whole paper before exporting (rendered by the frontend with the same layout, including the calculation question group preview).
- **Export PDF**: the backend compiles the PDF with LaTeX (a pure binary stream, with professional formula layout), downloadable to your local machine.
- The teacher version PDF with solutions: available only to administrators / those with the corresponding permission.
- **Save online / download / import**: paper "drafts" can be saved online (title + full configuration) and read back at any time to continue editing; drafts can also be exported and imported again.

::: warning About external images
If external network images in the question stem cannot be embedded due to cross-origin restrictions, a notice is shown at export and the images are removed from the export (e.g. "N external images could not be embedded due to cross-origin restrictions").
:::

## Importing from a Problem List / Competition

You can select a problem list or a competition and **import its questions in order** into the current paper, making it easy to compose papers quickly from existing material.

## Quota Notes

Paper generation (PDF export) is granted a **weekly usage quota** per **plan**, with extra quota granted by administrators; the remaining quota is visible in real time in the "Personal Center" (see [Grading and Paper Generation Quota](/en/basic/grading#quota-management)).
