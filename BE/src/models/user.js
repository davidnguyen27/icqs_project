"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(value) {
          const salt = bcrypt.genSaltSync(10);
          this.setDataValue("password", bcrypt.hashSync(value, salt));
        },
      },
      phone: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["ADMIN", "STAFF", "USER"],
      },
      avatar: DataTypes.STRING,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // Nếu muốn giá trị mặc định là true khi tạo mới
      },
    },
    
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
