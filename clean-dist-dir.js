const fs = require("node:fs");
const path = require("node:path");

fs.rmSync(path.join(process.cwd(), "dist"), { recursive: true, force: true });