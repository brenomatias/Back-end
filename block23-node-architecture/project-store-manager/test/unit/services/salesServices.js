// Mocha for testing, Chai for assertions and Sinon for mocks, spies, and stubs.

const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

describe('1 - Função getById', async () => {

    describe('* A venda é retornada com sucesso', async () => {
      before(() => {
        const execute = [
          {
            date: '2021-09-09T04:54:29.000Z',
            product_id: 1,
            quantity: 2
          },
          {
            date: '2021-09-09T04:54:54.000Z',
            product_id: 2,
            quantity: 2
          }
        ];
        sinon.stub(salesModel, 'getById').resolves(execute);
      });
      after(() => {
        salesModel.getById.restore();
      });
      it('response = expectedResponse quando a venda é retornada com sucesso', async () => {
        const expectedResponse = [
          {
            date: '2021-09-09T04:54:29.000Z',
            product_id: 1,
            quantity: 2
          },
          {
            date: '2021-09-09T04:54:54.000Z',
            product_id: 2,
            quantity: 2
          }
        ];
        const response = await salesService.getById(1);
        expect(response).eqls(expectedResponse);
      });
    });

  });

//   describe('2 - Função updateSale', async () => {

//     describe('* A venda é atualizada com sucesso', async () => {
//       before(() => {
//         const execute = {changedRows: 1};
//         sinon.stub(salesModel, 'updateSale').resolves(execute);
//       });
//       after(() => {
//         salesModel.updateSale.restore();
//       });
//       it('retorna 1 se a venda é atualizada com sucesso', async () => {
//         const response = await salesService.updateSale([{product_id: 1, quantity: 5}], 1);
//         expect(response).equals(1);
//       });
//     });

//   });