var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var buf = new Buffer(100);
var len = fs.readFileSync('./index.html', 'utf8', buf);


app.get('/', function(request, response) {
  response.send(len);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
