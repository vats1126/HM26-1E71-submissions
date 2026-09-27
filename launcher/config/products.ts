/**
 * Bug Busters — Centralized Product Configuration
 *
 * This is the SINGLE source of truth for all product URLs.
 *
 * To connect AURA Learn when its project is ready:
 *   1. Start the AURA Learn dev server (it will have its own port).
 *   2. Update AURA_LEARN_URL below to match that port/domain.
 *   3. No other file needs to change.
 */

export const products = {
  kea: {
    id: "kea",
    name: "KEA",
    tagline: "Structured Adaptive Learning",
    description:
      "Structured adaptive learning through topic understanding, prerequisites, mastery, and real-time intervention.",
    url: process.env.NEXT_PUBLIC_KEA_URL ?? "http://localhost:3001",
    theme: "kea",
    available: true, // KEA is always available when running
  },

  aura: {
    id: "aura",
    name: "AURA Learn",
    tagline: "Interactive Learning Experience",
    description:
      "An interactive learning experience built around adaptive learning.",
    /**
     * AURA_LEARN_URL — update this one value when AURA Learn is ready.
     *
     * You can also override via environment variable:
     *   NEXT_PUBLIC_AURA_LEARN_URL=http://localhost:XXXX
     *
     * Current status: ✅ CONNECTED — AURA-Learn-main on port 3002
     */
    url: process.env.NEXT_PUBLIC_AURA_LEARN_URL ?? "http://localhost:3002",
    theme: "aura",
    available: true, // ✅ AURA Learn is now connected (AURA-Learn-main @ port 3002)
  },
} as const;

export type ProductId = keyof typeof products;
export type Product = (typeof products)[ProductId];

/**
 * To connect AURA Learn later, the only required change is:
 *
 *   aura: {
 *     ...
 *     url: "http://localhost:<AURA_PORT>",   ← change this
 *     available: true,                        ← flip this to true
 *   }
 *
 * Or simply set NEXT_PUBLIC_AURA_LEARN_URL in your .env.local
 */
