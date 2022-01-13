const express = require('express'); // import express

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}


// CRIANDO UMA APLICAÇÃO COM express

// 1)npm init -y

// 2)install Express - npm i express

// 3) crie um arquivo index.js . Como qualquer aplicação Node.js, nossa API precisa de um entrypoint, ou seja, um ponto de partida. Por convenção, vamos utilizar o index.js .




// 1) Criar uma nova aplicação Express;

// 2)Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;

// 3)Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;

// 4)Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".



// in package.json:

// "scripts": {
//     ...,
//     "start": "node index.js"
//   }