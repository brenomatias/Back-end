const Model = require('../models/productsModel');
// req 2
const getAll = async () => {
  const products = Model.getAll();

  return products;
};
// req 2
const getById = async (id) => {
  const [product] = await Model.getById(id);

  return product;
};
// req 4
const createEntity = async (name, quantity) => {
  const newProduct = await Model.createEntity(name, quantity);
  const id = newProduct.insertId;

  return { id, name, quantity };
};
// req 4 - middleware
const getByName = async (name) => {
  const knownProduct = await Model.getByName(name);

  return knownProduct.length > 0;
};
// req 5
const updateEntity = async (id, name, quantity) => {
  const updatedProduct = await Model.updateEntity(id, name, quantity);

  return updatedProduct.changedRows;
};
// req 6
const deleteEntity = async (id) => {
  const [product] = await Model.getById(id);

  if (product) await Model.deleteEntity(id);

  return product;
};

module.exports = { 
  getAll, 
  getById, 
  createEntity,
  getByName,
  updateEntity,
  deleteEntity };