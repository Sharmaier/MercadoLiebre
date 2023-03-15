const express = require ("express");
const { dirname } = require("path");
const path = require ("path");

const app = express ();

app.use (express.static(path.resolve(__dirname, "./public")));
// el .get es para dividir la pagina (Andy.com -> /inicio, /precios, /etc)
app.get ("/", function(req, res) {
    //req, request, Informaciones sobre el pedido
    //resp, response, Funciones para responder a esa informacion solicitada
    res.sendFile (path.join(__dirname, "/views/home.html"));
});

app.get ("/login", function(req, res) {
    res.sendFile (path.join(__dirname, "/views/login.html"));
});
app.get ("/register", function(req, res) {
    res.sendFile (path.join(__dirname, "/views/register.html"));
});

const port = process.env.PORT || 3000;

app.listen (port, function(){
    console.log ("Servidor escuchando en el puerto " + port);
});