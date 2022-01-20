const express = require('express');

const app = express();

const Author = require('./models/author-queries');

app.get('/authors', async (req, res) => {
     
    const authors = await Author.getAll();

    res.status(200).json(authors);
})

app.listen(3000, () => console.log('listening on 3000'));