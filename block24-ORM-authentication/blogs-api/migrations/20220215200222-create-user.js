'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    const std = (type) => ({ type, allowNull: false });

    await queryInterface.createTable('Users', {
      id: { ...std(INTEGER), primaryKey: true, autoIncrement: true },
      displayName: std(STRING),
      email: { ...std(STRING), unique: true },
      password: std(STRING),
      image: { type: STRING },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};