var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsuarioSchema = new Schema({
	name : String,
	email : String
});

UsuarioSchema.method('update', function(updates, callback){
	Object.assign(this, updates, { updatedAt : new Date() });

	this.parent().save(callback);
});

var Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;