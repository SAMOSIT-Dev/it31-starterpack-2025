const haversine = require("haversine-distance");
const prisma = require("../utils/prisma.utils");
const UserService = require("../services/user.service");

class LocationService {
  static async calculateNearby(userId, lat, lng, userLocations) {
    const nearby = [];

    const id_user = await UserService.findByStudentId(userId.toString());
    if (!id_user) return [];

    for (const [otherId, info] of userLocations.entries()) {
      if (otherId === userId) continue;

      const distance =
        haversine({ lat, lon: lng }, { lat: info.lat, lon: info.lng }) / 1000;

      if (distance <= 0.1) {
        const id_friend = await UserService.findByStudentId(otherId.toString());
        if (!id_friend) continue;

        const existing = await prisma.friends.findFirst({
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

        if (existing) continue;

        nearby.push({
          userProfile: id_friend,
          distance,
        });

        await prisma.friends.createMany({
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
      }
    }

    nearby.sort((a, b) => a.distance - b.distance);
    return nearby.slice(0, 3);
  }
}

module.exports = LocationService;
