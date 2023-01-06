const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/:id', productsController.getById);
router.get('/', productsController.getAll);
router.post('/', productsController.createEntity);
router.put('/:id', productsController.updateEntity);
router.delete('/:id', productsController.deleteEntity);

module.exports = router;