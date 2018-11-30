const data = require("../../data.json");

module.exports = (req, res) => {
  const redflagId = req.params.redflagId * 1;
  const redflag = data.redflag;
  let notFound = true;
  const findRedflag = redflag.forEach((record) => {
    if (record.id === redflagId) {
      notFound = false;
    }
  });
  if (notFound) {
    return res.status(404).send({
      status: 404,
      error: "Record was not found"
    });
  }
  if (!req.body.location) {
    return res.status(404).send({
      status: 404,
      error: "Location is required"
    });
  }
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
  redflag.splice(findRedflag, 1, updatedRedflag);
  return res.status(200).send({
    status: 200,
    data: [{
      id: redflagId,
      message: "Updated red-flag record's location"
    }]
  })
}
