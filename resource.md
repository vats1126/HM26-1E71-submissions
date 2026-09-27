# HackMysuru 1.0 — Phase 1 Submission Index

> **Team:** Bug Busters  
> **Team ID:** `HM26-1E71`  
> **Problem 01:** Adaptive Learning & Real-Time Intervention Platform  
> **Repository:** `https://github.com/vats1126/HM26-1E71-submissions.git`
>
> This file is the landing page for the submission. It connects the repository documentation, submission artifacts, and the runnable MVPs.

---

## 1. Team Details

| Field | Value |
|---|---|
| Team ID | `HM26-1E71` |
| Team Name | `Bug Busters` |
| College | `Maharaja Institute of Technology Mysore` |
| Team Leader | `Varun P` |
| Repository | `https://github.com/vats1126/HM26-1E71-submissions.git` |

| # | Member | Program & Year | GitHub Handle | Primary Role |
|---|---|---|---|---|
| 1 | `Varun P` | B.E. CSE | `@varunrao246` | Team Lead / Development |
| 2 | `Vivek Urs G A` | B.E. CSE | `@vats1126` | Development |
| 3 | `Syed Naheed Ahmed` | B.E. CSE | `@n4heed` | Development |
| 4 | `Vignesh Kumar M` | B.E. CSE | `@VigneshKumar2709` | Development |

---

## 2. Problem & Solution

**Problem:** `Adaptive Learning & Real-Time Intervention Platform`

Bug Busters built two independent MVPs that demonstrate the same core adaptive-learning architecture from different product directions:

- **KEA** — a structured, standardized adaptive learning experience.
- **AURA Learn** — a visual, interactive learning and intervention experience.
- **Launcher** — a unified gateway that opens either MVP without merging their codebases.

### Core learning loop

```text
Learner
  ↓
Topic / Interest / Profile
  ↓
Prerequisite + Mastery Analysis
  ↓
Personalized Learning Path
  ↓
Adaptive Learning / Practice / Lab
  ↓
Evidence Collection
  ↓
Struggle Detection
  ↓
AI Assistance / Recommendation
  ↓
Human Facilitator Intervention
  ↓
Updated Mastery
  ↺
```

The system is intentionally designed so that AI can generate, explain, contextualize, and recommend, while deterministic application logic remains authoritative over academic state and progression.

---

## 3. Repository Documents

| Document | Purpose |
|---|---|
| [README.md](./README.md) | Overall problem statement, solution overview, users, architecture, product flow, and demo guidance |
| [ai.md](./ai.md) | AI tools used during development, runtime AI architecture, safeguards, fallback behavior, and disclosure |
| [docs/architecture.md](./docs/architecture.md) | System architecture, three-app runtime layout, data flow, APIs, AI boundary, and technology stack |
| [docs/constraints.md](./docs/constraints.md) | Major learning, technical, and operational constraints and how the system addresses them |
| [docs/setup.md](./docs/setup.md) | Installation, environment configuration, local startup, testing, and troubleshooting |
| [docs/limitations.md](./docs/limitations.md) | Known limitations, verification constraints, scale considerations, edge cases, and roadmap |
| [resource.md](./resource.md) | Submission index and reviewer entry point |

---

## 4. Application Structure

The submission contains three independently runnable applications.

```text
HM26-1E71-submissions/
├── Hack Mysuru 1.0/       # KEA
├── AURA-Learn-main/       # AURA Learn
├── launcher/              # Unified gateway
├── start-kea.bat
├── start-aura.bat
├── start-launcher.bat
└── resource.md
```

### Local runtime

| Application | Purpose | Default Port |
|---|---|---:|
| Launcher | Unified entry page | `3000` |
| KEA | Structured adaptive learning MVP | `3001` |
| AURA Learn | Interactive adaptive learning + intervention MVP | `3002` |

Start the launcher first, then run either or both MVPs as needed.

---

## 5. MVP 1 — KEA

KEA is the structured/standardized adaptive learning implementation.

### Demonstration domain

**Organic Chemistry**

```text
Carbon Fundamentals
        ↓
Hydrocarbon Foundations
        ↓
Functional Groups
        ↓
Structure & Isomerism
        ↓
Reactions & Practical Application
```

### Core capabilities

- AI-assisted topic understanding and planning
- Prerequisite-aware learning paths
- Dynamic topic graph
- Diagnostic assessment
- Visual-first learning content
- AI-generated practice and mock tests
- Deterministic mastery calculation
- Adaptive remediation
- Interview/oral assessment flow
- Provider health and fallback behavior

### Runtime AI

KEA currently uses a provider cascade:

```text
Groq
  ↓
NVIDIA NIM
  ↓
Gemini adapter
  ↓
Deterministic fallback
```

Groq and NVIDIA are the currently verified working providers in the submitted implementation. Gemini is retained as an optional provider path.

---

## 6. MVP 2 — AURA Learn

AURA Learn is the more interactive and visual implementation.

### Example learning journey

```text
Student Login
  ↓
Select Interest
  ↓
Personalized Path
  ↓
Prerequisite Gap Identified
  ↓
Prerequisite Practice
  ↓
Adaptive Difficulty
  ↓
AI Contextual Re-theming
  ↓
Virtual Lab
  ↓
Struggle Detection
  ↓
Facilitator Intervention
  ↓
Mastery Improvement
  ↓
Dependent Concept Unlocks
```

### Example concept graph

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

### Key capabilities

- Student onboarding and profile-based personalization
- Interest-driven contextual examples
- Prerequisite knowledge graph
- Mastery-based gating
- Adaptive difficulty
- Practice and virtual labs
- Struggle-signal detection
- Facilitator intervention queue
- AI tutoring/contextual re-theming
- Persistent learner state through the configured database layer

### Academic guardrail for AI re-theming

AI may adapt:

- story/context
- characters
- examples
- vocabulary
- presentation framing

The following remain protected:

- numerical values
- variables
- formulas
- expected answer
- learning objective
- topic
- difficulty

---

## 7. Unified Launcher

The launcher is intentionally lightweight.

It:

1. identifies the Bug Busters submission,
2. presents KEA and AURA Learn as separate products,
3. opens each application independently,
4. avoids coupling the two MVP codebases.

Default destinations:

```text
KEA  → http://localhost:3001
AURA → http://localhost:3002
```

The AURA destination can be configured through:

```text
NEXT_PUBLIC_AURA_URL
```

---

## 8. Reviewer Paths

### KEA — structured adaptive flow

```text
Launcher
  ↓
KEA
  ↓
Select / load topic
  ↓
Topic understanding + prerequisite graph
  ↓
Diagnostic
  ↓
Personalized learning path
  ↓
Visual learning
  ↓
Practice / assessment
  ↓
Mastery update
  ↓
Remediation or next concept
```

### AURA Learn — intervention flow

```text
Launcher
  ↓
AURA Learn
  ↓
Student onboarding
  ↓
Choose an interest
  ↓
Open the learning path
  ↓
Inspect prerequisite/mastery state
  ↓
Practice a weak concept
  ↓
Observe contextual re-theming
  ↓
Use the virtual lab
  ↓
Trigger struggle signals
  ↓
Open facilitator intervention view
```

---

## 9. Core Technical Design

### Deterministic responsibilities

Application logic remains authoritative for:

- prerequisite relationships
- mastery thresholds
- progression/unlocking
- difficulty state transitions
- intervention state
- authentication/authorization
- database integrity
- assessment answer-key protection

### AI responsibilities

AI is used for tasks such as:

- topic understanding
- explanation generation
- contextual examples
- personalized re-theming
- adaptive educational content
- recommendations
- tutor-style assistance

This separation reduces the risk of an LLM directly changing authoritative learner state.

---

## 10. Technology Stack

| Layer | KEA | AURA Learn | Launcher |
|---|---|---|---|
| Frontend | Next.js + React + TypeScript | Next.js + React + TypeScript | Next.js + React + TypeScript |
| Styling | Tailwind CSS + shadcn/ui | Tailwind CSS | Tailwind CSS |
| Backend | Next.js Route Handlers | Next.js API routes | Minimal Next.js app |
| Data | App-managed learning data / runtime state | Supabase PostgreSQL + application state | Configuration only |
| Runtime AI | Groq / NVIDIA NIM / Gemini adapter / fallback | Configured LLM AI layer | None |
| Labs / Visuals | Interactive learning UI | Virtual labs / interactive UI | None |

---

## 11. Data Sources

The submitted MVPs use:

- curated curriculum/topic definitions
- prerequisite and concept graphs
- structured lesson/question/lab content
- runtime learner performance evidence
- mastery and struggle signals
- configured persistent learner state in AURA
- deterministic assessment and progression rules
- runtime AI-generated educational assistance where enabled

No external dataset is required for the core demonstration flow.

---

## 12. AI Disclosure

See [ai.md](./ai.md) for the complete disclosure.

The development workflow used AI-assisted tools including ChatGPT, Claude Code, Antigravity IDE, OpenRouter, and Ollama.

The submitted product architecture does **not** delegate authoritative academic progression to an LLM.

---

## 13. Resilience / Degraded Mode

The system distinguishes between core learning logic and external AI services.

```text
Core application logic
        ↓
Can continue with predefined / deterministic content
```

```text
Optional personalization
        ↓
External LLM provider
        ↓
Generated contextual content
```

When an external AI provider is unavailable, supported flows can fall back to predefined or deterministic educational behavior rather than making the learner dependent on a live model for every action.

---

## 14. Submission Artifacts

Update the table below with the final Google Drive URLs and verified hashes before submission freeze.

| # | Artifact | Google Drive Link | File Name | SHA-256 |
|---:|---|---|---|---|
| 1 | Pitch + Code Walkthrough Video | `PASTE_FINAL_DRIVE_LINK` | `HM26-1E71_video.mp4` | `VERIFY_BEFORE_SUBMISSION` |
| 2 | Decision Log | `PASTE_FINAL_DRIVE_LINK` | `HM26-1E71_decision-log.pdf` | `VERIFY_BEFORE_SUBMISSION` |
| 3 | Presentation | `PASTE_FINAL_DRIVE_LINK` | `HM26-1E71_presentation.pdf` | `VERIFY_BEFORE_SUBMISSION` |

> Do not replace placeholders with unverified values.

---

## 15. Video Chapters

Use the final recorded timestamps once the video is locked.

| Timestamp | Section |
|---|---|
| `00:00` | Problem + target users |
| `00:40` | Product overview |
| `01:30` | KEA demonstration |
| `03:30` | AURA Learn demonstration |
| `05:30` | Architecture + learning loop |
| `06:30` | Adaptive logic + struggle detection |
| `07:30` | Human-in-the-loop intervention |
| `08:15` | AI architecture + safeguards |
| `09:00` | Limitations + fallback + closing |

---

## 16. Declaration Checklist

- [ ] Every Google Drive link opens with Viewer access in an incognito/private window.
- [ ] Final filenames match the values listed above.
- [ ] SHA-256 values have been calculated from the exact submitted files.
- [ ] The AI disclosure in [ai.md](./ai.md) matches actual development-time and runtime AI usage.
- [ ] No `.env`, `.env.local`, secrets, API keys, or generated dependency folders are committed.
- [ ] The final repository corresponds to `HM26-1E71`.
- [ ] The final presentation and decision log match the submitted implementation.
- [ ] The final video is within the hackathon's permitted duration.
- [ ] All final submission links and hashes have been checked before the submission deadline.

---

## 17. Quick Start

From `D:\Hackathon`:

```powershell
.\start-launcher.bat
```

Then run the required MVPs:

```powershell
.\start-kea.bat
.\start-aura.bat
```

For manual setup, environment variables, AI configuration, testing, and troubleshooting, see [docs/setup.md](./docs/setup.md).

---

## 18. Team Submission

**Submitted by:** `Bug Busters`  
**Team ID:** `HM26-1E71`  
**College:** `Maharaja Institute of Technology Mysore`  
**Submission Date:** `27-09-2026`
