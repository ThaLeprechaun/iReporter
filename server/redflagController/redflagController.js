/* eslint-disable no-restricted-globals */
import data from "../../data.json";

exports.getAllRedflags = (req, res) => {
  const redflag = data.redflag;
  res.status(200).json({
    status: 200,
    redflag
  });
}

exports.getSingleRedflag = (req, res) => {
  const redflagId = req.params.redflagId * 1;
  const findRedflag = data.redflag.find(e => e.id === redflagId);
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
    findRedflag
  });
}

exports.createRedflag = (req, res) => {
  if (!req.body.type) {
    return res.status(400).json({
      status: 400,
      error: "Type is required"
    });
  }
  const redflag = data.redflag;
  const newId = redflag.length + 1;
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

  redflag.push(newRecord);
  return res.status(200).json({
    status: 200,
    data: [{
      id: newId,
      message: "Created red-flag record"
    }]
  });
}

exports.updateRedflagComment = (req, res) => {
  const redflagId = req.params.redflagId * 1;
  const redflag = data.redflag;
  const findRedflag = redflag.find(e => e.id === redflagId);

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
    })
  }

  if (!req.body.comment) {
    return res.status(404).json({
      status: 404,
      error: "Comment is required"
    });
  }
  const index = redflag.indexOf(findRedflag);
  const day = new Date();
  const updatedRedflag = {
    id: redflagId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  }

  redflag.splice(index, 1, updatedRedflag);
  return res.status(200).json({
    status: 200,
    data: [{
      id: redflagId,
      message: "Updated red-flag record's comment"
    }]
  });
}

exports.updateRedflagLocation = (req, res) => {
  const redflagId = req.params.redflagId * 1;
  const redflag = data.redflag;
  const findRedflag = redflag.find(e => e.id === redflagId);

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
  const index = redflag.indexOf(findRedflag);
  const day = new Date();
  const updatedRedflag = {
    id: redflagId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  }
  redflag.splice(index, 1, updatedRedflag);
  return res.status(200).json({
    status: 200,
    data: [{
      id: redflagId,
      message: "Updated red-flag record's location"
    }]
  })
}

exports.deleteRedflag = (req, res) => {
  const redflagId = req.params.redflagId * 1;
  const redflag = data.redflag;
  const findRedflag = redflag.find(e => e.id === redflagId);

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
  const newId = redflagId;
  const index = redflag.indexOf(findRedflag);
  redflag.splice(index, 1);
  res.status(200).json({
    status: 200,
    data: [{
      id: newId,
      message: "red-flag record has been deleted"
    }]
  })
}
