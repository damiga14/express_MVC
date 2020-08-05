var { User } = require('../models')


var getAllUsers = (req, res) => {
    User.find()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

var getOneUser = (req, res) => {
    User.findById(req.query.id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

var postUser = (req, res) => {
    let newUser = new User(req.body)

    newUser.save()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

var updateUser = (req, res) => {
    User.findOneAndUpdate(req.query.id, req.body)
        .then(() => {
            res.json({ "Message": "User Updated" })
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

var deleteUser = (req, res) => {
    User.findByIdAndDelete(req.query.id)
        .then(() => {
            res.json({ "Message": "User Deleted" })
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}


module.exports = { getAllUsers, getOneUser, postUser, deleteUser, updateUser }

// Esta esta otra forma de hacerlo
// module.exports = {
//     uno: ()=>{},
//     dos: ()=>{},
//     tres: ()=>{}
// }