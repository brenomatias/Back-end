// starting
// npm init -y
// npm i express body-parser express-rescue

const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
// https://www.npmjs.com/package/express-rescue



const simpsonsUtilities = require('./fs-utilities');

const app = express();


// 1) Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', pong);

function pong(req, res) {
    res.json({message:'pong'})
};

// json object = { 
//     message: 'lala',
//     type: 'bebebe'
//      }




//2) Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

app.POST('/hello', (req, res) => {

    const { name } = req.body;

    res.status(200).json({ "message": `Hello, ${name}!` })
});


//3)Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized 

app.POST('/greetings', greetingFunc);

function greetingFunc(req, res) {
    const {name, age} = req.body;


    if(parseInt(age, 10) < 17){
    return res.status(401).json({messsage:"Unauthorized"});
    }

    res.status(200).json({message: `Hello ${name}`})

}


// 4) Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

app.PUT('/users/:name/:age ', putName);

function putName(req, res) {
    const {name, age} = req.params;

    res.status(200).json({message: `Seu nome é ${name} e sua idade é ${age}`})
}


app.listen(3000, () => console.log('listening on port 3000'));



// 6) Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', rescue(callback));

async function callback(req, res) {
     const simpsons = await simpsonsUtilities.getSimpsons();

    res.status(200).json(simpsons);
}



// 7) Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .


app.GET('/simpsons/:id', getSimpPerId);

async function getSimpPerId (req, res) {

    const simpsons = await simpsonsUtilities.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if(!id)
    res.status(404).json({message:'simpson not found'});

    res.status(200).json(simpson)

}