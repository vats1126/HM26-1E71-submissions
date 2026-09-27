# KEA × AURA Learn — Two adaptive-learning experiences, one vision

> HackMysuru 1.0 · Phase 2 · Adaptive Learning & Real-Time Intervention Platform · Problem 01  
> Team `Bug Busters` (`HM26-1E71`)

| 📎 Submission links | 📋 Templates | 🏗️ Architecture | 🛡️ Hard constraints | ⚙️ Setup | 🤖 AI usage | ⚠️ Limitations |
|---|---|---|---|---|---|---|
| [resource.md](./resource.md) | [resource-templates/](./resource-templates/) | [docs/architecture.md](./Hack%20Mysuru%201.0/docs/ARCHITECTURE.md) | [docs/limitations.md](./docs/limitations.md) | [docs/setup.md](./docs/setup.md) | [ai.md](./ai.md) | [docs/limitations.md](./docs/limitations.md) |

---

## 1. Problem Understanding & Sub-problem

**Chosen problem:** Adaptive Learning & Real-Time Intervention Platform

- **The gap we saw:** Traditional learning often follows a fixed syllabus and pace, even when a learner has missing prerequisites or already understands part of the material.
- **Why it matters:** Hidden prerequisite gaps can compound into later difficulty, while facilitators may discover learning problems only after formal assessments.
- **Our response:** Build adaptive learning systems that begin from the learner's goal, establish what they already know, and adjust the path using evidence.
- **What “solved” looks like for us:** A learner can start with a topic, receive a structured path, learn and be assessed, and then be routed toward advancement, scaffolding, remediation, or human intervention based on demonstrated understanding.

## 2. Target Users & Learning Context

| User | Their situation | What they need from us |
|---|---|---|
| Learner | Different prior knowledge, interests, pace, and learning needs | A learning path that starts from their current understanding and adapts as they progress |
| Facilitator / learning coach | Supports multiple learners and cannot manually inspect every interaction | Clear signals about struggle, misconceptions, and concrete intervention actions |

**Learning context we designed for:** Topic-agnostic learning, prerequisite-aware progression, multi-modal assessment, interactive learning, adaptive pacing, and human-in-the-loop intervention.

## 3. Solution Overview & Core Journey

**Bug Busters built two independent MVPs around the same adaptive-learning vision.**

**KEA** provides a structured, standardized learning experience centered on topic understanding, prerequisite graphs, mastery, assessment, and adaptive routing.

**AURA Learn** provides a more interactive and visually engaging learning experience around the same broader goal of adaptive education.

**Core journey:**

1. **Learner enters a topic or learning goal.**
2. **The system identifies concepts, prerequisites, and a learning path.**
3. **The learner learns and produces evidence through practice and assessment.**
4. **The system updates the learning state and adapts the next action.**

**Product relationship:**

```text
                     BUG BUSTERS
                          │
                Adaptive Learning Vision
                     /                                /                                KEA          AURA Learn
                   │                │
             Structured        Interactive
             Adaptive MVP      Adaptive MVP
```

**Screenshots:** Add 2–4 verified product screenshots under the repository documentation/assets folder.

## 4. Architecture

**Two independent MVP applications are presented through a lightweight launcher. KEA uses a Next.js/TypeScript adaptive-learning engine with AI orchestration plus deterministic learning-state controls.**

### KEA learning pipeline

```text
Learner Topic
     ↓
AI Topic Understanding
     ↓
Prerequisite / Diagnostic Check
     ↓
Dynamic Stage-Wise Plan
     ↓
Interactive Learning
     ↓
Assessment
     ↓
Deterministic Mastery
     ↓
Adaptive Routing
     ↓
Knowledge Graph Progression
```

### KEA technical boundary

```text
AI Layer
  ├─ Topic understanding
  ├─ Concept / prerequisite generation
  ├─ Explanations
  ├─ Practice generation
  └─ Semantic evaluation

Deterministic Layer
  ├─ Schema & graph validation
  ├─ Prerequisite gating
  ├─ Objective answer validation
  ├─ Mastery calculation
  └─ Progression control
```

### Local application relationship

```text
Launcher :3000
   ├──→ KEA         :3001
   └──→ AURA Learn  :3002
```

➡️ Detailed KEA architecture: **[Hack Mysuru 1.0/docs/ARCHITECTURE.md](./Hack%20Mysuru%201.0/docs/ARCHITECTURE.md)**

## 5. Tech Stack & AI Usage

**KEA stack:** Next.js · React · TypeScript · Tailwind CSS · shadcn/ui · Lucide · Next Themes · Next.js Route Handlers · Web Speech API

**KEA AI layer:** Google Gemini adapter · Groq · NVIDIA NIM · deterministic fallback provider · structured output validation · AI orchestration

**KEA learning engine:** Knowledge Graph DAG · deterministic prerequisite gating · W-EMM mastery engine · adaptive pace and intervention logic · chemistry domain validation

**AURA Learn:** Separate Next.js/React-based MVP with its own learning, AI, curriculum, facilitator, and interactive lab components.

**AI tools used in development:** Codex · Hermes · Google Antigravity · ChatGPT

**AI inside the products:** AI is used for topic understanding, content generation, semantic evaluation, tutoring/re-theming, and adaptive assistance; deterministic code governs critical progression and mastery decisions in KEA.

➡️ Full disclosure: **[ai.md](./ai.md)**

## 6. Decision Log (Summary)

- **Chose:** Unified fullstack TypeScript architecture for KEA, with AI behind an abstraction layer and deterministic progression controls.
- **Over:** A separate Python/FastAPI service and heavier multi-service infrastructure.
- **Because:** Keeping the critical learning loop in one typed application reduces cross-service failure points while preserving clear AI/deterministic boundaries.

➡️ Full decision log: **[resource.md](./resource.md#4-submission-artifacts-google-drive)** · Template: **[resource-templates/decision-log-template.md](./resource-templates/decision-log-template.md)**

## 7. Setup & Run

```bash
git clone <repo-url>
cd <repo>
```

### KEA

```bash
cd "Hack Mysuru 1.0"
npm install
npm run dev -- -p 3001
```

### AURA Learn

```bash
cd "../AURA-Learn-main"
npm install
npm run dev -- -p 3002
```

### Launcher

```bash
cd "../launcher"
npm install
npm run dev -- -p 3000
```

### Local flow

Open:

```text
http://localhost:3000
```

The Bug Busters launcher provides the entry point to both independent MVPs:

```text
localhost:3000
      ├──→ KEA          :3001
      └──→ AURA Learn   :3002
```

Do not commit local environment files containing API credentials. Use `.env.example` files and configure secrets locally.

➡️ Prerequisites, environment variables, and testing: **[docs/setup.md](./docs/setup.md)**

## 8. Known Limitations & Roadmap

**Known limitations**

- KEA and AURA Learn are currently independent MVP codebases rather than one merged learning engine.
- Live AI behavior depends on external model/provider availability; KEA includes fallback behavior for resilience.
- Browser-native speech capture depends on browser/device support.
- Some browser validation requires manual verification in the local environment.

**Roadmap**

| Stage | Planned work |
|---|---|
| **Next** | Expand topic coverage · deepen interactive learning experiences · improve adaptive evidence flows |
| **Scale** | Stronger learner models · richer analytics · improved deployment resilience · production infrastructure |
| **Later** | More learning modalities · multilingual learning · broader integrations and facilitator workflows |

➡️ Full list, edge cases and roadmap: **[docs/limitations.md](./docs/limitations.md)**

---

## Team

| Name | Role | GitHub |
|---|---|---|
| Syed Naheed Ahmed | Developer | [@n4heed](https://github.com/n4heed) |
| Varun P | Developer | [@varunrao246](https://github.com/varunrao246) |
| Vivek Urs G A | Developer | [@vats1126](https://github.com/vats1126) |
| Vignesh Kumar M | Developer | [@VigneshKumar2709](https://github.com/VigneshKumar2709) |

## License

`Not specified in the supplied project details.`

You retain full ownership of your code.