const express = require('express')
const route = express.Router()
const dataController = require('../app/controllers/dataController')

route.post('/', dataController.index)

module.exports = route