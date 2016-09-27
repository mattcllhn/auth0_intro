var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8888;

app.use(bodyParser.urlencoded({extended:true}));


app.listen(port, function(){
  console.log('im listening',port);
});//app.listeners

app.get('/', function(req,res){
console.log('hit base url');
res.sendFile(path.resolve('public/views/index.html'));
});//app.getfile

app.use(express.static('public'));
