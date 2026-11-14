import "./mod_1.js";
import http from "http";

const PORT = process.env.PORT || 3000;

// Create a basic HTTP server that keeps the port alive and handles incoming requests
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
  <html>
  <head>
    <title>Interstellar</title>
    <style>
      body { font-family: sans-serif; background: #111; color: #fff; text-align: center; padding-top: 50px; }
      iframe { width: 100vw; height: 100vh; border: none; position: fixed; top: 0; left: 0; }
    </style>
  </head>
  <body>
    <h1>Interstellar Loading...</h1>
  </body>
  </html>`);
});

server.listen(PORT, () => {
  console.log(`Interstellar server running on port \${PORT}`);
});

