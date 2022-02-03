const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/bookController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/books', userController);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))