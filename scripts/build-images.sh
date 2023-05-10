#/bin/bash

BUILD=$1

if [ $BUILD = 'be' ]
then
    docker build -f Dockerfile.be --build-arg BUILD_CONTEXT=todo-be . -t superknife0512/todo-be
elif [ $BUILD = 'fe' ]
then 
    docker build -f Dockerfile.fe --build-arg BUILD_CONTEXT=todo-fe . -t superknife0512/todo-fe
else 
    echo "Cannot process please add 'fe' or 'be'"
    exit 1
fi