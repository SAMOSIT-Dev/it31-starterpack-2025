const express = require("express");
const ScheduleController = require("../controller/schedule.controller");

const ScheduleRouter = express.Router();

ScheduleRouter.get("/", ScheduleController.getAllSchedules);

ScheduleRouter.get("/:id", ScheduleController.getSchedulesByHouseId);

ScheduleRouter.post("/", ScheduleController.createNewSchedule);

ScheduleRouter.put("/:id", ScheduleController.updateScheduleById);

ScheduleRouter.delete("/:id", ScheduleController.deleteScheduleById);

module.exports = ScheduleRouter;
