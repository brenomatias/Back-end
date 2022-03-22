const express = require('express');

const PORT = process.env.PORT || null;
const SERVER_ENV = process.env.PORT || null;

const app = express();

app.get('/', (req, res) => {
  if (PORT === 'test') {
    return res.status(200).send({message: `Dummy endpoint running on enviroment ${PORT} now with CICD`});
  }
  
  return res.status(200).send({message: 'Dummy endpoint'});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// a porta tem que esta apontada para uma variável de ambiente (.env)
