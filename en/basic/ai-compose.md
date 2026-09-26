# AI Smart Compose Guide

**AI Smart Compose** lets you describe the paper you want in one sentence; the AI picks problems from the bank and lays out the whole structure (sections, per-question marks, title, duration). Ideal for turning out a paper quickly without picking question numbers one by one.

This page covers **how to use it**; other paper features (manual question numbers, layout, export) are in [Paper Generation Details](/en/basic/paper).

## 1. Where to Open It

1. Go to the "Paper Generation" page.
2. Click the "**AI Compose**" button in the top toolbar to open the "AI Smart Compose" dialog.

> If you have already chosen a subject in the paper, or added the first question, the dialog **pre-fills that subject** as the scope.

## 2. Describe the Paper and Generate

In the dialog, work top to bottom:

1. **Paper requirement**: describe the paper in the text box (up to 1000 characters). Cover **grade level / subject / scope / question types and counts / difficulty / total score / duration**.
   - Example: "a grade-9 math midterm focused on quadratic functions and similar triangles, 10 multiple-choice + 4 fill-in-the-blank + 3 free-response, medium difficulty, 100 points, 90 minutes".
2. **Subject scope (optional)**: defaults to "**Any subject**" (the AI decides from the requirement); you can also pick one subject.
3. **Selection cap**: limit the maximum number of problems the AI may pick from the bank (1-50, default 20).
4. Click the "**AI Smart Compose**" button.
   - While generating, it shows "The AI is analyzing candidate problems and designing the structure; about ten-odd seconds…".
   - The footer notes "Each compose consumes 1 AI quota credit, refunded automatically on failure" and shows "Remaining AI quota: N".

## 3. Review the Result

Once generated, the lower half of the dialog shows:

- the **paper title** and a **summary**;
- **N questions · total M points**;
- the **paper structure**: grouped by section, listing each **question number** and **mark**.

You can then:

- click "**Compose again**" to regenerate another version from the same requirement;
- click "**Apply to paper**" to write the result back into the paper editor;
- click "**Cancel**" to close without changing the current paper.

## 4. After Applying

After clicking "Apply to paper":

1. The AI-selected problems are **added to the question-number list**, already grouped into the result's **sections** with their **marks**.
2. Continue with the usual paper steps: preview, add/remove questions, adjust sections/marks, set layout and footer, and export the PDF (see [Paper Generation Details](/en/basic/paper)).

## 5. Quota, Dedup, and Failures

- **Quota**: each compose consumes 1 AI quota credit; a failed request is **refunded automatically**. See [Grading Center · Quota Management](/en/basic/grading#quota-management).
- **Dedup**: problems already in the question-number list are **excluded** automatically and won't be picked again.
- **Unresolvable**: if none of the AI-selected problems can be resolved from the bank, you'll see "None of the AI-selected problems could be resolved; please retry" — rephrase or retry later.

## 6. Tips for a Good Requirement

The more specific the requirement, the closer the result:

- **Type mix**: e.g. "10 multiple-choice + 4 fill-in-the-blank + 3 free-response".
- **Difficulty and score**: e.g. "medium difficulty", "100 points".
- **Scope and focus**: e.g. "focused on quadratic functions and similar triangles".
- **Duration**: e.g. "90 minutes".

## Related

- Manual question selection, layout, and export: [Paper Generation Details](/en/basic/paper).
- Quota and plans: [Grading Center · Quota Management](/en/basic/grading#quota-management).
