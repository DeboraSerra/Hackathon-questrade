FROM node:16.14-alpine
RUN npm i -g rimraf
WORKDIR /app-login
COPY package* ./
RUN npm install
COPY . ./
CMD ["npm", "start"]