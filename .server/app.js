var express = require('express');

var next = require('next');

var port = 3000; // Vindo do process.env

var dev = process.env.NODE_ENV !== 'production';
var server = express();
var app = next({
  dev: dev
});
var handle = app.getRequestHandler();
app.prepare().then(function () {
  server.get('*', function (req, res) {
    return handle(req, res);
  });
  server.listen(3000, function (err) {
    if (err) throw err;
    console.log("Server listening on port ".concat(port));
  });
});