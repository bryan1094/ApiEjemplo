'use strict'

var express = require('express'); // CARGAR MODULO DE EXPRESS
var FrutaController = require('../controllers/fruta'); //cargar controlador de frutas

var api = express.Router(); //cargamos el modulo de rutas de express para poder crear las rutas 

api.get('/pruebas', FrutaController.pruebas);
api.post('/fruta', FrutaController.saveFruta);
api.get('/getfrutas', FrutaController.getFrutas);
api.get('/getfruta/:id', FrutaController.getFruta);
api.put('/update/:id', FrutaController.updateFruta);
api.delete('/delete/:id', FrutaController.deleteFruta);

module.exports = api;

