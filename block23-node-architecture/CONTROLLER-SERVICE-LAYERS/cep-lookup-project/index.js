// Carregamos as variáveis de ambiente
require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());


const getPong = require('./services/services');
app.get('/ping', getPong);

const getCep = require('./services/services');
app.get('/cep/:cep', getCep )

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));