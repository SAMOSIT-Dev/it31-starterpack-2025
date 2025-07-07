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
    if (!id_user) {
      matchingPool.delete(userId);
      return [];
    }

    for (const [otherId, info] of userLocations.entries()) {
      if (otherId === userId) continue;
      if (!matchingPool.has(otherId)) continue;

      const distance =
        haversine({ lat, lon: lng }, { lat: info.lat, lon: info.lng }) / 1000;

      if (distance <= 0.1) {
        const id_friend = await UserService.findByStudentId(otherId.toString());
        if (!id_friend) continue;

        try {
          await prisma.$transaction(async (tx) => {
            const existing = await tx.friends.findFirst({
              where: {
                OR: [
                  {
                    user_id: parseInt(id_user.id),
                    friend_id: parseInt(id_friend.id),
                  },
                  {
                    user_id: parseInt(id_friend.id),
                    friend_id: parseInt(id_user.id),
                  },
                ],
              },
            });

            if (existing) {
              return;
            }

            await tx.friends.createMany({
              data: [
                {
                  user_id: parseInt(id_user.id),
                  friend_id: parseInt(id_friend.id),
                },
                {
                  user_id: parseInt(id_friend.id),
                  friend_id: parseInt(id_user.id),
                },
              ],
              skipDuplicates: true,
            });

            nearby.push({
              userProfile: id_friend,
              distance,
            });
          });
        } catch (error) {
          console.error("Error in Matching:", error);
        }
      }

      matchingPool.delete(userId);
      matchingPool.delete(otherId);
      break;
    }

    return nearby;
  }
}

module.exports = LocationService;
