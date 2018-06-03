let Usuario = require('../models/usuario.js')
let Post = require('../models/post')

module.exports.inserirPost = function (req, res) {
    let post = {
        texto: req.body.texto,
        uid: req.body.uid
    }
    let promise = Post.create(post)
    promise.then(
        function(post){
            res.status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('error')
        }
    )
}

module.exports.getPosts = function(req, res){
    let promise = Post.find()
    promise.then(
        function(posts){
            res.status(201).json(posts)
        }
    )
    .catch(
        function(){
            res.status(404).send('error')
        }
    )
}

module.exports.getPostById = function(req, res){
    let id = req.params.id
    let promise = Post.findById(id)
    promise.then(
        function(post){
            res.status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('error')
        }
    )
}

module.exports.removePostById = function(req, res){
    let id = req.params.id
    let promise = Post.findByIdAndRemove(id)
    promise.then(
        function(post){
            res.status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('error')
        }
    )
}

module.exports.updatePostById = function(req, res){
    let id = req.params.id
    let post = {
        texto: req.body.texto,
        likes: req.body.likes
    }

    let promise = Post.findByIdAndUpdate(id, post)
    promise.then(
        function(post){
            res.status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('error')
        }
    )
}