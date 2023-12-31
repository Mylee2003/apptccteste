'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Adress, {
        through: 'AdressUser',
        foreignKey: 'idUser',
      });
    }
  }

  User.init(
    {
      idUser: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      sexo: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'),
      dataNasc: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
