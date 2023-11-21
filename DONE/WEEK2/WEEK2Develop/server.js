const connect = require('connect');
// const app = connect();

// Middleware functions
function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

function helloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('App has started');
}

function goodbyeWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('App2 has started');
}

var express = require('express')
var app = express();

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye',goodbyeWorld);

app.listen(4000)

  console.log('Server running at http://localhost:4000/');
