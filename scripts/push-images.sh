TAG=$1
FOR=$2


if [[ ! $TAG ]]
then
    TAG="latest"
fi

if [[ $FOR == 'be' ]]
then 
    docker push superknife0512/todo-be:$TAG_BE
else 
    docker push superknife0512/todo-fe:$TAG_FE
fi