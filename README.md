# docker-learning
Docker angular , node  and cloud environment

# Update latest angular cli verison
```
    sudo npm uninstall -g @angular/cli
    sudo npm cache clean --force
    npm install -g @angular/cli
```
```
This package has installed:
	•	Node.js v12.16.1 to /usr/local/bin/node
	•	npm v6.13.4 to /usr/local/bin/npm
Make sure that /usr/local/bin is in your $PATH.
```
### Build Docker image

```
docker build -t client-app .
docker image ls
docker run --name client-app-container -d -p 8080:80 client-app
```


```
docker ps shows (running) containers. 

###  shows images
docker images

docker ps -a to also see stopped containers

```