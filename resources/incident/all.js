const data = require("../../data.json");

module.exports = (req, res) => {
  const incident = data.incident;
  res.status(200).json({
    status: 200,
    incident
  });
}
