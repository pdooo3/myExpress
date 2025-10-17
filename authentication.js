const { verifyToken } = require("./jwt");
function authentication(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  if (!verifyToken(token))
    return res.status(403).json({ message: "invalid token" });
  next();
}
module.exports = authentication;
