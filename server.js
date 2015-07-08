var express = require('express');
var app = express();

var argv = process.argv.slice(2);

var host = 'http://127.0.0.1';
var port = (argv[0] || 5001);


app.use(express.static('app'));

console.log('>', host + ':' + port);

app.listen(port);
