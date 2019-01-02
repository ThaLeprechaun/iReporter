"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _redflagController = _interopRequireDefault(require("./server/redflagController/redflagController"));

var _interventionController = _interopRequireDefault(require("./server/interventionController/interventionController"));

var _userController = _interopRequireDefault(require("./server/userController/userController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable arrow-body-style */
var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  return res.status(200).json({
    message: "Congratulations! iReporter is up and running"
  });
}); // Endpoints for user records

app.get("/api/v1/users", _userController.default.getAllUsers);
app.get("/api/v1/users/:userId", _userController.default.getSingleUser);
app.post("/api/v1/users", _userController.default.createUser);
app.delete("/api/v1/users/:userId", _userController.default.deleteUser); // Endpoints for redflag records

app.get("/api/v1/redflags", _redflagController.default.getAllRedflags);
app.get("/api/v1/redflags/:redflagId", _redflagController.default.getSingleRedflag);
app.post("/api/v1/redflags", _redflagController.default.createRedflag);
app.delete("/api/v1/redflags/:redflagId", _redflagController.default.deleteRedflag);
app.patch("/api/v1/redflags/:redflagId/location", _redflagController.default.updateRedflagLocation);
app.patch("/api/v1/redflags/:redflagId/comment", _redflagController.default.updateRedflagComment);
app.patch("/api/v1/redflags/:redflagId/status", _redflagController.default.updateRedflagStatus); // Endpoints for Intervention records

app.get("/api/v1/interventions", _interventionController.default.getAllIntervention);
app.get("/api/v1/interventions/:interventionId", _interventionController.default.getSingleIntervention);
app.post("/api/v1/interventions", _interventionController.default.createIntervention);
app.delete("/api/v1/interventions/:interventionId", _interventionController.default.deleteIntervention);
app.patch("/api/v1/interventions/:interventionId/location", _interventionController.default.updateInterventionLocation);
app.patch("/api/v1/interventions/:interventionId/comment", _interventionController.default.updateInterventionComment);
app.patch("/api/v1/interventions/:interventionId/status", _interventionController.default.updateInterventionStatus);
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log("App listening on port ".concat(port));
});
var _default = server;
exports.default = _default;