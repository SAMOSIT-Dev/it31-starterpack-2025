const express = require("express");
const CourseController = require("../controller/course.controller");

const CourseRouter = express.Router();

CourseRouter.get("/", CourseController.getAll);
CourseRouter.get("/:id", CourseController.getById);
CourseRouter.put("/:id", CourseController.update);
CourseRouter.post("/", CourseController.create);
CourseRouter.delete("/:id", CourseController.delete);

module.exports = CourseRouter;
