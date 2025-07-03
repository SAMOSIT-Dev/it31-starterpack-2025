require("dotenv").config();

const AppConfig = {
  serverPort: process.env.SERVER_PORT || 8080,
  applicationContext: process.env.APPLICATION_CONTEXT || "",
  JWKS_URI: process.env.JWKS_URI || "",
  JWT_ISSUER: process.env.JWT_ISSUER || "",
  JWT_AUDIENCE: process.env.JWT_AUDIENCE || ""
};

module.exports = AppConfig
