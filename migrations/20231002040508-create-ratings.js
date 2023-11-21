'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ratings', {
      idAvaliacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      
      texto: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING
      },
      fk_User: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', 
          key: 'idUser' 
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
        
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
      likes: {
        type: Sequelize.INTEGER
      },
      fk_Notas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Nota', 
          key: 'idNota' 
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_Favoritos: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Favoritos', 
          key: 'idFavoritos' 
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      },
      media_nota: {
        type: Sequelize.DECIMAL
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ratings');
  },
};
