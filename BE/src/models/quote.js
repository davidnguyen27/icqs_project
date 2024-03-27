"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Quote.init(
    {
      type: DataTypes.STRING,
      scale: DataTypes.STRING,
      product: DataTypes.STRING,
      description: DataTypes.TEXT,
      unit: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      acreage: DataTypes.DOUBLE,
      wage: DataTypes.DOUBLE,
      image: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("image");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(arrayImages) {
          this.setDataValue("image", JSON.stringify(arrayImages));
        },
      },
    },
    {
      sequelize,
      modelName: "Quote",
    }
  );
  return Quote;
};
