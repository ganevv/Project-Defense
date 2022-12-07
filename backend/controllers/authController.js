const { register, login } = require('../service/user')

const controller = require('express').Router()

controller.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.email, req.body.username, req.body.password)
        res.cookie('token', token)
    } catch (err) {
        //todo
    }
})

controller.post('/login', async (req, res) => {
    try {
        const token = await register(req.body.email, req.body.password)
        res.cookie('token', token)
    } catch (err) {
        //todo
    }
})

controller.get('/logout', (req, res) => {
    //todo
})

module.exports = controller