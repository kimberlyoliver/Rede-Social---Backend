let mongoose = require ('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        nome: {
            type: String, // os tipos são maiusculos
            required: true
        },

        email:{
            type: String,
            required: true
        },

        senha:{
            type: String,
            required: true
        },

    });

    return mongoose.model('Usuario', schema) 
}();

