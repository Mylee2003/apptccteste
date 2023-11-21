'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nota', {
      idNota: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      nota_geral: {
        type: Sequelize.DECIMAL
      },
      nota_Alergologia: {
        type: Sequelize.DECIMAL
      },
      nota_Imunologia: {
        type: Sequelize.DECIMAL
      },
      nota_Angiologia: {
        type: Sequelize.DECIMAL
      },
      nota_Cardiologia: {
        type: Sequelize.DECIMAL
      },
      nota_Coloproctologia: {
        type: Sequelize.DECIMAL
      },
      nota_Dermatologia: {
        type: Sequelize.DECIMAL
      },
      nota_Endocrinologia: {
        type: Sequelize.DECIMAL
      },
      nota_Metabologia: {
        type: Sequelize.DECIMAL
      },
      nota_Endoscopia: {
        type: Sequelize.DECIMAL
      },
      nota_Geriatria: {
        type: Sequelize.DECIMAL
      },
      nota_Ginecologia: {
        type: Sequelize.DECIMAL
      },
      nota_Obstetrícia: {
        type: Sequelize.DECIMAL
      },
      nota_Hematologia: {
        type: Sequelize.DECIMAL
      },
      nota_Homeopatia: {
        type: Sequelize.DECIMAL
      },
      nota_Infectologia: {
        type: Sequelize.DECIMAL
      },
      nota_Mastologia: {
        type: Sequelize.DECIMAL
      },
      nota_Nefrologia: {
        type: Sequelize.DECIMAL
      },
      nota_Nutrologia: {
        type: Sequelize.DECIMAL
      },
      nota_Oftalmologia: {
        type: Sequelize.DECIMAL
      },
      nota_Oncologia: {
        type: Sequelize.DECIMAL
      },
      nota_Ortopedia: {
        type: Sequelize.DECIMAL
      },
      nota_Traumatologia: {
        type: Sequelize.DECIMAL
      },
      nota_Otorrinolaringologia: {
        type: Sequelize.DECIMAL
      },
      nota_Patologia: {
        type: Sequelize.DECIMAL
      },
      nota_Pediatria: {
        type: Sequelize.DECIMAL
      },
      nota_Pneumologia: {
        type: Sequelize.DECIMAL
      },
      nota_Psiquiatria: {
        type: Sequelize.DECIMAL
      },
      nota_Radioterapia: {
        type: Sequelize.DECIMAL
      },
      nota_Reumatologia: {
        type: Sequelize.DECIMAL
      },
      nota_Urologia: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nota');
  }
};