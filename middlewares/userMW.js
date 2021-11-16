const { User } = require("../models");
module.exports.findUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const userInstance = await User.findByPk(userId);

    req.userInstance = userInstance;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports.createImage = async (req, res, next) => {
  try {
  } catch (error) {}
};
