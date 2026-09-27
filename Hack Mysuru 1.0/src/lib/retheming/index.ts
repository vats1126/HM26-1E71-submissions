/**
 * KEA Contextual Re-Theming Module (P0-04)
 */

import { StudentTheme } from "@/types";
import { CANONICAL_QUESTIONS } from "./canonical-problems";
import { getFallbackRethemedQuestion } from "./fallback-rethemer";
import { rethemeWithGemini } from "./gemini-rethemer";
import { CanonicalQuestion, RethemedQuestion } from "./types";

export * from "./types";
export * from "./canonical-problems";
export * from "./invariant-checker";
export * from "./fallback-rethemer";
export * from "./gemini-rethemer";

/**
 * Main entry point for re-theming a question.
 * Tries Gemini first if configured, strictly validating invariants, and falls back
 * transparently to the verified fallback provider.
 */
export async function rethemeQuestion(
  canonicalOrId: CanonicalQuestion | string,
  theme: StudentTheme
): Promise<RethemedQuestion> {
  const canonical =
    typeof canonicalOrId === "string"
      ? CANONICAL_QUESTIONS[canonicalOrId]
      : canonicalOrId;

  if (!canonical) {
    throw new Error(`Canonical question "${canonicalOrId}" not found in question bank.`);
  }

  if (process.env.GEMINI_API_KEY) {
    return rethemeWithGemini(canonical, theme);
  }

  return getFallbackRethemedQuestion(canonical, theme);
}
