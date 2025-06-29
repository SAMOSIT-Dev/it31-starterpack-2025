const express = require("express");
const cors = require("cors");

const AppConfig = require("./config/app.config");

const HouseRouter = require("./routers/house.router");
const UserRouter = require("./routers/users.router");
const UpcomingEventRouter = require("./routers/upcoming-event.router");
const ScheduleRouter = require("./routers/schedule.router");
const CourseRouter = require("./routers/course.router");
const RoomRouter = require("./routers/room.router");

const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());

app.use(`${AppConfig.applicationContext}/users`, UserRouter);
app.use(`${AppConfig.applicationContext}/houses`, HouseRouter);
app.use(`${AppConfig.applicationContext}/schedules`, ScheduleRouter);
app.use(`${AppConfig.applicationContext}/events`, UpcomingEventRouter);
app.use(`${AppConfig.applicationContext}/courses`, CourseRouter);
app.use(`${AppConfig.applicationContext}/rooms`, RoomRouter);
app.use("/profile_pics", express.static(path.join(__dirname, "profile_pics")));
module.exports = app;
