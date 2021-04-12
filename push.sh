#!/usr/bin/env bash

git add . --all

git commit -m "[bug] unable to post sample product to db."

git status

git push

#NOTE: you must run command below before running the shell command
#1. chmod +x your-shellname-.sh
#2. ./push.sh
