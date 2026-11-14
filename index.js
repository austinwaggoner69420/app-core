import http from "http";
import "./mod_1.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // If mod_1 handles requests, let it, otherwise return fallback
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<!DOCTYPE html><html><head><title>Interstellar</title></head><body><h1>Interstellar Running</h1></body></html>");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

