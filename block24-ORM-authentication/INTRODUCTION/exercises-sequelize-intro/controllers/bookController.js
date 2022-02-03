const express = require('express');

const { Books } = require('../models');
// import the model of the db (note: index.js (auto genereated in sequelize init))
// the name must be the same defined in the model (Books.js)
// sequelize.define("Books"
// nome da tabela tambem

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const books = await Books.findAll();

        return res.status(200).json(books);
    } catch(e){
        console.log(e.message);
        res.status(400).json({ message: 'Deu ruim' })
    }
});

module.exports = router;