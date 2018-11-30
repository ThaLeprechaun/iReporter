const data = require("../../data.json");

module.exports = (req, res) => {
  const redflagId = req.params.redflagId * 1;
  const findRedflag = data.redflag.find(e => e.id === redflagId);
  if (!findRedflag) {
    return res.status(404).send({
      status: 404,
      error: "Record was not found"
    });
  }
  res.status(200).json({
    status: 200,
    findRedflag
  });
}
