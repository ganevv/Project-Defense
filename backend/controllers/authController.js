const { register, login } = require('../service/user')

const authController = require('express').Router()

authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.email, req.body.username, req.body.password)
        res.cookie('token', token)
    } catch (err) {
        //todo
    }
})

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password)
        res.cookie('token', token)
    } catch (err) {
        //todo
    }
})

authController.get('/logout', (req, res) => {
    //todo
})

module.exports = authController