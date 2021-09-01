var express = require('express');
var app = express();
var http = require('http').createServer(app);
const path = require("path")

app.use(express.static(__dirname + '/'));


http.listen(8080, function(){
  console.log(`listening on *:8080`);
})
