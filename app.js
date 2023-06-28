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
 * Khi tạo nhiều router với http
 */
// import http from "http";
// const server = http.createServer((req, res) => {
//   const products = [
//     { name: "Iphone 12", price: 1000 },
//     { name: "Iphone 13", price: 1100 },
//   ];
//   if (req.url == "/" && req.method == "GET") {
//     res.setHeader("Content-Type", "text/html");
//     res.end(`<html>
//                   <body>
//                       <form action="/products" method="post">
//                           <input type="text" name="name" />
//                           <button>Submit</button>
//                       </form>
//                   </body>
//               </html>`);
//   }
//   if (req.url == "/products" && req.method == "POST") {
//     products.push({ name: "Iphone 14", price: 1500 });
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(products));
//   }
// });
// server.listen(8088, () => {
//   console.log("Server is running on port 8088");
// });

/**
 * Khi dùng express
 */

// import express from "express";
// const app = express();
// app.get("/", (req, res) => {
//   // res.end(JSON.stringify({ id: "123", name: "product A", price: 200 }));
//   res.status(200).json({ id: "123", name: "product A", price: 200 });
// });
// app.listen(8088, () => {
//   console.log("server running on port 8088");
// });

/**
 * Khi CRUD với JSON Server
 */

// import express from "express";
// const app = express();
// // Sử dụng middleware để đọc dữ liệu từ body
// app.use(express.json());
// app.get("/products", (req, res) => {
//   // res.end(JSON.stringify({ id: "123", name: "product A", price: 200 }));
//   res.status(200).json();
// });
// app.listen(8088, () => {
//   console.log("server running on port 8088");
// });
