const http = require('http');
const hostname = 'localhost';
const port = 3000;

const createServer = (req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    'products': ['Rice', 'Wheat', 'Lemon']
  }));
};

const server = http.createServer(createServer);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
