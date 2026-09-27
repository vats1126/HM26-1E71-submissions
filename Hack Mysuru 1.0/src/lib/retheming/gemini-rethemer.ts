/**
 * Gemini AI Re-Theming Provider for KEA (P0-04)
 * 
 * Uses Google GenAI SDK to adapt problem narratives to a student's chosen passion theme
 * (space, wildlife, chef, superhero) with strict programmatic invariant validation.
 */

import { GoogleGenAI, Type } from "@google/genai";
import { StudentTheme } from "@/types";
import { CanonicalQuestion, RethemedQuestion } from "./types";
import { validateInvariants } from "./invariant-checker";
import { getFallbackRethemedQuestion } from "./fallback-rethemer";

export async function rethemeWithGemini(
  canonical: CanonicalQuestion,
  theme: StudentTheme
): Promise<RethemedQuestion> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return getFallbackRethemedQuestion(canonical, theme);
  }

  const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";

  try {
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are an educational problem adapter for elementary/middle school students.
Task: Re-theme the following math/logic question into the student's chosen passion theme: "${theme}".

CRITICAL INVARIANT RULES:
1. You MUST preserve all exact numbers, fractions, formulas, and percentages: ${JSON.stringify(
      canonical.canonicalNumbers
    )}. Do NOT change any numbers or math operators!
2. You MUST preserve the exact same number of options (${canonical.options.length}).
3. Option ${canonical.correctOptionId} MUST remain the correct answer!
4. The narrative should be engaging, age-appropriate, and fit the "${theme}" theme.

Canonical Problem:
Question: ${canonical.questionText}
Options: ${JSON.stringify(canonical.options)}
Correct Option ID: ${canonical.correctOptionId}
Explanation: ${canonical.explanation}

Output strictly matching the required JSON schema.`;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            thematicContext: {
              type: Type.STRING,
              description: "A short 3-6 word themed scenario title (e.g. Commander Leo's Rocket Fuel Tanks)",
            },
            questionText: {
              type: Type.STRING,
              description: "The re-themed question narrative preserving all exact numbers and fractions",
            },
            options: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  text: { type: Type.STRING },
                  isCorrect: { type: Type.BOOLEAN },
                },
                required: ["id", "text", "isCorrect"],
              },
            },
          },
          required: ["thematicContext", "questionText", "options"],
        },
      },
    });

    const responseText = response.text?.trim();
    if (!responseText) {
      return getFallbackRethemedQuestion(canonical, theme);
    }

    const candidate = JSON.parse(responseText);

    // Validate Academic Invariants
    const validation = validateInvariants(canonical, {
      questionText: candidate.questionText,
      options: candidate.options,
      correctOptionId: canonical.correctOptionId,
    });

    if (!validation.passed) {
      console.warn("AI re-theming failed invariant check, using fallback:", validation.errors);
      return getFallbackRethemedQuestion(canonical, theme);
    }

    return {
      canonicalId: canonical.id,
      conceptId: canonical.conceptId,
      theme,
      thematicContext: candidate.thematicContext,
      questionText: candidate.questionText,
      options: candidate.options,
      correctOptionId: canonical.correctOptionId,
      explanation: canonical.explanation,
      isFallback: false,
      invariantCheckPassed: true,
    };
  } catch (error) {
    console.error("Gemini re-theming error:", error);
    return getFallbackRethemedQuestion(canonical, theme);
  }
}
