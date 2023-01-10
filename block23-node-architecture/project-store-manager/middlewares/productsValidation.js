const Service = require('../services/productsService');
// req 4
const nameExists = async (req, res, next) => {
    const { name } = req.body;
    const existingName = await Service.getByName(name);
    
    if (existingName) { return res.status(409).json({ message: 'Product already exists' }); } 
    next();
  };
// req 3
const inputNull = (req, res, next) => {
  const { name, quantity } = req.body;

  if (!name) { return res.status(400).json({ message: ' "name" is required ' }); }

  if (!quantity) { return res.status(400).json({ message: ' "quantity" is required ' }); }

  next();
};
// req 3
const invalidQuantity = (req, res, next) => {
  const { name, quantity } = req.body;

  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  if (quantity <= 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = { 
  nameExists,
  inputNull,
  invalidQuantity,
 };