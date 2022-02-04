'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
        // adicionamos um novo campo 'email' como foi feito no model !
            email: {
              type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};

// Ambos os parâmetros são objetos que armazenam dados e operações. O queryInterface é usado pelo sequelize para modificar o banco de dados, seguindo o "dialeto" do banco que estamos utilizando. O objeto Sequelize armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar , string , integer , date etc