"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Compass, Sparkles, UserCheck, Wifi, WifiOff, Users, Atom } from "lucide-react";

export type DemoPersona = "aarav" | "diya" | "priya" | "lin";

interface TopicEntryHeaderProps {
  onReset?: () => void;
  activeTopic?: string | null;
  activePersona?: DemoPersona;
  onSelectPersona?: (persona: DemoPersona) => void;
  isOfflineMode?: boolean;
  onToggleOfflineMode?: () => void;
  onOpenFacilitator?: () => void;
  pendingInterventionsCount?: number;
}

export function TopicEntryHeader({
  onReset,
  activeTopic,
  activePersona = "aarav",
  onSelectPersona,
  isOfflineMode = false,
  onToggleOfflineMode,
  onOpenFacilitator,
  pendingInterventionsCount = 0,
}: TopicEntryHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 gap-2">
        {/* Brand identity */}
        <button
          onClick={onReset}
          className="flex items-center gap-2.5 text-left group transition-opacity hover:opacity-90 shrink-0 cursor-pointer"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shadow-xs">
            <Compass className="h-5 w-5 transition-transform group-hover:rotate-12 duration-200" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-foreground">KEA</span>
              <span className="text-xs font-medium text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs font-medium text-muted-foreground hidden sm:inline">Adaptive Learning</span>
            </div>
            <span className="text-[10px] text-muted-foreground font-mono leading-none">Topic-to-Mastery Engine</span>
          </div>
        </button>

        {/* Center: 1-Click Persona Switcher (P2-02) */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-muted/40 border border-border/60 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 flex items-center gap-1">
            <UserCheck className="h-3 w-3" />
            Persona:
          </span>
          <button
            onClick={() => onSelectPersona?.("lin")}
            className={`px-2 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1 ${
              activePersona === "lin"
                ? "bg-emerald-600 text-white font-bold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Atom className="h-3 w-3 text-emerald-400" />
            Dr. Lin (Organic Chemistry)
          </button>
          <button
            onClick={() => onSelectPersona?.("aarav")}
            className={`px-2 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activePersona === "aarav"
                ? "bg-primary text-primary-foreground font-bold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Aarav (Struggling • Space)
          </button>
          <button
            onClick={() => onSelectPersona?.("diya")}
            className={`px-2 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activePersona === "diya"
                ? "bg-primary text-primary-foreground font-bold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Diya (Falcon • Wildlife)
          </button>
          <button
            onClick={() => {
              onSelectPersona?.("priya");
              onOpenFacilitator?.();
            }}
            className={`px-2 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1 ${
              activePersona === "priya"
                ? "bg-rose-600 text-white font-bold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Users className="h-3 w-3" />
            Ms. Priya (Teacher)
            {pendingInterventionsCount > 0 && (
              <span className="h-4 w-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center font-bold">
                {pendingInterventionsCount}
              </span>
            )}
          </button>
        </div>

        {/* Right side status, zero-API toggle & theme toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Zero-API Offline Fallback Simulation Toggle (P2-01) */}
          <Button
            variant={isOfflineMode ? "destructive" : "outline"}
            size="sm"
            onClick={onToggleOfflineMode}
            className="text-xs h-8 px-2 sm:px-2.5 gap-1.5 cursor-pointer font-medium"
            title="Toggle zero-API offline simulation mode"
          >
            {isOfflineMode ? (
              <>
                <WifiOff className="h-3.5 w-3.5 text-white" />
                <span className="hidden sm:inline">Offline Mode: Active</span>
                <span className="sm:hidden">Offline</span>
              </>
            ) : (
              <>
                <Wifi className="h-3.5 w-3.5 text-emerald-500" />
                <span className="hidden sm:inline">Zero-API Mode</span>
                <span className="sm:hidden">API</span>
              </>
            )}
          </Button>

          {activeTopic && (
            <Badge variant="outline" className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 text-xs">
              <Sparkles className="h-3 w-3 text-primary animate-pulse" />
              <span>Target: <strong className="font-semibold text-foreground">{activeTopic}</strong></span>
            </Badge>
          )}

          {/* Quick Facilitator Cockpit button for mobile / tablet */}
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenFacilitator}
            className="lg:hidden text-xs h-8 px-2 gap-1 cursor-pointer relative"
          >
            <Users className="h-3.5 w-3.5 text-primary" />
            {pendingInterventionsCount > 0 && (
              <span className="h-3.5 w-3.5 rounded-full bg-destructive text-destructive-foreground text-[9px] flex items-center justify-center font-bold">
                {pendingInterventionsCount}
              </span>
            )}
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
