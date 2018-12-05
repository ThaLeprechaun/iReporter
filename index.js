const express = require("express");
const app = require("./app");

app.get("/", (req, res) => res.status(200).send({ message: "Congratulations! iReporter is up and running" }));

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
