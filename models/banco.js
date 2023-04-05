const Sequelize = require("sequelize")
const sequelize = new Sequelize("test","root","",{
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Erro ao conectar: "+erro)
})


