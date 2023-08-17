const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const {user} = require('../controllers/index')

router.post('/signup', user.signUp)
router.post('/login', user.login)
router.get('/users',verifyToken, user.getAllUsers)

module.exports = router