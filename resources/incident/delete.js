const data = require("../../data.json");

module.exports = (req, res) => {
  const incidentId = req.params.incidentId * 1;
  const incident = data.incident;
  const findIncident = incident.find(e => e.id === incidentId);
  if (!findIncident) {
    return res.status(404).send({
      status: 404,
      error: "Record was not found"
    });
  }
  const newId = incident.length + 1;
  const index = incident.indexOf(incident);
  incident.splice(index, 1);
  res.status(200).send({
    status: 200,
    data: [{
      id: newId,
      message: "red-flag record has been deleted"
    }]
  })
}
