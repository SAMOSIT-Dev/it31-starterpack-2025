const express = require("express");
const CourseController = require("../controller/course.controller");

const CourseRouter = express.Router();

CourseRouter.get("/getAllCourse", CourseController.getAll);
CourseRouter.get("/getCourseById/:id", CourseController.getById);
CourseRouter.put("/updateCourseById/:id", CourseController.update);
CourseRouter.post("/createCourse", CourseController.create);
CourseRouter.delete("/deleteCourseById/:id", CourseController.delete);

module.exports = CourseRouter;
