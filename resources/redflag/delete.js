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
  const newId = redflag.length + 1;
  const index = redflag.indexOf(redflag);
  redflag.splice(index, 1);
  res.status(200).send({
    status: 200,
    data: [{
      id: newId,
      message: "red-flag record has been deleted"
    }]
  })
}
