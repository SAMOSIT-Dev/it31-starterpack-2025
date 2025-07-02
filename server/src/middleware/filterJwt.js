const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const ResponseDTO = require("../dtos/response.dto");

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

function verifyAccessToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const response = new ResponseDTO();

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    response.setError(true);
    response.setMessage("Missing Authorization Header or Token");
    return res.status(401).json(response.build());
  }

  const token = authHeader.substring(7);

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
