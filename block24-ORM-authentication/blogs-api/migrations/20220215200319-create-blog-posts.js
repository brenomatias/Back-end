'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    const std = (type) => ({ type, allowNull: false });

    await queryInterface.createTable('Categories', {
      id: { ...std(INTEGER), primaryKey: true, autoIncrement: true },
      name: std(STRING),
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};