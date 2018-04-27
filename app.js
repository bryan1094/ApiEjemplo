'use strict'

var experess = require('express');
var bodyParser = require('body-parser');

var app = experess();

//cargar rutas
var fruta_routes = require('./routes/fruta');

//body-parser
app.use(bodyParser.urlencoded({extended:false})); // convierte las petciones http a json
app.use(bodyParser.json());


//configurar cors

//rutas base

app.use('/api', fruta_routes);



module.exports = app;