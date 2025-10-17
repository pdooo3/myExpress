const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

function createNewJWT(object) {
  const token = jwt.sign(object, secretKey, { expiresIn: "1h" });
  return token;
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null;
  }
}

function decodeToken(token) {
  if (verifyToken(token)) {
    return jwt.decode(token);
  }
  return { err: "token not verifyid" };
}
module.exports = { createNewJWT, verifyToken /*, decodeToken*/ };
