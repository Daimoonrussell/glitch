@echo off
set /p MSG=Podaj opis commita: 

git add .
git commit -m "%MSG%"
git push origin main

echo.
echo Backup na GitHub zakończony!
pause
