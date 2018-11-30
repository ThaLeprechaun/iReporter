const express = require("express");
const app = require("./app");

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
