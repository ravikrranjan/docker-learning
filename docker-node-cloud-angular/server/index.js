// const http = require('http');
// const HOST = '0.0.0.0';
// const port = 3000;

// const createServer = (req, res) => {

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({
//     'products': ['Rice', 'Wheat', 'Lemon']
//   }));
// };

// const server = http.createServer(createServer);
// server.listen(port, HOST, () => {
//   console.log(`Server running at http://${HOST}:${port}`)
// })


'use strict';

const express = require('express');
const bodyParser = require('body-parser');

function start() {
  const app = express();
  // Constants
  const port = process.env.PORT || 8626;
  const www = process.env.WWW || './dist/docker-node-cloud-angular';
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }))

  app.use(express.static(www));
  console.log(`serving ${www}`);
  app.get('*', (req, res) => {
    res.sendFile(`index.html`, {
      root: www
    });
  });
  app.listen(port, () => console.log(`listening on http://localhost:${port}`));
}

module.exports.start = start;
