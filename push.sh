#!/usr/bin/env bash

git add . --all

git commit -m "[bug]Pagination: unable to render on HomeScreen. able to render ProductListScreen."

git status

git push

#NOTE: you must run command below before running the shell command
#1. chmod +x your-shellname-.sh
#2. ./push.sh
