/* eslint-disable arrow-body-style */
import express from "express";
import bodyParser from "body-parser";
import redflagRecord from "./server/redflagController/redflagController";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Congratulations! iReporter is up and running" })
});

app.get("/api/v1/redflags", redflagRecord.getAllRedflags);
app.get("/api/v1/redflags/:redflagId", redflagRecord.getSingleRedflag);
app.post("/api/v1/redflags", redflagRecord.createRedflag);
app.delete("/api/v1/redflags/:redflagId", redflagRecord.deleteRedflag);
app.patch("/api/v1/redflags/:redflagId/location", redflagRecord.updateRedflagLocation);
app.patch("/api/v1/redflags/:redflagId/comment", redflagRecord.updateRedflagComment);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
export default server;
