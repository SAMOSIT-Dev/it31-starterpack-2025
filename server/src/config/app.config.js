require('dotenv').config()

const AppConfig = {
  serverPort: process.env.SERVER_PORT,
  applicationContext: process.env.APPLICATION_CONTEXT
}

module.exports = AppConfig