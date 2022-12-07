const Pc = require('../models/Pc')

async function getAll() {
    return Pc.find({})
}

//todo other functions

module.exports = {
    getAll,

}