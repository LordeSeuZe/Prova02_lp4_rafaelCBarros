const mongoose = require("mongoose");

const TeamModel = mongoose.model("Team", {
  nome: String,//nome do time
  iso: String,//código iso
  tecnico: String,//nome do técnico
  vencedorCopas: Number,//quantas vezes venceu uma copa do mundo
  bandeira: String
});

module.exports = TeamModel;

/*nome: "",
iso: "",
tecnico: "",
vencedorCopas: ,
bandeira: ""*/