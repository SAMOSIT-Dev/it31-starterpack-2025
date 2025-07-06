// src/socket/socket.js
const { Server } = require("socket.io");
const socketVerifyAccessToken = require("../middleware/socketJwt"); // ← import middleware
const LocationController = require("../controller/location.controller");

const publicKey = process.env.JWT_PUBLIC_KEY.replace(/\\n/g, "\n");

function setupWebSocket(server) {
  const io = new Server(server, {
    path: '/samosit/it31starterpack/matching',
    cors: { origin: "*", credentials: true },
  });

  io.use(socketVerifyAccessToken());

  io.on("connection", (socket) => {
    socket.emit("activeUser", LocationController.userLocations.size);

    const userId = socket.user?.preferred_username;

    if (!userId) {
      return socket.emit("error", "Missing user info in token");
    }

    socket.on("updateLocation", async (data) => {
      const { lat, lng } = data;
      
      if (lat == null || lng == null) {
        return socket.emit("error", "Missing lat/lng");
      }

      await LocationController.handleUpdateLocation(socket, {
        userId,
        lat,
        lng,
      });
    });

    socket.on("disconnect", () => {
      LocationController.handleDisconnect(socket);
      io.emit("activeUser", LocationController.userLocations.size);
    });
  });

  return io;
}

module.exports = setupWebSocket;
