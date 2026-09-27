@echo off
REM Bug Busters — KEA Startup Helper
REM Starts KEA on port 3001

echo ╔══════════════════════════════════════╗
echo ║        BUG BUSTERS — KEA             ║
echo ╚══════════════════════════════════════╝
echo.
echo [KEA]  Starting on http://localhost:3001 ...
echo.

cd /d "%~dp0Hack Mysuru 1.0"
node node_modules/next/dist/bin/next dev --port 3001
