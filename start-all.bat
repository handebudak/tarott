@echo off
echo Starting Tarott Backend...
start "Backend" cmd /k "cd tarott-api && node index.js"
timeout /t 3 /nobreak >nul
echo Starting Tarott Frontend...
start "Frontend" cmd /k "cd tarott && npm run dev"
echo Both services are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
pause 