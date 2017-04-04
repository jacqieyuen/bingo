module.exports = function( io ) {
  //io
  io.on('connection', function (socket) {
    console.log("connection detected")
    socket.emit('welcome-user', { msg: 'Welcome!' });
    socket.on('thank-server', function (data) {
      console.log(data.msg);
    });

    socket.on('mc-picked-q', function(data){
      console.log(data.selection);
      socket.selectedQuestion = data.selection
      console.log(socket.selectedQuestion)
      socket.broadcast.emit('push-data', socket.selectedQuestion);
    });
  });


}