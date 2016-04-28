var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;



app.use(express.static('server/public'));
app.use(bodyParser.json());

////////////import routes//////////
var index = require('./routes/index');
var create = require('./routes/create');
var deleteHero = require('./routes/delete');
var get = require('./routes/get');


///////////routes/////////////
app.use('/', index);
app.use('/create', create);
app.use('/delete', deleteHero);
app.use('/get', get);


////////// DB ///////////////
var MongoDB = mongoose.connect("mongodb://localhost/superheroes/").connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!');
});








//listen
app.listen(port, function() {
  console.log('listening on port', port);
});
