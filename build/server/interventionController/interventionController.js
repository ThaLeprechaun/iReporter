"use strict";

var _data = _interopRequireDefault(require("../../data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-restricted-globals */
exports.getAllIntervention = function (req, res) {
  var intervention = _data.default.intervention;
  res.status(200).json({
    status: 200,
    intervention: intervention
  });
};

exports.getSingleIntervention = function (req, res) {
  var interventionId = req.params.interventionId * 1;

  var findintervention = _data.default.intervention.find(function (e) {
    return e.id === interventionId;
  });

  if (isNaN(interventionId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!findintervention) {
    return res.status(404).json({
      status: 404,
      error: "Record was not found"
    });
  }

  res.status(200).json({
    status: 200,
    findintervention: findintervention
  });
};

exports.createIntervention = function (req, res) {
  if (!req.body.type) {
    return res.status(400).json({
      status: 400,
      error: "Type is required"
    });
  }

  var intervention = _data.default.intervention;
  var newId = intervention.length + 1;
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
  intervention.push(newRecord);
  return res.status(200).json({
    status: 200,
    data: [{
      id: newId,
      message: "Created Intervention record"
    }]
  });
};

exports.updateInterventionComment = function (req, res) {
  var interventionId = req.params.interventionId * 1;
  var intervention = _data.default.intervention;
  var findintervention = intervention.find(function (e) {
    return e.id === interventionId;
  });

  if (isNaN(interventionId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!interventionId) {
    res.status(404).json({
      status: 404,
      error: "Record was not found"
    });
  }

  if (!req.body.comment) {
    return res.status(404).json({
      status: 404,
      error: "comment is required"
    });
  }

  var index = intervention.indexOf(findintervention);
  var day = new Date();
  var updatedintervention = {
    id: interventionId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  };
  intervention.splice(index, 1, updatedintervention);
  return res.status(200).json({
    status: 200,
    data: [{
      id: interventionId,
      message: "Updated Intervention record's comment"
    }]
  });
};

exports.updateInterventionLocation = function (req, res) {
  var interventionId = req.params.interventionId * 1;
  var intervention = _data.default.intervention;
  var findintervention = intervention.find(function (e) {
    return e.id === interventionId;
  });

  if (isNaN(interventionId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!interventionId) {
    res.status(404).json({
      status: 404,
      error: "Record was not found"
    });
  }

  if (!req.body.location) {
    return res.status(404).json({
      status: 404,
      error: "location is required"
    });
  }

  var index = intervention.indexOf(findintervention);
  var day = new Date();
  var updatedintervention = {
    id: interventionId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  };
  intervention.splice(index, 1, updatedintervention);
  return res.status(200).json({
    status: 200,
    data: [{
      id: interventionId,
      message: "Updated Intervention record's location"
    }]
  });
};

exports.updateInterventionStatus = function (req, res) {
  var interventionId = req.params.interventionId * 1;
  var intervention = _data.default.intervention;
  var findintervention = intervention.find(function (e) {
    return e.id === interventionId;
  });

  if (isNaN(interventionId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!interventionId) {
    res.status(404).json({
      status: 404,
      error: "Record was not found"
    });
  }

  if (!req.body.status) {
    return res.status(404).json({
      status: 404,
      error: "status is required"
    });
  }

  var index = intervention.indexOf(findintervention);
  var day = new Date();
  var updatedintervention = {
    id: interventionId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  };
  intervention.splice(index, 1, updatedintervention);
  return res.status(200).json({
    status: 200,
    data: [{
      id: interventionId,
      message: "Updated Intervention record's status"
    }]
  });
};

exports.deleteIntervention = function (req, res) {
  var interventionId = req.params.interventionId * 1;
  var intervention = _data.default.intervention;
  var findintervention = intervention.find(function (e) {
    return e.id === interventionId;
  });

  if (isNaN(interventionId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!findintervention) {
    return res.status(404).json({
      status: 404,
      error: "Record was not found"
    });
  }

  var newId = interventionId;
  var index = intervention.indexOf(findintervention);
  intervention.splice(index, 1);
  res.status(200).json({
    status: 200,
    data: [{
      id: newId,
      message: "Intervention record has been deleted"
    }]
  });
};