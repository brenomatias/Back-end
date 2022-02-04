/* errorHandlerExample.js */
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();




// Para adicionarmos os express-rescue , basta passarmos o nosso middleware como parâmetro para a função rescue que importamos do módulo

app.get( '/:fileName',

  rescue(async (req, res) => {

    const file = await fs.readFile(`./${req.params.fileName}`);
    // dados vindos de um item exterior(banco de dados/ arquivos)

    res.send(file.toString('utf-8'));
  })
);



app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });


});

app.listen(3002);