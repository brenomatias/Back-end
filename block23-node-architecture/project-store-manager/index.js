require('dotenv').config();
// Importações de dependências
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Configurações iniciais
const app = express();
app.use(bodyParser.json());

// Importação de rotas
const productsRouter = require('./routers/productsRouter');
const salesRouter = require('./routers/salesRouter');

// Endpoints do projeto
app.use('/products', productsRouter);
app.use('/sales', salesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});