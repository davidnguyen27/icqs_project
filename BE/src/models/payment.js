"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      user_id: DataTypes.UUID,
      money: DataTypes.DOUBLE,
      title: DataTypes.STRING,
      paymentImages: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("paymentImages");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(arrayImages) {
          this.setDataValue("paymentImages", JSON.stringify(arrayImages));
        },
      },
      status: {
        type: DataTypes.ENUM,
        values: ["PENDING", "CANCEL", "FINISHED"],
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
