Yes. Based on the AURA Learn PRD/details you've provided and the development workflow you've described, here is a **fully filled `ai.md`** as one copyable file. I have avoided inventing model accuracy numbers or claiming fine-tuning that wasn't established.

````markdown
# AI Usage Disclosure

[← Back to README](./README.md)

> AI tools are **100% permitted** at HackMysuru 1.0. Disclosing them is **mandatory**.
> Using AI never costs you points. Not being able to explain code you submitted does.
> Reviewers check this file against your commit history and the AI segment of your video.

---

## Summary

| Question | Answer |
|---|---|
| Did we use AI tools during development? | **Yes** |
| Does our product use AI/ML at runtime? | **Yes** |
| Roughly how much of the code was AI-assisted? | **A substantial portion of the application was AI-assisted during development; the exact percentage was not formally measured. Core product decisions, architecture, adaptive-learning logic, validation rules, database design, and integration decisions were reviewed and controlled by the team.** |
| Can every team member explain the AI-assisted code? | **Yes** |

AI was used as a development and productivity tool. The team remained responsible for the final architecture, implementation decisions, testing, debugging, integration, and validation.

The runtime AI functionality in AURA Learn is used primarily for **contextual personalization and adaptive educational assistance**, while critical academic logic such as prerequisite relationships, mastery thresholds, progression rules, and intervention scoring remains deterministic and controlled by the application.

---

# 1. AI Tools Used During Development

| Tool | Model / plan | Used by | What we used it for |
|---|---|---|---|
| **ChatGPT** | GPT-based ChatGPT | Team | Product ideation, PRD refinement, architecture planning, debugging, code explanation, API design, database modeling, UI/UX planning, documentation, prompts, and development troubleshooting |
| **Claude Code** | Claude-based coding agent | Team | Understanding and modifying the existing codebase, implementing features, debugging, refactoring, generating components, improving project structure, and assisting with end-to-end development |
| **Antigravity IDE** | AI-assisted development environment | Team | Code generation, project navigation, debugging, feature implementation, and development workflow assistance |
| **OpenRouter** | LLM API gateway | Team | Runtime AI integration and experimentation with LLM-based functionality, including adaptive educational content generation |
| **Ollama** | Local LLM tooling | Team | Development experimentation, local AI-assisted coding/workflows, and testing alternative AI-assisted development approaches |

AI tools were used as assistants rather than as autonomous decision makers.

The team reviewed generated code and integrated it into the application based on the project's requirements.

---

# 2. Where AI Helped in the Codebase

| Area / file | Level of AI help | What a human did |
|---|---|---|
| **Frontend pages and components** | High | Defined the required screens, user flow, student/facilitator experience, reviewed generated UI, integrated components, and tested the resulting application |
| **Student Dashboard** | High | Defined the information that should be displayed, learning-pulse requirements, progress indicators, recommendations, and overall UX |
| **Facilitator Dashboard** | High | Defined the intervention workflow, student-risk information, facilitator actions, and required information hierarchy |
| **Authentication / role-based flows** | Medium–High | Defined student/facilitator roles and expected navigation and reviewed the authentication implementation |
| **Curriculum / prerequisite graph** | Medium | Defined the prerequisite-learning model, concept relationships, mastery states, and progression requirements |
| **Mastery engine** | Medium | Defined the mastery concept, scoring factors, mastery states, and progression behavior |
| **Adaptive difficulty logic** | Medium | Defined how performance should influence question difficulty and reviewed the implementation |
| **Struggle detection** | Medium | Defined the behavioral signals, scoring approach, risk levels, and intervention threshold |
| **AI contextual re-theming** | High | Defined what the AI is allowed to change and, more importantly, what it must preserve such as numerical values, formulas, answers, learning objectives, and difficulty |
| **AI guardrails / validation** | Medium–High | Defined the academic invariants and fallback behavior when generated content is invalid or unavailable |
| **Supabase integration** | Medium | Defined the required entities, relationships, student/mastery/intervention data, and reviewed database integration |
| **API routes** | Medium | Defined the required API behavior, inputs, outputs, and integration requirements |
| **Virtual Lab integration** | Medium | Defined how existing HTML labs fit into the learning journey and how lab activity contributes to the learning flow |
| **Documentation** | High | Used AI to structure and refine documentation, while the team supplied the actual project information and reviewed the final content |
| **Core learning architecture** | Low–Medium | The team defined the overall architecture and how prerequisite learning, mastery, adaptive content, struggle detection, and facilitator intervention work together |

### Important distinction

AI-assisted implementation does **not** mean the AI independently designed or owned the product.

The team determined:

- What problem the product solves
- How the learning flow works
- What the prerequisite graph represents
- How mastery is calculated
- How difficulty changes
- What constitutes learner struggle
- What information a facilitator needs
- What AI is allowed to modify
- What AI is not allowed to modify
- What happens when AI fails
- How the major components interact

---

# 3. AI Inside the Product (Runtime)

AURA Learn uses AI at runtime as a **personalization layer**, not as the authority for academic progression.

| Model / API | What it does in our product | Hosted where | Trained / fine-tuned by us? |
|---|---|---|---|
| **LLM accessed through OpenRouter** | Generates contextual variations of educational explanations, examples, and questions based on a student's selected interests while preserving the underlying academic objective | Provider API through OpenRouter | **No** |
| **LLM-based adaptive assistance** | Supports personalized educational content and contextual explanations | Provider API | **No** |

## Runtime AI Responsibilities

The runtime AI can assist with:

- Contextual re-theming
- Personalized examples
- Interest-based explanations
- Educational narrative generation
- Adaptive content presentation

For example, if a student selects **Space** as an interest, an Ohm's Law problem may be presented using a spacecraft scenario while retaining the same mathematical problem.

### Example

Original:

> A circuit has a 12V source and 6Ω resistance. Calculate the current.

Personalized context:

> Imagine a spacecraft instrument powered by a 12V supply with 6Ω resistance. Calculate the current.

The purpose is to make the learning context more engaging without changing the underlying learning objective.

---

## What Runtime AI Does NOT Control

The LLM is not the authority for:

- Prerequisite relationships
- Topic unlocking
- Mastery thresholds
- Student progression
- Core scoring rules
- Difficulty-state transitions
- Intervention state management
- Database integrity
- Authentication
- Authorization

These are controlled by deterministic application logic.

This separation is intentional.

```text
              AURA LEARN
                   │
        ┌──────────┴──────────┐
        │                     │
 Deterministic Logic       Runtime AI
        │                     │
        │                     ├── Context
        │                     ├── Examples
        │                     └── Re-theming
        │
        ├── Prerequisites
        ├── Mastery
        ├── Progression
        ├── Difficulty
        └── Intervention Rules
````

---

## Accuracy We Measured

**Not formally measured as a statistical ML accuracy benchmark.**

AURA's runtime AI is being used primarily for generative contextual personalization rather than a supervised classification model with a conventional accuracy metric.

Instead, the team validates generated content against application-level requirements and academic invariants.

---

## What Happens When the Model Is Wrong?

AURA follows a validation-and-fallback approach.

Generated content should preserve:

* Numerical values
* Variables
* Formula
* Expected answer
* Learning objective
* Topic
* Difficulty
* Required reasoning

If generated content fails validation or the external AI service is unavailable:

```text
AI Request
    ↓
Generated Content
    ↓
Validation
    ↓
 ┌───────────────┐
 │ Valid?        │
 └───────┬───────┘
         │
    ┌────┴────┐
    │         │
   YES        NO
    │         │
    ↓         ↓
Show       Fallback
Content    to original
           content
```

The objective is to ensure that AI failure does not prevent the learner from continuing with deterministic educational content.

---

## Does It Work Offline?

The core learning experience is designed to remain usable with locally available application data and content where supported.

However, **external LLM-based generation requires network connectivity**.

Therefore:

```text
Core educational content
        ↓
Can remain available
where locally cached/stored

AI generation
        ↓
Requires network/API access
```

If the AI service cannot be reached, the application can fall back to the original educational content rather than blocking the learning flow.

---

## Student Data Sent to Third Parties

Only information required for the relevant AI-assisted functionality should be sent to the configured LLM provider.

The system should avoid sending unnecessary sensitive student information.

For contextual re-theming, the relevant information can be limited to structured educational context such as:

* Topic
* Question
* Learning objective
* Difficulty
* Selected interest
* Required answer/invariants

The system does not need to send a student's complete personal profile simply to generate a themed explanation.

---

## Cost at City / Institution Scale

**Not formally benchmarked yet.**

Runtime AI cost depends on:

* Number of AI requests
* Model selected through OpenRouter
* Prompt size
* Response size
* Number of active students
* Frequency of content regeneration

A production deployment would reduce cost through:

* Caching generated content
* Reusing validated content
* Limiting unnecessary AI calls
* Using smaller models for simpler tasks
* Keeping deterministic educational content available
* Calling AI only when personalization provides value

---

# 4. Key Prompts

The following are representative prompts that influenced the product's architecture and implementation.

## Prompt 1 — Product Architecture

> "Design an adaptive learning platform where prerequisite mastery, personalized content, struggle detection and teacher intervention work together as one continuous learning loop."

### What we kept

* Prerequisite graph
* Mastery tracking
* Adaptive learning
* Struggle detection
* Facilitator intervention
* Continuous feedback loop

### What we changed or rejected

We did not allow the AI to independently define the final product architecture. The team selected and refined the components according to the hackathon problem statement and prototype scope.

---

## Prompt 2 — AI Contextual Re-Theming

> "Re-theme this educational question around the student's selected interest while preserving the numerical values, formula, answer, learning objective and difficulty."

### What we kept

* Interest-based personalization
* Contextual examples
* Narrative adaptation

### What we changed or rejected

We rejected any approach where the AI could modify:

* Correct answers
* Numerical values
* Mathematical relationships
* Learning objectives
* Difficulty

Academic correctness remains deterministic.

---

## Prompt 3 — Prerequisite Knowledge Graph

> "Create a prerequisite-based learning path where students must demonstrate sufficient mastery of prerequisite concepts before progressing to dependent concepts."

### What we kept

* Concept graph
* Prerequisite relationships
* Mastery-based gating
* Locked/unlocked learning states
* Remediation recommendations

### What we changed or rejected

We kept the actual progression rules deterministic instead of allowing an LLM to decide whether a student should unlock a concept.

---

## Prompt 4 — Struggle Detection

> "Design a transparent struggle detection model using repeated mistakes, low accuracy, excessive time, prerequisite weakness and hint dependency."

### What we kept

* Multiple behavioral signals
* Transparent scoring
* Risk levels
* Actionable intervention recommendations

### What we changed or rejected

We did not make the system depend on an opaque AI prediction for basic intervention decisions.

The scoring logic remains understandable and inspectable.

---

## Prompt 5 — Facilitator Intervention

> "When a student is struggling, provide a teacher with the reason for the struggle and a concrete recommended action rather than only showing a low score."

### What we kept

* Intervention queue
* Student risk information
* Reason for risk
* Recommended action
* Facilitator-controlled intervention

### What we changed or rejected

We rejected the idea of automatically taking consequential actions without facilitator involvement.

The AI recommends.

The facilitator decides.

---

# 5. How We Verified AI Output

The team used multiple levels of verification.

### 1. Functional Testing

AI-assisted code was integrated into the application and tested through the actual student and facilitator workflows.

### 2. Manual Code Review

Generated code was reviewed by the team before being accepted into the project.

### 3. Integration Testing

AI-assisted components were tested together with:

* Authentication
* Supabase
* API routes
* Student dashboard
* Facilitator dashboard
* Mastery logic
* Learning flow

### 4. Academic Validation

For AI-generated educational content, the team checks that important academic information remains unchanged.

Particularly:

* Numbers
* Formula
* Answer
* Learning objective
* Topic
* Difficulty

### 5. Deterministic Fallback

Where AI-generated output cannot be trusted or the API is unavailable, the application can fall back to predefined educational content.

### 6. Human Review

The facilitator remains part of the intervention process.

The system is designed around:

```text
AI detects
    ↓
AI explains
    ↓
AI recommends
    ↓
Human reviews
    ↓
Human decides
```

---

## Example of a Potential AI Failure

A generative model could theoretically change a numerical value while re-writing a question.

For example:

```text
Original:
12V / 6Ω = 2A
```

If a generated question accidentally changed the values:

```text
24V / 6Ω = 4A
```

the generated content would no longer represent the same academic problem.

AURA therefore treats the original structured educational data as authoritative and uses validation/fallback behavior rather than blindly trusting generated text.

---

# 6. What We Deliberately Did Not Use AI For

The following areas were intentionally kept outside autonomous LLM decision-making:

* Prerequisite graph authority
* Mastery thresholds
* Topic unlocking
* Core progression rules
* Authentication
* Authorization
* Database integrity
* Intervention state management
* Academic answer validation
* Final facilitator decisions

The team also did not use AI as a substitute for understanding the submitted code.

Every team member is expected to understand the AI-assisted code relevant to their contribution.

---

# 7. AI vs Deterministic Logic

A key architectural decision in AURA Learn is separating **generative personalization** from **learning-system authority**.

| Function                |  AI | Deterministic Logic |
| ----------------------- | :-: | :-----------------: |
| Contextual re-theming   |  ✓  |     ✓ Validation    |
| Personalized examples   |  ✓  |    ✓ Constraints    |
| Educational explanation |  ✓  |      ✓ Fallback     |
| Prerequisite graph      |     |          ✓          |
| Mastery calculation     |     |          ✓          |
| Topic unlocking         |     |          ✓          |
| Difficulty state        |     |          ✓          |
| Struggle score          |     |          ✓          |
| Intervention status     |     |          ✓          |
| Facilitator decision    |     |          ✓          |
| Authentication          |     |          ✓          |
| Database integrity      |     |          ✓          |

This architecture prevents the LLM from becoming the single point of failure for the learning system.

---

# 8. Our Use of AI During Development

AI significantly accelerated development, especially for:

* Boilerplate generation
* UI scaffolding
* Debugging
* Refactoring
* Documentation
* API implementation
* Database integration
* Understanding errors
* Exploring implementation alternatives
* Generating development prompts
* Code review assistance

However, the team remained responsible for:

* Requirements
* Product architecture
* Feature prioritization
* Integration
* Testing
* Debugging
* Security decisions
* Academic correctness
* Final implementation

AI-generated code was treated as **suggested implementation**, not automatically trusted code.

---

# 9. AI Development Workflow

Our development workflow generally followed:

```text
Problem / Requirement
        ↓
Team Discussion
        ↓
Architecture / Feature Decision
        ↓
AI-Assisted Implementation
        ↓
Human Review
        ↓
Run / Test
        ↓
Debug
        ↓
Integrate
        ↓
Final Review
```

For complex features:

```text
Requirement
    ↓
Prototype
    ↓
AI Assistance
    ↓
Human Validation
    ↓
Integration
    ↓
Testing
```

---

# 10. Transparency Statement

We acknowledge that AI-assisted development was an important part of building AURA Learn.

We do not claim that all source code was written manually without AI assistance.

At the same time, we do not treat AI output as automatically correct.

The team made the product decisions and reviewed, integrated, tested and modified AI-assisted implementations.

The most important architectural principle was:

> **Use AI to personalize learning, but do not allow AI to become the authority for academic correctness or student progression.**

---

# 11. Team Understanding

Every team member participating in the submission is expected to understand:

* The purpose of the product
* The overall architecture
* Their contributed code
* AI-assisted portions relevant to their contribution
* The runtime AI workflow
* The deterministic learning logic
* The fallback behavior
* The role of the facilitator

If reviewers ask why a particular AI-assisted implementation exists, the team should be able to explain:

1. What problem it solves
2. How it works
3. Why it was implemented that way
4. What assumptions it makes
5. What happens when it fails

---

# 12. Final AI Architecture

```text
                         AURA LEARN
                              │
                    ┌─────────┴─────────┐
                    │                   │
              STUDENT DATA        CURRICULUM DATA
                    │                   │
                    └─────────┬─────────┘
                              ↓
                       MASTERY ENGINE
                              │
                              ↓
                     ADAPTIVE LEARNING
                              │
                ┌─────────────┴─────────────┐
                │                           │
        DETERMINISTIC LOGIC            RUNTIME AI
                │                           │
        ┌───────┼────────┐          ┌───────┼────────┐
        ↓       ↓        ↓          ↓       ↓        ↓
   Prereq   Mastery  Difficulty  Theme   Example  Explain
   Graph    Score     Control     Shift   Gen.     Content
        │       │        │          │       │        │
        └───────┴────────┴──────────┴───────┴────────┘
                              │
                              ↓
                       LEARNING ACTIVITY
                              │
                              ↓
                       STUDENT RESPONSE
                              │
                              ↓
                       STRUGGLE ENGINE
                              │
                              ↓
                    FACILITATOR INTERVENTION
                              │
                              ↓
                       UPDATED MASTERY
                              │
                              ↺
```

---

# Declaration

We confirm that this disclosure represents the team's use of AI-assisted development and runtime AI functionality for AURA Learn.

AI tools were used to accelerate development, debugging, documentation, implementation and experimentation.

The team remains responsible for the final submitted code and can explain the AI-assisted portions relevant to the project.

**Signed:** `Varun P` on behalf of **Bug Busters**

**Team ID:** `HM26-1E71`

**College:** `Maharaja Institute of Technology Mysore`

**HackMysuru 1.0**

**Problem 01 — Adaptive Learning & Real-Time Intervention Platform**

```
```
