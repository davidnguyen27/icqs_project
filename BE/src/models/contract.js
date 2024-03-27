"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contract.init(
    {
      userId: DataTypes.UUID,
      title: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["PENDING", "REPORT", "BUILDING", "CANCEL", "FINISHED"],
      },
      contract: DataTypes.STRING,
      address: DataTypes.STRING,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      construction: DataTypes.STRING,
      scale: DataTypes.STRING,
      budget: DataTypes.STRING,
      reportTime: DataTypes.DATE,
      buildingTime: DataTypes.DATE,
      cancelTime: DataTypes.DATE,
      finishedTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Contract",
    }
  );
  return Contract;
};
