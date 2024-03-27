"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Design.init(
    {
      designImages: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("designImages");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(arrayImages) {
          this.setDataValue("designImages", JSON.stringify(arrayImages));
        },
      },
      description: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("description");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(array) {
          this.setDataValue("description", JSON.stringify(array));
        },
      },
      style: {
        type: DataTypes.ENUM,
        values: ["APARTMENT", "TOWNHOUSE", "VILLAHOUSE"],
      },
    },
    {
      sequelize,
      modelName: "Design",
    }
  );
  return Design;
};
