const express = require("express");
const HouseController = require("../controller/house.controller");

const HouseRouter = express.Router();

HouseRouter.get("/getAllHouse", HouseController.getAllHouses);
HouseRouter.get("/getHouseById/:id", HouseController.getHouseById);
HouseRouter.put("/updateHouseById/:id", HouseController.updateHouseById);

module.exports = HouseRouter;
