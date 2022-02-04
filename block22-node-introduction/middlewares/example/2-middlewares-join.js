// um middleware é uma função que realiza o tratamento de uma request e que pode encerrar essa request, ou chamar o próximo middleware

const express = require('express');

const app = express();

const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  ];
  



// app.post('/recipes', (middlewareFunc1) {}, (middlewareFunc2) {}) 
// app.post('/recipes', (middlewareFunc1) {}, (middlewareFunc2) {}) 
// app.post('/recipes', (middlewareFunc1) {}, (middlewareFunc2) {}) 


app.post('/recipes', 
       
     function(req, res, next) {
         const { name } = req.body;

         if(!name || name === '') 
         return res.status(400).json(({message: 'Invalid data!'})); //1

         next(); //2
     },

     function(req, res) { // 3
         const { id, name, price } = req.body;
         recipes.push({id, name, price});

         res.status(201).json({ message: 'Recipe created succesfully'});

});


// 1)Fizemos uma validação que retorna uma resposta para requisição caso seja enviada no body da requisição um nome vazio. O middleware retorna uma resposta com status 400 e um json com uma mensagem dizendo que os dados enviados foram inválidos.

// 2) caso não caia no if , este middleware endereça a requisição para o próximo middleware.

// 3)Esse middleware faz todo o processo de pegar os dados enviados, salvar em um array, e finalmente retornar uma mensagem de sucesso dizendo que o produto foi cadastrado.