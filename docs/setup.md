# Setup & Run Instructions

[← Back to README](../README.md)

> **Team:** Bug Busters (`HM26-1E71`)  
> **Project:** KEA × AURA Learn  
> **Problem:** Adaptive Learning & Real-Time Intervention Platform

This repository contains three independent applications:

- **KEA** — structured adaptive-learning MVP
- **AURA Learn** — interactive adaptive-learning MVP
- **Launcher** — unified Bug Busters entry point

The launcher does not merge the two MVPs. It opens them as separate applications.

---

## Prerequisites

| Tool | Version |
|---|---|
| Node.js | 20.x or later |
| npm | Compatible with installed Node.js version |
| Git | Current stable version |
| Browser | Modern Chromium/Chrome, Edge, or equivalent |

No Python, Docker, or separate FastAPI service is required for the current MVP architecture.

---

## Repository Structure

```text
D:\Hackathon\
├── Hack Mysuru 1.0\      # KEA
├── AURA-Learn-main\      # AURA Learn
├── launcher\             # Bug Busters launcher
├── start-kea.bat
├── start-aura.bat
├── start-launcher.bat
└── .gitignore
