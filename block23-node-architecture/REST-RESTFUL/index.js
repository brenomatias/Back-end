const express = require('express');
const bodyParser = require('body-parser');

const router = require('./controllers/controller');

const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});