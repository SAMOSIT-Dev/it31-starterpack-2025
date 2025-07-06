const prisma = require("../utils/prisma.utils");

class ScheduleService {
  static async findAllSchedulesWithRelation() {
    return prisma.schedules.findMany({
      include: {
        houses: true,
        courses: true,
        rooms: true,
      },
    });
  }

  static async findSchedulesByHouseId(houseId) {
    return prisma.schedules.findMany({
      where: { house_id: houseId },
      include: {
        houses: true,
        courses: true,
        rooms: true,
      },
    });
  }

  static async findHouseById(id) {
    return prisma.houses.findUnique({ where: { id } });
  }

  static async findCourseById(id) {
    return prisma.courses.findUnique({ where: { id } });
  }

  static async findScheduleById(id) {
    return prisma.schedules.findUnique({ where: { id } });
  }

  static async createSchedule(data) {
    return prisma.schedules.create({ data });
  }

  static findidroom(id) {
    return prisma.rooms.findUnique({
      where: { id: id },
    });
  }

  static async updateScheduleById(id, data) {
    return prisma.schedules.update({
      where: { id },
      data,
    });
  }

  static async deleteScheduleById(id) {
    return prisma.schedules.delete({ where: { id } });
  }
}

module.exports = ScheduleService;
