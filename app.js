var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//handle the connection
io.on('connection', function(socket){
    console.log('user connected');
});


//handle all events from the gyroscope
io.on('connection', function(socket){
    
  socket.on('forward', function(event){
    console.log('forward by', event, '%');
  });
  
  socket.on('backward', function(event){
    console.log('backward by', event, '%');
  });
  
  socket.on('right', function(event){
    console.log('right by', event, '%');
  });
  
  socket.on('left', function(event){
    console.log('left by', event, '%');
  });
  
});

//listen on port 3000
http.listen(3000, function(){
  console.log('listening on localhost:3000');
});


//this script should control all parts of the ship