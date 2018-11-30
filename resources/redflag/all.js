const data = require("../../data.json");

module.exports = (req, res) => {
  const redflag = data.redflag;
  res.status(200).json({
    status: 200,
    redflag
  });
}
