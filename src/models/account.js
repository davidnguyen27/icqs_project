'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  account.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    role: {type:DataTypes.ENUM,
    values:['ADMIN', 'STAFF', 'USER']
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Nếu muốn giá trị mặc định là true khi tạo mới
    },
  }, {
    sequelize,
    modelName: 'Account',
  });
  return account;
};