
ACTION=$1
IS_PROD=$2

CLUSTER_NAME=capstone-cluster


if [[ $IS_PROD = "true" ]]
then
    aws cloudformation deploy \
         --stack-name $CLUSTER_NAME --template-body file://IaC/eks.yml --parameters file://IaC/eks-params.json --capabilities "CAPABILITY_NAMED_IAM"
    exit 0
fi

if [[ $ACTION == "update" ]]
then
    aws cloudformation update-stack \
         --stack-name $CLUSTER_NAME --template-body file://IaC/eks.yml \
         --parameters file://IaC/eks-params.json \
         --capabilities "CAPABILITY_IAM" "CAPABILITY_NAMED_IAM"

elif [[ $ACTION == "create" ]]
then
    aws cloudformation create-stack \
         --stack-name $CLUSTER_NAME --template-body file://IaC/eks.yml \
         --parameters file://IaC/eks-params.json \
         --capabilities 'CAPABILITY_IAM' 'CAPABILITY_NAMED_IAM'
fi
