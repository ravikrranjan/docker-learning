# Client app
FROM node:12.7-alpine AS client-app

LABEL authors="Ravi Ranjan"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --silent
COPY . .
RUN npm run build


# Final Image

FROM node:12.7-alpine
WORKDIR /usr/src/app

COPY --from=client-app /usr/src/app/dist ./
EXPOSE 8626
CMD [ "npm" , "start"]