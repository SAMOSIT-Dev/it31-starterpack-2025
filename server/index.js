const { server } = require("./src/app"); // ดึง server ที่สร้างจาก http.createServer()
const AppConfig = require("./src/config/app.config");

const PORT = AppConfig.serverPort;

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
