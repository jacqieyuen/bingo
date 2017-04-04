$(function () {
  var socket = io.connect('http://localhost:8888');
  socket.on('welcome-user', function (data) {
    console.log(data.msg);
    socket.emit('thank-server', { msg: 'Happy to be here!' });
  });

  $('.bingo-questions').each(function() {
      var $this = $(this);
      $this.off().on("click", function () {
          var indexSelected = $(this).data('questionindex');
          console.log("selected question with index: "+indexSelected);
          socket.emit('mc-picked-q', { selection: indexSelected});
      });
  });
  socket.on('push-data', function(data){
    console.log("recieving selected question index: " + data)
  })

});
