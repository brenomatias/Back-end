//npm init -y
// npm i express body-parser express-rescue


// Exercício 1
// 1) Adicione autenticação a todos os endpoints.
// 2) O token deve ser enviado através do header Authorization .
// 3) O token deve ter exatamente 16 caracteres.
// 4) Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .

const express = require('express');
const authMiddleware = require('./auth-middleware');
const crypto = require('crypto');
// const tokeGenerator = require('./token-generation'); nao precisa
const app = express();

app.use(express.json());
app.use(authMiddleware);


app.use((req, res, netx) => {
    res.status(500).send('Algo deu errado');
});




// Exercício 2
// 1)Crie uma rota POST /signup
// 2)A rota deve receber, no body da requisição, os campos email , password , firstName e phone
// 3)Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .

// /Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK e o JSON { token: '<token-aleatorio>' } .
// Para gerar o token você pode utilizar a função randomBytes , do módulo crypto do node, dessa forma:

app.listen(3000, () => console.log('Ouvindo na porta 3000'));

app.POST('/signup', signUpFunc);


function signUpFunc(req, res, next) {
    const { email, password, firstName, phone} = req.body;

    if(!email || !password || !firstName) {
        res.status(401).json({message: 'missing fields'});
    }

    const token = crypto.randomBytes(8).toString('hex');

    res.status(200).json({token});

}