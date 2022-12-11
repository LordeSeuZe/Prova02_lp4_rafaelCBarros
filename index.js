//modulos
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//configuração com o banco de dados
const porta = process.env.PORT;
const enderecoBanco =  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.avmup.mongodb.net/${process.env.DB}`
const app = express();
app.use(express.json());

mongoose.connect(enderecoBanco);

mongoose.connection.on("error", function(erro){
    console.log("[ERRO]: Erro ao conectar ao banco de dados")
    console.log(erro)
});
mongoose.connection.on("connected", function(){
    console.log("[AVISO]: Aplicação conectada ao banco de dados")
});

//conecção com a rota Team
const teamRoutes = require("./routes/Team");
app.use("/team", teamRoutes);
app.listen(porta, function(){
    console.log("Servidor Funcionando...")
})

