var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

var socket = io;

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('blinked', (network) => {
    console.log("A user blinked!");
  });
});

module.exports = socket;
