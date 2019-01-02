/* eslint-disable no-restricted-globals */
import data from "../../data.json";

exports.getAllIntervention = (req, res) => {
  const intervention = data.intervention;
  res.status(200).json({
    status: 200,
    intervention
  });
}

exports.getSingleIntervention = (req, res) => {
  const interventionId = req.params.interventionId * 1;
  const findintervention = data.intervention.find(e => e.id === interventionId);
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
    findintervention
  });
}

exports.createIntervention = (req, res) => {
  if (!req.body.type) {
    return res.status(400).json({
      status: 400,
      error: "Type is required"
    });
  }
  const intervention = data.intervention;
  const newId = intervention.length + 1;
  const day = new Date();

  const newRecord = {
    id: newId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  }

  intervention.push(newRecord);
  return res.status(200).json({
    status: 200,
    data: [{
      id: newId,
      message: "Created Intervention record"
    }]
  });
}

exports.updateInterventionComment = (req, res) => {
  const interventionId = req.params.interventionId * 1;
  const intervention = data.intervention;
  const findintervention = intervention.find(e => e.id === interventionId);

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
    })
  }

  if (!req.body.comment) {
    return res.status(404).json({
      status: 404,
      error: "comment is required"
    });
  }
  const index = intervention.indexOf(findintervention);
  const day = new Date();
  const updatedintervention = {
    id: interventionId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  }

  intervention.splice(index, 1, updatedintervention);
  return res.status(200).json({
    status: 200,
    data: [{
      id: interventionId,
      message: "Updated Intervention record's comment"
    }]
  });
}

exports.updateInterventionLocation = (req, res) => {
  const interventionId = req.params.interventionId * 1;
  const intervention = data.intervention;
  const findintervention = intervention.find(e => e.id === interventionId);

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
    })
  }

  if (!req.body.location) {
    return res.status(404).json({
      status: 404,
      error: "location is required"
    });
  }
  const index = intervention.indexOf(findintervention);
  const day = new Date();
  const updatedintervention = {
    id: interventionId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  }

  intervention.splice(index, 1, updatedintervention);
  return res.status(200).json({
    status: 200,
    data: [{
      id: interventionId,
      message: "Updated Intervention record's location"
    }]
  });
}

exports.updateInterventionStatus = (req, res) => {
  const interventionId = req.params.interventionId * 1;
  const intervention = data.intervention;
  const findintervention = intervention.find(e => e.id === interventionId);

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
    })
  }

  if (!req.body.status) {
    return res.status(404).json({
      status: 404,
      error: "status is required"
    });
  }
  const index = intervention.indexOf(findintervention);
  const day = new Date();
  const updatedintervention = {
    id: interventionId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  }

  intervention.splice(index, 1, updatedintervention);
  return res.status(200).json({
    status: 200,
    data: [{
      id: interventionId,
      message: "Updated Intervention record's status"
    }]
  });
}

exports.deleteIntervention = (req, res) => {
  const interventionId = req.params.interventionId * 1;
  const intervention = data.intervention;
  const findintervention = intervention.find(e => e.id === interventionId);

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
  const newId = interventionId;
  const index = intervention.indexOf(findintervention);
  intervention.splice(index, 1);
  res.status(200).json({
    status: 200,
    data: [{
      id: newId,
      message: "Intervention record has been deleted"
    }]
  })
}
