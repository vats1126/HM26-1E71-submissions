# Known Limitations & Future Scope

[← Back to README](../README.md)

> **Project:** Bug Busters — KEA × AURA Learn  
> **Team ID:** HM26-1E71  
> **Problem:** Adaptive Learning & Real-Time Intervention Platform

KEA and AURA Learn are two independent MVPs built around the same adaptive-learning vision. The current implementation is intentionally optimized for a hackathon-scale, demonstrable learning loop rather than production-scale education infrastructure.

## What Doesn't Work Yet

| Limitation | Why it exists | What we'd do next |
|---|---|---|
| **Full automated browser verification is unavailable in the current agent environment** | The Playwright driver download used by the browser subagent returned an upstream 404, so full headless visual regression could not be completed there. | Run a controlled browser QA suite on the target deployment environment and add repeatable screenshot/regression checks. |
| **KEA's Gemini provider is not currently usable with the configured credential** | The configured Gemini credential returned an authentication error, so KEA currently relies on the working Groq → NVIDIA → fallback cascade. | Replace the credential when needed and keep provider health checks/cascade behavior in place. |
| **Runtime generative AI depends on external model availability** | Live explanation, generation, semantic evaluation, tutoring, or re-theming can depend on an external model/API. | Add stronger retry/backoff, provider telemetry, cached responses, and deployment-grade observability. |
| **The two MVPs are locally unified through a launcher, not merged into one runtime** | KEA and AURA Learn were intentionally kept independent to preserve their existing architectures. | Deploy the launcher and both MVPs behind one production domain/reverse proxy while retaining application isolation. |
| **Topic depth outside the demonstrated domains is not yet uniformly curated** | KEA supports open-ended topic planning, but curriculum depth and interactive experiences vary by domain. | Build reusable domain adapters and richer visual/interactive lesson templates across STEM and other subjects. |
| **Current persistence is prototype-oriented** | AURA Learn uses application learning state with Supabase/PostgreSQL, while KEA's core learning engines remain largely deterministic and application-local for the MVP. | Introduce a shared learner-data model, durable event storage, and production-grade multi-tenant persistence where required. |

## Edge Cases We Don't Handle Completely

- **Ambiguous or very broad learner goals:** A request such as “learn science” can be decomposed in multiple reasonable ways. A production system should ask clarifying questions or establish scope before generating a large path.
- **Incorrect self-reported diagnostic reasoning:** A learner may select an answer correctly without understanding the prerequisite concept, or give an incomplete open response. More longitudinal evidence would improve confidence in the learner model.
- **Unusual domain safety/correctness requirements:** Open-ended AI generation should not be treated as authoritative for domains that require specialist review, formal certification, or high-stakes decisions.
- **Provider/API outages during live generation:** Core deterministic progression can remain intact, but live generative features may degrade to cached/original/fallback content.
- **Cross-device synchronization conflicts:** The MVP is not a complete distributed learning-state system. Simultaneous changes from multiple devices would require explicit event ordering and conflict resolution.
- **Browser-dependent speech behavior:** Oral interaction can vary with browser/device speech-recognition support, microphone permissions, and connectivity.
- **Highly granular classroom-scale intervention prioritisation:** The prototype surfaces struggle and intervention signals, but production systems would need richer cohort-level prioritisation to prevent facilitator overload.

## Scaling to All Learners

| What breaks first | Rough numbers / condition | Fix |
|---|---|---|
| **High-frequency learning-state writes** | As learner attempts, telemetry, mastery updates, and intervention events grow substantially, synchronous persistence becomes increasingly expensive. | Separate high-frequency telemetry from durable mastery state, batch writes, and process telemetry asynchronously while retaining a durable PostgreSQL/Supabase source of truth. |
| **Facilitator alert volume** | Large cohorts can generate many simultaneous struggle signals. | Aggregate repeated signals into learner/topic/cohort summaries and prioritize actionable risk states rather than emitting one alert per event. |
| **AI provider throughput and latency** | Concurrent learners can produce bursts of generation/evaluation requests. | Add provider-aware rate limiting, queues where appropriate, caching, retries, circuit breakers, and multi-provider routing. |
| **Curriculum generation consistency across many subjects** | Open-ended topics create uneven curriculum depth and interaction quality. | Maintain domain-specific validation, reusable instructional templates, evaluation sets, and curated benchmark topics. |
| **Distributed learner state** | Multiple sessions/devices increase synchronization and consistency requirements. | Move from application-local state patterns toward event-based learner-state updates with idempotency, ordering, and conflict handling. |

## Roadmap

1. **Production deployment:** Put the launcher, KEA, and AURA Learn behind a single production entry point while preserving their independent application boundaries.
2. **Unified learner model:** Standardize learner identity, concept evidence, mastery history, pace signals, interests, and intervention history across both MVPs.
3. **More robust AI operations:** Add provider observability, retries, rate limiting, caching, circuit breakers, and evaluation dashboards.
4. **Broader topic coverage:** Expand from the demonstrated Organic Chemistry and interactive science learning scenarios into reusable subject/domain adapters.
5. **Richer assessment evidence:** Improve longitudinal assessment, open-response evaluation, oral interaction, misconception tracking, and retention measurement.
6. **Offline-first learning:** Cache more core learning experiences locally and reconcile learner events safely after reconnect.
7. **Facilitator intelligence:** Move from individual intervention signals toward cohort heatmaps, intervention prioritisation, trend detection, and actionable summaries.
8. **Evaluation at scale:** Build a repeatable benchmark suite for curriculum quality, prerequisite correctness, adaptive routing, AI safety, latency, and learner-state integrity.

## Current MVP Boundary

The MVP deliberately optimizes for one verifiable adaptive-learning loop:

```text
Learner goal
    ↓
Topic understanding
    ↓
Prerequisites / learning path
    ↓
Learning interaction
    ↓
Assessment evidence
    ↓
Mastery / struggle update
    ↓
Adaptation
    ↓
Remediation or advancement
```

KEA emphasizes a **structured, standardized, knowledge-graph-driven experience**.

AURA Learn emphasizes a **more interactive and visually engaging learning experience**.

The two applications remain independent; the Bug Busters launcher provides the unified entry point.
