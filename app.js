const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")

// config handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

// config bodyparser
app.use(bodyParser.urlencoded({extented: false}))
app.set(bodyParser.json())

// rotas 

app.get("/", function(req, res){
    res.render("primeira_pagina")
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data: req.body.data,
        observacao: req.body.observacao
    }).then(function(){
        res.redirect("/")
    }).catch(function(error){
        res.send("Erro: "+error)
    })
})

app.get("/consulta", function(req, res){
    // form_post é um nome genérico, pode ser qua
    post.findAll().then(function(form_post){
        res.render("consulta", {form_post})
    }).catch(function(erro){
        console.log("Erro ao carregar dados do banco: "+erro)
    })
})

app.get("/excluir/:id", function(req,res){
    post.destroy({
        where: {
            id: req.params.id
        },
        force: true
    }).then(function(){
        res.redirect("/consulta")
    })
    
})

app.listen(8081, function(){
    console.log("Servidor ativo")
})

// npm install express-handlebars --save
// npm install body-parser --save