
FROM nginx:1.17.1-alpine
COPY /dist/docker-node-cloud-angular /usr/share/nginx/html


 docker build -t client-app-image .
  docker image ls
  docker run --name client-app-container -d -p 8080:80 client-app-image


  docker run --name cient-app-multistage-container -d -p 8888:80 client-multistage-image