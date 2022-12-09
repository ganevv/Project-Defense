const express = require('express')
const app = express()
const cors = require('./middlewares/cors')
const mongoose = require('mongoose')
const session = require('./middlewares/session')
const router = require('./routes')

const connectionString = 'mongodb://127.0.0.1:27017/pcgenerator'


start()

async function start() {
    try {
        const db = await mongoose.connect(connectionString)
        console.log('Database connected')
    } catch (error) {
        console.log('Failed to connect to database')
        return process.exit(1)
    }
    app.use(express.json())
    app.use(cors())
    app.use(session())
    app.use(router)

    app.listen(3000, () => console.log('Server listening on port 3000'))
}