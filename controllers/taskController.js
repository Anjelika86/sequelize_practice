const { Task } = require("../models");

module.exports.createTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
    const newTask = await Task.create({ ...body, userId });
    res.send(newTask);
  } catch (error) {
    next(error);
  }
};

module.exports.getTasks = async (req, res, next) => {
  try {
    const tasks = Task.findAll();
    res.send(tasks);
  } catch (error) {
    next(error);
  }
};
