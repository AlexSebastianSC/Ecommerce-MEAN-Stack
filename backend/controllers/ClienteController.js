'use strict'

var Cliente =require('../models/cliente');

const registro_cliente = async function(req, res){
    //
    res.status(200).send({message:'Hola mundo'});
}

module.exports={
    registro_cliente
}