const express = require("express");
const AppConfig = require("./config/app.config");
const HouseRouter = require("./routers/house.router");
const UserRouter = require("./routers/users.router");
const UpcomingEventRouter = require("./routers/upcoming-event.router");
const ScheduleRouter = require("./routers/schedule.router");
const CourseRouter = require("./routers/course.router");
const RoomRouter = require("./routers/room.router");
const path = require("path");
const http = require("http");
const setupWebSocket = require("./socket/socket");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://it31-starterpack.sit.kmutt.ac.th",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/Document", express.static(path.join(__dirname, "slideStarter")));
app.use("/profile_pics", express.static(path.join(__dirname, "profile_pics")));
app.use(`${AppConfig.applicationContext}/users`, UserRouter);
app.use(`${AppConfig.applicationContext}/houses`, HouseRouter);
app.use(`${AppConfig.applicationContext}/schedules`, ScheduleRouter);
app.use(`${AppConfig.applicationContext}/events`, UpcomingEventRouter);
app.use(`${AppConfig.applicationContext}/courses`, CourseRouter);
app.use(`${AppConfig.applicationContext}/rooms`, RoomRouter);

setupWebSocket(server);

module.exports = { app, server };
