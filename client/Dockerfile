FROM node:16-alpine

WORKDIR /client

COPY ./client ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]