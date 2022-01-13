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

//GET is used to request data from a specified resource.

// que fizemos foi adicionar uma rota /recipes/:id , ou seja qualquer rota que chegar nesse formato, independente do id ser um número ou string vai cair nessa segunda rota, em vez de cair na rota /recipes


//Para acessar o valor do parâmetro enviado na URL fizemos a desestruturação do atributo id do objeto req.params . Começamos a entender que o objeto req traz informações a respeito da requisição. 

// É importante que o nome do parâmetro nomeado na rota seja igual ao atributo que você está desestruturando. Por exemplo, se na definição da rota estivesse escrito 

// /recipes/:nome teríamos que usar const { nome } = req.params .