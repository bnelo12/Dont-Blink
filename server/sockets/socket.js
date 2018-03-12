var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

var socket = io;
var lost_counter = 0;

io.sockets.on('connection', (socket) => {
  let num_users = io.engine.clientsCount;
  console.log("Num Users: " + num_users)
  io.sockets.emit('user_connected', num_users);
  socket.on('i_lost', (network) => {
    lost_counter++;
    if (lost_counter >= 2) io.sockets.emit('winner', "");
  });
});

module.exports = socket;
