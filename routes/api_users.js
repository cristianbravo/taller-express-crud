var express = require('express');
var router = express.Router();
var resolve = require('path').resolve;
var UsuarioModel = require(resolve('./model/Usuario'));

// REST API to model Usuario

/* Handle GET requests for Usuario's model listing. */
router.get('/', function(req, res, next) {
  UsuarioModel.find({}).sort({ createdAt : -1 }).exec(function(err, usuarios){
  	if (err) return next(err);

  	res.json(usuarios);
  })
});

/* Handle post request to create Usuario's model. */
router.post('/', function(req, res, next) {
  var usuario = new UsuarioModel(req.body);

  usuario.save(function(err, usuario){
  	if (err) return next(err);

  	res.status = 201;
  	res.json(usuario);
  });
});

/* Handle put request to update an Usuario's model. */
router.put('/:uID', function(req, res, next) {
  req.usuario.update(req.body, function(err, result){
  	if (err) return next(err);

  	res.json(result);
  });
});

/* Handle delete requests to remove an Usuario's model from database. */
router.delete('/:uID', function(req, res, next) {
  req.usuario.remove(function(err){
  	if (err) return next(err);

  	res.json({ id : req.params.uID });
  })
});

/* Handle GET requests to looking an Usuario referenced by ID. */
router.get('/:uID', function(req, res, next) {
  res.json(req.usuario);
});

/* middleware & trigger event to catch uID */
router.param('uID', function(req, res, next, id){
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {      
    err = new Error('ID de documento no válido :$');
    err.status = 404;
    return next(err);
  }

	UsuarioModel.findById(id, function(err, doc){
		if (err) return next(err);    

		if (!doc){
			err = new Error('Documento no encontrado :(');
			err.status = 404;
			return next(err);
		}

		req.usuario = doc;
		return next();
	});
});

module.exports = router;
