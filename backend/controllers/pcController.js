const { getAll } = require('../service/pc')

const pcController = require('express').Router()

pcController.get('/', async (req, res) => {
    const pcs = await getAll()
    //todo 
})

module.exports = {
    pcController
}