const express = require("express");
const RoomController = require("../controller/room.controller");
const RoomRouter = express.Router();

RoomRouter.post("/", RoomController.createRoom);
RoomRouter.put("/:id", RoomController.updateRoom);
RoomRouter.delete("/:id", RoomController.deleteRoom);

module.exports = RoomRouter;
