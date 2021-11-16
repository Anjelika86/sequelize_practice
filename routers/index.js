const express = require("express");
const router = express.Router();
// const UserController = require("../controllers/userController");
const userRouter = require("./userRouter");
// const taskRouter = require("./taskRouter");
// const postRouter = require("./postRouter");
const groupRouter = require("./groupRouter");
router.use("/users", userRouter);
// router.use("/tasks", taskRouter);
// router.use("/posts", postRouter);
router.use("/groups", groupRouter);

module.exports = router;
