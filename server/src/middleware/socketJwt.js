const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const AppConfig = require("../config/app.config");
const cookie = require('cookie')

const client = jwksClient({
  jwksUri: AppConfig.JWKS_URI,
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
    const cookies = cookie.parse(socket.handshake.headers.cookie || '');
    const token = cookies.accessToken || socket.handshake.auth?.token || socket.handshake.headers?.token;
    
    if (!token) {
      return next(new Error("Missing token"));
    }

    jwt.verify(
      token,
      getKey,
      {
        algorithms: ["RS256"],
        issuer: AppConfig.JWT_ISSUER,
        audience: AppConfig.JWT_AUDIENCE,
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
