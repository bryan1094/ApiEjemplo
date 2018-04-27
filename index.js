'use strict'

var mongoose = require('mongoose'); //agregamos el modulo mongoose para cominicarnos con mongodb
var app = require('./app');
var port = 3800;

mongoose.connect('mongodb://localhost:27017/curso_mongo')
        .then(()=>{
            console.log('La conexion a la Base de datos se realizado con exito'); // si se realizo la conexion 

            app.listen(port, ()=>{
                console.log('El servidor esta corriendo en localhost:3800');
            });
        })
        .catch(err=> console.log(err)); // delo contrario muestra el error