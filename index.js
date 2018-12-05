const express = require("express");
const app = require("./app");

app.get("/", (req, res) => res.status(200).json({ message: "Congratulations! iReporter is up and running" }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
