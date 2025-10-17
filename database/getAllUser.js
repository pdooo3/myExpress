const { connectTODB } = require("../database/dBCnenction");
function selectAllUsers(req, res) {
  const query = "SELECT * FROM a";
  connectTODB.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
}
module.exports = { selectAllUsers };
