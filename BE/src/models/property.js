"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init(
    {
      userId: DataTypes.UUID,
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      style: DataTypes.STRING,
      description: DataTypes.TEXT,
      images: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("images");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(arrayImages) {
          this.setDataValue("images", JSON.stringify(arrayImages));
        },
      },
      material: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("material");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(arrayImages) {
          this.setDataValue("material", JSON.stringify(arrayImages));
        },
      },
      combo: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("combo");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(arrayImages) {
          this.setDataValue("combo", JSON.stringify(arrayImages));
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, 
      },
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
