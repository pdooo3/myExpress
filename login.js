const { createNewJWT } = require("./jwt");
function login(req, res) {
  if (req.body.username && req.body.password) {
    const { username, password } = req.body;
    if (username == "mahdi" && password == 1234) {
      const token = createNewJWT({ username: username });
      res.status(200).json({ message: "its Ok", token: `${token}` });
    } else {
      res.status(401).json({ message: "Not found" });
    }
  } else {
    res.status(400).json({ message: "bad request" });
  }
}
module.exports = login;
