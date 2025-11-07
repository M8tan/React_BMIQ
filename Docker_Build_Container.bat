@echo off
title Building BMICalc container
docker build -t bmi-calculator .
echo Done!
timeout /t 3 /nobreak>nul
exit
