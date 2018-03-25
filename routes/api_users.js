var express = require('express');
var router = express.Router();

// REST API to model Usuario

/* Handle GET requests for Usuario's model listing. */
router.get('/', function(req, res, next) {
  res.json({total: 0, data : [{}], info : "Ok"});
});

/* Handle post request to create Usuario's model. */
router.post('/', function(req, res, next) {
  res.json({total: 0, data : null, info : "Ok"});
});

/* Handle GET requests to looking an Usuario referenced by ID. */
router.get('/:id', function(req, res, next) {
  res.json({total: 0, data : [{}], info : "Ok recibiendo el parametro ID con valor " + req.params.id});
});

module.exports = router;
