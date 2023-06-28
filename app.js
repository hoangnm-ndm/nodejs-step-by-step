// import { createServer } from "http";
// const server = createServer((req, res) => {
//   res.end(`<h1>Xin chao moi nguoi!</h1>`);
// });
// server.listen(8088, () => {
//   console.log("Server listening on port 8088");
// });

/**
 * Khi dữ liệu trả về là json
 */
// import http from "http";
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       data: "Hello",
//     })
//   );
// });

// server.listen(8088, () => {
//   console.log("Server listening on port 8088");
// });

/**
 * Khi dùng express
 */

import express from "express";
const app = express();
app.get("/", (req, res) => {
  // res.end(JSON.stringify({ id: "123", name: "product A", price: 200 }));
  res.status(200).json({ id: "123", name: "product A", price: 200 });
});
app.listen(8088, () => {
  console.log("server running on port 8088");
});
