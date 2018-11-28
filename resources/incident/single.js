const data = require("../../data.json");

module.exports = (req, res) => {
  const incidentId = req.params.incidentId * 1;
  const incident = data.incident.find(e => e.id === incidentId);
  if (!incident) {
    res.status(404).send({
      status: 404,
      error: "Record was not found"
    });
    return;
  }
  res.status(200).json({
    status: 200,
    incident
  });
}
