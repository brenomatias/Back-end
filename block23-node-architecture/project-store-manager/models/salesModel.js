const connection = require('./connection');
// req 2
const getAll = async () => {
  const query = `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
  FROM sales AS s
  JOIN sales_products AS sp
  ON s.id = sp.sale_id`;
  const [sales] = await connection.execute(query);

  return sales;
};
// req 3
const getById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM sales AS s
    JOIN sales_products AS sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?`,
    [id],
  );
  
  return sale;
};
// req 7
const createSale = async () => {
  const [saleId] = await connection.execute(
  'INSERT sales VALUES();',
);
return saleId.insertId;
};
// req 7
const createSalesProducts = async (newProducts) => {
  const saleId = await createSale();

  await newProducts.forEach(async (product) => {
    await connection.execute(
      `INSERT sales_products (sale_id, product_id, quantity)
        VALUES (?, ?, ? );`,
      [saleId, product.productId, product.quantity],
    );
  });

 return {
  id: parseInt(saleId, 10),
  itemsSold: newProducts,
};
};
// req 8
const updateSale = async (newProducts, id) => {
  await newProducts.forEach(async (product) => {
    await connection.execute(
      `UPDATE sales_products
        SET product_id = ?, quantity = ?
        WHERE sale_id = ?;`,
      [product.productId, product.quantity, id],
    );
  });
return {
  saleId: parseInt(id, 10),
  itemUpdated: newProducts,
};
};
// product will be the return value of newProducts
// req 10 and 11
const deleteSale = async (id, sale) => {
  const salesProductsQuery = 'DELETE FROM sales_products WHERE sale_id = ?';
  
  const salesQuery = 'DELETE FROM sales WHERE id = ?';

  const quantityQuery = 'UPDATE products SET quantity = quantity + ? WHERE id = ?';

  await connection.execute(salesProductsQuery, [id]);
  await connection.execute(salesQuery, [id]);

  await Promise.all(sale.map(async (product) => {
    await connection.execute(quantityQuery, [product.quantity, product.product_id]);
  }));
};
module.exports = { 
  getAll, 
  getById,
  createSale,
  createSalesProducts,
  updateSale,
  deleteSale };
  
// sale_id, product_id, quantity)
// é substituido por 
// [saleId, product.productId, product.quantity] (futuros novos valores)
// através de 
// VALUES (?, ?, ? )