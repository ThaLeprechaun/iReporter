/* eslint-disable arrow-body-style */
import express from "express";
import bodyParser from "body-parser";
import redflagRecord from "./server/redflagController/redflagController";
import interventionRecord from "./server/interventionController/interventionController";
import userRecord from "./server/userController/userController";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Congratulations! iReporter is up and running" })
});

// Endpoints for user records
app.get("/api/v1/users", userRecord.getAllUsers);
app.get("/api/v1/users/:userId", userRecord.getSingleUser);
app.post("/api/v1/users", userRecord.createUser);
app.delete("/api/v1/users/:userId", userRecord.deleteUser);

// Endpoints for redflag records
app.get("/api/v1/redflags", redflagRecord.getAllRedflags);
app.get("/api/v1/redflags/:redflagId", redflagRecord.getSingleRedflag);
app.post("/api/v1/redflags", redflagRecord.createRedflag);
app.delete("/api/v1/redflags/:redflagId", redflagRecord.deleteRedflag);
app.patch("/api/v1/redflags/:redflagId/location", redflagRecord.updateRedflagLocation);
app.patch("/api/v1/redflags/:redflagId/comment", redflagRecord.updateRedflagComment);
app.patch("/api/v1/redflags/:redflagId/status", redflagRecord.updateRedflagStatus);

// Endpoints for Intervention records
app.get("/api/v1/interventions", interventionRecord.getAllIntervention);
app.get("/api/v1/interventions/:interventionId", interventionRecord.getSingleIntervention);
app.post("/api/v1/interventions", interventionRecord.createIntervention);
app.delete("/api/v1/interventions/:interventionId", interventionRecord.deleteIntervention);
app.patch("/api/v1/interventions/:interventionId/location", interventionRecord.updateInterventionLocation);
app.patch("/api/v1/interventions/:interventionId/comment", interventionRecord.updateInterventionComment);
app.patch("/api/v1/interventions/:interventionId/status", interventionRecord.updateInterventionStatus);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
export default server;
