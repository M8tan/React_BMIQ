@echo off
title Building and running docker
docker build -t bmi-calculator .
docker run -p 8080:80 bmi-calculator
