const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const login = require("./login");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/API/users", userRouter);

app.post("/login", (req, res) => {
  login(req, res);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
