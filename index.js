import http from "http";
import "./mod_1.js";

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Interstellar Service Online");
});

server.listen(PORT, () => {
  console.log(`Server is actively listening on port ${PORT}`);
});

