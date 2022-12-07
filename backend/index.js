const express = require('express')
const routesConfig = require('./config/routes')
const databaseConfig = require('./config/database')
const expressConfig = require('./config/express')

start()

async function start() {
    const app = express()

    expressConfig(app)
    await databaseConfig(app)
    routesConfig(app)

    app.listen(3000, () => console.log('Server listening on port 3000'))
}