const port = process.env.PORT || 5000;

const eslint = require("./eslint");
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
  domain: "http://light-hour.herokuapp.com/",
  endpoint: "/api",
  name: "lighthour",
  author: "Naomi-Grace Cosio Panlaqui & Nameer Rizvi",
  description:
    "A simple utility for people to find out what time the next golden hour is.",
  themeColor: "#FFFFFF",
  backgroundColor: "#79B0F4",
  eslint,
  input,
  log,
  path,
  sanitize
};
