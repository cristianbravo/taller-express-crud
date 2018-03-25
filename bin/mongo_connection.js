var mongoose = require('mongoose');

var host = "ds123619.mlab.com:23619";
var user = "chileforma";
var pass = "taller.chileforma";
var bbdd = "tallernodejs_chileforma";

mongoose.connect('mongodb://' + user + ':' + pass + '@' + host + '/' + bbdd);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conectado a mongo! ;)');
});
