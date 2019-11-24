const port = process.env.PORT || 5000;

const input = require("./input");
const log = require("./log");
const path = require("./path");
const sanitize = require("./sanitize");

module.exports = {
  isProd: process.env.NODE_ENV === "production",
  port: {
    server: port,
    client: port + 1
  },
  endpoint: "/api",
  name: "lighthour",
  input,
  log,
  path,
  sanitize
};
