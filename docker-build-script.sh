#!/bin/bash
# shellcheck disable=SC2164
cd ~/workspace/dev/employee/src/main/
docker build -t app .
cd ~/workspace/dev/employee/ui/
docker build -t web .