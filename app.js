var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var exec = require('exec');

    //Run gulp on start.
    exec('gulp', function(err, out, code){

        if (err instanceof Error)
            throw err;
        process.stderr.write(err);
        process.stdout.write(out);

    });
    //use the express public folder as static location
    app.use(express.static(__dirname + '/public'));
    //use the bower components folder as static location
    app.use('/dist',  express.static(__dirname + '/dist'));
    //use the app's public folder as static location.
    app.use('/public',  express.static(__dirname + '/public'));
    //use the root domain as static location
    app.use('/',  express.static(__dirname + '/'));

    //When the url is / serve index.html from the public folder.
    app.get('/', function(req, res){
      res.sendFile(__dirname + '/index.html');
    });

    app.get('/start/pirate_name', function(req, res){

            var name = req.query.name;
            var lastNames = [   'Zwartbaard',
                                'Roodbaard',
                                'Grijpstuiver',
                                'Dekschrobber',
                                'Engnek'];

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            //console.log(name + " "+lastNames[getRandomInt(0,4)]);
            res.send({'firstName': name, 'lastName' : lastNames[getRandomInt(0,lastNames.length-1)]});

    });

    //handle the connection
    io.on('connection', function(socket){
        console.log('user connected');
    });

    //handle all events from the gyroscope
    io.on('connection', function(socket){
        
      socket.on('forward', function(event){
        //console.log('forward by', event, '%');
      });
      
      socket.on('backward', function(event){
        //console.log('backward by', event, '%');
      });
      
      socket.on('right', function(event){
        //console.log('right by', event, '%');
      });
      
      socket.on('left', function(event){
        //console.log('left by', event, '%');
      });
      
    });

    //listen on port 3000
    http.listen(3000, function(){
        console.log('listening on localhost:3000');
    });

    //this script should control all parts of the ship