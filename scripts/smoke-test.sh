#!/bin/bash

HOST="schoolx.host"
RESPONSE_FE=$(curl -v "$HOST")
RESPONSE_BE=$(curl -v "$HOST/api/v1")

if [[ ($RESPONSE_BE =~ "Hello world") || ($RESPONSE_FE =~ "You need to enable JavaScript")  ]]; then
    echo "Smoke test passed"
    exit 0
else 
    echo "Smoke test failed"
    exit 1
fi