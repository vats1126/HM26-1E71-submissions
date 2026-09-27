# AI Usage Disclosure

[← Back to README](./README.md)

> **Team:** Bug Busters (`HM26-1E71`)  
> **Project:** KEA × AURA Learn  
> **Problem:** Adaptive Learning & Real-Time Intervention Platform

AI was used extensively during development and is also part of both MVPs at runtime. This file distinguishes **development-time AI assistance** from **runtime AI functionality** and documents the deterministic controls that remain authoritative.

---

## Summary

| Question | Answer |
|---|---|
| Did we use AI tools during development? | **Yes** |
| Does the product use AI/ML at runtime? | **Yes** |
| Are the two MVPs one AI system? | **No. KEA and AURA Learn remain independent applications.** |
| Is AI the authority for learning progression? | **No.** Critical progression and learning-state decisions remain controlled by deterministic application logic. |
| Was every line of code written manually? | **No.** AI-assisted development was used extensively. |
| Was AI-generated code reviewed and integrated by the team? | **Yes.** The team remained responsible for architecture, integration, debugging, testing, and final implementation. |

---

# 1. AI Tools Used During Development

| Tool | Used for |
|---|---|
| **ChatGPT** | Product ideation, architecture planning, PRD refinement, debugging, code explanation, implementation planning, documentation, test planning, and prompt design |
| **Claude Code** | Codebase understanding, feature implementation, refactoring, debugging, component generation, and development assistance |
| **Antigravity IDE** | Agent-assisted implementation, repository inspection, code generation, debugging, verification, documentation, and multi-step development workflows |
| **OpenRouter** | LLM API experimentation and runtime AI integration for AURA Learn |
| **Ollama** | Local LLM experimentation and AI-assisted development workflows |

AI was treated as a development assistant, not as an autonomous owner of the product.

The team made the product decisions, selected the architecture, reviewed generated implementations, tested behavior, and modified code before integration.

---

# 2. Where AI Helped During Development

AI assistance was used across substantial parts of both MVPs, including:

### Product / Architecture
- Problem interpretation
- Product-flow design
- Architecture exploration
- Trade-off analysis
- PRD and documentation drafting
- Feature decomposition
- API/interface planning

### Frontend
- UI scaffolding
- React/Next.js component implementation
- Responsive layout work
- Interaction states
- Dashboard and learning-workspace development
- Visual polish and accessibility improvements

### Learning Systems
- Prerequisite graph implementation support
- Mastery-engine implementation support
- Diagnostic flows
- Adaptive difficulty logic
- Struggle detection
- Intervention workflows
- Assessment flows

### AI Systems
- Provider abstraction
- Prompt construction
- Structured output schemas
- AI guardrails
- Semantic evaluation
- Runtime content generation
- AI tutoring
- Contextual re-theming
- Interview/oral-assistance flows

### Infrastructure
- API route implementation
- Environment configuration
- Error handling
- Fallback behavior
- Security hardening
- Test generation
- Build/debug workflows

### Human responsibility

The team determined:

- What problem to solve
- What the learner journey should be
- What evidence should influence adaptation
- How prerequisites should be represented
- How mastery should be calculated
- What AI is allowed to generate
- What AI must never control
- What happens when an AI provider fails
- What the facilitator should see
- Which MVP should use which interaction style

---

# 3. Runtime AI Architecture

Bug Busters contains two independent runtime AI implementations.

```text
                         BUG BUSTERS
                              │
              ┌───────────────┴───────────────┐
              │                               │
             KEA                        AURA LEARN
              │                               │
      AI Orchestration                  Runtime AI
              │                               │
     Groq → NVIDIA →                    Tutor / Contextual
     Gemini → Fallback                  Personalization
              │                               │
      Deterministic                    Deterministic
      Learning Engine                  Learning Engine
```

The shared design principle is:

```text
AI generates / interprets
        ↓
Deterministic logic validates / governs
        ↓
Learner evidence updates state
        ↓
Adaptive routing determines next action
```

---

# 4. KEA — Runtime AI

KEA is the structured, standardized adaptive-learning MVP.

## AI Responsibilities

KEA uses runtime AI for:

- Topic understanding
- Concept and prerequisite candidate generation
- Stage-wise learning-plan generation
- Personalized explanations
- Worked examples
- Practice-question generation
- Hints
- Stretch challenges
- Semantic short-answer evaluation
- Adaptive learning content
- Oral/interview assistance
- Contextual re-theming
- Personalized learning support

## Current provider architecture

KEA uses an AI provider abstraction and orchestration layer.

```text
                 KEA AI REQUEST
                       │
                       ↓
                    GROQ
                       │
                 failure / unavailable
                       ↓
                 NVIDIA NIM
                       │
                 failure / unavailable
                       ↓
              GEMINI ADAPTER
                       │
                 failure / unavailable
                       ↓
            DETERMINISTIC FALLBACK
```

Current known provider state:

| Provider | Role | Notes |
|---|---|---|
| **Groq** | Primary | Working and used for live AI generation |
| **NVIDIA NIM** | Secondary | Working backup provider |
| **Gemini** | Tertiary/optional | Adapter remains available; current configured credential may require replacement |
| **Deterministic fallback** | Final fallback | Used where supported to preserve a truthful, reproducible demo experience |

The UI distinguishes live AI activity from deterministic/demo fallback behavior.

## KEA AI files

```text
Hack Mysuru 1.0/src/lib/ai/ai-orchestrator.ts
Hack Mysuru 1.0/src/lib/ai/ai-provider.ts
Hack Mysuru 1.0/src/lib/ai/openai-compatible-provider.ts
Hack Mysuru 1.0/src/lib/ai/gemini-provider.ts
Hack Mysuru 1.0/src/lib/ai/fallback-provider.ts
Hack Mysuru 1.0/src/lib/ai/provider-health.ts
Hack Mysuru 1.0/src/lib/ai/schemas.ts
Hack Mysuru 1.0/src/lib/ai/topic-plan-validator.ts
```

---

# 5. AURA Learn — Runtime AI

AURA Learn is the more interactive and visually engaging adaptive-learning MVP.

Its runtime AI is primarily a **personalization and contextual assistance layer**.

## AI Responsibilities

The runtime AI can assist with:

- Contextual re-theming
- Personalized examples
- Interest-based explanations
- Educational narrative generation
- AI tutoring
- Adaptive content presentation
- Context-aware educational assistance

For example, a mathematical or scientific problem can be presented in a learner-selected context such as Space while preserving the underlying educational objective.

## AURA Learn AI architecture

```text
Learner / Curriculum Data
          ↓
Deterministic Learning State
          ↓
Runtime AI request
          ↓
LLM / AI provider
          ↓
Generated contextual content
          ↓
Guardrails / validation
          ↓
Student learning experience
```

AURA Learn keeps authoritative learning content and progression logic separate from generated context.

## AURA Learn AI files

```text
AURA-Learn-main/lib/ai/
AURA-Learn-main/lib/ai/llm.ts
AURA-Learn-main/lib/ai/retheme.ts
AURA-Learn-main/lib/ai/resilience.ts
AURA-Learn-main/lib/ai/guardrails.ts
AURA-Learn-main/lib/ai/tutor.ts
AURA-Learn-main/lib/ai/tutorStrategy.ts
AURA-Learn-main/lib/ai/scenes.ts
```

---

# 6. What AI Does NOT Control

This is the most important architectural boundary in both MVPs.

AI does **not** directly control:

- Prerequisite authority
- Topic unlocking
- Mastery thresholds
- Core progression rules
- Authoritative objective answers
- Database integrity
- Authentication
- Authorization
- Critical session integrity
- Final facilitator decisions

KEA additionally keeps:

- Knowledge-graph DAG validity
- Chemistry invariants
- Objective scoring
- Assessment answer authority
- Client mastery-tampering protection

outside autonomous LLM control.

AURA Learn similarly keeps:

- Curriculum state
- Prerequisite state
- Mastery logic
- Adaptive-state logic
- Intervention decision authority

outside autonomous LLM control.

---

# 7. AI vs Deterministic Logic

| Function | KEA AI | AURA AI | Deterministic authority |
|---|:---:|:---:|:---:|
| Topic understanding | ✓ | — | Validation |
| Concept generation | ✓ | — | Validation |
| Explanations | ✓ | ✓ | Fallback / constraints |
| Personalized examples | ✓ | ✓ | Constraints |
| Contextual re-theming | ✓ | ✓ | Academic validation |
| Semantic evaluation | ✓ | ✓ where configured | Validation rules |
| Prerequisite graph authority |  |  | ✓ |
| Mastery calculation |  |  | ✓ |
| Topic unlocking |  |  | ✓ |
| Core progression |  |  | ✓ |
| Difficulty-state authority |  |  | ✓ |
| Struggle state |  |  | ✓ |
| Intervention state |  |  | ✓ |
| Authentication |  |  | ✓ |
| Authorization |  |  | ✓ |
| Database integrity |  |  | ✓ |
| Final facilitator decision |  |  | ✓ |

---

# 8. Academic Safety / Guardrails

Generated educational content must not silently change the authoritative learning problem.

Where re-theming or generation is applied, the system should preserve the relevant educational invariants.

Examples:

- Numerical values
- Variables
- Formulas
- Expected answer
- Learning objective
- Topic / concept
- Difficulty
- Required reasoning

Conceptually:

```text
Authoritative educational content
              ↓
         AI generation
              ↓
         Validation
              ↓
        ┌─────┴─────┐
        │           │
      VALID       INVALID
        │           │
        ↓           ↓
      Show       Fallback
      content    to original
```

This is especially important in AURA Learn, where AI contextualization is intended to change **how the problem is presented**, not what the correct academic problem is.

KEA uses a similar boundary: AI can generate useful learning content, but deterministic engines remain responsible for graph validity, progression, mastery, answer integrity, and domain-specific checks.

---

# 9. What Happens When AI Is Wrong?

A generated response is not automatically authoritative.

Potential failure modes include:

- incorrect generated explanation
- altered numerical values
- incorrect formula
- incorrect answer
- malformed structured output
- provider timeout
- provider authentication failure
- rate limiting
- network failure

The intended response is:

```text
AI request
   ↓
Generated output
   ↓
Validation
   ↓
Valid?
 ┌─┴─┐
YES  NO
 │    │
 ↓    ↓
Use  Fallback
```

The key principle:

> **AI failure must not corrupt the authoritative learner state.**

---

# 10. Adaptivity: AI + Learner Evidence

The adaptive loop does not rely on an LLM alone.

```text
Learner interaction
        ↓
Evidence
        ↓
Deterministic learning state
        ↓
Adaptive decision
        ↓
AI personalization where useful
        ↓
Next learning action
```

Examples of evidence include:

- Diagnostic performance
- Practice performance
- Assessment performance
- Oral/interview evidence
- Prerequisite mastery
- Recent performance
- Misconceptions
- Struggle signals
- Pace / learning rhythm
- Lab performance in AURA Learn

The resulting learning action can include:

```text
Advance
Scaffold
Remediate prerequisite
Generate extension
Request further evidence
Surface facilitator intervention
```

---

# 11. AURA Learn Struggle + AI Loop

AURA Learn can use signals such as:

- Repeated incorrect answers
- Low accuracy
- Excessive time
- Hint dependency
- Topic revisits
- Skipped questions
- Prerequisite weakness

Conceptual loop:

```text
Learning activity
      ↓
Learner response
      ↓
Struggle signals
      ↓
Adaptive decision
      ↓
AI-assisted explanation / re-theming
      ↓
Practice again
      ↓
Mastery update
      ↓
Facilitator intervention if required
```

The facilitator remains the final human decision-maker for intervention.

---

# 12. KEA Topic-to-Mastery AI Loop

KEA's open-topic workflow is:

```text
"What do you want to learn?"
          ↓
AI topic understanding
          ↓
Concept + prerequisite candidates
          ↓
Schema / referential / DAG validation
          ↓
Diagnostic calibration
          ↓
Personalized path
          ↓
Interactive learning
          ↓
AI practice / assessment / oral support
          ↓
Deterministic mastery
          ↓
Remediation / advancement / intervention
```

The model is therefore used to help create and explain learning, while the learning engine governs progression.

---

# 13. AI-Assisted Development Workflow

Our development workflow generally followed:

```text
Problem / requirement
        ↓
Team discussion
        ↓
Architecture decision
        ↓
AI-assisted implementation
        ↓
Human review
        ↓
Run / test
        ↓
Debug
        ↓
Integration
        ↓
Final verification
```

For complex features:

```text
Requirement
    ↓
Prototype
    ↓
AI assistance
    ↓
Human validation
    ↓
Integration
    ↓
Testing
```

AI-generated code was treated as **suggested implementation**, not automatically trusted code.

---

# 14. Verification of AI-Assisted Code

The team used multiple forms of verification.

### Static checks

Where configured:

- TypeScript typecheck
- ESLint
- Production build
- Unit/integration tests

### Functional verification

AI-assisted implementations were tested through the actual learning workflows, including:

- Topic entry
- Diagnostic calibration
- Learning generation
- Practice
- Assessment
- Mastery updates
- Adaptive remediation
- Interview/oral flows
- Facilitator intervention

### Security verification

The team specifically protected:

- Server-side secrets
- Assessment answer authority
- Interview transcript authority
- Mastery state integrity
- Client/server trust boundaries

### Deterministic validation

AI output is checked against schema, educational, domain, or application constraints before being treated as authoritative.

---

# 15. Accuracy / Benchmark Disclosure

We do **not** claim a formal statistical ML accuracy benchmark for the runtime generative AI layer.

The runtime AI is primarily used for:

- generation
- personalization
- contextual explanation
- semantic assistance

rather than as a conventional supervised classifier with a single accuracy metric.

Instead, the MVP validates behavior through:

- schema validation
- deterministic rules
- functional tests
- domain invariants
- fallback behavior
- human review
- end-to-end learning-flow tests

No fabricated model-accuracy percentage is reported.

---

# 16. Offline / Degraded AI Behavior

### KEA

KEA has a multi-provider cascade and deterministic fallback where supported:

```text
Groq
 ↓
NVIDIA NIM
 ↓
Gemini adapter
 ↓
Deterministic fallback
```

The application should distinguish live AI generation from deterministic/demo fallback.

### AURA Learn

AURA Learn keeps core educational content and learning behavior separate from runtime AI.

Where supported:

```text
Core educational content
        ↓
Continue learning

Runtime AI unavailable
        ↓
Original / fallback content
```

External LLM generation requires network/provider availability.

The product therefore does not make the external AI service the sole authority for core progression.

---

# 17. Student Data and AI Providers

Only information required for the relevant AI-assisted operation should be sent to an external provider.

For contextual generation, this can be limited to structured educational context such as:

- Topic
- Question / task
- Learning objective
- Difficulty
- Selected interest / context
- Relevant structured constraints

Unnecessary personal information should not be sent merely to produce a learning explanation.

Real provider credentials are stored in local environment files and are excluded from source control.

---

# 18. Cost Considerations

A formal production cost benchmark has not been established.

Runtime AI cost depends on:

- Number of AI requests
- Model/provider selected
- Prompt size
- Response size
- Number of learners
- Frequency of regeneration
- Assessment/interview usage

Potential production optimizations include:

- Response caching
- Reusing validated content
- Reducing unnecessary AI calls
- Smaller models for simpler tasks
- Deterministic content for repeatable instruction
- Calling AI only where personalization provides value
- Provider-aware routing and rate limiting

---

# 19. Representative Prompts

These are representative examples of the prompt patterns used to shape the AI components.

## Topic Understanding

> “Understand the learner's requested topic, identify concepts and prerequisites, and produce a structured learning path that can be validated as a dependency graph.”

## Contextual Re-theming

> “Re-theme the educational task around the learner's selected interest while preserving the numerical values, formula, expected answer, objective, concept, and difficulty.”

## AI Learning Generation

> “Generate a personalized lesson explanation, worked example, misconception warning, practice question, hint, and stretch challenge using the learner's current concept and recent learning evidence.”

## Adaptive Remediation

> “Generate targeted remediation for the identified prerequisite gap using the learner's recent mistake and current mastery state.”

## Oral / Interview Assistance

> “Evaluate the learner's response against the concept being assessed, identify the reasoning gap, and produce the next useful probe or feedback.”

The prompt is not the final authority. The application validates the returned structured information and uses deterministic rules for critical learning state.

---

# 20. Why We Did Not Build a Fully Autonomous LLM Tutor

A fully autonomous LLM tutor was considered as an architectural direction.

We did not make it responsible for:

- deciding mastery on its own
- unlocking concepts on its own
- bypassing prerequisites
- determining critical progression without deterministic checks
- replacing the facilitator
- becoming the single point of failure for the learning system

Reason:

```text
Predictability
Auditability
Academic correctness
Security
Resilience
Human oversight
```

are more important than giving the model unrestricted control over learner state.

---

# 21. AI vs Product Identity

The two MVPs use AI differently in their product experiences.

### KEA

```text
Structured
   ↓
AI topic understanding
   ↓
Knowledge graph
   ↓
Deterministic mastery
   ↓
Adaptive route
```

KEA emphasizes **structure, standardization, graph-driven progression, and mastery governance**.

### AURA Learn

```text
Interactive
   ↓
Learner interests
   ↓
Adaptive learning
   ↓
AI contextual assistance
   ↓
Virtual labs / interactive experiences
   ↓
Facilitator intervention
```

AURA Learn emphasizes **interactive engagement and contextual personalization**.

The two applications are intentionally independent.

---

# 22. Launcher

The Bug Busters launcher contains **no learning AI logic**.

Its role is only:

```text
Bug Busters Launcher
        ↓
Choose MVP
   ↙          ↘
KEA          AURA Learn
```

It does not merge:

- AI providers
- learner state
- APIs
- components
- databases
- learning engines

The launcher is simply the unified entry point.

---

# 23. Development Transparency

We acknowledge that AI-assisted development was a significant part of building the project.

We do not claim all code was manually written without AI assistance.

At the same time, the team does not treat AI output as inherently correct.

The final implementation reflects:

- team-selected requirements
- architectural decisions
- AI-assisted implementation
- human review
- testing
- debugging
- integration
- validation

The guiding principle is:

> **Use AI to accelerate and personalize learning, but never make AI the unchecked authority for academic correctness or learner progression.**

---

# 24. Team Understanding

Every team member should be able to explain the AI-assisted portions relevant to their contribution, including:

1. What the feature does
2. Why AI is used there
3. What inputs are provided
4. What the model returns
5. How the application validates the output
6. What happens if the model fails
7. What remains deterministic
8. How the feature affects the learner journey

---

# Declaration

We confirm that this document represents the team's use of AI-assisted development and runtime AI functionality for **Bug Busters — HM26-1E71**.

AI was used to accelerate development, implementation, debugging, documentation, experimentation, and product workflows.

The team remains responsible for the final submitted code, architecture, testing, integration, and validation.

**Primary architectural principle:**

> **AI generates and assists. Deterministic learning systems govern. Humans intervene when needed.**

**Team:** Bug Busters  
**Team ID:** HM26-1E71  
**College:** Maharaja Institute of Technology Mysore  
**HackMysuru 1.0**  
**Problem 01 — Adaptive Learning & Real-Time Intervention Platform**
