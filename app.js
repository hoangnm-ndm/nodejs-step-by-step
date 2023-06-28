const http = require("http");
const server = http.createServer((req, res) => {
  res.end(`<h1>Xin chao moi nguoi!</h1>`);
});
server.listen(8088, () => {
  console.log("Server listening on port 8088");
});
