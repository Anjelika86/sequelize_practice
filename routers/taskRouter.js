const taskRouter = require("express").Router();
const TaskController = require("../controllers/taskController");
taskRouter.post("/:userId", TaskController.createTask);
taskRouter.get("/userId", TaskController.getTasks);

module.exports = taskRouter;
