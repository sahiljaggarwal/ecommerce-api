const authRoutes = require('./authRoutes')
const adminRoutes = require('./adminRoutes')
const userRoutes = require('./userRoutes')
const express = require('express')
const router = express.Router()

router.use('/auth', authRoutes)
router.use('/admin', adminRoutes)
router.use('/user', userRoutes)

module.exports = router
