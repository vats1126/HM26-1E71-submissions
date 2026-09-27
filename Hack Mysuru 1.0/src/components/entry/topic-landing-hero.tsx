"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  ArrowRight,
  Code2,
  BrainCircuit,
  Binary,
  Leaf,
  GitFork,
  Layers,
  CheckCircle2,
  Search,
  Atom,
} from "lucide-react";

interface TopicLandingHeroProps {
  onSubmitTopic: (topic: string) => void;
  isLoading?: boolean;
}

const SAMPLE_CHIPS = [
  { label: "Organic Chemistry", icon: Atom, value: "Organic Chemistry", featured: true },
  { label: "Python", icon: Code2, value: "Python" },
  { label: "Machine Learning", icon: BrainCircuit, value: "Machine Learning" },
  { label: "Calculus", icon: Binary, value: "Calculus" },
  { label: "Photosynthesis", icon: Leaf, value: "Photosynthesis" },
];

export function TopicLandingHero({
  onSubmitTopic,
  isLoading = false,
}: TopicLandingHeroProps) {
  const [topicInput, setTopicInput] = React.useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = topicInput.trim();
    if (!trimmed || isLoading) return;
    onSubmitTopic(trimmed);
  };

  const handleChipClick = (topic: string) => {
    setTopicInput(topic);
    onSubmitTopic(topic);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 sm:py-20 px-4 max-w-4xl mx-auto text-center space-y-10 animate-in fade-in duration-300">
      {/* 1. Hero Headline & Mission */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          <span>Topic-to-Mastery Adaptive Platform</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground font-sans">
          KEA
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground uppercase">
          WHAT DO YOU WANT TO LEARN?
        </h2>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Tell KEA what you want to learn. We&apos;ll structure the knowledge and stages you need to reach mastery.
        </p>
      </div>

      {/* 2. Primary Input Card */}
      <Card className="w-full max-w-2xl shadow-lg border-primary/20 bg-card/95 backdrop-blur">
        <CardContent className="p-4 sm:p-6 space-y-4 text-left">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                placeholder="e.g. Organic Chemistry, Python, Calculus, Machine Learning..."
                className="pl-10 h-12 text-sm sm:text-base bg-background shadow-inner"
                disabled={isLoading}
                autoFocus
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!topicInput.trim() || isLoading}
              className="h-12 px-6 font-semibold gap-2 shadow-sm shrink-0 cursor-pointer"
            >
              <span>{isLoading ? "Structuring..." : "Build My Learning Path"}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          {/* Example Shortcut Chips */}
          <div className="pt-2 border-t border-border/50">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground mr-1">
                Explore examples:
              </span>
              {SAMPLE_CHIPS.map((chip) => {
                const Icon = chip.icon;
                return (
                  <button
                    key={chip.value}
                    type="button"
                    onClick={() => handleChipClick(chip.value)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      chip.featured
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm hover:bg-emerald-500/30 font-semibold"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/60 hover:border-primary/30"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${chip.featured ? "text-emerald-400" : "text-muted-foreground"}`} />
                    <span>{chip.label}</span>
                    {chip.featured && (
                      <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-emerald-500/30 text-emerald-300 font-mono">
                        Featured Demo
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Three Key Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left pt-2">
        <div className="p-4 rounded-xl border border-border/70 bg-card/60 space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <GitFork className="h-4 w-4" />
            <span>Prerequisite Gating</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Deconstructs complex subjects into strict dependency trees so you never hit a wall.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-border/70 bg-card/60 space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <Layers className="h-4 w-4" />
            <span>Stage-Wise Structuring</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Organizes core concepts into clear, progressive milestones from foundations to capstones.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-border/70 bg-card/60 space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <CheckCircle2 className="h-4 w-4" />
            <span>Auditable Mastery</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Advance only when true conceptual comprehension is demonstrated, not arbitrary seat time.
          </p>
        </div>
      </div>
    </div>
  );
}
