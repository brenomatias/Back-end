// starting
// npm init -y
// npm i express body-parser express-rescue

const express = require('express');

const app = express();


// 1) Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', pong)

function pong(req, res) {
    res.json({message:'pong'})
};

// json object = { 
//     message: 'lala',
//     type: 'bebebe'
//      }

app.listen(3000, () => console.log('listening on port 3000'));