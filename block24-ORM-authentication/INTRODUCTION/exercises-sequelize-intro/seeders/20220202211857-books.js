'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Lord of Rings', 
        author: 'Tolkien',
        pageQuantity: 1000,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      
      },
      
      {
        title: 'Lord of Rssssings', 
        author: 'Tolksssien',
        pageQuantity: 1000,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      
      },
      
      { 
      title: 'Lord', 
      author: 'Teste',
      pageQuantity: 1000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
