#!/bin/bash
yarn run migration:gen > result.txt

if [[ $(grep "No changes in database" ./result.txt) ]]
then
    echo "No need to run migration"
    exit 0
else
    yarn run migration:up
fi