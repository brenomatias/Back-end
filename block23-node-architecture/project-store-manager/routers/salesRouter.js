const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');

router.get('/:id', salesController.getById);
router.get('/', salesController.getAll);
router.post('/', salesController.createSale);
router.put('/:id', salesController.updateSale);
router.delete('/:id', salesController.deleteSale);

module.exports = router;