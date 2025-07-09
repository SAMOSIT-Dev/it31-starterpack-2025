// src/socket/socket.js
const { Server } = require("socket.io");
const socketVerifyAccessToken = require("../middleware/socketJwt"); // ← import middleware
const LocationController = require("../controller/location.controller");

function setupWebSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*", credentials: true },
  });

  io.use(socketVerifyAccessToken());

  io.on("connection", (socket) => {

    const userId = socket.user?.preferred_username;
    if (!userId) {
      return socket.disconnect();
    }

    socket.emit("activeUser", LocationController.userLocations.size);

    socket.on("updateLocation", async (data) => {
      const { lat, lng } = data;
      if (lat == null || lng == null) {
        return socket.emit("error", "Missing lat lng");
      }
      await LocationController.handleUpdateLocation(
        socket,
        { userId, lat, lng },
        io
      );
    });

    socket.on("disconnect", () => {
      LocationController.handleDisconnect(socket.id);
      io.emit("activeUser", LocationController.userLocations.size);
    });
  });

  return io;
}

module.exports = setupWebSocket;
