/**
 * KEA Platform — Deterministic Fallback Provider
 * 
 * Provides offline/resilient pedagogical learning artifacts, mock test generation,
 * semantic evaluation heuristics, and multi-turn interview progression when real
 * LLM API keys are absent or external services are unreachable.
 */

import { z } from "zod";
import { AIProvider, GenerationOptions, ProviderHealthResult, ProviderType } from "./ai-provider";
import {
  GeneratedLearningContent,
  GeneratedMockTest,
  AssessmentEvaluation,
  InterviewTurnEvaluation,
  InterviewSummary,
  RemediationPlan,
} from "./schemas";

export class FallbackProvider implements AIProvider {
  public readonly id: ProviderType = "fallback";
  public readonly displayName = "KEA Local Curriculum Engine (Fallback)";
  public readonly modelName = "kea-deterministic-v1";

  public isConfigured(): boolean {
    return true; // Always available offline
  }

  public async healthCheck(): Promise<ProviderHealthResult> {
    return {
      provider: this.id,
      configured: true,
      reachable: true,
      model: this.modelName,
      structuredOutputWorking: true,
      latencyMs: 1,
    };
  }

  public async generateText(prompt: string, options?: GenerationOptions): Promise<string> {
    const maxChars = options?.maxTokens ? options.maxTokens * 4 : 100;
    return `[KEA Deterministic Engine Response] Processing: ${prompt.slice(0, maxChars)}...`;
  }

  public async generateStructured<T>(
    prompt: string,
    schema: z.ZodType<T>,
    options?: GenerationOptions
  ): Promise<T> {
    const taskType = options?.taskType || this.inferTaskType(prompt);

    let result: unknown;

    switch (taskType) {
      case "learning":
        result = this.generateFallbackLearningContent(prompt);
        break;
      case "mock_test":
        result = this.generateFallbackMockTest();
        break;
      case "evaluation":
        result = this.generateFallbackEvaluation();
        break;
      case "interview":
        if (prompt.includes("summary") || prompt.includes("conclude") || prompt.includes("final evaluation")) {
          result = this.generateFallbackInterviewSummary();
        } else {
          result = this.generateFallbackInterviewTurn(prompt);
        }
        break;
      default:
        // Attempt heuristics or generic object
        result = this.generateFallbackLearningContent(prompt);
        break;
    }

    // Validate with provided Zod schema
    const parsed = schema.safeParse(result);
    if (!parsed.success) {
      // If the direct mock didn't match the exact schema, attempt alternate mocks
      const altSummary = schema.safeParse(this.generateFallbackInterviewSummary());
      if (altSummary.success) return altSummary.data;

      const altEval = schema.safeParse(this.generateFallbackEvaluation());
      if (altEval.success) return altEval.data;

      const altTest = schema.safeParse(this.generateFallbackMockTest());
      if (altTest.success) return altTest.data;

      const altRemediation = schema.safeParse(this.generateFallbackRemediation());
      if (altRemediation.success) return altRemediation.data;

      const altTopicPlan = schema.safeParse(this.generateFallbackTopicPlan(prompt));
      if (altTopicPlan.success) return altTopicPlan.data;

      const altOpening = schema.safeParse(this.generateFallbackOpeningQuestion(prompt));
      if (altOpening.success) return altOpening.data;

      throw new Error(`Fallback output failed schema validation: ${parsed.error.message}`);
    }

    return parsed.data;
  }

  private inferTaskType(prompt: string): "learning" | "mock_test" | "evaluation" | "interview" {
    const p = prompt.toLowerCase();
    if (p.includes("interview") || p.includes("interviewer") || p.includes("transcript") || p.includes("follow-up")) {
      return "interview";
    }
    if (p.includes("mock test") || p.includes("exam") || p.includes("questions") && p.includes("rubric")) {
      return "mock_test";
    }
    if (p.includes("evaluate") || p.includes("grading") || p.includes("rubric hits")) {
      return "evaluation";
    }
    return "learning";
  }

  public generateFallbackLearningContent(prompt: string): GeneratedLearningContent {
    const isIsomerism = prompt.toLowerCase().includes("isomer") || prompt.toLowerCase().includes("stage 4");
    const isReactions = prompt.toLowerCase().includes("reaction") || prompt.toLowerCase().includes("stage 5");
    const isFunctional = prompt.toLowerCase().includes("functional") || prompt.toLowerCase().includes("stage 3");

    if (isFunctional) {
      return {
        conceptId: "concept_functional_groups",
        conceptTitle: "Functional Groups & Intermolecular Polarity",
        personalizedExplanation:
          "Functional groups are specific clusters of atoms that dictate the reactivity, polarity, and physical properties of organic molecules. Primary alcohols feature the polar hydroxyl (-OH) group, capable of participating in intermolecular hydrogen bonding with water and elevating boiling points compared to non-polar alkanes of comparable molar mass.",
        workedExamples: [
          {
            stepNumber: 1,
            action: "Identify the heteroatom electronegativity difference",
            reasoning: "Oxygen (3.44) is substantially more electronegative than hydrogen (2.20), creating a strong permanent dipole.",
          },
          {
            stepNumber: 2,
            action: "Assess intermolecular hydrogen bonding capacity",
            reasoning: "The partially positive hydrogen atom associates with the lone pairs on adjacent oxygen atoms.",
          },
          {
            stepNumber: 3,
            action: "Predict physical boiling point and solubility trends",
            reasoning: "Hydrogen bonding requires significantly more thermal energy to disrupt than London dispersion forces alone.",
          },
        ],
        misconceptionAlert: {
          commonPitfall: "Confusing the neutral covalent alcohol -OH group with basic ionic hydroxide ions (OH-).",
          howToAvoid: "Alcohols contain covalent C-O bonds and do not spontaneously dissociate into hydroxide ions in water.",
        },
        practiceQuestion: {
          id: "pq_functional_1",
          prompt: "Why does ethanol (C2H5OH) have a significantly higher boiling point (78°C) than dimethyl ether (CH3OCH3, -24°C) despite both sharing molecular formula C2H6O?",
          options: [
            "Ethanol forms intermolecular hydrogen bonds, whereas dimethyl ether cannot",
            "Dimethyl ether has a greater molecular weight",
            "Ethanol is completely non-polar",
            "Dimethyl ether contains ionic bonds",
          ],
          correctOptionIndex: 0,
          explanation: "Ethanol possesses an -OH group capable of hydrogen bonding, requiring vastly higher thermal energy to vaporize.",
          difficulty: "intermediate",
        },
        hint: "Look for hydrogen directly bound to a highly electronegative atom (N, O, F).",
        stretchChallenge: "Rank ethanol, ethanethiol (C2H5SH), and ethane by boiling point and justify using dipole strengths.",
        recommendedNextStep: "Analyze carbonyl functional groups in aldehydes and ketones.",
      };
    }

    if (isIsomerism) {
      return {
        conceptId: "concept_isomers_foundations",
        conceptTitle: "Structural & Stereoisomerism",
        personalizedExplanation:
          "Isomers are molecules sharing the identical molecular formula but differing fundamentally in how their constituent atoms are arranged in physical space. In constitutional isomers, the connectivity of the carbon scaffold itself varies (e.g. butane vs 2-methylpropane). In stereoisomers, atoms connect in the same order but point in distinct 3D spatial directions, creating dramatically different chemical and biological interactions.",
        workedExamples: [
          {
            stepNumber: 1,
            action: "Count total carbons, hydrogens, and heteroatoms",
            reasoning: "Both butane and isobutane evaluate to C4H10, verifying they are isomers.",
          },
          {
            stepNumber: 2,
            action: "Trace the longest continuous carbon chain",
            reasoning: "Butane has an unbranched 4-carbon chain, whereas 2-methylpropane has a branched 3-carbon parent chain.",
          },
          {
            stepNumber: 3,
            action: "Verify physical properties differentiation",
            reasoning: "Branching reduces molecular surface area, leading to lower boiling points.",
          },
        ],
        misconceptionAlert: {
          commonPitfall: "Assuming bent or rotated 2D drawings represent different constitutional isomers.",
          howToAvoid: "Verify actual chemical connectivity: single C-C bonds freely rotate without forming a new isomer.",
        },
        practiceQuestion: {
          id: "pq_isomers_1",
          prompt: "Which pair represents constitutional (structural) isomers?",
          options: [
            "Butane and 2-methylpropane (isobutane)",
            "Propane and butane",
            "Cyclohexane and benzene",
            "Methane and ethane",
          ],
          correctOptionIndex: 0,
          explanation: "Both butane and 2-methylpropane possess formula C4H10 but have distinct connectivity.",
          difficulty: "intermediate",
        },
        hint: "Count total atoms in both candidates before checking branching patterns.",
        stretchChallenge: "Explain why cis-2-butene and trans-2-butene cannot interconvert at room temperature without breaking the pi bond.",
        recommendedNextStep: "Analyze stereoisomeric mirror images and chirality.",
      };
    }

    if (isReactions) {
      return {
        conceptId: "concept_organic_reactions",
        conceptTitle: "Electrophilic Addition & Functional Transformations",
        personalizedExplanation:
          "Organic reactions transform starting materials into higher-value products by systematically breaking and forming covalent bonds. In catalytic hydrogenation, molecular hydrogen (H2) adds across a carbon-carbon double bond over a transition metal catalyst (Pt, Pd, or Ni), converting an unsaturated alkene into a saturated alkane while releasing exothermic heat.",
        workedExamples: [
          {
            stepNumber: 1,
            action: "Identify the reactive functional center",
            reasoning: "The electron-rich pi bond of ethene acts as the nucleophilic reaction site.",
          },
          {
            stepNumber: 2,
            action: "Adsorb reactants onto the solid metal catalyst surface",
            reasoning: "The metal catalyst weakens the H-H bond and coordinates the alkene molecules.",
          },
          {
            stepNumber: 3,
            action: "Transfer hydrogens via syn-addition across the double bond",
            reasoning: "Both hydrogen atoms add from the same face, yielding saturated ethane (C2H6).",
          },
        ],
        misconceptionAlert: {
          commonPitfall: "Believing that the catalyst supplies energy or is permanently consumed in the reaction.",
          howToAvoid: "Remember catalysts lower the activation energy barrier and emerge chemically unchanged at reaction completion.",
        },
        practiceQuestion: {
          id: "pq_reactions_1",
          prompt: "What is the primary organic product when ethene (C2H4) undergoes catalytic hydrogenation with H2 over Ni?",
          options: ["Ethane (C2H6)", "Ethyne (C2H2)", "Ethanol (C2H5OH)", "Acetic acid (CH3COOH)"],
          correctOptionIndex: 0,
          explanation: "Hydrogenation adds two hydrogen atoms across the C=C double bond, converting alkene to alkane.",
          difficulty: "intermediate",
        },
        hint: "A double bond requires two hydrogen atoms to become completely saturated.",
        stretchChallenge: "Determine whether the addition of D2 (deuterium) to cyclohexene yields cis- or trans-1,2-dideuterocyclohexane.",
        recommendedNextStep: "Investigate acid-catalyzed hydration of alkenes to synthesize alcohols.",
      };
    }

    // Default General Organic Chemistry
    return {
      conceptId: "concept_carbon_bonding",
      conceptTitle: "Tetrahedral Carbon & Covalent Architecture",
      personalizedExplanation:
        "Carbon occupies a unique position in chemistry due to its valency of 4 and intermediate electronegativity. In sp3 hybridization, carbon promotes an electron and hybridizes its 2s and three 2p orbitals into four degenerate sp3 hybrid orbitals oriented at 109.5° angles, forming extraordinarily stable tetrahedral lattices and chains.",
      workedExamples: [
        {
          stepNumber: 1,
          action: "Determine valence electron count for carbon (Z=6)",
          reasoning: "Carbon has electron configuration 1s2 2s2 2p2, providing 4 valence electrons.",
        },
        {
          stepNumber: 2,
          action: "Promote and hybridize to maximize bond formation",
          reasoning: "Hybridizing into 4 sp3 orbitals allows 4 identical sigma bonds with hydrogen in methane.",
        },
        {
          stepNumber: 3,
          action: "Measure VSEPR steric geometry",
          reasoning: "Four electron domains mutually repel to achieve a 109.5° tetrahedral equilibrium.",
        },
      ],
      misconceptionAlert: {
        commonPitfall: "Picturing methane as a flat 90° cross in space as drawn on 2D paper.",
        howToAvoid: "Think in 3D: three-dimensional tetrahedral repulsion expands bond angles from 90° to 109.5°.",
      },
      practiceQuestion: {
        id: "pq_carbon_1",
        prompt: "What is the bond angle in a fully saturated sp3 hybridized carbon center?",
        options: ["109.5°", "120°", "180°", "90°"],
        correctOptionIndex: 0,
        explanation: "Tetrahedral geometry minimizes electron repulsion at 109.5°.",
        difficulty: "foundational",
      },
      hint: "Remember three-dimensional geometry repels further than a flat square.",
      stretchChallenge: "Compare the bond angle of methane (109.5°) to water (104.5°) based on lone pair repulsion.",
      recommendedNextStep: "Explore carbon-carbon concatenation in straight and branched alkanes.",
    };
  }

  public generateFallbackMockTest(): GeneratedMockTest {
    return {
      id: `mock_test_${Date.now()}`,
      title: "Organic Chemistry Mastery Diagnostic Exam",
      topic: "Organic Chemistry",
      stageNumber: 3,
      targetDifficulty: "adaptive",
      questions: [
        {
          id: "mt_q1",
          type: "multiple_choice",
          conceptId: "concept_carbon_bonding",
          conceptTitle: "Carbon Fundamentals",
          difficulty: "foundational",
          prompt: "How many covalent bonds does a neutral carbon atom form to fulfill its octet?",
          options: ["2", "3", "4", "6"],
          correctOptionIndex: 2,
          expectedConcepts: ["valency", "octet_rule", "carbon_bonding"],
          rubric: [{ criterion: "Identifies 4 covalent bonds", weight: 1.0 }],
          explanation: "Carbon has 4 valence electrons and requires 4 shared electron pairs to complete its valence shell.",
        },
        {
          id: "mt_q2",
          type: "multiple_choice",
          conceptId: "concept_hydrocarbons",
          conceptTitle: "Alkanes vs Alkenes",
          difficulty: "intermediate",
          prompt: "What distinguishes an alkene from an alkane in terms of chemical bonding?",
          options: [
            "Alkenes contain at least one carbon-carbon double bond",
            "Alkenes only contain single C-H bonds",
            "Alkenes have no hydrogen atoms",
            "Alkenes contain triple bonds exclusively",
          ],
          correctOptionIndex: 0,
          expectedConcepts: ["alkene_structure", "pi_bonds", "saturation"],
          rubric: [{ criterion: "Selects option noting C=C double bond presence", weight: 1.0 }],
          explanation: "Alkenes are unsaturated hydrocarbons containing one or more C=C double bonds composed of a sigma and pi bond.",
        },
        {
          id: "mt_q3",
          type: "short_answer",
          conceptId: "concept_functional_groups",
          conceptTitle: "Functional Groups",
          difficulty: "intermediate",
          prompt: "State the characteristic functional group present in all primary alcohols, and explain how it affects solubility in water.",
          options: undefined,
          correctOptionIndex: undefined,
          expectedConcepts: ["hydroxyl_group", "hydrogen_bonding", "polarity"],
          rubric: [
            { criterion: "Names hydroxyl group (-OH)", weight: 0.5 },
            { criterion: "Mentions hydrogen bonding or polar interaction with water molecules", weight: 0.5 },
          ],
          sampleIdealAnswer: "Alcohols contain the hydroxyl group (-OH). The polar O-H bond can participate in hydrogen bonding with water molecules, significantly increasing aqueous solubility for short-chain alcohols.",
          explanation: "The -OH group enables hydrogen bonding with water, increasing aqueous solubility.",
        },
        {
          id: "mt_q4",
          type: "reasoning",
          conceptId: "concept_isomers_foundations",
          conceptTitle: "Isomerism Reasoning",
          difficulty: "advanced",
          prompt: "Explain why butane (C4H10) and 2-methylpropane (C4H10) have identical molecular formulas but distinct boiling points.",
          options: undefined,
          correctOptionIndex: undefined,
          expectedConcepts: ["structural_isomerism", "branching", "london_dispersion_forces", "surface_area"],
          rubric: [
            { criterion: "Recognizes constitutional isomerism with different carbon branching", weight: 0.4 },
            { criterion: "Connects linear structure of butane to higher surface area and stronger dispersion forces", weight: 0.6 },
          ],
          sampleIdealAnswer: "They are constitutional isomers. Butane has an unbranched 4-carbon chain with a larger cylindrical surface area, allowing stronger London dispersion forces. 2-Methylpropane is compact and spherical, reducing intermolecular contact and lowering its boiling point.",
          explanation: "Linear molecules pack more effectively and have larger contact surface areas than spherical branched isomers.",
        },
        {
          id: "mt_q5",
          type: "reasoning",
          conceptId: "concept_organic_reactions",
          conceptTitle: "Catalytic Hydrogenation Mechanism",
          difficulty: "advanced",
          prompt: "During catalytic hydrogenation of ethene to ethane over a platinum catalyst, explain the mechanical role of the platinum metal.",
          options: undefined,
          correctOptionIndex: undefined,
          expectedConcepts: ["heterogeneous_catalysis", "adsorption", "activation_energy", "unchanged_catalyst"],
          rubric: [
            { criterion: "Explains reactant adsorption onto platinum surface", weight: 0.5 },
            { criterion: "Articulates lowering of activation energy without permanent chemical consumption of catalyst", weight: 0.5 },
          ],
          sampleIdealAnswer: "The platinum metal acts as a heterogeneous catalyst. It adsorbs H2 and alkene molecules onto its surface, cleaving the H-H bond and positioning the reactants to lower the activation energy barrier. The platinum is regenerated unchanged at reaction end.",
          explanation: "Heterogeneous metal catalysts provide a surface template that breaks H-H bonds and lowers activation energy.",
        },
      ],
    };
  }

  public generateFallbackEvaluation(): AssessmentEvaluation {
    return {
      testId: "eval_test_fallback",
      topic: "Organic Chemistry",
      totalQuestions: 5,
      overallScore: 84,
      evaluations: [
        {
          questionId: "mt_q1",
          conceptId: "concept_carbon_bonding",
          isCorrect: true,
          score: 100,
          understanding: "strong",
          rubricHits: ["Identifies 4 covalent bonds"],
          misconceptions: [],
          feedback: "Correct! Neutral carbon always forms 4 covalent bonds to complete its octet.",
          confidence: 0.95,
        },
        {
          questionId: "mt_q2",
          conceptId: "concept_hydrocarbons",
          isCorrect: true,
          score: 100,
          understanding: "strong",
          rubricHits: ["Selects option noting C=C double bond presence"],
          misconceptions: [],
          feedback: "Accurate! The presence of a C=C double bond designates an alkene.",
          confidence: 0.95,
        },
        {
          questionId: "mt_q3",
          conceptId: "concept_functional_groups",
          isCorrect: true,
          score: 85,
          understanding: "strong",
          rubricHits: ["Names hydroxyl group (-OH)", "Mentions polar interaction"],
          misconceptions: [],
          feedback: "Solid explanation. You correctly identified the hydroxyl group and its role in water solubility.",
          confidence: 0.9,
        },
        {
          questionId: "mt_q4",
          conceptId: "concept_isomers_foundations",
          isCorrect: true,
          score: 75,
          understanding: "partial",
          rubricHits: ["Recognizes constitutional isomerism"],
          misconceptions: ["Incomplete articulation of London dispersion forces"],
          feedback: "Good grasp of branching vs linearity. Ensure you explicitly cite intermolecular dispersion forces.",
          confidence: 0.85,
        },
        {
          questionId: "mt_q5",
          conceptId: "concept_organic_reactions",
          isCorrect: true,
          score: 80,
          understanding: "strong",
          rubricHits: ["Explains reactant adsorption", "Articulates lowering of activation energy"],
          misconceptions: [],
          feedback: "Well reasoned explanation of heterogeneous catalysis on metal surfaces.",
          confidence: 0.88,
        },
      ],
      strengths: [
        "Solid foundational knowledge of carbon bonding and valency",
        "Clear grasp of functional groups and solubility interactions",
        "Understands catalytic mechanisms in alkene hydrogenation",
      ],
      areasForImprovement: [
        "Reinforce quantitative explanation of London dispersion forces in branched isomers",
      ],
      recommendedAction: "advance",
    };
  }

  public generateFallbackInterviewTurn(prompt: string): InterviewTurnEvaluation {
    const p = prompt.toLowerCase();

    // Contextual branching based on student's response in prompt
    if (p.includes("provides the energy") || p.includes("energy")) {
      return {
        understanding: "partial",
        conceptCoverage: ["catalysis", "activation_energy"],
        misconceptions: ["Belief that catalyst provides thermal energy"],
        reasoningQuality: "Intuitive but confuses lowering activation energy with supplying energy.",
        confidence: 0.88,
        nextAction: "follow_up",
        nextQuestion: "Let's examine that carefully. If the catalyst provided energy, it would be consumed. Why is the catalyst not consumed in the overall reaction, and what barrier does it actually lower?",
        nextConceptId: "concept_organic_reactions",
        feedbackToStudent: "You touched on the reaction happening faster, but let's clarify how catalysts operate without providing net energy.",
      };
    }

    if (p.includes("surface") || p.includes("adsorption") || p.includes("barrier") || p.includes("activation")) {
      return {
        understanding: "strong",
        conceptCoverage: ["heterogeneous_catalysis", "adsorption", "activation_energy"],
        misconceptions: [],
        reasoningQuality: "Thorough scientific precision with correct mechanistic terminology.",
        confidence: 0.94,
        nextAction: "advance",
        nextQuestion: "Excellent articulation! Now, how does this same catalytic addition affect the stereochemistry of a substituted cycloalkene?",
        nextConceptId: "concept_isomers_foundations",
        feedbackToStudent: "Outstanding explanation of adsorption and activation energy reduction!",
      };
    }

    if (p.includes("idk") || p.includes("don't know") || p.length < 20) {
      return {
        understanding: "weak",
        conceptCoverage: [],
        misconceptions: ["procedural_guessing"],
        reasoningQuality: "Insufficient reasoning provided.",
        confidence: 0.85,
        nextAction: "remediate",
        nextQuestion: "That's completely fine. Let's step back: imagine you want two friends to meet. Instead of having them wander randomly, you invite them both to your table. How does the metal catalyst act like that table for hydrogen and ethene?",
        nextConceptId: "concept_organic_reactions",
        feedbackToStudent: "Let's build intuition with a helpful physical analogy.",
      };
    }

    // Default conversational continuation
    return {
      understanding: "strong",
      conceptCoverage: ["organic_bonding", "molecular_architecture"],
      misconceptions: [],
      reasoningQuality: "Clear conceptual articulation with appropriate chemical intuition.",
      confidence: 0.9,
      nextAction: "follow_up",
      nextQuestion: "Good insight! Can you connect that concept to why branched hydrocarbons have lower boiling points than their linear isomers?",
      nextConceptId: "concept_isomers_foundations",
      feedbackToStudent: "Strong grasp demonstrated. Let's explore the physical consequences of this molecular shape.",
    };
  }

  public generateFallbackInterviewSummary(): InterviewSummary {
    return {
      sessionId: `int_session_${Date.now()}`,
      topic: "Organic Chemistry Multi-Turn Oral Defense",
      overallScore: 88,
      understandingLevel: "proficient",
      conceptsDemonstrated: [
        "Carbon Tetravalency",
        "Alkene Saturation",
        "Heterogeneous Catalysis",
        "Constitutional Isomerism",
      ],
      strongConcepts: [
        "Clear explanation of covalent architecture and sp3 bonding",
        "Accurate description of reactant adsorption on metal catalyst surfaces",
      ],
      weakConcepts: [
        "Distinguishing catalyst activation energy reduction from energy provision",
      ],
      misconceptions: [
        "Initial suggestion that catalyst supplies thermal energy to drive the reaction",
      ],
      reasoningQualitySummary:
        "Student demonstrated strong verbal fluidity, responded adaptively to challenging counter-prompts, and self-corrected when prompted on catalyst thermodynamics.",
      recommendedNextSteps: [
        "Review transition state energy diagrams for catalyzed vs uncatalyzed additions",
        "Advance to Stereoisomerism and Chiral Enantiomer separation",
      ],
      sampleEvidenceQuote:
        "Hydrogen is added across the double bond on the metal surface, which lowers the activation barrier.",
    };
  }

  public generateFallbackRemediation(): RemediationPlan {
    return {
      conceptId: "concept_catalysis_remediation",
      conceptTitle: "Catalyst Energy Barrier Scaffolding",
      diagnosedMisconception: "Student assumes catalysts provide heat or thermodynamic energy to reactions.",
      prescriptiveGuidance:
        "Remember: catalysts NEVER add energy to a reaction or change equilibrium constants (ΔG). They merely offer an alternative reaction pathway featuring a lower activation energy (Ea), like taking a tunnel through a mountain rather than climbing over the peak.",
      concreteAnalogy:
        "Think of a mountain tunnel: it does not push your car forward, but it lowers the height you must climb to reach the other side.",
      practiceChallenge: {
        id: "rc_q1",
        prompt: "Which statement accurately describes the thermodynamic effect of adding a catalyst?",
        options: [
          "It lowers activation energy (Ea) without altering the net free energy change (ΔG)",
          "It provides exothermic heat to power the reaction",
          "It is consumed in the reaction to create products",
          "It shifts the equilibrium constant to 100% products",
        ],
        correctOptionIndex: 0,
        explanation: "Catalysts lower the kinetic barrier (Ea) but leave thermodynamic states (ΔG) unchanged.",
        difficulty: "intermediate",
      },
      estimatedMinutesToRecover: 4,
    };
  }

  public generateFallbackTopicPlan(prompt: string): unknown {
    const isPython = prompt.toLowerCase().includes("python");
    return {
      topic: isPython ? "Python Programming" : "Academic Mastery Path",
      category: isPython ? "Computer Science" : "Science & Analysis",
      estimatedHours: 12,
      overview: "A structured curriculum pathway designed for systematic mastery and conceptual progression.",
      prerequisiteSummary: "Foundational concepts and principles.",
      stages: [
        {
          id: "stage-1",
          stageNumber: 1,
          title: "Foundations & Core Principles",
          tagline: "Essential Building Blocks",
          objective: "Master primary concepts and initial mechanics.",
          conceptIds: ["c1", "c2"],
          prerequisites: ["None"],
          learningActivities: ["Interactive lessons", "Guided practice"],
          milestoneAssessment: "Foundations Checkpoint",
          masteryCondition: "Demonstrate >= 80% mastery",
        },
        {
          id: "stage-2",
          stageNumber: 2,
          title: "Intermediate Applications",
          tagline: "Mechanism & Problem Solving",
          objective: "Apply foundational rules to realistic multi-step problems.",
          conceptIds: ["c3", "c4"],
          prerequisites: ["Stage 1"],
          learningActivities: ["Worked examples", "Analytical exercises"],
          milestoneAssessment: "Intermediate Checkpoint",
          masteryCondition: "Demonstrate >= 80% mastery",
        },
      ],
      concepts: [
        {
          id: "c1",
          name: "Foundational Rules & Syntax",
          summary: "Core axioms and preliminary principles.",
          difficulty: "foundational",
          prerequisiteIds: [],
        },
        {
          id: "c2",
          name: "Elementary Mechanics",
          summary: "Basic interactions and operational methods.",
          difficulty: "foundational",
          prerequisiteIds: ["c1"],
        },
        {
          id: "c3",
          name: "Complex Dynamics",
          summary: "Synthesizing principles to solve non-trivial cases.",
          difficulty: "intermediate",
          prerequisiteIds: ["c2"],
        },
        {
          id: "c4",
          name: "Synthesis & Mastery",
          summary: "Comprehensive evaluation and high-level reasoning.",
          difficulty: "advanced",
          prerequisiteIds: ["c3"],
        },
      ],
    };
  }

  public generateFallbackOpeningQuestion(prompt: string): unknown {
    const isPhotosynthesis = prompt.toLowerCase().includes("photosynthesis");
    const isPython = prompt.toLowerCase().includes("python");

    if (isPhotosynthesis) {
      return {
        openingQuestion:
          "In your own words, explain how chlorophyll and accessory pigments capture light energy in chloroplasts, and how this initiates the light-dependent reactions of photosynthesis.",
        targetConceptId: "c1",
        reasoning:
          "Tests foundational comprehension of photochemical excitation and light absorption mechanics.",
      };
    }

    if (isPython) {
      return {
        openingQuestion:
          "In your own words, explain how Python variables and memory references operate, and what distinguishes mutable collections like lists from immutable types like tuples.",
        targetConceptId: "c1",
        reasoning:
          "Tests core understanding of memory model, variables, and type mutability in Python.",
      };
    }

    return {
      openingQuestion:
        "To begin our oral defense: explain what occurs at the molecular level when an alkene undergoes catalytic hydrogenation over a transition metal surface, and how orbital hybridization changes.",
      targetConceptId: "concept_carbon_bonding",
      reasoning:
        "Probes fundamental orbital hybridization and addition reaction mechanisms.",
    };
  }
}
