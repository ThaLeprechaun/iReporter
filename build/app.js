"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _redflagController = _interopRequireDefault(require("./server/redflagController/redflagController"));

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
});
app.get("/api/v1/redflags", _redflagController.default.getAllRedflags);
app.get("/api/v1/redflags/:redflagId", _redflagController.default.getSingleRedflag);
app.post("/api/v1/redflags", _redflagController.default.createRedflag);
app.delete("/api/v1/redflags/:redflagId", _redflagController.default.deleteRedflag);
app.patch("/api/v1/redflags/:redflagId/location", _redflagController.default.updateRedflagLocation);
app.patch("/api/v1/redflags/:redflagId/comment", _redflagController.default.updateRedflagComment);
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log("App listening on port ".concat(port));
});
var _default = server;
exports.default = _default;