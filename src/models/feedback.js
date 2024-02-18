'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeedBack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FeedBack.init({
    project_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    time: DataTypes.DATE,
    rating: {
      type: DataTypes.ENUM,
      values: ['5', '4', '3', '2', '1']
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Nếu muốn giá trị mặc định là true khi tạo mới
    },
  }, {
    sequelize,
    modelName: 'FeedBack',
  });
  return FeedBack;
};