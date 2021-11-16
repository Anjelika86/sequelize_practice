const userRouter = require("express").Router();
const postRouter = require("./postRouter");
const { findUser } = require("../middlewares/userMW");
// const UserController = require("../controllers/userController");
const UserController = require("../controllers/userController");
userRouter.get("/", UserController.getUsers);
userRouter.post("/", UserController.createUser);
userRouter.patch("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);
userRouter.use("/:userId/posts", findUser, postRouter);

module.exports = userRouter;
