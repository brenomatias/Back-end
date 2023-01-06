const rescue = require('express-rescue');
const categoriesService = require('../services/categoriesService');
const tokenValidation = require('../middlewares/tokenValidation');

const createCategory = [
  tokenValidation,
  rescue(async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const category = await categoriesService.createCategory(name);
    return res.status(201).json(category);
  }),
];

const getAllCategories = [
  tokenValidation,
  rescue(async (_req, res) => {
    const categories = await categoriesService.getAllCategories();
    return res.status(200).json(categories);
  }),
];

module.exports = {
  createCategory,
  getAllCategories,
};