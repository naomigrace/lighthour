const port = process.env.PORT || 5000;

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
  input: {
    name: "search",
    maxLength: 255,
    placeholder: "Where are you chasing?"
  },
  log,
  path,
  sanitize
};
