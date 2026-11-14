import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "./mod_1.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files from the static directory
app.use(express.static(path.join(__dirname, "static")));

app.listen(PORT, () => {
  console.log(`Interstellar server running on port ${PORT}`);
});

