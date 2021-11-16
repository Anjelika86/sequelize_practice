const { Post, User } = require("../models");

module.exports.createPost = async (req, res, next) => {
  try {
    const { userInstance, body } = req;
    // const newPost = await Post.create({ userId, ...body });
    // const userInstance = await User.findByPk(userId);
    const newPost = await userInstance.createPost(body);
    res.send({ data: newPost });
  } catch (error) {
    next(error);
  }
};
module.exports.getUserPosts = async (req, res, next) => {
  try {
    const { userInstance } = req;
    // const userWithPosts = await User.findOne({
    //   where: {
    //     id: userId,
    //   },
    //   include: Post,
    // });
    // const user = await User.findByPk(userId);
    const userPosts = await userInstance.getPosts();
    userWithPosts = { userInstance, userPosts };

    res.send({ data: userWithPosts });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteUserPosts = async (req, res, next) => {
  try {
    const { userInstance } = req;
    // const user = await User.findByPk(userId);
    const userPosts = await userInstance.getPosts();
    const deletedtems = await Post.destroy({
      where: {
        userId: userInstance.id,
      },
    });
    res.send({ data: userPosts });
  } catch (error) {
    next(error);
  }
};
