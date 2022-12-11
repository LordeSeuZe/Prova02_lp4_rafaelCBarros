//conectores
const express = require("express");
const Team = require("../model/TeamModel");
const routes = express.Router();

//metodo GET
routes.get("/", async(req, res)=>{
    try{
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch(error) {
        res.status(500).json({error: error});
    }
});

//metodo POST
routes.post("/", async(req, res) =>{
    const team = req.body;
    try{
        await Team.create(team);
        res.status(201).send("Time inserido com sucesso");
    } catch( error) {
        res.status(500).json({error: error});
    }
});

//metodo PUT
routes.put("/:nome", async(req, res) =>{
    const nome = req.params.nome
    const team = req.body;
    try{
        const filter = { nome : nome };
        await Team.findOneAndUpdate(filter, team, {
  returnOriginal: false
});
        res.status(201).send("time alterado com sucesso")
    }catch(error) {
        res.status(500).json({ error: error})
    }
})

//metodo DELETE
routes.delete("/:nome", async(req, res) =>{
    const nome = req.params.nome
    try{
        const filter = { nome : nome};
        await Team.deleteOne(filter)
        res.status(201).send("time deletado com sucesso")
    }catch(error) {
        res.status(500).json({ error: error})
    }
});

module.exports = routes;