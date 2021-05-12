#!/usr/bin/env bash

git add . --all

git commit -m "debuged: reset order details in local storage by adding order._id != orderId to useEffect"

git status

git push

#NOTE: you must run command below before running the shell command
#1. chmod +x your-shellname-.sh
#2. ./push.sh
