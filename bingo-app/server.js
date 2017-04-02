var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var index = require('./routes/index');
var games = require('./routes/games');


var port = 8888;

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Home Page
app.use('/', index);

// API
app.use('/api', games);

//io
io.on('connection', (socket)=> {
  console.log('The user is connected');
});
  // console.log('new connection made');

  // socket.on('event1', (data) => {
  //   console.log(data.msg);
  // });
  // socket.on('event2', {
  //   msg:'Server to client, do you read me? Over.'
  // });
  // socket.on('event3', (data)=>{
  //   console.log(data.msg);
  //   socket.emit('event4', {
  //     msg: 'Loud and clear :)'
  //   });
  // });

// });





//Listen to port
http.listen(port, function(){
  console.log('server started on port ' + port)
});
