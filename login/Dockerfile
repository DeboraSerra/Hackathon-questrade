FROM node:16.14-alpine
WORKDIR /app-login
COPY package* ./
RUN npm install
COPY . ./
RUN npx tsc
CMD ["npm", "start"]