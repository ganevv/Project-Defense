const { getAll } = require('../services/pc')

const pcController = require('express').Router()

pcController.get('/', async (req, res) => {
    res.json(await getAll())
    // res.status(200).json(await getAll())
})

module.exports = {
    pcController
}