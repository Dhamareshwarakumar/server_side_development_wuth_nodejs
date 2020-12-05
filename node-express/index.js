const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you...!');
});

app.post('/dishes', (req, res, next) => {
    res.end(`Will add the dish: ${req.body.name} with details ${req.body.description}`);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 405;
    res.end(`PUT operation not allowed`);
});

app.delete('/dishes', (req, res, next) => {
    res.end(`Deleting all the dishes`);
});

app.get('/dishes/:dishID', (req, res, next) => {
    res.end(`Will send details of the dish ${req.params.dishID} to you`);
});

app.post('/dishes/:dishID', (req, res, next) => {
    res.statusCode = 405;
    res.end(`POST operation not allowed on /dishes/${req.params.dishID}`);
});

app.put('/dishes/:dishID', (req, res, next) => {
    res.write(`Updating the dish: ${req.params.dishID}\n`);
    res.end(`Will update the dish ${req.body.name} with details ${req.body.description}`);
});

app.delete('/dishes/:dishID', (req, res, next) => {
    res.end(`Deleting dish: ${req.params.dishID}`);
});





app.use(express.static(__dirname + '/public'));



app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running @http://${hostname}:${port}`)
});