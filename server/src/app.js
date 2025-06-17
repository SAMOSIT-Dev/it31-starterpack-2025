const express = require('express')
const AppConfig = require('./config/app.config')
const HouseRouter = require('./routers/house.router')
const UserRouter = require('./routers/user.router')
const UpcomingEventRouter = require('./routers/upcoming-event.router')
const ScheduleRouter = require('./routers/schedule.router')

const app = express()

app.use(express.json()) // json parser

app.use(`${AppConfig.applicationContext}/users`, UserRouter)
app.use(`${AppConfig.applicationContext}/houses`, HouseRouter)
app.use(`${AppConfig.applicationContext}/schedules`, ScheduleRouter)
app.use(`${AppConfig.applicationContext}/events`, UpcomingEventRouter)

module.exports = app