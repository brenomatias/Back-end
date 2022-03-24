// Seguindo o TDD, o primeiro passo é escrevermos os casos de testes. Para isso, precisamos nos perguntar o que iremos testar, ou seja, qual a responsabilidade que queremos garantir que está sendo realizada.

// Relembrando o papel do model , ele é responsável pela estrutura dos dados e seu armazenamento, por exemplo, responsável pela comunicação com o banco de dados e pelo mapeamento das entidades.

// Sendo assim, iremos testar se essa comunicação com o BD e suas operações de escrita e leitura estão sendo realizadas da maneira correta.

const sinon = require('sinon');
const { expect } = require('chai');

const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('1 - Função getByName', async () => {

    describe('* Existe um produto com o nome especificado', async () => {
      before(() => {
        const execute = [[{name: 'Produto'}], []];
        sinon.stub(connection, 'execute').resolves(execute);
      });
      after(() => {
        connection.execute.restore();
      });
      it('response.length > 0 quando existe um produto com o nome especificado', async () => {
        const response = await productsModel.getByName('Produto');
        expect(response.length).to.be.greaterThan(0);
      });
    });

  });

  describe('2 - Função createEntity', async () => {

    describe('* O produto é criado com sucesso', async () => {
      before(() => {
        const execute = [{insertId: 1}, undefined];
        sinon.stub(connection, 'execute').resolves(execute);
      });

      after(() => {
        connection.execute.restore();
      });
      
      it('response.insertId = 1 se o produto é inserido com sucesso', async () => {
        const { insertId } = await productsModel.createEntity('Produto', 5);
        expect(insertId).equals(1);
      });
    });

  });

describe('3 - Função getAll', () => {
    describe('Quando não existem produtos no BD', () => {
      before(() => {
        const result = [[], []];
  
        sinon.stub(connection, 'execute').resolves(result);
      });
  
      after(() => {
        connection.execute.restore();
      });
  
      it('retorna um array vazio', async () => {
        const products = await productsModel.getAll();
  
        expect(products).to.be.an('array');
        expect(products).to.be.empty;
      });
    });
  });


  describe('4 - Função getById', async () => {

    describe('* O produto é retornado com sucesso', async () => {

      before(() => {
        const execute = [[{ id: 1, name: 'Produto', quantity: 5 }], []];
        sinon.stub(connection, 'execute').resolves(execute);
      });

      after(() => {
        connection.execute.restore();
      });

      it('response = expectedResponse quando os produto é encontrado com sucesso', async () => {
        const expectedResponse = [{ id: 1, name: 'Produto', quantity: 5 }];
        const response = await productsModel.getById(1);
        expect(response).eqls(expectedResponse);
      });
    });

  });

  describe('5 - Função updateEntity', async () => {

    describe('* O produto é atualizado com sucesso', async () => {
      before(() => {
        const execute = [{ changedRows: 1 }, undefined];
        sinon.stub(connection, 'execute').resolves(execute);
      });
      after(() => {
        connection.execute.restore();
      });
      it('response = expectedResponse quando os produto é atualizado com sucesso', async () => {
        const expectedResponse = { changedRows: 1 };
        const response = await productsModel.updateEntity(1, 'Produto', 5);
        expect(response).eqls(expectedResponse);
      });
    });

  });


  // describe('6 - Função deleteEntity', async () => {

  //   describe('* O produto é deletado com sucesso', async () => {
  //     before(() => {
  //       const execute = [{ affectedRows: 1 }, undefined];
  //       sinon.stub(connection, 'execute').resolves(execute);
  //     });

  //     after(() => {
  //       connection.execute.restore();
  //     });

  //     it('response = undefined quando a função é chamada e o produto é deletado com sucesso', async () => {
  //       const response = await productsModel.deleteEntity(1);
  //       expect(response).to.be.undefined;
  //     });
  //   });

  // });
