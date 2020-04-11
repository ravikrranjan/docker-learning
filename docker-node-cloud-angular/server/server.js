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

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
