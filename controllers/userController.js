const { User } = require("../models");

module.exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.send(users);
  } catch (error) {
    next(error);
  }
};
module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const newUser = await User.create(body);
    console.log(body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
};
module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const [updatedRows, [updatedUser]] = await User.update(body, {
      where: { id: id },
      returning: true,
    });
    // const temp = updatedUser.get();
    // delete temp.password;
    updatedUser.password = undefined;

    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
};
module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const foundUser = await User.findByPk(id);
    await foundUser.destroy();
    res.send(foundUser);
  } catch (error) {
    next(error);
  }
};
