'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ratings.init(
    {
      idAvaliacao: DataTypes.INTEGER,
      texto: DataTypes.STRING,
      nota: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
      area: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      media_nota: DataTypes.DECIMAL(5,2),
      fk_idFavoritos: DataTypes.INTEGER,
      fk_idNotas: DataTypes.INTEGER,
      fk_idClinic: DataTypes.INTEGER
      
    },
    {
      sequelize,
      modelName: 'Ratings',
    }
  );
  return Ratings;
};
