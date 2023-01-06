// Mocha for testing, Chai for assertions and Sinon for mocks, spies, and stubs.

// const sinon = require('sinon');
// const { expect } = require('chai');

// const salesModel = require('../../../models/salesModel');
// const connection = require('../../../models/connection');

// describe('1 - Função createSale', async () => {

//   describe('* A venda é criada com sucesso', async () => {

//     before(() => {
//       const execute = [{insertId: 1}, undefined];
//       sinon.stub(connection, 'execute').resolves(execute);
//     });

//     after(() => {
//       connection.execute.restore();
//     });

//     it('response.insertId = 1 se a venda é criada com sucesso', async () => {
//       const { insertId } = await salesModel.createSale([{ product_id: 1 }]);
//       expect(insertId).equals(1);
//     });
//   });

// });

// describe('2 - Função createSalesProducts', async () => {

//   describe('* Os produtos são inseridos com sucesso na venda', async () => {
//     before(() => {
//       const execute = [{ affectedRows: 1 }, undefined];
//       sinon.stub(connection, 'execute').resolves(execute);
//     });
//     after(() => {
//       connection.execute.restore();
//     });
//     it('response = undefined quando a função é chamada e os produtos são inseridos com sucesso', async () => {
//       const response = await salesModel.createSalesProducts([{ product_id: 1, quantity: 5 }, { product_id: 2, quantity: 5 }], 1);
//       expect(response).to.be.undefined;
//     });
//   });

// });

// describe('3 - Função getAll', async () => {

//   describe('* As vendas são retornadas com sucesso', async () => {
//     before(() => {
//       const execute = [[
//         {
//           saleId: 1,
//           date: '2021-09-09T04:54:29.000Z',
//           product_id: 1,
//           quantity: 2
//         },
//         {
//           saleId: 1,
//           date: '2021-09-09T04:54:54.000Z',
//           product_id: 2,
//           quantity: 2
//         }
//       ], []];
//       sinon.stub(connection, 'execute').resolves(execute);
//     });
//     after(() => {
//       connection.execute.restore();
//     });
//     it('response = expectedResponse quando as vendas são retornadas com sucesso', async () => {
//       const expectedResponse = [
//         {
//           saleId: 1,
//           date: '2021-09-09T04:54:29.000Z',
//           product_id: 1,
//           quantity: 2
//         },
//         {
//           saleId: 1,
//           date: '2021-09-09T04:54:54.000Z',
//           product_id: 2,
//           quantity: 2
//         }
//       ];
//       const response = await salesModel.getAll();
//       expect(response).eqls(expectedResponse);
//     });
//   });

// });


// describe('4 - Função getById', async () => {

//   describe('* A venda é retornada com sucesso', async () => {
//     before(() => {
//       const execute = [[
//         {
//           date: '2021-09-09T04:54:29.000Z',
//           product_id: 1,
//           quantity: 2
//         },
//         {
//           date: '2021-09-09T04:54:54.000Z',
//           product_id: 2,
//           quantity: 2
//         }
//       ], []];
//       sinon.stub(connection, 'execute').resolves(execute);
//     });
//     after(() => {
//       connection.execute.restore();
//     });
//     it('response = expectedResponse quando a venda é retornada com sucesso', async () => {
//       const expectedResponse =   [
//         {
//           date: '2021-09-09T04:54:29.000Z',
//           product_id: 1,
//           quantity: 2
//         },
//         {
//           date: '2021-09-09T04:54:54.000Z',
//           product_id: 2,
//           quantity: 2
//         }
//       ];
//       const response = await salesModel.getById(1);
//       expect(response).eqls(expectedResponse);
//     });
//   });

// });

// describe('6 - Função updateSale', async () => {

//   describe('* A venda é atualizada com sucesso', async () => {
//     before(() => {
//       const execute = [{changedRows: 1}, undefined];
//       sinon.stub(connection, 'execute').resolves(execute);
//     });
//     after(() => {
//       connection.execute.restore();
//     });
//     it('response.changedRows = 1 se a venda é atualizada com sucesso', async () => {
//       const { changedRows } = await salesModel.updateSale([{product_id: 1, quantity: 5}], 1);
//       expect(changedRows).equals(1);
//     });
//   });

// });