'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Galery_project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Galery_project.init({
    project_id: DataTypes.INTEGER,
    staff_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    style: DataTypes.ENUM,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Galery_project',
  });
  return Galery_project;
};