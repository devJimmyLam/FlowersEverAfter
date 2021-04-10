#!/usr/bin/env bash

git add . --all

git commit -m "updated user details & order reset in local storage."

git status

git push

#NOTE: you must run command below before running the shell command
#1. chmod +x your-shellname-.sh
#2. ./push.sh
