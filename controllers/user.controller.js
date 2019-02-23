const mongoose = require('mongoose')
let User = mongoose.model('User')

exports.getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.send(user)
    })
}

exports.createUser = (req, res) => {
    User(req.body).save((err, user) => {
        if (err) {
            res.send(err)
        }
        res.send(user)
    })
}

exports.getUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.send(user)
    })
}

exports.updateUser = (req, res) => {
    User.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.send(user)
    })
}

exports.removeUser = (req, res) => {
    User.findOneAndDelete(req.params.id, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.send('User was deleted')
    })
}