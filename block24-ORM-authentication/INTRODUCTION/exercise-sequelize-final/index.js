const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const booksController = require('./controllers/booksController');


app.use(bodyParser.json());

app.use('/books', booksController);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on ${PORT}!`));