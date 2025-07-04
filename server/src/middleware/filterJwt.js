const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const ResponseDTO = require("../dtos/response.dto");
const AppConfig = require("../config/app.config");

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

function verifyAccessToken(req, res, next) {
  const response = new ResponseDTO();
  let token = null;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7);
  } else if (req.cookies && req.cookies.accessToken) {
    token = req.cookies.accessToken;
  }

  if (!token) {
    response.setError(true);
    response.setMessage("Missing Authorization Header or Token");
    return res.status(401).json(response.build());
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
        console.error("JWT verify failed:", err.message);
        response.setError(true);
        response.setMessage("Invalid or expired token");
        return res.status(403).json(response.build());
      }
      req.user = decoded;
      next();
    }
  );
}

module.exports = verifyAccessToken;
