// eslint-disable-next-line allowForLoopAfterthoughts
const express = require("express");
const routes = require("./routes");

const app = express();
// app.use("/api/v1/user", routes.user);
app.use("/api/v1/incident", routes.incident);
module.exports = app;
