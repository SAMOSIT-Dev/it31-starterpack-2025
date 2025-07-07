const haversine = require("haversine-distance");
const prisma = require("../utils/prisma.utils");
const UserService = require("./user.service");
const matchingPool = new Set();

class LocationService {
  static async calculateNearby(userId, lat, lng, userLocations) {
    const nearby = [];
    if (!matchingPool.has(userId)) {
      matchingPool.add(userId);
    }
    const id_user = await UserService.findByStudentId(userId.toString());
    if (!id_user) return [];

    for (const [otherId, info] of userLocations.entries()) {
      if (otherId === userId) continue;
      if (!matchingPool.has(otherId)) continue;

      const distance =
        haversine({ lat, lon: lng }, { lat: info.lat, lon: info.lng }) / 1000;

      if (distance <= 0.1) {
        const id_friend = await UserService.findByStudentId(otherId.toString());
        if (!id_friend) continue;

        const existing = await prisma.friends.findFirst({
          where: {
            user_id: parseInt(id_user.id),
            friend_id: parseInt(id_friend.id),
          },
        });

        if (existing) continue;

        nearby.push({
          userProfile: id_friend,
          distance,
        });

        await prisma.friends.create({
          data: {
            user_id: parseInt(id_user.id),
            friend_id: parseInt(id_friend.id),
          },
        });
      }

      matchingPool.delete(userId);
      matchingPool.delete(otherId);
      break;
    }

    nearby.sort((a, b) => a.distance - b.distance);
    return nearby.slice(0, 1);
  }
}
module.exports = LocationService;
