var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

var socket = io;

io.sockets.on('connection', (socket) => {
  let num_users = io.engine.clientsCount;
  console.log("Num Users: " + num_users)
  io.sockets.emit('user_connected', num_users);
  socket.on('blinked', (network) => {
    console.log("A user blinked!");
  });
});

module.exports = socket;
