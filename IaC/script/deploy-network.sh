
#!/bin/bash
ACTION=$1
IS_PROD=$2

if [ $IS_PROD = "true" ]
then
    aws cloudformation deploy \
         --stack-name uda-capstone --template-body file://IaC/network.yml --parameters file://IaC/network-params.json
    exit 0
fi

if [ $ACTION = "update" ]
then
    aws cloudformation update-stack \
         --stack-name uda-capstone --template-body file://IaC/network.yml --parameters file://IaC/network-params.json
elif [ $ACTION = "create" ]
then
    aws cloudformation create-stack \
         --stack-name uda-capstone --template-body file://IaC/network.yml --parameters file://IaC/network-params.json
fi
