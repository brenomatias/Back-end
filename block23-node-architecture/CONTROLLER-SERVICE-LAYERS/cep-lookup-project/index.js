// Carregamos as variáveis de ambiente
require('dotenv').config();

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json())

// CRIA MODEL E QUERIES
// VAI PARA SERVICES PARA REGRAS DE NEGÓCIO/RESTRIÇÕES
// DEPOIS CONTROLLER TRATAR AS REQS
// (MIDDLEWARES DE ERROR)
// IMPLEMENTAR CONTROLLER NO INDEX.JS

// (IMPLEMENTAÇÃO DO CONTROLER)
const CepController = require('./controllers/controller');
const errorMiddleware = require('./middlewares/error');

app.get('/cep/:cep', CepController.findAddressByCep);

app.post('/cep', CepController.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));