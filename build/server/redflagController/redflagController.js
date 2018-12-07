"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = _interopRequireDefault(require("../../data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RedflagController =
/*#__PURE__*/
function () {
  function RedflagController() {
    _classCallCheck(this, RedflagController);
  }

  _createClass(RedflagController, [{
    key: "getAllRedflags",
    value: function getAllRedflags(req, res) {
      var redflag = _data.default.redflag;
      res.status(200).json({
        status: 200,
        redflag: redflag
      });
    }
  }, {
    key: "getSingleRedflag",
    value: function getSingleRedflag(req, res) {
      var redflagId = req.params.redflagId * 1;

      var findRedflag = _data.default.redflag.find(function (e) {
        return e.id === redflagId;
      });

      if (!findRedflag) {
        return res.status(404).json({
          status: 404,
          error: "Record was not found"
        });
      }

      res.status(200).json({
        status: 200,
        findRedflag: findRedflag
      });
    }
  }, {
    key: "createRedflag",
    value: function createRedflag(req, res) {
      if (!req.body.type) {
        return res.status(400).json({
          status: 400,
          error: "Type is required"
        });
      }

      var redflag = _data.default.redflag;
      var newId = redflag.length + 1;
      var day = new Date();
      var newRecord = {
        id: newId,
        createdOn: day,
        createdBy: req.body.createdBy,
        type: req.body.type,
        location: req.body.location,
        status: req.body.status,
        Images: [],
        Videos: [],
        comment: req.body.comment
      };
      redflag.push(newRecord);
      return res.status(200).json({
        status: 200,
        data: [{
          id: newId,
          message: "Created red-flag record"
        }]
      });
    }
  }, {
    key: "updateRedflagComment",
    value: function updateRedflagComment(req, res) {
      var redflagId = req.params.redflagId * 1;
      var redflag = _data.default.redflag;
      var findRedflag = redflag.find(function (e) {
        return e.id === redflagId;
      });

      if (!findRedflag) {
        return res.status(404).json({
          status: 404,
          error: "Record was not found"
        });
      }

      if (!req.body.comment) {
        return res.status(404).json({
          status: 404,
          error: "Comment is required"
        });
      }

      var day = new Date();
      var updatedRedflag = {
        id: findRedflag.id,
        createdOn: day,
        createdBy: req.body.createdBy,
        type: req.body.type,
        location: req.body.location,
        status: req.body.status,
        Images: [],
        Videos: [],
        comment: req.body.comment
      };
      redflag.splice(findRedflag.location, 1, updatedRedflag);
      return res.status(200).json({
        status: 200,
        data: [{
          id: redflagId,
          message: "Updated red-flag record's comment"
        }]
      });
    }
  }, {
    key: "updateRedflagLocation",
    value: function updateRedflagLocation(req, res) {
      var redflagId = req.params.redflagId * 1;
      var redflag = _data.default.redflag;
      var notFound = true;
      var findRedflag = redflag.forEach(function (record) {
        if (record.id === redflagId) {
          notFound = false;
        }
      });

      if (notFound) {
        return res.status(404).json({
          status: 404,
          error: "Record was not found"
        });
      }

      if (!req.body.location) {
        return res.status(404).json({
          status: 404,
          error: "Location is required"
        });
      }

      var day = new Date();
      var updatedRedflag = {
        id: redflagId,
        createdOn: day,
        createdBy: req.body.createdBy,
        type: req.body.type,
        location: req.body.location,
        status: req.body.status,
        Images: [],
        Videos: [],
        comment: req.body.comment
      };
      redflag.splice(findRedflag, 1, updatedRedflag);
      return res.status(200).json({
        status: 200,
        data: [{
          id: redflagId,
          message: "Updated red-flag record's location"
        }]
      });
    }
  }, {
    key: "deleteRedflag",
    value: function deleteRedflag(req, res) {
      var redflagId = req.params.redflagId * 1;
      var redflag = _data.default.redflag;
      var findRedflag = redflag.find(function (e) {
        return e.id === redflagId;
      });

      if (!findRedflag) {
        return res.status(404).json({
          status: 404,
          error: "Record was not found"
        });
      }

      var newId = redflagId;
      redflag.splice(newId, 1);
      res.status(200).json({
        status: 200,
        data: [{
          id: newId,
          message: "red-flag record has been deleted"
        }]
      });
    }
  }]);

  return RedflagController;
}();

var redflag = new RedflagController();
var _default = redflag;
exports.default = _default;