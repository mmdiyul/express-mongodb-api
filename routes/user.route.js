const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

let user = require('../controllers/user.controller')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/', user.getUsers)
router.get('/:id', user.getUser)
router.post('/', user.createUser)
router.put('/:id', user.updateUser)
router.delete('/:id', user.removeUser)

module.exports = router