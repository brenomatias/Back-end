const express = require('express');
const { Book } = require('../models')

const router = express.Router();


router.get('/', async (_req, res) => {
  try {
    const books = Book.findAll();
    return res.status(400).json(books);

  } catch(e) {
      console.log(e.message)
      console.log('Deu ruim')
  }

})

module.exports = router;