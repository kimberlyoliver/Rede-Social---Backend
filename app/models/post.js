let mongoose = require ('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        texto: {
            type: String, // os tipos são maiusculos
            required: true
        },

        likes:{
            type: Number,
            default: 0
        },

        uid:{
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario'
        },

    });

    return mongoose.model('Post', schema) 
}();
