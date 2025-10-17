const mysql = require("mysql2");
const connectTODB = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "a",
});
connectTODB.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("OK");
  }
});
module.exports = { connectTODB };
