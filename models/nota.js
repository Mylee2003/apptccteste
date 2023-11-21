'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nota.init({
    idNota: DataTypes.INTEGER,
    nota_geral: DataTypes.DECIMAL,
    nota_Alergologia: DataTypes.DECIMAL,
    nota_Imunologia: DataTypes.DECIMAL,
    nota_Angiologia: DataTypes.DECIMAL,
    nota_Cardiologia: DataTypes.DECIMAL,
    nota_Coloproctologia: DataTypes.DECIMAL,
    nota_Dermatologia: DataTypes.DECIMAL,
    nota_Endocrinologia: DataTypes.DECIMAL,
    nota_Metabologia: DataTypes.DECIMAL,
    nota_Endoscopia: DataTypes.DECIMAL,
    nota_Geriatria: DataTypes.DECIMAL,
    nota_Ginecologia: DataTypes.DECIMAL,
    nota_Obstetrícia: DataTypes.DECIMAL,
    nota_Hematologia: DataTypes.DECIMAL,
    nota_Homeopatia: DataTypes.DECIMAL,
    nota_Infectologia: DataTypes.DECIMAL,
    nota_Mastologia: DataTypes.DECIMAL,
    nota_Nefrologia: DataTypes.DECIMAL,
    nota_Nutrologia: DataTypes.DECIMAL,
    nota_Oftalmologia: DataTypes.DECIMAL,
    nota_Oncologia: DataTypes.DECIMAL,
    nota_Ortopedia: DataTypes.DECIMAL,
    nota_Traumatologia: DataTypes.DECIMAL,
    nota_Otorrinolaringologia: DataTypes.DECIMAL,
    nota_Patologia: DataTypes.DECIMAL,
    nota_Pediatria: DataTypes.DECIMAL,
    nota_Pneumologia: DataTypes.DECIMAL,
    nota_Psiquiatria: DataTypes.DECIMAL,
    nota_Radioterapia: DataTypes.DECIMAL,
    nota_Reumatologia: DataTypes.DECIMAL,
    nota_Urologia: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Nota',
  });
  return Nota;
};