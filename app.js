const express = require ("express");
const { dirname } = require("path");
const path = require ("path");

const app = express ();

app.use (express.static(path.resolve(__dirname, "./public")));
// el .get es para dividir la pagina (Andy.com -> /inicio, /precios, /etc)
app.get ("/", function(req, resp){
    //req, request, Informaciones sobre el pedido
    //resp, response, Funciones para responder a esa informacion solicitada
    resp.sendFile (path.join(__dirname, "/views/home.html"));
})

app.get ("/productos", function(req, resp){
    resp.send ("Novidades em breve");
})

const port = process.env.PORT || 3000;

app.listen (port, function(){
    console.log ("Servidor escuchando en el puerto " + port);
})