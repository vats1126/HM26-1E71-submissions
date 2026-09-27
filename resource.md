Yes. I’ll keep the **HackMysuru template structure**, fill in the details we already have, use the **AURA Learn / Problem 01** information, and set the submitted time to **27-09-2026, 09:00 AM IST**.

For fields where you have not given me verified information (especially individual primary roles and final SHA-256 values), I won't invent them.

````markdown
# HackMysuru 1.0 — Phase 1 Submission Index

> **This is the landing file for your submission.** Reviewers open this file first.
> Every evaluation artifact is uploaded to **Google Drive** and linked below.
> Freeze: **20 September 2026, 23:59 IST.** Anything not linked here before the freeze does not exist for judging.

---

## 1. Team Details

| Field | Value |
|---|---|
| Team ID (from dashboard) | `HM26-1E71` |
| Team Name | `Bug Busters` |
| College(s) | `Maharaja Institute of Technology Mysore` |
| Team Leader | `Varun P` · `varunrao246@gmail.com` · `9108365820` |
| Repository | `https://github.com/vats1126/HM26-1E71-submission.git` |

| # | Member | Program & Year | GitHub Handle | Primary Role |
|---|---|---|---|---|
| 1 | `Varun P` (Lead) | `B.E. CSE, 3rd Year` | `@varunrao246` | `Team Lead / Development` |
| 2 | `Vivek Urs G A` | `B.E. CSE, 3rd Year` | `@vats1126` | `Development` |
| 3 | `Syed Naheed Ahmed` | `B.E. CSE, 3rd Year` | `@n4heed` | `Development` |
| 4 | `Vignesh Kumar M` | `B.E. CSE, 3rd Year` | `@VigneshKumar2709` | `Development` |

---

## 2. What We Built

**Sub-problem:** `Own: Adaptive Learning & Real-Time Intervention`

**In one sentence:**

> **AURA Learn is an adaptive learning platform that continuously uses prerequisite mastery, learning performance, student interests and struggle signals to personalize the learning path, adapt educational content and difficulty, and bring the right human facilitator intervention at the right time.**

### Core Learning Loop

```text
Student Profile
      ↓
Prerequisite Analysis
      ↓
Mastery-Based Learning Path
      ↓
Adaptive Content & Difficulty
      ↓
Practice / Virtual Lab
      ↓
Struggle Detection
      ↓
AI Recommendation
      ↓
Facilitator Intervention
      ↓
Updated Mastery
      ↺
````

AURA Learn addresses the problem that students learn at different speeds and often have different prerequisite gaps, while traditional learning systems commonly provide the same content and pace to everyone.

---

## 3. Repository Documents

| Document                                       | What it covers                                                                                        |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [README.md](./README.md)                       | Problem statement, users, solution, architecture, learning flow, adaptive system and project overview |
| [ai.md](./ai.md)                               | AI tools used during development and AI/ML capabilities used inside the product                       |
| [docs/architecture.md](./docs/architecture.md) | System architecture, components, data flow, data model, APIs and technology stack                     |
| [docs/constraints.md](./docs/constraints.md)   | Approach to the major technical and operational constraints                                           |
| [docs/setup.md](./docs/setup.md)               | Local installation, configuration, seed data and testing instructions                                 |
| [docs/limitations.md](./docs/limitations.md)   | Known limitations, edge cases and future improvements                                                 |
| [resource-templates/](./resource-templates/)   | Templates and guides for the video, decision log and presentation                                     |

---

## 4. Submission Artifacts (Google Drive)

| # | Artifact                                                                              | Google Drive Link                                                                    | File Name                    | SHA-256 (first 16 chars) |
| - | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------ |
| 1 | [Pitch + Code Walkthrough Video](./resource-templates/video-guide.md) (≤ 10 min, MP4) | `https://drive.google.com/file/d/1HumxC8fk8K-4Qp_N2Bmoku-8l4hBD0NA/view?usp=sharing` | `HM26-1E71_video.mp4`        | `6e9f2d3caa7e5826`       |
| 2 | [Decision Log](./resource-templates/decision-log-template.md) (1 page, PDF)           | `https://drive.google.com/file/d/1cUwGwFHDXj768JwydzTUckeXcGAiZAg6/view?usp=sharing` | `HM26-1E71_decision-log.pdf` | `0d66b58f6b79075e`       |
| 3 | [Presentation](./resource-templates/presentation-template.md) (≤ 10 slides, PDF)      | `https://docs.google.com/presentation/d/1aRA1lhd1HYL8aMpBU9cYJSX3kfYV3API/edit?usp=sharing&ouid=103593359005141101155&rtpof=true&sd=true` | `HM26-1E71_presentation.pdf` | `dc9e4072f3ca79ab`       |

---

## Video Chapters

| Timestamp | Section                                                    |
| --------- | ---------------------------------------------------------- |
| `00:00`   | Part 1: Problem & target users                             |
| `00:40`   | Part 1: AURA Learn overview and student experience         |
| `01:50`   | Part 1: Personalized learning path and prerequisite gating |
| `02:30`   | Part 1: Adaptive difficulty and AI contextual re-theming   |
| `03:00`   | Part 2: Architecture overview                              |
| `04:30`   | Part 2: Data model, mastery and APIs                       |
| `05:30`   | Part 2: Struggle detection and facilitator intervention    |
| `07:30`   | Part 2: Key implementation decisions & trade-offs          |
| `08:30`   | Part 2: Scaling, limitations and fallback behavior         |
| `09:15`   | Part 2: AI usage (see [ai.md](./ai.md))                    |

---

## 5. Live MVP

| Field                    | Value                                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |                                                                                                              |
| Platform                 | `Web Application / PWA`                                                                                                                                                |                                                                                                                                                           
| Backend / Database       | `Supabase`                                                                                                                                                             |
| Test login               | `Use the application's available demo/test authentication flow`                                                                                                        |
| Sample data loaded?      | `Yes — synthetic/demo data for demonstrating the adaptive learning workflow`                                                                                           |
| How to test offline mode | `Open the application, disconnect the network or enable airplane mode, and verify the supported offline learning workflow. Full steps are available in docs/setup.md.` |
| If the live link is down | Follow [docs/setup.md](./docs/setup.md) to run the application locally                                                                                                 |

---

## 6. Quick Reviewer Path (≤ 3 minutes)

The following path demonstrates the core value of AURA Learn:

1. **Open the live URL** and enter the student-facing application.
2. **Enter the student learning flow** and view the personalized dashboard and learning path.
3. **Open a topic such as Ohm's Law** and observe prerequisite/mastery-based progression.
4. **Attempt questions** and observe adaptive difficulty and personalized contextual content.
5. **Trigger/view the struggle and intervention flow**, then open the facilitator interface to see the recommended intervention.

### Key Features to Observe

* Student onboarding
* Interest-based personalization
* Personalized student dashboard
* Prerequisite knowledge graph
* Mastery-based gating
* Adaptive difficulty
* AI contextual re-theming
* Virtual lab integration
* Struggle detection
* Facilitator intervention
* Student progress tracking

---

## 7. Core Problem Statement Alignment

### 7.1 Prerequisite Knowledge Graph & Mastery Gating

AURA Learn represents concepts as a prerequisite graph rather than a flat list of lessons.

Example:

```text
Electric Current
       ↓
Voltage
       ↓
Resistance
       ↓
Ohm's Law
       ↓
Circuits
```

Students must demonstrate sufficient prerequisite mastery before dependent concepts are unlocked.

---

### 7.2 AI-Driven Dynamic Context Re-Theming

Students can select interests such as:

* Space
* Sports
* Gaming
* Animals
* Technology
* Environment
* Art

AURA uses runtime AI to adapt educational context around the student's interests.

The AI can change:

* Story
* Context
* Characters
* Examples
* Vocabulary

The AI must preserve:

* Numerical values
* Variables
* Formula
* Expected answer
* Learning objective
* Topic
* Difficulty

---

### 7.3 Human-in-the-Loop Real-Time Intervention

AURA detects learner struggle and provides an actionable recommendation to the facilitator.

```text
AI / System detects struggle
          ↓
Reason is identified
          ↓
Recommendation generated
          ↓
Facilitator reviews
          ↓
Facilitator decides action
```

The system is designed to assist teachers rather than replace them.

---

### 7.4 Architectural Coherence

The platform connects all major components into one continuous learning loop:

```text
Student Profile
      ↓
Curriculum Graph
      ↓
Mastery Engine
      ↓
Adaptive Learning
      ↓
Practice / Virtual Lab
      ↓
Struggle Detection
      ↓
Facilitator Intervention
      ↓
Updated Mastery
      ↺
```

---

## 8. Demonstration Topics

The MVP demonstrates the adaptive learning concept using representative educational topics.

### Physics — Ohm's Law

```text
Electric Current
      ↓
Voltage
      ↓
Resistance
      ↓
Ohm's Law
      ↓
Circuits
```

Demonstrates:

* Prerequisite gating
* Adaptive questions
* Difficulty adaptation
* AI re-theming
* Virtual lab
* Struggle detection
* Facilitator intervention

### Chemistry — Acid–Base Titration

```text
Acids & Bases
      ↓
pH
      ↓
Indicators
      ↓
Titration
```

Demonstrates:

* Concept learning
* Virtual laboratory experience
* Practice
* Mastery progression

### Biology — Human Senses

```text
Sense Organs
      ↓
Stimulus
      ↓
Sensory Receptors
      ↓
Brain Response
```

Demonstrates student-friendly contextual learning.

---

## 9. Primary Demonstration Scenario

### Student: Aarav

```text
Aarav logs in
      ↓
Selects Space as an interest
      ↓
AURA creates a personalized learning path
      ↓
Resistance is identified as a weak prerequisite
      ↓
Ohm's Law remains locked
      ↓
Aarav practices Resistance
      ↓
AURA re-themes content around Space
      ↓
Aarav enters the Virtual Lab
      ↓
Aarav makes repeated mistakes
      ↓
Struggle Score increases
      ↓
AURA recommends intervention
      ↓
Facilitator sees Aarav in intervention queue
      ↓
Facilitator assigns prerequisite refresher
      ↓
Aarav completes the activity
      ↓
Mastery increases
      ↓
Ohm's Law unlocks
```

---

## 10. Technology Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Frontend     | `Next.js`                           |
| UI           | `React + TypeScript + Tailwind CSS` |
| Backend      | `Next.js API Routes`                |
| Database     | `Supabase PostgreSQL`               |
| Runtime AI   | `OpenRouter / configured LLM API`   |
| Deployment   | `Vercel`                            |
| Virtual Labs | `HTML / CSS / JavaScript`           |

---

## 11. Key Technical Components

### Mastery Engine

AURA tracks learner mastery using multiple learning signals.

The proposed model considers:

```text
Quiz Accuracy
Recent Performance
Prerequisite Mastery
Retention
Virtual Lab Performance
```

Mastery states:

```text
0–39    Not Ready
40–59   Learning
60–79   Proficient
80–100  Mastered
```

### Adaptive Difficulty

```text
High recent performance
        ↓
Increase difficulty
```

```text
Moderate performance
        ↓
Maintain difficulty
```

```text
Low performance
        ↓
Reduce difficulty
+
Check prerequisites
```

### Struggle Detection

The system considers:

* Repeated incorrect answers
* Low accuracy
* Excessive time
* Hint dependency
* Prerequisite weakness
* Repeated topic difficulty

Risk levels:

```text
0–39    Normal
40–59   Watch
60–79   Intervention Recommended
80+     Immediate Facilitator Attention
```

---

## 12. AI Architecture

Runtime AI is intentionally separated from deterministic learning logic.

```text
              AURA LEARN
                   │
        ┌──────────┴──────────┐
        │                     │
 Deterministic Logic       Runtime AI
        │                     │
        ├── Prerequisites     ├── Context
        ├── Mastery           ├── Examples
        ├── Progression       └── Re-theming
        ├── Difficulty
        └── Intervention
```

The LLM does **not** control:

* Prerequisite unlocking
* Mastery thresholds
* Authentication
* Authorization
* Core progression
* Database integrity
* Final facilitator decisions

See [ai.md](./ai.md) for the complete AI usage disclosure.

---

## 13. Offline / Resilience Approach

AURA is designed so that the core learning experience is not completely dependent on external AI availability.

Where supported:

```text
Local / Cached Educational Content
              ↓
       Core Learning Flow
```

Runtime AI:

```text
Student Request
      ↓
External LLM API
      ↓
Personalized Content
```

If the external AI service is unavailable, the application can fall back to predefined educational content instead of blocking the learner.

---

## 14. Declaration

* [ ] All Drive links open in an incognito/private window with **Viewer** access and do not require access requests.
* [ ] The video is one continuous recording, ≤ 10 minutes, with Part 1 followed by Part 2.
* [ ] The decision log is one page and written by the team in our own words.
* [ ] All AI tools used during development and all AI/ML used inside the product are disclosed in [`ai.md`](./ai.md).
* [ ] No code specific to this challenge was written before **18 September 2026, 00:00 IST**.
* [ ] We will not modify or replace any linked submission artifact after **20 September 2026, 23:59 IST**.
* [ ] Final Google Drive links, filenames and SHA-256 values have been verified.
* [ ] The final application and documentation correspond to the submitted Problem 01 solution.

---

**Submitted by:** `Varun P`
**Team:** `Bug Busters`
**Team ID:** `HM26-1E71`
**College:** `Maharaja Institute of Technology Mysore`
**Date/Time (IST):** `27-09-2026 09:00 AM`

```
```
