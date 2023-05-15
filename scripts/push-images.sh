#!/bin/bash

TAG=$1
FOR=$2

if [[ ! $TAG ]]
then
    TAG="latest"
fi

if [[ $FOR == 'be' ]]
then 
    docker push superknife0512/todo-be:$TAG
else 
    docker push superknife0512/todo-fe:$TAG
fi