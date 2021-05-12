#!/usr/bin/env bash

git add . --all

git commit -m "debuged: reset review rating and comment to 0 and empty string"

git status

git push

#NOTE: you must run command below before running the shell command
#1. chmod +x your-shellname-.sh
#2. ./push.sh
