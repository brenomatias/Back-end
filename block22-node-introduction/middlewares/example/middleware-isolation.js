// ...
// PODEMOS UTILIZAR UM MIDDLEWARE PARA DIVERSAS ROTAS 


function validateName(req, res, next) {
    const { name } = req.body;
    if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});
  
    next();
  };
  




  app.post('/recipes', validateName, function (req, res) {
    const { id, name, price } = req.body;
    recipes.push({ id, name, price});
    res.status(201).json({ message: 'Recipe created successfully!'});
  });
  



  app.put('/recipes/:id', validateName, function (req, res) {
    const { id } = req.params;
    const { name, price } = req.body;
    const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));
  
    if (recipesIndex === -1)
      return res.status(404).json({ message: 'Recipe not found!' });
  
    recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };
  
    res.status(204).end();
  });
  // ...