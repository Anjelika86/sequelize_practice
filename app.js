const express = require("express");

const app = express();
const router = require("./routers");
const bodyParser = express.json();
app.use(bodyParser);
app.use(express.static("public"));
app.use("/api", router);
app.use(function (err, req, res, next) {
  res.status(500).send({ errors: [{ message: err.message }] });
});

module.exports = app;
