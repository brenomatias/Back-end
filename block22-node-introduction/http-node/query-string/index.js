const express = require('express');
const app = express();


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];



app.get('/recipes', function (req, res) {
 res.json(recipes);
});




// QUERY STRING
// app.get('/recipes/search', function (req, res) {

//     const { name } = req.query;

//     const filteredRecipes = recipes.filter((r) => r.name.includes(name));
    
//     res.status(200).json(filteredRecipes);
//   });
//BUSCA = http://localhost:3001/recipes/search?name=Macarrão



  // QUERY STRING
  app.get('/recipes/search', function (req, res) {
    const { name, maxPrice } = req.query;
    const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
    res.status(200).json(filteredRecipes);
})

// http://localhost:3001/recipes/search?name==Macarrão&maxPrice==4


// ROUTE PARAMETERS
app.get('/recipes/:idParam', function (req, res) {

    const { idParam } = req.params;

    const recipe = recipes.find((r) => r.id === parseInt(idParam));
    // r.id faz referencia ao objeto recipes
  
    if (!recipe) 
    return res.status(404).json({ message: 'Recipe not found!'});
  
    res.status(200).json(recipe);
  });



app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
