"use strict";

var _data = _interopRequireDefault(require("../../data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-restricted-globals */
exports.getAllRedflags = function (req, res) {
  var redflag = _data.default.redflag;
  res.status(200).json({
    status: 200,
    redflag: redflag
  });
};

exports.getSingleRedflag = function (req, res) {
  var redflagId = req.params.redflagId * 1;

  var findRedflag = _data.default.redflag.find(function (e) {
    return e.id === redflagId;
  });

  if (isNaN(redflagId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

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
};

exports.createRedflag = function (req, res) {
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
};

exports.updateRedflagComment = function (req, res) {
  var redflagId = req.params.redflagId * 1;
  var redflag = _data.default.redflag;
  var findRedflag = redflag.find(function (e) {
    return e.id === redflagId;
  });

  if (isNaN(redflagId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!redflagId) {
    res.status(404).json({
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

  var index = redflag.indexOf(findRedflag);
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
  redflag.splice(index, 1, updatedRedflag);
  return res.status(200).json({
    status: 200,
    data: [{
      id: redflagId,
      message: "Updated red-flag record's comment"
    }]
  });
};

exports.updateRedflagLocation = function (req, res) {
  var redflagId = req.params.redflagId * 1;
  var redflag = _data.default.redflag;
  var findRedflag = redflag.find(function (e) {
    return e.id === redflagId;
  });

  if (isNaN(redflagId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!redflagId) {
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

  var index = redflag.indexOf(findRedflag);
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
  redflag.splice(index, 1, updatedRedflag);
  return res.status(200).json({
    status: 200,
    data: [{
      id: redflagId,
      message: "Updated red-flag record's location"
    }]
  });
};

exports.deleteRedflag = function (req, res) {
  var redflagId = req.params.redflagId * 1;
  var redflag = _data.default.redflag;
  var findRedflag = redflag.find(function (e) {
    return e.id === redflagId;
  });

  if (isNaN(redflagId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!findRedflag) {
    return res.status(404).json({
      status: 404,
      error: "Record was not found"
    });
  }

  var newId = redflagId;
  var index = redflag.indexOf(findRedflag);
  redflag.splice(index, 1);
  res.status(200).json({
    status: 200,
    data: [{
      id: newId,
      message: "red-flag record has been deleted"
    }]
  });
};