# Listening TTS

Listening TTS (Text-to-Speech) is a speech synthesis service provided by the LiuMing platform for English listening training, supporting multiple voice combinations and reading configurations.

## 1. Feature Overview

Listening TTS is mainly used in the following scenarios:

- **Listening Questions**: Generate audio for listening questions.
- **Listening Papers**: Generate complete listening audio during paper assembly, with independent pages for printing and playback.
- **Speaking Practice**: Provide reference audio for speaking questions (optional).

## 2. Voice Configuration

The system supports multiple voice combination modes to meet different exam requirements:

### 2.1 Basic Voices

- **Male Voice**: Deep and steady male voice.
- **Female Voice**: Clear and gentle female voice.

### 2.2 Combination Modes

When generating listening papers, you can choose the following voice combinations:

| Mode | Description |
 --- | --- |
 All Male | All audio uses male voice |
 All Female | All audio uses female voice |
 Male First, Female Second | First read male voice, second read female voice |
 Female First, Male Second | First read female voice, second read male voice |

### 2.3 Configuration Methods

Voice configuration can be set in the following locations:

- **Global Settings**: Set the default voice for the entire paper on the paper assembly page.
- **Section Settings**: Set the voice for specific sections (overrides global settings).

## 3. Reading Passes

Listening audio supports multiple reading passes to meet different exam requirements:

### 3.1 Pass Settings

- **Single Pass**: Default mode, each question read once.
- **Multiple Passes**: Can be set to read 2-3 times, suitable for listening exams.

### 3.2 Speed Control per Pass

For questions read two or more times, you can set the reading speed for each pass:

- **First Pass**: Normal speed (default).
- **Second Pass**: Can choose slightly slower speed for better comprehension.
- **Third Pass**: Can choose even slower speed for more difficult content.

### 3.3 Interval Settings

Intervals between multiple passes can be set (default 2 seconds) to allow students time to prepare.

## 4. Listening Paper Generation

Complete listening papers can be generated during paper assembly, with audio on independent pages:

### 4.1 Generation Process

1. Add listening questions on the paper assembly page.
2. Configure voice combinations and reading passes.
3. Click "Generate Listening Audio".
4. System calls TTS engine to generate audio files.
5. Audio automatically inserted into PDF listening pages for printing and playback.

### 4.2 Audio Format

- **Format**: MP3 (best compatibility).
- **Quality**: Standard quality (128kbps), balancing file size and audio quality.
- **Sample Rate**: 44.1kHz (CD quality).

### 4.3 Independent Pages

Listening audio appears on independent pages in the PDF, including:
- **Test Audio**: Audio segment for testing before the official listening.
- **Question Audio**: Listening content arranged by question number.
- **Playback Instructions**: Indicating the number of plays and intervals for each question.

### 4.4 Audio Clip Editing

Starting v1.0, you can add an **audio clip** (a trimmed range from a question's audio) to a listening section:

1. Under the section in the listening editor, click "**Audio clip**" to open "Choose question audio".
2. Search by question number or statement keyword and select the target audio — **LiuMing listening** (system TTS) is inserted whole, while **uploaded audio** (MP3) can be trimmed first.
3. Click "**Insert whole segment**" to insert directly, or "**Insert trimmed**" to open the "Listening clip editor": drag on the waveform to select a range and fine-tune with the two handles ("Select all" / "Clear selection" available); with no selection the whole segment is used; click "**Save selection**" or "Insert trimmed" to finish.
4. An inserted clip can be re-edited via "**Adjust clip**".

**For full steps, see the [Listening Audio Clip Editing Guide](/en/basic/listening-clip).**

## 5. Technical Implementation

### 5.1 TTS Engine

The system supports two TTS engines:

- **Edge TTS** (default): Microsoft's free TTS service with natural voice quality, supporting Chinese and English.
- **OpenAI TTS**: Requires API key configuration, more natural voice quality but requires payment.

### 5.2 Speech Synthesis Process

1. **Text Preprocessing**: Clean text and handle special characters.
2. **Sentence Segmentation**: Segment by punctuation for better speed and pause control.
3. **Speech Synthesis**: Call TTS engine to generate audio segments.
4. **Audio Concatenation**: Concatenate multiple segments into complete audio.
5. **Post-processing**: Add intervals, adjust volume, etc.

## 6. Usage Scenarios

### 6.1 Daily Practice

Students can directly answer listening questions in the question bank, and the system plays TTS-generated audio.

### 6.2 Exam Simulation

Generate complete listening papers through paper assembly to simulate real exam environments.

### 6.3 Teaching Assistance

Teachers can use TTS to generate listening materials for classroom teaching.

## 7. Notes

- **Text Length**: Single synthesis text should not be too long; it is recommended to process in segments.
- **Special Characters**: Mathematical formulas, symbols, etc. may not be pronounced correctly and require manual processing.
- **Generation Time**: Multi-pass audio generation requires some time; please wait patiently.
- **Storage Space**: Listening audio will occupy storage space; please plan reasonably.

## 8. Related Features

- [Paper Generation](/en/basic/paper) - Learn how to generate listening papers
- [Practice & Grading](/en/basic/judge) - Understand listening question grading rules
- [Calculation Zone](/en/basic/calc) - Learn about other question types
