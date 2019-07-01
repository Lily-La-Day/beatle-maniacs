const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const router = require('./config/router')
const logger = require('./lib/logger')

const errorHandler = require('./lib/errorHandler')

const { dbURI, port } = require('./config/environment')

mongoose.connect(dbURI, { useNewURLParser: true})

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use(errorHandler)

app.listen(port, () => console.log('aku suka pengekodan'))

app.use('/api', router)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
