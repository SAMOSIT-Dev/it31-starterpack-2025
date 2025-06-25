const express = require("express");
const ScheduleController = require("../controller/schedule.controller");

const ScheduleRouter = express.Router();

ScheduleRouter.get("/getAllSchedules", ScheduleController.getAllSchedules);

ScheduleRouter.get(
  "/getSchedulesByHouseId/:id",
  ScheduleController.getSchedulesByHouseId
);

ScheduleRouter.post("/createNewSchedule", ScheduleController.createNewSchedule);

ScheduleRouter.put(
  "/updateScheduleById/:id",
  ScheduleController.updateScheduleById
);

ScheduleRouter.delete(
  "/deleteScheduleById/:id",
  ScheduleController.deleteScheduleById
);

module.exports = ScheduleRouter;
