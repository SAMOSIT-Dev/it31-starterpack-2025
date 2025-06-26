const jwt = require("jsonwebtoken");
const ResponseDTO = require("../dtos/response.dto");

const publickey = process.env.JWT_PUBLIC_KEY;

function verifyAccesstoken(req, res, next) {
  const authHeader = req.headers.authorization;
  const response = new ResponseDTO();
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    response.setError(true);
    response.setMessage("Missing Authorization Header || Missing Token ");
    return res.status(401).json(response.build());
  }

  const token = authHeader.substring(7);
  try {
    const decode = jwt.verify(token, publickey, {
      algorithms: "RS256",
      issuer: process.env.JWT_ISSUER,
      audience: process.env.CLIENT_ID,
    });

    req.user = decode;
  } catch (error) {
    console.error("JWT verify failed:", err.message);
    response.setError(true);
    response.setMessage("Invalid or expired token");
    return res.status(403).json(response.build());
  }

  
}
