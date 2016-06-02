var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var exec = require('exec');
var path = require('path');
var _session_pirate = null;
var _GLOBAL_SESSION = 0;

//Run gulp on start.
exec('gulp', function (err, out, code) {

    if (err instanceof Error)
        throw err;
    process.stderr.write(err);
    process.stdout.write(out);

});

//use the express public folder as static location
app.use(express.static(__dirname + '../'));

//use the app's public folder as static location.
app.use('/app',  express.static(path.join(__dirname + '/../', 'app')));
//use the root domain as static location
app.use('/',  express.static(__dirname + '/'));

//When the url is / serve index.html from the public folder.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'index.html'));
});

//returns a specially made pirate name for the user.
app.get('/start/pirate_name', function (req, res) {

    var name = req.query.name;
    var lastNames = ['Zwartbaard',
        'Roodbaard',
        'Grijpstuiver',
        'Dekschrobber',
        'Engnek'];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //console.log(name + " "+lastNames[getRandomInt(0,4)]);
    res.send({'firstName': name, 'lastName': lastNames[getRandomInt(0, lastNames.length - 1)]});

});

app.get('/session/pirate', function(req, res){

    res.send(_session_pirate);

}.bind(this));

app.get('/session/global', function(req, res){

    res.send(_GLOBAL_SESSION.toString());

}.bind(this));

//handle all events from the connection
io.on('connection', function (socket) {

    socket.on('player_ready', function(name){

        console.log("Cap'n "+name.firstName+" "+name.lastName+" is ready");
        _session_pirate = name;
        _GLOBAL_SESSION = Math.ceil((Math.random() * 100));
        console.log("SESSION ALIVE WITH ID: "+_GLOBAL_SESSION);

    }.bind(this));
    /**
     * Directional events
     */
    socket.on('forward', function (event) {
        console.log("forward by  "+event);
    });

    socket.on('backward', function (event) {
        console.log('backward by '+event);
    });

    socket.on('right', function (event) {
        console.log('right by '+event);
    });

    socket.on('left', function (event) {
        console.log('left by '+event );
    });

    /**
     * Admin events!
     */
    socket.on('complete_chapter', function(data){
        console.log('Completed chapter, open new chapter.');
        socket.broadcast.emit('complete_chapter', data);
    });

    socket.on('pirate_raid', function(data){

        console.log('Pirate Raid with '+data+ ' hitpoints!');
        socket.broadcast.emit('pirate_raid', data);
    });

    socket.on('drunk_af', function(data){
        console.log('User is in drunken mode, controls inverted for '+data/1000+' seconds');
        //do something to the controls.
    });

}.bind(this));

//listen on port 3000
http.listen(3000, function () {
    console.log('listening on localhost:3000');
});

//this script should control all parts of the ship