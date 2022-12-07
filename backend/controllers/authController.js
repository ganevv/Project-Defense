const { register, login } = require('../service/user')

const authController = require('express').Router()

authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.email, req.body.username, req.body.password)
        res.status(201).json(token)
    } catch (err) {
        res.status(400).json({ err })
    }
})

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password)
        res.status(201).json(token)
        res.end()
    } catch (err) {
        res.status(400).json({ err })
    }
})

authController.get('/logout', (req, res) => {
    //todo
})

module.exports = {
    authController
}