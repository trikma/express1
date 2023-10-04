// const http = require("http");

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello, World!");
//   } else if (req.url === "/kontak") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(contacts); // Mengirim data kontak sebagai JSON
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Not Found");
//   }
// });

// let contacts = JSON.stringify([
//   { name: "whilli", phone: "098987" },
//   { name: "whilli", phone: "098987" },
//   { name: "whilli", phone: "098987" },
// ]);

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
