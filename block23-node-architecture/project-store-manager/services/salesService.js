const Model = require('../models/salesModel');
// req 2
const getAll = async () => {
    const sales = await Model.getAll();

    return sales;
};
// req 2
const getById = async (id) => {
    const sale = await Model.getById(id);
    
    return sale;
};
// req 7
// const createSale = async (newProducts) => {
//     const productsData = await Model.createSalesProducts(newProducts);
    
//     return { productsData };
//   };

// req 8
const updateSale = async (newValues, id) => {
    const updateData = await Model.updateSale(newValues, id);
    return updateData;
  };
// req 10 and 11
const deleteSale = async (id) => {
    const sale = await Model.getById(id);
    if (!sale.length) return 0;
    await Model.deleteSale(id, sale);
    return sale;
  };
  
module.exports = { 
    getAll, 
    getById,
    updateSale,
    deleteSale,
 };