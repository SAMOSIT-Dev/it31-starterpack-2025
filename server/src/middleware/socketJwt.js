const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const client = jwksClient({
  jwksUri: process.env.JWKS_URI,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    if (err) {
      return callback(err);
    }
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}

function socketVerifyAccessToken() {
  return (socket, next) => {
    const token = socket.handshake.auth?.token;

    if (!token) {
      return next(new Error("Missing token"));
    }

    jwt.verify(
      token,
      getKey,
      {
        algorithms: ["RS256"],
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE,
      },
      (err, decoded) => {
        if (err) {
          console.error("JWT verify failed (Socket):", err.message);
          return next(new Error("Invalid or expired token"));
        }

        socket.user = decoded;
        next();
      }
    );
  };
}

module.exports = socketVerifyAccessToken;
