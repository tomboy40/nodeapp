
var port = parseInt(process.env['APP_PORT'] '|| '8082');
var appName = process.env['APP_NAME'] || 'myapp';

var express = require('express');
var app = express();

app.get('/' + appName, function(req, res) {
  res.send('Hi from ' + appName + '!\n');
});

app.listen(port, 'localhost', function() {
  console.log('Service started at http://localhost:' + port + '/' + appName + '/');
});
