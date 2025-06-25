require("dotenv").config();

const AppConfig = {
  serverPort: process.env.SERVER_PORT || 8080,
  applicationContext: process.env.APPLICATION_CONTEXT || "",
};

module.exports = AppConfig;
