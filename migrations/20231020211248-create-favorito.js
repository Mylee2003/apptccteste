'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favoritos', {
      idFavoritos: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     favoritos: {
        type: Sequelize.INTEGER
      },
      fk_Clinica: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clinics', 
          key: 'idClinic' 
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_Usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', 
          key: 'idUser' 
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
        
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
    await queryInterface.dropTable('Favoritos');
  }
};