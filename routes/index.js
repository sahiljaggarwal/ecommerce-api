const authRoutes = require('./authRoutes')
const adminRoutes = require('./adminRoutes')
const express = require('express')
const router = express.Router()

router.use('/auth', authRoutes)
router.use('/admin', adminRoutes)

module.exports = router
