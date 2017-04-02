var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pug = require('pug');
var passport = require('passport');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var index = require('./routes/index');
var games = require('./routes/games');
// Passport Strategy
require('./config/passport')(passport);
// Socket Route
require('./routes/sockets')(io);

var port = 8888;

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Home Page
app.use('/', index);

// API
app.use('/api', games);

//Listen to port
http.listen(port, function(){
  console.log('server started on port ' + port)
});
