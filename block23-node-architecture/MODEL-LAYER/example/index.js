const express = require('express');

const app = express();

const Author = require('./models/author-queries');



app.get('/authors', async (req, res) => {
     
    const authors = await Author.getAll();

    res.status(200).json(authors);
});



app.get('/authors/:id', async (req, res) => {

    const { id } = req.params;
     
    const author = await Author.findById(id);

    if(!author) return res.status(404).json({message: 'not found'});

    res.status(200).json(author);

})

app.listen(3000, () => console.log('listening on 3000'));