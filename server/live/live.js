// not using- only for testing puposes.

var ioOut = require('socket.io-client');
var socketOut = ioOut.connect('http://codex.cricloop.com:3002');

socketOut.on('welcome', function (data) {
    console.log(data);
    // Respond with a message including this clients' id sent from the server
    socketOut.emit('i am client', {data: 'foo!', id: data.id});
});
socketOut.on('time', function (data) {
    console.log(data.time);
});
socketOut.on('auth_match', function (data) {
    console.log(data);
});
socketOut.on('error', console.error.bind(console));
socketOut.on('message', console.log.bind(console));