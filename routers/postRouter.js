const postRouter = require("express").Router();
const PostController = require("../controllers/postController");
postRouter.post("/", PostController.createPost);
postRouter.get("/", PostController.getUserPosts);
postRouter.delete("/", PostController.deleteUserPosts);
module.exports = postRouter;
