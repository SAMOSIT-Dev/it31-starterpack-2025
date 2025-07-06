const prisma = require("../utils/prisma.utils");

class UpcomingEventService {
  static async getAllUpcomingEvents() {
    return await prisma.upcoming_events.findMany();
  }
}

module.exports = UpcomingEventService;
