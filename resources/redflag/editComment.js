const data = require("../../data.json");

module.exports = (req, res) => {
  const redflagId = req.params.redflagId * 1;
  const redflag = data.redflag;
  const findRedflag = redflag.find(e => e.id === redflagId);
  if (!findRedflag) {
    return res.status(404).send({
      status: 404,
      error: "Record was not found"
    });
  }
  if (!req.body.comment) {
    return res.status(404).send({
      status: 404,
      error: "Comment is required"
    });
  }
  const day = new Date();
  const updatedRedflag = {
    id: findRedflag.id,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  }
  redflag.splice(findRedflag.location, 1, updatedRedflag);
  return res.status(200).send({
    status: 200,
    data: [{
      id: redflagId,
      message: "Updated red-flag record's comment"
    }]
  })
}
