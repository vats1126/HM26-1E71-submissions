/**
 * KEA Platform — AI Mock Interview Start API Route
 * 
 * Endpoint: POST /api/interview/start
 * Initializes a dynamic, multi-turn adaptive oral defense session.
 * Generates an opening probing question contextualized to the learner's mastery profile.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { AIOrchestrator } from "@/lib/ai/ai-orchestrator";
import { createInterviewSession } from "@/lib/interview/session-store";

export const dynamic = "force-dynamic";

const InterviewStartInputSchema = z.object({
  topic: z.string().min(1).default("Organic Chemistry"),
  stageNumber: z.number().int().optional().default(3),
  targetConcepts: z
    .array(
      z
        .object({
          id: z.string(),
          title: z.string().optional(),
          name: z.string().optional(),
        })
        .transform((c) => ({
          id: c.id,
          title: c.title || c.name || "Core Concept",
        }))
    )
    .optional()
    .default([]),
  learnerMastery: z.number().min(0).max(100).optional().default(60),
  recentMistakes: z.array(z.string()).optional().default([]),
  demoMode: z.boolean().optional().default(false),
});

const OpeningQuestionSchema = z.object({
  openingQuestion: z.string().min(15),
  targetConceptId: z.string(),
  reasoning: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const parseResult = InterviewStartInputSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid interview start parameters",
          details: parseResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { topic, stageNumber, targetConcepts, learnerMastery, recentMistakes, demoMode } =
      parseResult.data;

    const sessionId = `int_sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const orchestrator = AIOrchestrator.getInstance();

    const conceptsDesc =
      targetConcepts.length > 0
        ? targetConcepts.map((c) => `${c.title} (${c.id})`).join(", ")
        : "Valency, Alkanes, Functional Groups, Isomerism, Catalytic Reactions";

    const prompt = `You are a supportive, rigorous Academic Defense Interviewer at KEA.
Topic: "${topic}" (Stage ${stageNumber})
Core Concepts: ${conceptsDesc}
Learner Mastery: ${learnerMastery}%
Known Recent Mistakes: ${recentMistakes.length > 0 ? recentMistakes.join("; ") : "None"}

Your goal is to conduct a multi-turn verbal/text conceptual interview.
Generate an engaging, open-ended opening question that prompts the student to explain the core mechanism or principle behind the topic.

Do NOT ask a multiple choice question. Ask for verbal or written conceptual reasoning.
Adhere strictly to this JSON schema:
{
  "openingQuestion": "The clear, thought-provoking question to start the interview",
  "targetConceptId": "ID of the concept being probed",
  "reasoning": "Why this question tests foundational understanding"
}`;

    let question = "In your own words, explain how carbon's valence electrons enable it to form diverse molecular architectures, and what happens when an unsaturated alkene is hydrogenated.";
    let conceptId = targetConcepts[0]?.id || "concept_carbon_bonding";
    let metadata: unknown;

    try {
      const res = await orchestrator.generateStructured(prompt, OpeningQuestionSchema, {
        taskType: "interview",
        forceFallback: demoMode,
        temperature: 0.3,
        timeoutMs: 15000,
      });
      question = res.data.openingQuestion;
      conceptId = res.data.targetConceptId;
      metadata = res.metadata;
    } catch {
      // Offline fallback defaults
      question = "To begin our oral defense on Organic Chemistry: explain what occurs at the molecular level when an alkene undergoes catalytic hydrogenation over a platinum or nickel surface.";
      conceptId = "concept_organic_reactions";
      metadata = {
        provider: "fallback",
        model: "kea-deterministic-v1",
        taskType: "interview",
        latencyMs: 1,
        fallbackUsed: true,
        retryCount: 0,
        schemaValid: true,
        timestamp: new Date().toISOString(),
      };
    }

    createInterviewSession({
      sessionId,
      topic,
      stageNumber,
      targetConcepts,
      learnerMastery,
      currentQuestion: question,
      currentConceptId: conceptId,
      maxTurns: 4,
    });

    return NextResponse.json(
      {
        success: true,
        sessionId,
        topic,
        currentQuestion: question,
        currentConceptId: conceptId,
        targetConcepts,
        status: "active",
        turnIndex: 1,
        metadata,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[API /api/interview/start] Error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to initialize interview session",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
