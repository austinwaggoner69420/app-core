import http from "http";
import "./mod_1.js";
import "./f_21759.js";
import "./f_76194.js";
import "./f_85740.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<!DOCTYPE html><html><head><title>Interstellar</title></head><body><h1>Interstellar Core Online</h1></body></html>");
});

server.listen(PORT, () => {
  console.log(`Interstellar server listening on port ${PORT}`);
});

