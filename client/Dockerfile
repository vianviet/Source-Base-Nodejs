FROM node:16-alpine

WORKDIR /client

COPY ./client/package.json ./

RUN yarn install

COPY ./client ./

CMD ["yarn", "develop"]