const rescue = require('express-rescue');
const Model = require('../models/salesModel');
// tratamento de erros
const Service = require('../services/salesService');
// req 3 - middlewares
const Middlewares = require('../middlewares/salesValidation');
// req 2
const getAll = rescue(async (_req, res) => {
  const sales = await Service.getAll();

  return res.status(200).json(sales);
});
// req 2
const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await Service.getById(id);
  
  return sale.length === 0
    ? res.status(404).json({ message: 'Sale not found' })
    : res.status(200).json(sale);
});
// req 7
const createSale = [
  Middlewares.inputNull,
  Middlewares.invalidQuantity,

rescue(async (req, res) => {
  const newProducts = req.body;
  const itemSold = await Model.createSalesProducts(newProducts);

  return res.status(201).json(itemSold);
}), 
];
// req 8
const updateSale = [Middlewares.inputNull,
  Middlewares.invalidQuantity,
  
  rescue(async (req, res) => {
    const { id } = req.params;
    const newValues = req.body;
    const changedRows = await Service.updateSale(newValues, id);

    const sale = await Service.getById(id);

  return sale.length === 0
    ? res.status(404).json({ message: 'Sale not found' })
    : res.status(200).json(changedRows);
}), 
];
// req 10 and 11
const deleteSale = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await Service.deleteSale(id);
  return !sale
    ? res.status(404).json({ message: 'Sale not found' })
    : res.status(200).json(sale);
});

module.exports = { 
  getAll, 
  getById,
  createSale,
  updateSale,
  deleteSale };