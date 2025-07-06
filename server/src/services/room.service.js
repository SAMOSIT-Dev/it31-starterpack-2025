const prisma = require("../utils/prisma.utils");

class RoomService {
  static async findnameroom(room) {
    return await prisma.rooms.findFirst({
      where: { room_name: room },
    });
  }

  static findidroom(id) {
    return prisma.rooms.findUnique({
      where: { id: id },
    });
  }

  static createRoom(room_name) {
    return prisma.rooms.create({ data: { room_name } });
  }

  static async updateRoom(id, room_name) {
    return prisma.rooms.update({
      where: { id },
      data: { room_name },
    });
  }

  static deleteRoom(id) {
    return prisma.rooms.delete({ where: { id } });
  }
}

module.exports = RoomService;
