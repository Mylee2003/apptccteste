'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clinic.belongsToMany(models.Adress, {
        through: 'AdressClinic',
        foreignKey: 'idClinic',
      });
    }
  }
  Clinic.init({
    idClinic: DataTypes.INTEGER,
    nomeCli: DataTypes.STRING,
    telefone: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};