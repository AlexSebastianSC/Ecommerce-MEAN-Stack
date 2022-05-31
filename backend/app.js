'use strict'
//esta carpeta es la que inicializa el backend

var express = require('express');
var app= express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4201;

var cliente_route = require('./routes/cliente');

mongoose.connect('mongodb://127.0.0.1:27017/tienda',(err,res)=>{
    if(err){
        console.log(err);
    }else{
        app.listen(port,function(){
        console.log('Servidor corriendo en el puerto'+port);
        })
    }
})

//parsear la data enviada del frontend al backend
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({limit:'50mb',extended:true}));

//esto es debido a que eñ backem y frontend se comunicaran desde puertos diferentes
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api',cliente_route);

module.exports = app;