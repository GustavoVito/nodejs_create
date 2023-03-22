const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.STRING
    },
    origem:{
        type: Sequelize.STRING
    },
    data_contato:{
        type: Sequelize.STRING
    },
    observacoes:{
        type: Sequelize.STRING
    },
})

Agendamentos.sync({force: true})