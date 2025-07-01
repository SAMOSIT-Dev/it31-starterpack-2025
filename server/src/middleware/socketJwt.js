const jwt = require("jsonwebtoken");

function socketVerifyAccessToken(publicKey) {
  return (socket, next) => {
    const token = socket.handshake.auth?.token

    if (!token) {
      return next(new Error("Missing token"));
    }

    try {
      const decoded = jwt.verify(token, publicKey, {
        algorithms: ["RS256"],
        issuer: process.env.JWT_ISSUER,
        audience: process.env.aud,
      });

      socket.user = decoded;
      next();
    } catch (err) {
      console.error("JWT verify failed:", err.message);
      return next(new Error("Invalid or expired token"));
    }
  };
}

module.exports = socketVerifyAccessToken;
