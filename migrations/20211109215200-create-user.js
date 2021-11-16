"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING(64),
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: Sequelize.STRING(64),
        allowNull: false,
        field: "last_name",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(64),
        allowNull: false,
        field: "password_hash",
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: "is_male",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
