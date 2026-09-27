@echo off
REM Bug Busters — AURA Learn Startup Helper
REM Starts AURA Learn on port 3002

echo ╔══════════════════════════════════════╗
echo ║      BUG BUSTERS — AURA LEARN        ║
echo ╚══════════════════════════════════════╝
echo.
echo [AURA]  Starting on http://localhost:3002 ...
echo.

cd /d "%~dp0AURA-Learn-main"
node node_modules/next/dist/bin/next dev --port 3002
