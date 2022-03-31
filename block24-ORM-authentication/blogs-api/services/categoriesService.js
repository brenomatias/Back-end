const { Category } = require('../models');

const createCategory = async (name) => {
  const { insertId } = await Category.create({ name });
  return { id: insertId, name };
};

const getAllCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};