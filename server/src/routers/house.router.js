const express = require('express')
const HouseService = require('../services/house.service')

const HouseRouter = express.Router()

HouseRouter.get('/', HouseService.getAllHouses)

module.exports = HouseRouter