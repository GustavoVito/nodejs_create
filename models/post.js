const db = require("./banco")


const Agendamentos = db.sequelize.define("Agendamentos", {
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.ENUM('Celular','Whatsapp','Linkedin')
    },
    data:{
        type: db.Sequelize.DATEONLY
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

//Agendamentos.sync({force:true})    //JÁ EXECUTADO
module.exports = Agendamentos
