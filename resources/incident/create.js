const data = require("../../data.json");

module.exports = (req, res) => {
  if (!req.body.type) {
    return res.status(400).send({
      status: 400,
      error: "Type is required"
    });
  }
  const incident = data.incident;
  const newId = incident.length + 1;
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

  incident.push(newRecord);
  return res.status(200).send({
    status: 200,
    data: [{
      id: newId,
      message: "Created red-flag record"
    }]
  });
}
