"use strict";
const { Model, BelongsTo } = require("sequelize");
const { isBefore } = require("date-fns");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Task.belongsTo(models.User);
    }
  }
  Task.init(
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true },
      },
      deadline: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
          isValidDate(value) {
            if (this.isBefore(new Date(), new Date(value))) {
              throw new Error("Invalid deadline date");
            }
          },
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        field: "is_done",
        allowNull: false,
        defaultValue: false,
        validate: { notNull: true },
      },
    },
    {
      sequelize,
      modelName: "Task",
      underscored: true,
      tableName: "tasks",
    }
  );
  return Task;
};
