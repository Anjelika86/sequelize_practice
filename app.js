const express = require("express");

const app = express();
const { errorHandler } = require("./middlewares/errorHandlers");
const router = require("./routers");
const bodyParser = express.json();
app.use(bodyParser);
app.use(express.static("public"));
app.use("/api", router);
app.use(errorHandler);

module.exports = app;
