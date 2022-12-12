const { hasUser } = require('../middlewares/guards')
const { getAll, create, getById } = require('../services/pc')

const pcController = require('express').Router()

pcController.get('/', async (req, res) => {
    res.json(await getAll())
    // res.status(200).json(await getAll())
})

pcController.post('/', hasUser(), async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        res.json(await create(data))
    } catch (err) {
        res.status(400).json({ error: err.message })
        //todo - maybe must change err.message
    }
})

pcController.get('/:id', async (req, res, next) => {
    res.json(await getById(req.params.id))
})

module.exports = {
    pcController
}