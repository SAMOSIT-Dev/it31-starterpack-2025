const app = require('./src/app')
const AppConfig = require('./src/config/app.config')

const PORT = AppConfig.serverPort

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})