@echo off
REM Bug Busters — Startup Helper
REM Starts the Bug Busters Launcher on port 3000
REM KEA must be started separately: start-kea.bat
REM AURA Learn: add when AURA project is available

echo ╔══════════════════════════════════════╗
echo ║       BUG BUSTERS — LAUNCHER         ║
echo ╚══════════════════════════════════════╝
echo.
echo [Launcher]  Starting on http://localhost:3000 ...
echo.

cd /d "%~dp0launcher"
node node_modules/next/dist/bin/next dev --port 3000
