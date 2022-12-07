const { getAll } = require('../service/pc')

const pcController = require('express').Router()

pcController.get('/', async (req, res) => {
    const pcs = await getAll()
    res.status(200).json(pcs)
})

module.exports = {
    pcController
}