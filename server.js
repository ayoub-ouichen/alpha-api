const http = require('http');
const app = require('./index');
const server = http.createServer(app);
const port = 4000;
server.listen(port);
