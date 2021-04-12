#!/usr/bin/env bash

git add . --all

git commit -m "[debug] unable to post sample product to db. solution: added rating:0 in line 54."

git status

git push

#NOTE: you must run command below before running the shell command
#1. chmod +x your-shellname-.sh
#2. ./push.sh
