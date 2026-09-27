Absolutely. Below is **one single complete `README.md` file**, with all 36 sections combined into one copyable block.

````markdown
# AURA Learn

> **Learn your way. Master at your pace.**

**HackMysuru 1.0 — Problem 01**  
**Track:** EdTech · Personalized Learning & Intelligent Systems  
**Team:** Bug Busters  
**Team ID:** `HM26-1E71`

---

# 1. Project Overview

**AURA Learn (Adaptive Understanding & Responsive Assistance)** is an AI-powered adaptive learning platform designed to create a personalized learning path for every student.

Traditional learning systems often provide the same content, difficulty, and pace to every learner. AURA Learn instead continuously considers:

- Prerequisite mastery
- Learning pace
- Accuracy
- Repeated mistakes
- Time spent
- Hint dependency
- Student interests
- Engagement
- Confidence

The platform uses these signals to adapt the learning journey and recommend human intervention when a learner begins to struggle.

### Core Principle

> **Every student gets a different path to the same learning outcome.**

---

# 2. Problem Statement

## Adaptive Learning & Real-Time Intervention Platform

Students learn at different speeds and have different levels of prior knowledge. Traditional learning systems often provide the same content and pace to everyone, making it difficult to identify prerequisite gaps, adapt difficulty, or intervene before a student falls behind.

Problem 01 requires a system that can:

1. Understand prerequisite relationships between concepts.
2. Gate progression based on demonstrated mastery.
3. Adapt educational content around student interests.
4. Detect when a student is struggling.
5. Provide actionable recommendations to a facilitator.
6. Connect all these components into one coherent adaptive learning system.

AURA Learn addresses these requirements through:

- Curriculum knowledge graph
- Mastery engine
- Mastery-based gating
- Adaptive difficulty
- AI contextual re-theming
- Struggle detection
- Human-in-the-loop intervention
- Virtual learning experiences

---

# 3. Core Learning Loop

```text
Understand
    ↓
Adapt
    ↓
Practice
    ↓
Detect Struggle
    ↓
Intervene
    ↓
Master
    ↓
Re-assess
    ↺
````

AURA continuously closes this loop instead of treating learning as a one-time lesson followed by an exam.

---

# 4. Problem Statement Alignment

## 4.1 Prerequisite Knowledge Graph & Mastery Gating

AURA represents learning as a **prerequisite graph**, rather than a flat chapter list.

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

A learner cannot freely jump to a concept when a required prerequisite has not been sufficiently mastered.

The system:

* Tracks prerequisite relationships
* Calculates topic mastery
* Locks and unlocks concepts
* Identifies missing prerequisites
* Recommends remediation
* Tracks mastery over time

Example:

```text
Voltage              ✓ Mastered
    ↓
Resistance           ⚠ Learning
    ↓
Ohm's Law            🔒 Locked
    ↓
Circuits             🔒 Locked
```

If a student attempts to open a locked concept:

> **AURA noticed a prerequisite gap.**
>
> Resistance needs more practice before you continue to Ohm's Law.

The learner is redirected toward the required prerequisite.

---

## 4.2 AI-Driven Dynamic Context Re-Theming

Students can select interests such as:

* 🚀 Space
* ⚽ Sports
* 🎮 Gaming
* 🐾 Animals
* 💻 Technology
* 🌍 Environment
* 🎨 Art

AURA uses AI to adapt the **context and narrative** of educational content around those interests.

### Example

#### Original

> A circuit has a 12V source and 6Ω resistance. Calculate the current.

#### Space Theme

> Imagine a spacecraft instrument powered by a 12V supply with 6Ω resistance. Calculate the current.

The AI changes the story and context while preserving academic correctness.

### AI may change

* Story
* Characters
* Examples
* Context
* Vocabulary

### AI must preserve

* Numerical values
* Variables
* Formula
* Expected answer
* Learning objective
* Academic concept
* Difficulty level

A validation layer checks generated content before it reaches the learner.

---

## 4.3 Human-in-the-Loop Real-Time Intervention

AURA is designed to **assist teachers, not replace them**.

```text
AI detects
    ↓
AI explains why
    ↓
AI recommends action
    ↓
Human facilitator decides
```

When a student repeatedly struggles, the facilitator receives an actionable recommendation instead of simply seeing a low score.

Example:

```text
⚠ HIGH INTERVENTION RISK

Student: Aarav
Topic: Ohm's Law

Struggle Score: 86%

Main Issue:
Resistance prerequisite

Recommended Action:
Assign prerequisite refresher
+ Virtual Lab
```

The facilitator can:

* View the student
* Assign a remedial activity
* Recommend a virtual lab
* Send encouragement
* Start an intervention
* Mark an intervention as resolved

---

## 4.4 Architectural Coherence & End-to-End Synergy

All major components operate as one continuous adaptive system:

```text
Student Profile
       ↓
Curriculum / Prerequisite Graph
       ↓
Mastery Engine
       ↓
Adaptive Content
       ↓
Practice / Virtual Lab
       ↓
Struggle Detection
       ↓
AI Intervention Recommendation
       ↓
Facilitator
       ↓
Updated Student Mastery
       ↺
```

This connects learning, assessment, personalization and intervention into a single feedback loop.

---

# 5. Student Experience

AURA is designed around a modern, student-friendly learning experience.

## Student Onboarding

The student provides:

* Name
* Grade
* School (optional)

The learner can then select interests:

```text
🚀 Space
⚽ Sports
🎮 Gaming
🐾 Animals
💻 Technology
🌍 Environment
🎨 Art
```

Optional learning preferences include:

* Visual
* Practice-first
* Explanation-first
* Interactive

These preferences contribute to the learner profile.

---

# 6. Student Dashboard

The dashboard provides a personalized view of the learner's progress.

## Learning Pulse

Displays:

* Overall mastery
* Learning streak
* Current topic
* Weekly improvement
* Current learning pace

Example:

```text
MASTERY

72%

██████████████░░░░
+8% this week
```

## Continue Learning

```text
⚡ Ohm's Law

72% complete

[ Continue Learning → ]
```

## Recommended For You

Examples include:

* Resistance refresher
* Continue Ohm's Law
* Try virtual lab
* Practice weak concept

---

# 7. Student Learning Profile

AURA's learner profile goes beyond marks.

Example:

```text
Learning Pace       82%
Concept Mastery     74%
Confidence          61%
Engagement          89%
Practice Accuracy   81%
```

### Strengths

* Visual examples
* Real-world scenarios
* Interactive experiments

### Needs Attention

* Mathematical application
* Multi-step problems

---

# 8. Knowledge Graph

AURA represents curriculum concepts as a structured graph.

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

Each concept can have:

* Prerequisites
* Mastery state
* Difficulty
* Learning objectives
* Related questions
* Learning activities

### Concept States

```text
✓ Mastered
⚡ Learning
⚠ Needs Attention
🔒 Locked
```

The graph prevents students from progressing through critical concepts without demonstrating sufficient prerequisite understanding.

---

# 9. Mastery Engine

AURA uses a transparent mastery model instead of relying entirely on an unexplained AI-generated score.

The proposed mastery model is:

```text
Mastery Score =

40% Quiz Accuracy
+ 20% Recent Performance
+ 15% Prerequisite Mastery
+ 15% Retention
+ 10% Virtual Lab Performance
```

### Mastery States

```text
0–39    Not Ready
40–59   Learning
60–79   Proficient
80–100  Mastered
```

Mastery determines whether the learner should:

* Advance
* Continue practicing
* Revisit a prerequisite
* Receive additional support

---

# 10. Adaptive Difficulty

Question difficulty changes according to recent learner performance.

```text
5/5 correct
     ↓
Increase difficulty
```

```text
3/5 correct
     ↓
Maintain difficulty
```

```text
1/5 correct
     ↓
Reduce difficulty
     +
Check prerequisites
```

### Example — Ohm's Law

#### Level 1

Identify voltage, current and resistance.

#### Level 2

Apply the basic relationship.

#### Level 3

Calculate a missing variable.

#### Level 4

Solve a multi-step circuit problem.

This allows the learner to progress at an appropriate pace rather than following one fixed difficulty curve.

---

# 11. Struggle Detection Engine

AURA attempts to identify learning difficulty before it becomes a larger learning gap.

The system considers signals such as:

* Repeated incorrect answers
* Low accuracy
* Excessive time
* Repeated hints
* Repeated topic revisits
* Skipped questions
* Prerequisite weakness

### Struggle Score

```text
Struggle Score =

25% Repeated Errors
+ 25% Low Accuracy
+ 20% Excessive Time
+ 15% Prerequisite Weakness
+ 15% Hint Dependency
```

### Risk Levels

```text
0–39    Normal
40–59   Watch
60–79   Intervention Recommended
80+     Immediate Facilitator Attention
```

---

# 12. AI Intervention System

When the struggle score reaches an intervention threshold, AURA provides a concrete next action.

Example:

```text
⚠ AURA Intervention

You seem to be struggling with the relationship
between voltage and resistance.

Recommended:

[ Try Simpler Explanation ]
[ Practice Prerequisite ]
[ Open Virtual Lab ]
[ Ask Facilitator ]
```

The goal is not simply to show:

> "Your score is low."

Instead, the system attempts to identify the likely cause and recommend what should happen next.

---

# 13. AI Contextual Re-Theming

AURA provides structured academic information to the AI.

Example:

```json
{
  "topic": "Ohm's Law",
  "question": "Calculate current for V=12V and R=6Ω",
  "correctAnswer": "2A",
  "difficulty": 2,
  "learningObjective": "Apply Ohm's Law",
  "studentInterest": "Space"
}
```

The AI generates a new narrative around the same academic structure.

### Guardrails

The generated content must preserve:

* Numerical values
* Mathematical relationships
* Answer
* Learning objective
* Difficulty
* Required reasoning

If validation fails, the generated content is discarded and the original content is used.

---

# 14. Virtual Labs

AURA integrates existing HTML virtual labs into the learning experience.

```text
AURA Lesson
     ↓
Concept
     ↓
Practice
     ↓
Virtual Lab
     ↓
Lab Result
     ↓
Mastery Update
```

Target demonstrations include:

* Ohm's Law Lab
* Acid–Base Titration Lab
* Other available HTML virtual labs

Where full lab-result integration is not required for the prototype, lab completion can be recorded as a learning event.

---

# 15. Facilitator Dashboard

The facilitator dashboard focuses on identifying:

* Who needs help
* Why they need help
* What intervention is recommended
* What action has already been taken

## Class Overview

```text
CLASS 5A

Students              32
On Track              24
Needs Attention        6
Critical               2
```

## Intervention Queue

```text
🔴 HIGH PRIORITY

Aarav

Topic:
Ohm's Law

Struggle Score:
91%

Repeated Mistakes:
Voltage / Resistance

Prerequisite:
Resistance — Weak

Recommendation:
Assign prerequisite refresher

[ View Student ]
[ Assign Activity ]
[ Contact Student ]
```

---

# 16. Facilitator Student View

The facilitator can inspect an individual student's learning state.

```text
Aarav

Mastery
████████░░ 78%

Current Topic
Ohm's Law

Strengths
✓ Current
✓ Voltage

Weaknesses
⚠ Resistance

Recent Activity
3 incorrect attempts
2 hints
1 skipped question

AURA Recommendation
Assign prerequisite refresher
```

### Facilitator Actions

* Assign lesson
* Assign lab
* Send message
* Start intervention
* Mark resolved

---

# 17. Human Intervention Lifecycle

AURA models intervention as a continuous lifecycle:

```text
Detected
   ↓
Recommended
   ↓
Facilitator Viewed
   ↓
Intervention Started
   ↓
Student Responding
   ↓
Resolved
```

This makes intervention a measurable part of the learning process instead of simply generating an alert.

---

# 18. Demonstration Curriculum

The prototype focuses on three representative learning topics.

## Physics — Ohm's Law

```text
Electric Current
      ↓
Voltage
      ↓
Resistance
      ↓
Ohm's Law
```

Demonstrates:

* Concept explanation
* Adaptive questions
* Difficulty changes
* AI re-theming
* Virtual lab
* Struggle detection
* Facilitator intervention

---

## Chemistry — Acid–Base Titration

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

* Concept explanation
* Interactive virtual lab
* Question practice
* Mastery progression

---

## Biology — Human Senses

```text
Sense Organs
      ↓
Stimulus
      ↓
Sensory Receptors
      ↓
Brain Response
```

The topic uses a more student-friendly presentation style.

---

# 19. Primary Demonstration Scenario

The primary demonstration follows one student:

## Aarav — Ohm's Law

```text
Aarav logs in
      ↓
Selects Space as an interest
      ↓
AURA creates personalized learning path
      ↓
Resistance identified as weak prerequisite
      ↓
Ohm's Law remains locked
      ↓
Aarav practices Resistance
      ↓
AURA re-themes content around Space
      ↓
Aarav enters Virtual Lab
      ↓
Aarav makes repeated mistakes
      ↓
Struggle Score increases
      ↓
AURA recommends intervention
      ↓
Facilitator sees Aarav in intervention queue
      ↓
Teacher assigns prerequisite refresher
      ↓
Aarav completes refresher + lab
      ↓
Mastery increases
      ↓
Ohm's Law unlocks
      ↓
Facilitator sees improvement
```

This demonstrates the complete adaptive learning loop.

---

# 20. Technical Architecture

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

## Backend

* Next.js API Routes

## Database

* Supabase PostgreSQL

## AI

* OpenRouter / configured LLM API

## Optional Vector Search

* Supabase pgvector

## Deployment

* Vercel

## Virtual Labs

* HTML
* CSS
* JavaScript
* iframe or integrated routes

---

# 21. High-Level System Architecture

```text
                       AURA LEARN
                           │
              ┌────────────┴────────────┐
              │     STUDENT PROFILE     │
              │ Pace • Interest •       │
              │ Mastery • Behavior      │
              └────────────┬────────────┘
                           ↓
                    CURRICULUM GRAPH
                           │
                           ↓
                     MASTERY ENGINE
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
       CONTENT ENGINE            STRUGGLE ENGINE
              │                         │
              ↓                         ↓
        AI RE-THEMING             INTERVENTION
              │                         │
              └────────────┬────────────┘
                           ↓
                     VIRTUAL LABS
                           │
                           ↓
                       ASSESSMENT
                           │
                           ↓
                    UPDATED MASTERY
                           │
                           ↺
```

---

# 22. End-to-End Data Flow

```text
Student
   ↓
Authentication
   ↓
Student Profile
   ↓
Interests + Learning Preferences
   ↓
Curriculum Graph
   ↓
Prerequisite Check
   ↓
Learning Content
   ↓
Assessment
   ↓
Attempt Data
   ↓
Mastery Engine
   ↓
Adaptive Recommendation
   ↓
AI Context Re-Theming
   ↓
Practice / Virtual Lab
   ↓
Struggle Detection
   ↓
Facilitator Intervention
   ↓
Updated Mastery
   ↓
Next Learning Recommendation
```

---

# 23. Core Data Model

The system is structured around the following entities:

```text
users
student_profiles
subjects
topics
prerequisites
mastery
questions
attempts
interventions
notes
```

## Users

```text
id
name
email
role
grade
avatar
created_at
```

## Student Profiles

```text
student_id
learning_pace
confidence
engagement
preferred_interests
learning_preference
```

## Subjects

```text
id
name
grade
```

## Topics

```text
id
subject_id
name
description
difficulty
```

## Prerequisites

```text
topic_id
prerequisite_id
```

## Mastery

```text
student_id
topic_id
mastery_score
attempts
accuracy
last_activity
status
```

## Questions

```text
id
topic_id
question
answer
difficulty
learning_objective
metadata
```

## Attempts

```text
student_id
question_id
answer
correct
time_taken
hints_used
created_at
```

## Interventions

```text
id
student_id
topic_id
risk_score
reason
recommended_action
status
created_at
resolved_at
```

## Notes

```text
id
student_id
topic_id
content
created_at
```

---

# 24. API Architecture

Core API routes include:

```text
POST /api/auth/login

GET  /api/student/profile
GET  /api/student/dashboard

GET  /api/curriculum
GET  /api/topics/:id
GET  /api/topics/:id/prerequisites

POST /api/attempts
GET  /api/mastery/:studentId

POST /api/adaptive/recommend

POST /api/ai/retheme
POST /api/ai/explain

GET  /api/interventions
POST /api/interventions
PATCH /api/interventions/:id

POST /api/labs/:id/complete
```

API responses are intended to remain structured and predictable.

---

# 25. AI Safety & Guardrails

LLM API keys must never be exposed in frontend code.

Sensitive configuration is stored using environment variables:

```text
OPENROUTER_API_KEY=...
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

AI-generated educational content is validated before being presented to students.

The system should reject generated content that changes:

* Numerical values
* Answers
* Formulas
* Academic structure
* Topic relevance
* Appropriate content boundaries

The fallback behavior is to use the original deterministic educational content when the AI service is unavailable or generated content fails validation.

---

# 26. Student Navigation

```text
🏠 Home
🗺️ My Path
📚 Learn
🧪 Labs
🤖 AURA AI
🏆 Progress
📝 Notes
👤 Profile
```

---

# 27. Facilitator Navigation

```text
📊 Overview
👥 Students
🚨 Intervention Queue
🗺️ Curriculum
📈 Analytics
⚙️ Settings
```

---

# 28. UI/UX Principles

AURA is designed to be:

* Modern
* Friendly
* Responsive
* Student-specific
* Visually engaging
* Easy to understand
* Accessible

The interface uses:

* Rounded cards
* Clear visual hierarchy
* Progress indicators
* Meaningful icons
* Touch-friendly controls
* Loading states
* Empty states
* Success/error feedback
* Subtle animations

Both light and dark themes are supported.

---

# 29. MVP Scope

## Core MVP

* Student/Facilitator login
* Student dashboard
* Student learning profile
* Prerequisite learning graph
* Mastery tracking
* Adaptive question difficulty
* AI contextual re-theming
* Struggle detection
* Facilitator intervention dashboard
* Virtual lab integration
* Three demonstration topics
* Student-friendly UI

## Optional Extensions

* AI tutor
* Student notes
* Semantic/vector retrieval
* Badges
* Leaderboard
* Voice interaction
* Advanced analytics

Core adaptive-learning functionality takes priority over optional features.

---

# 30. Definition of Done

## Student

* [ ] Log in
* [ ] Select interests
* [ ] See personalized dashboard
* [ ] Open learning path
* [ ] See prerequisite status
* [ ] Attempt questions
* [ ] Experience adaptive difficulty
* [ ] Experience AI re-theming
* [ ] Open a virtual lab
* [ ] Trigger a struggle state
* [ ] Receive an intervention

## Facilitator

* [ ] Log in
* [ ] See class overview
* [ ] See an at-risk student
* [ ] Understand why the student is struggling
* [ ] Receive a recommended action
* [ ] Assign an intervention
* [ ] Mark intervention status
* [ ] See student improvement

---

# 31. Success Criteria

| Metric                       | Target                                                             |
| ---------------------------- | ------------------------------------------------------------------ |
| **End-to-End Loop**          | Complete adaptive loop in under 5 minutes                          |
| **Deterministic Integrity**  | Node progression and mastery states driven by deterministic logic  |
| **Invariant Preservation**   | No numerical, logical or answer discrepancy in re-themed questions |
| **Actionable Interventions** | Recommendations contain concrete teaching actions                  |
| **Fallback Resilience**      | System remains usable when external LLM services are unavailable   |

---

# 32. Why AURA Learn?

## Traditional LMS

```text
Same Content
     ↓
Same Pace
     ↓
Same Assessment
     ↓
Final Result
```

## AURA Learn

```text
Student Profile
     ↓
Prerequisite Analysis
     ↓
Personalized Path
     ↓
Adaptive Content
     ↓
Continuous Assessment
     ↓
Struggle Detection
     ↓
Human Intervention
     ↓
Remediation
     ↓
Mastery
```

AURA does not simply present content.

It continuously adapts the **learning path itself**.

---

# 33. What Makes AURA Different?

> **AURA is not simply an AI tutor.**

It combines:

* Prerequisite knowledge graph
* Mastery gating
* Adaptive difficulty
* Interest-based AI re-theming
* Struggle detection
* Virtual learning experiences
* Real-time facilitator recommendations
* Human-in-the-loop intervention

### AI does not replace the teacher.

```text
AI detects
    ↓
AI explains
    ↓
AI recommends
    ↓
Teacher decides
```

### AI does not control academic correctness.

The academic structure remains deterministic while AI is used primarily for contextual personalization.

---

# 34. Team

|  # | Member             | Program & Year     | GitHub              |
| -: | ------------------ | ------------------ | ------------------- |
|  1 | **Varun P — Lead** | B.E. CSE, 3rd Year | `@varunrao246`      |
|  2 | Vivek Urs G A      | B.E. CSE, 3rd Year | `@vats1126`         |
|  3 | Syed Naheed Ahmed  | B.E. CSE, 3rd Year | `@n4heed`           |
|  4 | Vignesh Kumar M    | B.E. CSE, 3rd Year | `@VigneshKumar2709` |

**College:** Maharaja Institute of Technology Mysore
**Team ID:** `HM26-1E71`

---

# 35. Project Links

| Resource         | Link                                                   |
| ---------------- | ------------------------------------------------------ |
| Repository       | `https://github.com/vats1126/HM26-1E71-submission.git` |
| Live Application | Add current deployed URL                               |
| Documentation    | See repository documentation                           |
| Demo Video       | Add final submission link                              |

---

# 36. Final Product Statement

## AURA Learn

**Adaptive Understanding & Responsive Assistance**

> **AURA Learn is an adaptive learning platform that continuously understands a student's mastery, pace, interests and learning behavior to create a personalized path toward the same academic outcome.**

### Core Differentiator

> **AURA doesn't wait for students to fail. It identifies where they are struggling, adapts how they learn, and brings the right human intervention at the right time.**

### Motto

> **Learn your way. Master at your pace.**

---

# HackMysuru 1.0

## Problem 01 — Adaptive Learning & Real-Time Intervention Platform

**Team Bug Busters · HM26-1E71**

**Maharaja Institute of Technology Mysore**

---

```
```
