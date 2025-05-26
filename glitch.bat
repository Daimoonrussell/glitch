@echo off
REM Skrypt do szybkiego commita i pushowania na GitHub przez SSH

set /p MSG=Podaj opis commita: 
git add .
git commit -m "%MSG%"
git push origin main

pause
