const Pc = require('../models/Pc')

async function getAll() {
    return Pc.find({})
}

async function getById(id) {
    return Pc.findById(id)
}

async function create(pc) {
    return Pc.create(pc)
}

async function update(id, pc) {
    const existing = await Pc.findById(id)

    existing.cpu = pc.cpu
    existing.motherboard = pc.motherboard
    existing.gpu = pc.gpu
    existing.ram = pc.ram
    existing.storage = pc.storage
    existing.powerSupply = pc.powerSupply
    existing.box = pc.box
    existing.price = pc.price
    existing.img = pc.img

    return existing.save()
}

async function deleteById(id) {
    return Pc.findByIdAndDelete(id)
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}