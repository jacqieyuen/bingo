$(function () {
  var socket = io.connect('http://localhost:8888');
    socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { what: 'something' });
  });


    $('.bingo-questions').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            console.log($(this).data('questionindex'));
        });
    });

});
