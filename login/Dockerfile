FROM node:18.12-alpine

WORKDIR /login

COPY ./package.json .

RUN npm install --omit=dev

COPY . .