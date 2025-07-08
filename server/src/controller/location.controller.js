const LocationService = require("../services/location.service");

class LocationController {
  static userLocations = new Map();

  static async handleUpdateLocation(socket, data, io) {
    const { userId, lat, lng } = data;

    LocationController.userLocations.set(userId, {
      lat,
      lng,
      socketId: socket.id,
    });

    const matchedUsers = await LocationService.calculateMatch(
      userId,
      lat,
      lng,
      LocationController.userLocations,
      io
    );

    socket.emit("matchedUsers", matchedUsers);

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
