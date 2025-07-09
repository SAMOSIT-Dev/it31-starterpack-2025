const haversine = require("haversine-distance");
const prisma = require("../utils/prisma.utils");
const UserService = require("./user.service");

const matchingPool = new Map();

class LocationService {
  static async calculateMatch(userId, lat, lng, userLocations, io) {
    userId = userId.toString();

    matchingPool.set(userId, Date.now());

    const id_user = await UserService.findByStudentId(userId);
    if (!id_user) {
      matchingPool.delete(userId);
      return [];
    }

    for (const [otherid, info] of userLocations.entries()) {
      const otherId = otherid.toString();

      if (otherId === userId) continue;
      if (!matchingPool.has(otherId)) continue;

      const distance =
        haversine({ lat, lon: lng }, { lat: info.lat, lon: info.lng }) / 1000;

      if (distance <= 0.1) {
        const id_friend = await UserService.findByStudentId(otherId);
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

            if (io) {
              const socketIdUser = userLocations.get(userId)?.socketId;
              const socketIdFriend = userLocations.get(otherId)?.socketId;

              if (socketIdUser) {
                io.to(socketIdUser).emit("matched", {
                  userProfile: id_friend,
                  distance,
                });
              }
              if (socketIdFriend) {
                io.to(socketIdFriend).emit("matched", {
                  userProfile: id_user,
                  distance,
                });
              }
            }
          });
        } catch (error) {
          console.error("Error in Matching:", error);
        }

        return;
      }
    }
  }
}

function cleanupMatchingPool(timeoutMs = 30_000) {
  const now = Date.now();
  for (const [userId, lastActive] of matchingPool.entries()) {
    if (now - lastActive > timeoutMs) {
      matchingPool.delete(userId);
    }
  }
}

setInterval(() => cleanupMatchingPool(30_000), 30_000);

module.exports = LocationService;
