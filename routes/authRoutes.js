const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const {auth} = require('../controllers/index')

router.post('/signup', auth.signUp)
router.post('/login', auth.login)
router.get('/users',verifyToken, auth.getAllUsers)

module.exports = router