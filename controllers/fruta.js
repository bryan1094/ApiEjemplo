'use strict'

var Fruta = require('../models/fruta');

function pruebas(req, res){
    res.status(200).send({
        message: 'Esta es la ruta de puebas'
    });
};


function saveFruta(req, res){
    var fruta = new Fruta();

    var params = req.body //recibe lo que se trar el body por medio de la peticion http

    if(params.nombre){
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        fruta.save((err, frutaStored) =>{
            if(err){
                res.status(500).send({
                    message: 'Error en el servidor'
                });
            }else{
                if(frutaStored){
                    res.status(200).send({
                        fruta: frutaStored
                    });
                }else{
                    res.status(200).send({
                        message: 'La fruta no se ha guardado'
                    });
                }
            }
        });
    }else{
        res.status(200).send({
            message: 'El nombre de la fruta es obligatorio'
        });
    }
}

//muestra todos los registrods almacenados
function getFrutas(req, res){
    Fruta.find({}).exec((err, frutas) => {
        if(err){
            send.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(frutas){
                res.status(200).send({
                    frutas
                });
            }else{
                res.status(404).send({
                    message: 'No hay datos para mostrar'
                });
            }
        }
    });
}

//Muestra un registro en especifico
function getFruta(req, res){
    var frutaId = req.params.id;
    
    Fruta.findById(frutaId).exec((err, fruta) =>{
        if(err){
            send.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(fruta){
                res.status(200).send({
                    fruta
                });
            }else{
                res.status(404).send({
                    message: 'La fruta no existe'
                });
            }
        }
    });
}

//Modifica un registro
function updateFruta(req, res){
    var frutaId = req.params.id;
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId, update, {new:true}, (err, frutaUpdated) =>{
        if(err){
            send.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(frutaUpdated){
                res.status(200).send({
                    fruta: frutaUpdated
                });
            }else{
                res.status(404).send({
                    message: 'La fruta no existe'
                });
            }
        }
    });
}

//Elimina registros
function deleteFruta(req, res){
    var frutaId = req.params.id;

    Fruta.findByIdAndRemove(frutaId, (err, frutaRemoved) =>{
        if(err){
            send.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(frutaRemoved){
                res.status(200).send({
                    fruta: frutaRemoved
                });
            }else{
                res.status(404).send({
                    message: 'La fruta no existe'
                });
            }
        }
    });
}

module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};