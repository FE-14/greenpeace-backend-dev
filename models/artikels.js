'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artikels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artikels.init({
    title: DataTypes.STRING,
    authorName: DataTypes.STRING,
    postDescription: DataTypes.TEXT,
    postContent: DataTypes.TEXT,
    tags_1: DataTypes.STRING,
    tags_2: DataTypes.STRING,
    tags_3: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    postDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Artikels',
  });
  return Artikels;
};