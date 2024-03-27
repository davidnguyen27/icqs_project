"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Contracts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      title: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM([
          "PENDING",
          "REPORT",
          "BUILDING",
          "CANCEL",
          "FINISHED",
        ]),
        defaultValue: "PENDING",
      },
      contract: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      construction: {
        type: Sequelize.STRING,
      },
      scale: {
        type: Sequelize.STRING,
      },
      budget: {
        type: Sequelize.STRING,
      },
      reportTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      buildingTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cancelTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      finishedTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Contracts");
  },
};
