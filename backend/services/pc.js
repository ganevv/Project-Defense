const Pc = require('../models/Pc')

async function getAll() {
    return await Pc.find({})
}

async function getByUserId(userId) {
    return Pc.find({ _ownerId: userId })
}

async function getById(id) {
    return Pc.findById(id).populate('_ownerId')
}

async function create(data) {
    return Pc.create(data)
}

async function update(id, pc) {
    const existing = await Pc.findById(id)

    existing.pcName = pc.pcName
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

async function getMyPcs(id) {
    return await Pc.find({ _ownerId: id })
}

async function addToCart(pcId, userId) {
    const existing = await Pc.findById(pcId)
    existing.addToCart.push(userId)
    return existing.save()
}

async function getMyAddedToCart(id) {
    const pcs = await Pc.find({})
    let temp = []
    pcs.map(x => {
        if (!!(x.likes.includes(id))) {
            temp.push(x)
        }
    })
    return temp
}


module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    deleteById,
    getMyPcs,
    addToCart,
    getMyAddedToCart
}