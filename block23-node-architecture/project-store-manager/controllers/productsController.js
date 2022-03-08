// tratamento de erros
const rescue = require('express-rescue');
// req 3
const Middlewares = require('../middlewares/productsValidation');
const Service = require('../services/productsService');

// req 2
const getAll = rescue(async (_req, res) => {
    const products = await Service.getAll();
    
    return res.status(200).json(products);
});
// req 2  
const getById = rescue(async (req, res) => {
    const { id } = req.params;
    const product = await Service.getById(id);

    return !product
      ? res.status(404).json({ message: 'Product not found' })
      : res.status(200).json(product);
});
// req 4
const createEntity = [Middlewares.nameExists,
  Middlewares.inputNull,
  Middlewares.invalidQuantity,

  rescue(async (req, res) => {
  const { name, quantity } = req.body;
  const newProduct = await Service.createEntity(name, quantity);

  return res.status(201).json(newProduct);
}),
];
// req 5 
const updateEntity = [Middlewares.inputNull,
    Middlewares.invalidQuantity,    

    rescue(async (req, res) => {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const updatedProduct = await Service.updateEntity(id, name, quantity);

    return !updatedProduct
      ? res.status(404).json({ message: 'Product not found' })
      : res.status(200).json({ id, name, quantity });
  }),
];
// req 6
const deleteEntity = rescue(async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await Service.deleteEntity(id);

  return !deletedProduct
  ? res.status(404).json({ message: 'Product not found' })
  : res.status(204).json(deletedProduct);
});

module.exports = { 
  getAll,
  getById,
  createEntity,
  updateEntity,
  deleteEntity,
};