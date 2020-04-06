
FROM nginx:1.17.1-alpine
COPY /dist/docker-node-cloud-angular /usr/share/nginx/html


 docker build -t client-app-image .
  docker image ls