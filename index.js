const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 8080;

const DB = {
  users: [
    { username: "dan" },
    { username: "dave" },
    { username: "lofranco" },
    { username: "bohol" },
  ],
};

app.get("/", (req, res, next) => {
  return res.json({ message: "Hello to Express API Starter v1.0.0" });
});
app.get("/users", (req, res, next) => {
  return res.json(DB);
});
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
