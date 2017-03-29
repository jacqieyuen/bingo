var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var games = require('./routes/games');

var app = express();

var port = 8888;

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Home Page
app.use('/', index);

// API
app.use('/api', games);


//Listen to port
app.listen(port, function(){
  console.log('server started on port ' + port)
});
