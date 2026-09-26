# Special Question Types Guide (Reading Comprehension / Cat-Fishing)

**Reading comprehension** (Chinese) and **cat-fishing** (English word-bank cloze) are two special auto-graded types: the former works by "passage + sub-questions", the latter by "passage + word-bank gaps". Their authoring and answering differ from ordinary questions. This page covers **how to author, answer, and grade** each.

## 1. Reading Comprehension (Chinese)

### 1.1 How to Author

1. In "Contribute Problem", **pick subject "Chinese"** and **type "Reading comprehension"**.
2. Write the **passage** in the **statement**.
   - The passage is **auto-centered** (matching the PDF export).
   - The passage supports two marks: `++text++` for **underline** and `==text==` for **emphasis dots**.
3. **You must add sub-questions**: reading comprehension must contain sub-questions (passage + sub-questions). For each sub-question fill in:
   - its statement (the question);
   - its type (e.g. multiple choice, fill-in-the-blank, short answer);
   - its answer.
4. Save and submit; it goes through the normal review flow.

### 1.2 How to Answer

- The student sees the **centered passage** and answers each of its **sub-questions** one by one.

### 1.3 How It's Graded

- Reading comprehension has **no top-level standard answer**; grading is **delegated to the sub-questions**:
  - objective sub-questions (multiple choice / fill-in-the-blank, etc.) are **auto-graded**;
  - subjective sub-questions go to [grading](/en/basic/grading).
- Each sub-question is graded **independently**.

## 2. Cat-Fishing (English Word-Bank Cloze)

### 2.1 How to Author

1. In "Contribute Problem", **pick subject "English"** and **type "Cat-fishing"**.
2. Write the **passage** in the **statement**, marking **gaps** with either form:
   - `____`: 4 or more consecutive underscores → auto-numbered in order;
   - `___36___`: 3+ underscores around 1-3 digits (Shanghai style) → the number is used as the gap label.
3. Fill the **"Word-bank options"** one per entry (**each option is a single word / phrase**). The word bank is shown in a **box above the passage** for filling.
   - Use the "**11-choose-10**" / "**5-choose-4**" presets to generate a batch quickly, or "Add option" / "Remove last" to edit manually.
4. Fill a **standard answer per gap** under "Per-gap standard answer". The system checks that the **answer count matches the gap count** and prompts you to fix mismatches.

### 2.2 How to Answer

1. Above the passage is the **word-bank box**, each word labeled with a letter (A / B / C …).
2. **Click a word** → it fills the **first empty gap**; used words are dimmed.
3. **Click a used word** → **withdraw** the answer in its gap.
4. **Click a filled gap in the passage** → **clear** that gap.
5. Gaps show their number by default; once filled, they show the chosen letter.

### 2.3 How It's Graded

- The system **auto-grades**: it compares **gap by gap in order**; a full match counts as correct.

## Related

- Type selection and bank standards: [Problem & Problem Set Standards](/en/academic/problem).
- Editor and formula input: [Input and Editor Guide](/en/basic/editor).
- Judging and pending grading: [Practice and Auto-grading](/en/basic/judge).
