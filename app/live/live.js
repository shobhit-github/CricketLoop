import openSocket from 'socket.io-client';
// const  socket = openSocket('http://localhost:3313');
// function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }
// export { subscribeToTimer };

var ioOut = require('socket.io-client');
var socketOut = ioOut.connect('http://localhost:3002');

socketOut.on('welcome', function (data) {
    // console.log(data);
    // Respond with a message including this clients' id sent from the server
    socketOut.emit('i am client', {data: 'foo!', id: data.id});
});
socketOut.on('time', function (data) {
    //console.log(data.time);
});
socketOut.on('auth_match', function (data) {
    // console.log(data);
});
socketOut.on('error', console.error.bind(console));
socketOut.on('message', console.log.bind(console));