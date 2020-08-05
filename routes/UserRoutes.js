var express = require('express')
var router = express.Router()

var { UserController } = require('../controllers')
var {UserValidator} = require('../validators')



router.get('/users', UserController.getAllUsers)
router.get('/user', UserController.getOneUser)

router.post('/user', UserValidator.create, UserController.postUser)

router.patch('/user', UserController.updateUser)

router.delete('/user', UserController.deleteUser)


module.exports = router 