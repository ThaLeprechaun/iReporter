// eslint-disable-next-line allowForLoopAfterthoughts
const express = require("express");
const routes = require("./routes");

const app = express();
app.use("/api/v1/redflags", routes.redflag);
module.exports = app;
