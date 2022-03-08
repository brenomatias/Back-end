const connection = require('./connection');
// req 2
const getAll = async () => {
  const query = 'SELECT id, name, quantity FROM products';
  const [products] = await connection.execute(query);
  
  return products;
};
// req 2
const getById = async (id) => {
  const query = 'SELECT id, name, quantity FROM products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);

  return product;
};

// req 4 - middleware
const getByName = async (name) => {
  const query = 'SELECT * FROM products WHERE name = ?';
  const [product] = await connection.execute(query, [name]);

  return product;
};
// req 4
const createEntity = async (name, quantity) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';
  const [newProduct] = await connection.execute(query, [name, quantity]);
  
  return newProduct;
};
// req 5
const updateEntity = async (id, name, quantity) => {
  const query = 'UPDATE products SET name = ?, quantity = ? WHERE id = ?';
  const [updatedProduct] = await connection.execute(query, [name, quantity, id]);

  return updatedProduct;
};
// req 6
const deleteEntity = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  
  return connection.execute(query, [id]);
};

module.exports = { 
  getAll, 
  getById, 
  createEntity,
  getByName,
  updateEntity,
  deleteEntity };