const prisma = require("../utils/prisma.utils");

class CourseService {
  static async getAllCourses() {
    return await prisma.courses.findMany();
  }

  static async getCourseById(id) {
    return await prisma.courses.findUnique({
      where: { id: parseInt(id) },
    });
  }

  static async createCourse(course) {
    return await prisma.courses.create({
      data: {
        course_name: course,
      },
    });
  }

  static async updateCourse(id, course) {
    return await prisma.courses.update({
      where: { id: parseInt(id) },
      data: {
        course_name: course,
      },
    });
  }

  static async deleteCourse(id) {
    return await prisma.courses.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = CourseService;
