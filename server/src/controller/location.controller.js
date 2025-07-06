const LocationService = require("../services/location.service");

class LocationController {
  static userLocations = new Map();

  static async handleUpdateLocation(socket, data) {
    const { userId, lat, lng } = data;

    LocationController.userLocations.set(userId, {
      lat,
      lng,
      socketId: socket.id,
    });

    const nearbyUsers = await LocationService.calculateNearby(
      userId,
      lat,
      lng,
      LocationController.userLocations
    );
    socket.emit("nearbyUsers", nearbyUsers);
    console.dir(nearbyUsers, { depth: null });
    socket.broadcast.emit("activeUser", LocationController.userLocations.size);
    socket.emit("activeUser", LocationController.userLocations.size);
  }

  static handleDisconnect(socketId) {
    for (const [userId, info] of LocationController.userLocations.entries()) {
      if (info.socketId === socketId) {
        LocationController.userLocations.delete(userId);
        break;
      }
    }
  }
}
module.exports = LocationController;
