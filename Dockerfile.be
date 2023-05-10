FROM node:18.12.1-alpine as build
ARG BUILD_CONTEXT

WORKDIR /base
COPY yarn.lock .
COPY package.json .
COPY ./apps/$BUILD_CONTEXT/package.json apps/$BUILD_CONTEXT/
RUN yarn install

COPY ./apps/$BUILD_CONTEXT apps/$BUILD_CONTEXT
RUN yarn build-be

EXPOSE 5000
CMD ["yarn", "start-prod-be"]