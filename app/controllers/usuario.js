let Usuario = require('../models/usuario.js')
let Post = require('../models/post.js')
let bcrypt = require('bcrypt')

module.exports.inserirUsuario = function (rec,res) {
    let usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    });

    let promise = Usuario.create(usuario)
    promise.then(
        function(usuario){
            res.status(201).json({
                id: usuario._id,
                nome: usuario.nome,
                email: usuario.email
            })
        }
    )
    .catch(
        function(error){
            res.status(404).send('deu erro, gatinho');
        }
    )
}

module.exports.getUsuarios = function(rec, res){
    let promise = Usuario.find()
    promise.then(
        function(usuarios){
            res.status(201).json(usuarios)
        }
    )
    .catch(
        function(error){
            res.status(404).send('deu erro, gatinhos');
        }
    )
}

module.exports.getUsuarioById = function(req, res){
    let id = req.params.id //params é geralmente para ids
    let promise = Usuario.findById(id);
    promise.then(
        function(usuario){
            res.status(201).json(usuario)
        }
    )
    .catch(
        function(){
            res.status(404).send('error')
        }
    )
}

module.exports.removeUsuarioById = function(req, res){
    let id = req.params.id //params é geralmente para ids
    let promise = Usuario.findByIdAndRemove(id);
    promise.then(
        function(usuario){
            res.status(201).json(usuario)
        }
    )
    .catch(
        function(){
            res.status(404).send('error')
        }
    )
}

module.exports.updateUsuarioById = function(req, res){
    let id = req.params.id
    let usuario = {
        nome: req.body.nome,
        email: req.body.email
    }
    let promise = Usuario.findByIdAndUpdate(id, usuario);
    promise.then(
        function(usuario){
            res.status(201).json(usuario)
        }
    )
    .catch(
        function(){
            res.status(404).send('error')
        }
    )
}

