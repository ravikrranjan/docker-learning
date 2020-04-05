# Client App
FROM node:12.16-alpine as client-app
LABEL authors="Ravi Ranjan"
WORKDIR /usr/src/app
COPY ["package.json" , "./"]
RUN npm install --silent
COPY . .
RUN  npm run build