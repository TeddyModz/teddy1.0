const express = require("express");
const app = express();

app.get("/", function(req, res){
res.sendFile(__dirname + "/html/login.html");
});

app.get("/menu", function(req, res){
res.sendFile(__dirname + "/html/menu.html");
});

app.get("/alugar", function(req, res){
res.sendFile(__dirname + "/html/alugar.html");
});

app.get("/redireciona", function(req, res){
res.sendFile(__dirname + "/html/carregamento.html");
});

app.get("/jogo", function(req, res){
res.sendFile(__dirname + "/html/carregamento1.html");
});

app.get("/jogo2", function(req, res){
res.sendFile(__dirname + "/html/carregamento2.html");
});

app.get("/sobre", function(req, res){
res.sendFile(__dirname + "/html/sobre.html");
});
 
 const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('Conectando...')
    console.log("Servidor rodando em http://localhost:" + PORT)
})

module.exports = app