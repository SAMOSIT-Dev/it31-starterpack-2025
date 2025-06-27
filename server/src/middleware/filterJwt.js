const jwt = require("jsonwebtoken");
const ResponseDTO = require("../dtos/response.dto");

function verifyAccessToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const response = new ResponseDTO();
  const publicKey = process.env.JWT_PUBLIC_KEY.replace(/\\n/g, "\n");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    response.setError(true);
    response.setMessage("Missing Authorization Header or Token");
    return res.status(401).json(response.build());
  }

  const token = authHeader.substring(7);

  try {
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
      issuer: process.env.JWT_ISSUER,
      audience: process.env.aud,
    });

    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT verify failed:", err.message);
    response.setError(true);
    response.setMessage("Invalid or expired token");
    return res.status(403).json(response.build());
  }
}

module.exports = verifyAccessToken;
