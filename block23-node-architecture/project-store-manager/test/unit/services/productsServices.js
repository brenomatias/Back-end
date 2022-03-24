// // Mocha for testing, Chai for assertions and Sinon for mocks, spies, and stubs.

const sinon = require('sinon');
const { expect } = require('chai');

const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');

describe('1 - Função getByName', () => {

  describe('* Quando a length do array é maior que 0', () => {
    before(() => {
      const execute = [{id: 1, quantity: 5, name: 'Produto'}];
      sinon.stub(productsModel, 'getByName').resolves(execute);
    });
    after(() => {
      productsModel.getByName.restore();
    });
    it('Retorna true quando a length do array é maior que 0', async () => {
      const response = await productsService.getByName('Produto');
      expect(response).to.be.true;
    });
  });

  describe('* Quando a length do array é igual a 0', () => {
    before(() => {
      const execute = [];
      sinon.stub(productsModel, 'getByName').resolves(execute);
    });
    after(() => {
      productsModel.getByName.restore();
    });
    it('Retorna false quando a length do array é igual a 0', async () => {
      const response = await productsService.getByName('Produto');
      expect(response).to.be.false;
    });
  });

});


describe('2 - Função createEntity', () => {

  describe('* Quando o produto é criado com sucesso', () => {
    before(() => {
      const execute = { insertId: 1 };
      sinon.stub(productsModel, 'createEntity').resolves(execute);
    });

    after(() => {
      productsModel.createEntity.restore();
    });

    it('Retorna expectedResponse quando o produto é criado com sucesso', async () => {
      const expectedResponse = { id: 1, quantity: 5, name: 'Produto' };
      const response = await productsService.createEntity('Produto', 5);
      expect(response).eqls(expectedResponse);
    });
  });

});

describe('3 - Função getAll', () => {

  describe('* Quando os produtos são retornados com sucesso', () => {
    before(() => {
      const execute = [{ id: 1, name: 'Produto', quantity: 5 }, { id: 2, name: 'Produto2', quantity: 5 }];
      sinon.stub(productsModel, 'getAll').resolves(execute);
    });

    after(() => {
      productsModel.getAll.restore();
    });

    it('Retorna expectedResponse quando os produtos são retornados com sucesso', async () => {
      const expectedResponse = [{ id: 1, name: 'Produto', quantity: 5 }, { id: 2, name: 'Produto2', quantity: 5 }];
      const response = await productsService.getAll();
      expect(response).eqls(expectedResponse);
    });
  });

});

describe('4 - Função getById', () => {

  describe('* Quando o produto é retornado com sucesso', () => {
    before(() => {
      const execute = [{ id: 1, name: 'Produto', quantity: 5 }];
      sinon.stub(productsModel, 'getById').resolves(execute);
    });

    after(() => {
      productsModel.getById.restore();
    });

    it('Retorna expectedResponse quando o produto é retornado com sucesso', async () => {
      const expectedResponse = { id: 1, name: 'Produto', quantity: 5 };
      const response = await productsService.getById(1);
      expect(response).eqls(expectedResponse);
    });
  });

});

describe('5 - Função updateEntity', () => {

  describe('* Quando o produto é atualizado com sucesso', () => {
    before(() => {
      const execute = { changedRows: 1 };
      sinon.stub(productsModel, 'updateEntity').resolves(execute);
    });

    after(() => {
      productsModel.updateEntity.restore();
    });

    it('Retorna 1 quando o produto é atualizado com sucesso', async () => {
      const response = await productsService.updateEntity(1, 'Produto', 5);
      expect(response).equals(1);
    });
  });

});


// describe('6 - Função deleteProduct', () => {

//   describe('* Quando o produto não é deletado', () => {
//     before(() => {
//       sinon.stub(productsModel, 'deleteEntity').resolves('');
//       sinon.stub(productsModel, 'getById').resolves([]);
//     });
//     after(() => {
//       productsModel.deleteEntity.restore();
//       productsModel.getById.restore();
//     });
//     it('Retorna undefined quando o produto não é deletado', async () => {
//       const response = await productsService.deleteEntity(1);
//       expect(response).to.be.undefined;
//     });
//   });

//   describe('* Quando o produto é deletado', () => {
//     before(() => {
//       sinon.stub(productsModel, 'deleteEntity').resolves('');
//       sinon.stub(productsModel, 'getById').resolves([{ id: 1, name: 'Produto', quantity: 5 }]);
//     });
//     after(() => {
//       productsModel.deleteProduct.restore();
//       productsModel.getProductById.restore();
//     });
//     it('Retorna expectedResponse quando o produto é deletado', async () => {
//       const expectedResponse = { id: 1, name: 'Produto', quantity: 5 };
//       const response = await productsService.deleteEntity(1);
//       expect(response).eqls(expectedResponse);
//     });
//   });
// });