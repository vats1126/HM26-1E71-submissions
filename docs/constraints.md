# The Five Hard Constraints

[← Back to README](../README.md)

> **Scope note:** The original template for this file was written for a civic-governance problem (fake reports, jurisdiction, ward prioritisation, etc.). Our Phase 2 problem is **Adaptive Learning & Real-Time Intervention**. The sections below therefore replace the civic constraints with five constraints that directly govern the Bug Busters implementation of **KEA + AURA Learn**.

| # | Constraint | Status | Evidence / implementation |
|---|---|---|---|
| 1 | AI must not compromise academic correctness | ✅ | AI output is bounded/validated; KEA keeps deterministic learning logic authoritative |
| 2 | Adaptation must be evidence-driven, not arbitrary | ✅ | Prerequisite graph, mastery, diagnostic, struggle signals, and deterministic progression |
| 3 | Learners must not be trapped by hidden prerequisite gaps | ✅ | Prerequisite-aware routing, diagnostic calibration, graph gating, remediation |
| 4 | Learning must remain usable when AI/network services fail | ✅ | KEA provider cascade + deterministic fallback; AURA core content can continue without runtime AI |
| 5 | Struggle must become actionable human intervention | ✅ | Struggle detection, intervention queue/cockpit, facilitator review and action |

---

## 1. AI must not compromise academic correctness

### Approach

We deliberately separate **generative AI responsibilities** from **authoritative learning-state decisions**.

KEA uses AI for tasks such as:

- topic understanding
- concept decomposition
- explanations
- worked examples
- practice generation
- semantic evaluation
- interview/oral feedback
- contextual adaptation

But deterministic TypeScript engines remain authoritative for:

- prerequisite validation
- graph integrity
- progression gating
- objective answer validation
- mastery calculation
- chemistry invariants
- session/security integrity

KEA's AI orchestration is also schema-validated and routed through provider/fallback logic.

AURA Learn follows the same principle: runtime AI assists personalization and contextual re-theming, while structured academic content, guardrails, mastery logic, and facilitator decisions remain authoritative.

### Why this matters

A fully autonomous LLM tutor could generate plausible but incorrect educational reasoning, or make progression decisions that are difficult to reproduce or audit. Our architecture intentionally prevents the model from directly setting mastery or bypassing prerequisite gates.

### Code

KEA:

```text
Hack Mysuru 1.0/src/lib/ai/
Hack Mysuru 1.0/src/lib/knowledge-graph/
Hack Mysuru 1.0/src/lib/mastery/
Hack Mysuru 1.0/src/lib/chemistry/
Hack Mysuru 1.0/src/app/api/assessment/
```

AURA Learn:

```text
AURA-Learn-main/lib/ai/
AURA-Learn-main/lib/mastery.ts
AURA-Learn-main/lib/adaptive.ts
AURA-Learn-main/lib/curriculum.ts
```

---

## 2. Adaptation must be evidence-driven, not arbitrary

### Approach

The system adapts from learner evidence rather than asking an LLM to freely choose the next lesson.

KEA combines evidence through deterministic engines and routes the learner according to the resulting learning state.

Examples of evidence include:

- diagnostic performance
- practice performance
- written assessment
- oral/interview evidence
- prerequisite mastery
- recent performance
- demonstrated misconceptions
- pace/learning rhythm
- intervention history

KEA uses a deterministic mastery model (W-EMM) and explicit graph-gating rules.

AURA Learn uses learning evidence including:

- quiz accuracy
- recent performance
- prerequisite mastery
- retention
- virtual-lab performance

Its struggle layer also considers repeated mistakes, low accuracy, excessive time, hint dependency, topic revisits, skipped questions, and prerequisite weakness.

### Adaptive behavior

```text
Strong evidence
      ↓
Advance / extension

Mixed evidence
      ↓
Continue / scaffold

Weak evidence
      ↓
Remediate prerequisite
      ↓
Reassess
```

### Code

KEA:

```text
Hack Mysuru 1.0/src/lib/mastery/
Hack Mysuru 1.0/src/lib/diagnostic/
Hack Mysuru 1.0/src/lib/pace/
Hack Mysuru 1.0/src/components/ai/ai-learning-panel.tsx
```

AURA Learn:

```text
AURA-Learn-main/lib/adaptive.ts
AURA-Learn-main/lib/mastery.ts
AURA-Learn-main/lib/struggle.ts
AURA-Learn-main/components/adaptive/
```

---

## 3. Learners must not be trapped by hidden prerequisite gaps

### Approach

Both MVPs model learning as a dependency-aware path rather than a flat list of lessons.

KEA:

```text
Topic
  ↓
Concepts
  ↓
Prerequisite relationships
  ↓
Diagnostic
  ↓
Available / Locked / Current / Remediation states
  ↓
Mastery-gated progression
```

The knowledge graph is treated as a functional learner map. A dependent concept is not simply unlocked because the learner reached the relevant page; prerequisite conditions must be satisfied.

AURA Learn similarly maintains prerequisite relationships and can keep a dependent learning activity locked while the prerequisite is strengthened.

### What happens when a gap is detected?

```text
Diagnostic / Assessment
        ↓
Missed concept identified
        ↓
Prerequisite weakness recorded
        ↓
Targeted practice / refresher
        ↓
New evidence
        ↓
Re-evaluate progression
```

### Code

KEA:

```text
Hack Mysuru 1.0/src/lib/knowledge-graph/
Hack Mysuru 1.0/src/lib/diagnostic/
Hack Mysuru 1.0/src/components/entry/prerequisite-diagnostic-view.tsx
Hack Mysuru 1.0/src/components/entry/topic-graph-preview.tsx
```

AURA Learn:

```text
AURA-Learn-main/lib/curriculum.ts
AURA-Learn-main/lib/adaptive.ts
AURA-Learn-main/components/curriculum/CurriculumGraph.tsx
```

---

## 4. Learning must remain usable when AI/network services fail

### KEA approach

KEA uses an explicit provider cascade:

```text
Primary live provider
      ↓
Secondary live provider
      ↓
Optional tertiary provider
      ↓
Deterministic fallback
```

The current implementation uses:

```text
Groq
  ↓
NVIDIA NIM
  ↓
Gemini adapter
  ↓
Deterministic fallback
```

The important design rule is that AI-provider failure should not corrupt learner state or make deterministic progression logic disappear.

### AURA Learn approach

AURA Learn keeps core educational content in the application and treats runtime AI as an augmentation layer for personalization/contextualization.

Conceptually:

```text
Core learning content
        ↓
Core learning flow continues
        │
        └── Runtime AI available?
                ├── YES → personalized / rethemed content
                └── NO  → original / fallback content
```

### What does not work without an external model?

Live generative operations such as:

- runtime AI re-theming
- runtime AI tutor responses
- other external-model-dependent generation

can require network/model access. They are therefore treated as optional augmentation rather than the single point of failure for core learning progression.

### Code

KEA:

```text
Hack Mysuru 1.0/src/lib/ai/ai-orchestrator.ts
Hack Mysuru 1.0/src/lib/ai/provider-health.ts
Hack Mysuru 1.0/src/lib/ai/fallback-provider.ts
```

AURA Learn:

```text
AURA-Learn-main/lib/ai/resilience.ts
AURA-Learn-main/lib/ai/retheme.ts
AURA-Learn-main/lib/ai/llm.ts
```

---

## 5. Struggle must become actionable human intervention

### Approach

Adaptive learning is not complete if the platform only detects that a learner is struggling.

The system must turn the signal into an actionable intervention.

AURA Learn tracks struggle signals such as:

- repeated incorrect answers
- low accuracy
- excessive time
- hint dependency
- prerequisite weakness
- repeated topic difficulty

KEA similarly surfaces remediation cues and facilitator intervention state when repeated conceptual struggle is detected.

### Intervention loop

```text
Learner interaction
        ↓
Evidence collected
        ↓
Struggle / misconception detected
        ↓
Targeted remediation generated
        ↓
Intervention surfaced
        ↓
Facilitator reviews
        ↓
Facilitator acts
        ↓
Learner retries
        ↓
Mastery recalculated
```

The facilitator remains the human decision-maker rather than being replaced by an autonomous AI agent.

### Why this matters

A teacher or facilitator cannot manually inspect every interaction from a large learner cohort. The system should reduce the search space to the learners and concepts that require attention, while still keeping the final intervention decision visible to the human.

### Code

KEA:

```text
Hack Mysuru 1.0/src/lib/intervention/
Hack Mysuru 1.0/src/components/facilitator/facilitator-cockpit.tsx
Hack Mysuru 1.0/src/components/ai/ai-learning-panel.tsx
```

AURA Learn:

```text
AURA-Learn-main/lib/struggle.ts
AURA-Learn-main/lib/intervention.ts
AURA-Learn-main/lib/facilitator.ts
AURA-Learn-main/app/facilitator/queue/page.tsx
AURA-Learn-main/components/adaptive/InterventionCard.tsx
```

---

## Constraint Summary

The architecture follows one consistent rule:

```text
AI generates and assists
        ↓
Deterministic learning engines validate
        ↓
Learner evidence updates state
        ↓
Adaptive routing chooses the next learning action
        ↓
Human facilitator intervenes when needed
```

This separation gives Bug Busters two independent MVP experiences while keeping the core adaptive-learning decisions observable, testable, and controllable.

---

## What we deliberately did NOT build

We did not make an end-to-end autonomous LLM tutor responsible for:

- deciding mastery by itself
- bypassing prerequisites
- choosing critical progression without deterministic checks
- replacing facilitator intervention
- becoming a single point of failure for core learning

The engineering trade-off is additional explicit curriculum/rule modeling. We accepted that cost because explainable progression, academic correctness, resilience, and actionable intervention are core to the product.
