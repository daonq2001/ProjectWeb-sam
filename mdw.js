var express = require('express');
var app = express();

var myLogger = function(req, res, next) {
    console.log('Logged');
    next();
}

app.use(myLogger);

app.get('/', function(req, res) {
    res.send('Hello World!');
    console.log('Hello');
});

app.listen(3000);