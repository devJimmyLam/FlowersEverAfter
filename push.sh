#!/usr/bin/env bash

git add . --all

git commit -m "created production environmnet and server"

git status

git push

#NOTE: you must run command below before running the shell command
#1. chmod +x your-shellname-.sh
#2. ./push.sh
