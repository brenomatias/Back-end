// Aferindo testes com o Chai

// O chai nos ajudará com as asserções, ou seja, ele nos fornece maneiras de dizermos o que queremos testar e então ele validará se o resultado condiz com o esperado.


const { expect } = require('chai');

const calculaSituacao = require('../calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
    // No código acima, estamos chamando nossa função e, logo em seguida, afirmamos que seu retorno, armazenado na constante resposta , deve ser igual a reprovado .
  });
});

// chai -> expect


//Isso seria um outro arquivo exportado e importado aqui como ../calculaSituacao

// function calculaSituacao(media) {
//     if (media > 7) {
//       return 'aprovado';
//     }
  
//     return 'reprovado';
//   }
  
//   module.exports = calculaSituacao;