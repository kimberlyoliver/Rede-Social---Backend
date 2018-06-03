let mongoose = require('mongoose')

module.exports = function (uri) {
    mongoose.connect(uri)
    mongoose.connection.on('connected', function(){
        console.log("Mongo DB Conectado")
    })

    mongoose.connection.on('disconnected', function(){
        console.log("Conexão com o Banco encerrada")
    })

    mongoose.connection.on('error', function(erro){
        console.log("Erro na conexão", erro)
    })
    mongoose.set('debug', true)
}