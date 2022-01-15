/* index.js */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

const recipesRouter = require('./recipesRouter');




/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);



// app.all('*', function (req, res) {
//  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });



// Repare no uso de mais um parâmetro na chamada à função app.use . Isso diz ao Express que queremos que aquele middleware (no caso o router) seja executado para qualquer rota que comece com aquele caminho. Repare que, ao registrar uma rota no router, não precisamos repetir a parte do caminho que já passamos para app.use . É por isso que a rota que definimos com router.get('/:id') na verdade se torna acessível através de /recipes/:id .