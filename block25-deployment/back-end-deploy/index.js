const express = require('express');

const PORT = process.env.PORT || null;

const SERVER_ENV = process.env.SERVER_ENV || null;
// determinar qual é o ambiente
// SERVER_ENV é padrão

const app = express();

app.get('/', (req, res) => {
  if (SERVER_ENV === 'test') {
    return res.status(200).send({message: `Dummy endpoint running on enviroment ${SERVER_ENV} now with CICD`});
  }
  
  return res.status(200).send({message: 'Dummy endpoint'});
});

app.listen(PORT, () => console.log(`Listening on port ${SERVER_ENV}`));

// a porta tem que esta apontada para uma variável de ambiente (.env)
// o heroku seta uma porta aleatoria toda vez que é executado

// heroku identifica que é um app node e executa npm start
// por isso o 'script' npm start e aí o app é buildado


// as variaveis de ambiente estão em 'settings' no app na plataforma 
// do heroku
// config vars

// config:set SERVER_ENV=producao --app APP-NAME
// setar variaveis pelo CLI