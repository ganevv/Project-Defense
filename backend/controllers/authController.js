const { register, login, logout } = require('../services/user')

const authController = require('express').Router()

authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.email, req.body.username, req.body.password)
        res.status(201).json(token)
    } catch (err) {
        res.status(404).json({ err })
    }
})

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password)
        res.status(201).json(token)
        res.end()
    } catch (err) {
        res.status(401).json({ err })
    }
})

authController.get('/logout', async (req, res) => {
    const token = req.header['x-authorization']
    await logout(token)
    console.log(token)
    res.status(204).end()
})

module.exports = {
    authController
}