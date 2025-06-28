const prisma = require("../utils/prisma.utils");

class HouseService {
  static async getAllHouses() {
    const houses = await prisma.houses.findMany();
    return houses;
  }

  static async getHouseById(id) {
    const house = await prisma.houses.findUnique({ where: { id } });
    return house;
  }

  static async updateHouseById(id, houseName) {
    const updated = await prisma.houses.update({
      where: { id },
      data: { house_name: houseName },
    });
    return updated;
  }

  static async findHouseById(id) {
    const house = await prisma.houses.findUnique({
      where: { id },
    });
    return house;
  }
}

module.exports = HouseService;
