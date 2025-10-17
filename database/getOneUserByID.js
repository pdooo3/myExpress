const { connectTODB } = require("../database/dBCnenction");
function selectOneUserByID(req, res) {
  const query = "SELECT * FROM a WHERE id = ?";
  connectTODB.query(query, [req.params.ID], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (results.length === 0)
      return res.status(404).json({ error: "User not found" });
    res.json(results[0]);
  });
}
module.exports = { selectOneUserByID };
