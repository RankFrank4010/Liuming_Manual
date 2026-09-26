# Input and Editor Guide

Every text input box on LiuMing (**question stem, answer, solution, listening material, competition questions, team private questions, custom questions**, and more) uses the same **universal editor**. This page teaches you how to use it for plain text and math formulas, especially the three ways of working with it: the **visual editor**, **visual formula input**, and **code mode**.

## Editor Modes

The universal editor has two modes. The interface and the way you write differ, but **both save data in Markdown format**, so you can **switch at any time without losing content**:

| Mode | Description | Who it's for |
| --- | --- | --- |
| **Visual mode** (default) | WYSIWYG: format text directly with the **visual editor**, insert formulas from the menu, and formulas render instantly | People unfamiliar with Markdown / who want WYSIWYG |
| **Code mode** | Traditional Markdown source editing, with a formatting toolbar and **visual formula input** | People familiar with Markdown who want to edit the source directly |

> Every input box you use follows the choice you make under "Account Settings → Editor Mode". The default is **visual mode**.

### How to Switch

1. Log in and go to "Profile → Account Settings".
2. Find the "**Editor Mode**" section and choose between **visual mode** and **code mode**.
3. After saving, every input box across the site (question stem, answer, solution, listening material, ...) displays according to the new mode.

> Switching only affects how the editor looks and writes. It does not change how entered content is stored, and no content is lost.

In addition, not every input box enables formula features: input boxes for **science subjects** (math, physics, chemistry, biology, etc.) provide extra formula-related buttons, while input boxes for **liberal-arts subjects** (Chinese, English, etc.) only do plain text editing and show no formula entry points.

## Visual Editor (WYSIWYG)

Visual mode uses the **visual editor**: a WYSIWYG rich-text toolbar plus an editing area. You edit and format directly, and what you see is the final result. Formulas are inserted as **formula entities** and rendered into math symbols instantly.

### Common Operations

1. **Format text**: Use the toolbar buttons (headings, bold, italic, lists, quotes, links, code, dividers, ...). The interaction feels intuitive, like Word and similar editors.
2. **Insert a formula**: A **formula** button sits at the front of the toolbar. Click it, enter LaTeX in the popup, confirm, and the formula is inserted and **renders immediately in the editing area**.
   - Inline formulas are embedded in the middle of a line of text; for a formula on its own line, put it at the start of a line or on a separate line.
3. **Edit / delete a formula**: **Click a formula in the editor**, and a floating bar with "Edit Formula" appears. Click it to re-enter the formula's LaTeX.
4. **Conversion on save**: When saving, the editor automatically converts the content to Markdown and writes it back to the question / answer. So **no extra action is needed**; the formulas you edit automatically become a form the grader can recognize.

> The visual editor does not support image / video upload (the platform has no backend for it). If you need to add an illustration, use another method (the question stem supports attachments).

## Visual Formula Input

Visual formula input (shown in the code-mode toolbar and at the top of the visual editor, enabled for science subjects) is a **graphical way to build formulas**: you don't need to memorize LaTeX syntax. You "assemble" a formula by **clicking symbols and function templates** and preview it **in real time**.

### How to Open It

- In **visual mode**: a "**Visual Formula Input**" button sits above the formula toolbar of the visual editor. Click it to open the formula builder window.
- In **code mode**: the Markdown editing toolbar for science subjects has two buttons, **inline formula (∑)** and **block formula (∑²)**. Click either one to open the formula builder window.

### Interface and Operations

A formula builder window pops up, roughly divided into:

1. **Three tabs**, switchable by clicking:
   - **α Letters**: Greek letters (lowercase α β γ δ ... and uppercase Γ Δ Θ ...), for example π, σ, θ.
   - **± Symbols**: Operators and relation symbols (+ − × ÷ ⋅ ≤ ≥ ≠ ≈ ∈ ∋ ⊂ ∪ ∩ ∞, integrals ∫ ∫ ∫, summations ∑, etc.), as well as arrows, partial derivative ∂, nabla ∇, and more.
   - **Σ Functions**: Common functions and structural templates, such as **lim (limit)**, **sqrt (square root)**, **nth root**, **subscript / superscript / both**, **fractions**, and trigonometric functions (sin cos tan, etc.) with their inverses.
2. **Builder / preview area**: Renders the current formula **in real time** with every click, so you can see the assembled result directly.
3. **Left / right arrow buttons**: Move the input cursor to position within the formula being assembled.
4. **Clear (🗑)**: Clears the formula currently being assembled.
5. **Save / Confirm (✓)**: Sends the assembled LaTeX into the input box and closes the window.

### Building Example (a Fraction)

Suppose you want to enter the fraction $\frac{1}{2}$:

1. Open the formula builder window.
2. Switch to the "Functions" tab and click the **fraction / frac** template.
3. Enter the numerator `1` and then the denominator `2` (position the cursor to switch between them).
4. The preview shows $\frac{1}{2}$; click "Confirm" to finish.

> You **don't need to know LaTeX**. When you need structures like fractions, radicals, subscripts / superscripts, Greek letters, integrals, and summations, visual input lets you **generate the formula by clicking**; for plain text, just type.

## Code Mode (Markdown)

If you switch to "code mode", the input box becomes a Markdown source editor with a row of **formatting shortcut buttons** at the top, and you can insert formulas.

### Common Shortcut Buttons

| Button | Action | Description |
| --- | --- | --- |
| H1 / H2 / H3 | Heading levels | Adds `#` / `##` / `###` on the current line |
| B | Bold | `**bold**`, shortcut Ctrl / ⌘ + B |
| I | Italic | `*italic*`, shortcut Ctrl / ⌘ + I |
| <> | Inline code | `` `code` `` |
| ∑ Inline formula | Inline formula | Build a formula with **visual formula input** and insert it as `$...$` |
| ∑² Block formula | Block formula | Build a formula with **visual formula input** and insert it as `$$...$$` |
| ``` | Code block | Triple-backtick code block |
| Quote | Blockquote | Adds `>` at the start of the line |
| List | Unordered / ordered list | Adds `-` / `1.` at the start of the line |
| 🔗 | Link | `[text](url)` (shortcut Ctrl / ⌘ + K) |
| Divider | Divider | Inserts `---` |
| Σ Symbols | Symbol panel | Opens the math symbol panel; click to insert |

### Math Symbol Panel

Clicking "**Σ Symbols**" expands a panel of common math symbols, including Greek letters (α β γ ...), infinity ∞, summation ∑, product ∏, integral ∫, partial derivative ∂, nabla ∇, radical √, inequality symbols, `π`, `√`, subscripts / superscripts, fractions like `\frac{a}{b}`, combinations like `\binom{n}{k}`, matrices, and so on. Click once to insert at the cursor position; the **current character count** is shown in the bottom-right corner.

### Writing Formulas Directly

In code mode you can also use visual formula input, or hand-write LaTeX wrapped in `$...$` (inline) or `$$...$$` (block). Formula syntax follows the **KaTeX / LaTeX** subset.

## How the Two Modes Relate

Visual mode and code mode are **two "faces" of the same Markdown content**:

- A formula inserted in visual mode appears as `$...$` in the source after you switch to code mode.
- `$...$` you hand-write in code mode is recognized and rendered as a formula when you switch back to visual mode.

So no matter which mode you use to enter formulas, the stored result is the same, and grading, paper assembly, and PDF export all recognize and typeset formulas correctly.

## Visual Insertion and Drawing

When **contributing / editing a problem**, the statement editor has a row of shortcut buttons; each opens a dialog with a live preview, and clicking "**Insert**" writes into the statement:

- **Insert poem**: fill in the **title / author / lines (one per line) / notes**, then click "Insert" to generate a typeset classical-poem statement (at least one line is required).
- **Insert material**: fill in the **title / author / source / body** (body required), then click "Insert". The template's `# title`, `—— author`, and `(from 《…》)` conventional lines are auto-recognized at export.
- **Insert matching**: fill in the **left / right columns** (at least 2 items each, one per line) and an optional **third column**, then click "Insert"; enter the correct pairs in the **standard answer** (e.g. `1-3, 2-1, 3-2`); item content cannot contain `|`.
- **Option images**: on a multiple-choice option, click "Image" to insert an image for that option (uploaded with the attachments on submission and shown on that option).
- **TikZ / LaTeX drawing**: enter TikZ / LaTeX drawing code in the statement; it is appended to the end and compiled / rendered by xelatex on PDF export.

## Related

- For how math formulas behave in **answering and grading** (equivalence checking, normalization), see [Practice and Auto-grading](/en/basic/judge).
- You'll use the editor on this page heavily when **contributing questions**; see [Question Bank Guide](/en/basic/bank).
