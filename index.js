var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(express.static(__dirname+'/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/', function(request, response){
  response.sendfile('public/html/index.html', {root: __dirname});
})

server.get('/aboutme', function(request, response){
  response.sendfile('public/html/aboutme.html', {root: __dirname});
})

server.get('/contactme', function(request, response){
  response.sendfile('public/html/contactme.html', {root: __dirname});
})

server.post('/aboutme', function(request, response){
  response.json(request.body);
})

server.post('/contactme', function(request, response){
  response.json(request.body);
})

server.listen(8080);
