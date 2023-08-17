const authRoutes = require('./authRoutes')
const express = require('express')
const router = express.Router()

router.use('/auth', authRoutes)

module.exports = router
