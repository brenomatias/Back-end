'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }


    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');

  }
};


// MIGRATIONS:

// Uma migration é uma forma de versionar o schema do banco de dados, ou seja, cada migration conterá um pedaço de código que representa, no conjunto, todas as alterações feitas no histórico do nosso banco de dados

// você escreve um código definindo como um banco de dados deve ser criado, e esse código fica salvo num arquivo na pasta migrations

// Desta maneira, se outra pessoa for alterar este projeto em outro computador, ela pode executar as migrations e atualizar o banco de dados local com as modificações feitas por você!