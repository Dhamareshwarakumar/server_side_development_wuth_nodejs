const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello Node</h1></body></html>');
});

server.listen(port, hostname, () => {
    console.log(`Server running @ http://${hostname}:${port}`)
});