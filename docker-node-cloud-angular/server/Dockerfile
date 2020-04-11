FROM node:12.7-alpine AS node_server
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .


CMD [ "node", "server.js" ]
EXPOSE 3000