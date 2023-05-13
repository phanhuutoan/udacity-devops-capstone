TAG_FE=$1
TAG_BE=$2

if [[ ! $TAG_FE ]]
then
    TAG_FE="latest"
fi

if [[ ! $TAG_BE ]]
then
    TAG_BE="latest"
fi

docker push superknife0512/todo-fe:$TAG_FE
docker push superknife0512/todo-be:$TAG_BE