const express = require("express");
const UpcomingEventController = require("../controller/event.controller");

const UpcomingEventRouter = express.Router();

UpcomingEventRouter.get("/", UpcomingEventController.getAllUpcomingEvents);

module.exports = UpcomingEventRouter;
