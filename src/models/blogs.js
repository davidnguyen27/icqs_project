'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blogs.init({
    title: DataTypes.STRING,
    user_id: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    role: {type:DataTypes.ENUM,
      values:['ADMIN', 'STAFF']
      }
  }, {
    sequelize,
    modelName: 'Blogs',
  });
  return Blogs;
};