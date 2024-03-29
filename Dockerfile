FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn", "start:dev"]
