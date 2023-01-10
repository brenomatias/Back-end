const anyBlank = (input, key) => !input.every((product) => product[key] !== undefined);
// const anyBlank: (input: any, key: any) => boolean
// retorna boolean 
const anyPositive = (input, key) => !input.every((product) => product[key] > 0);

// req 3
const inputNull = (req, res, next) => {
    const newProducts = req.body;
  
    if (anyBlank(newProducts, 'productId')) { 
        return res.status(400).json({ message: '"productId" is required' }); 
}
   if (anyBlank(newProducts, 'quantity')) {
    return res.status(400).json({ message: '"quantity" is required' });
}
       
  next();
  };
// req 3
const invalidQuantity = (req, res, next) => {
    const newProducts = req.body;
  
    if (anyPositive(newProducts, 'quantity')) {
        return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
    next();
};

module.exports = {
    inputNull,
    invalidQuantity,
};