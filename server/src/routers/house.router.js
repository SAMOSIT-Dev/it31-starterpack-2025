const express = require("express");
const HouseController = require("../controller/house.controller");

const HouseRouter = express.Router();

HouseRouter.get("/", HouseController.getAllHouses);
HouseRouter.get("/:id", HouseController.getHouseById);
HouseRouter.put("/:id", HouseController.updateHouseById);

module.exports = HouseRouter;
