"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// $ npm i morgan
// app.use(logger):

const morgan = require("morgan");
const fs = require("node:fs");
const path = require("path");

const now = new Date();
const today = now.toISOString().split("T")[0];

// Log dizinini oluştur
const logDir = path.join(__dirname, "..", "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFilePath = path.join(logDir, `${today}.log`);

module.exports = morgan("combined", {
  stream: fs.createWriteStream(logFilePath, { flags: "a+" }),
});
