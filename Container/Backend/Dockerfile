FROM node:16-alpine

WORKDIR /api

COPY ./Backend ./

RUN yarn install

EXPOSE 3000

# Development
CMD ["yarn", "start:dev"]

# Production
# RUN npm install -g pm2
# CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
