const CourseService = require("../services/course.service");
const ResponseDTO = require("../dtos/response.dto");

class CourseController {
  static async getAll(req, res) {
    const response = new ResponseDTO();

    try {
      const courses = await CourseService.getAllCourses();
      const successResponse = response
        .setContent(courses)
        .setMessage("Success")
        .setError(false)
        .build();
      res.json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Failed to fetch courses")
        .build();
      res.status(500).json(errorResponse);
    }
  }

  static async getById(req, res) {
    const response = new ResponseDTO();

    try {
      const course = await CourseService.getCourseById(req.params.id);
      if (!course)
        return res
          .status(404)
          .json(
            response
              .setError(true)
              .setMessage(`No Course in Id ${req.params.id}`)
              .build()
          );

      const successResponse = response
        .setContent(course)
        .setMessage("Success")
        .setError(false)
        .build();
      res.json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Failed to fetch course by Id")
        .build();
      res.status(500).json(errorResponse);
    }
  }

  static async create(req, res) {
    const response = new ResponseDTO();
    const { course_name } = req.body;

    try {
      const course = await CourseService.createCourse(course_name);
      const successResponse = response
        .setContent(course)
        .setMessage("Success")
        .setError(false)
        .build();
      res.status(201).json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Failed to create course")
        .build();
      res.status(500).json(errorResponse);
    }
  }

  static async update(req, res) {
    const response = new ResponseDTO();
    const { course_name } = req.body;
    try {
      const courseId = await CourseService.getCourseById(req.params.id);
      if (!courseId)
        return res
          .status(404)
          .json(
            response
              .setError(true)
              .setMessage(`No Course in Id ${req.params.id}`)
              .build()
          );

      const course = await CourseService.updateCourse(
        req.params.id,
        course_name
      );
      if (!course || !course_name)
        return res
          .status(404)
          .json(
            response
              .setError(true)
              .setMessage(
                `No Course in Id ${req.params.id} || No request in body`
              )
              .build()
          );
      const successResponse = response
        .setContent(course)
        .setMessage("Success")
        .setError(false)
        .build();
      res.json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Failed to Update course")
        .build();
      res.status(500).json(errorResponse);
    }
  }

  static async delete(req, res) {
    const response = new ResponseDTO();

    try {
      const course = await CourseService.getCourseById(req.params.id);
      if (!course || !req.body)
        return res
          .status(404)
          .json(
            response
              .setError(true)
              .setMessage(`No Course in Id ${req.params.id}`)
              .build()
          );
      await CourseService.deleteCourse(req.params.id);
      res.status(204).send();
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Failed to Delete course")
        .build();
      res.status(500).json(errorResponse);
    }
  }
}

module.exports = CourseController;
