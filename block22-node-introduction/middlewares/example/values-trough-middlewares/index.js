// Vamos mudar na definição do nosso método de cadastrar uma receita para que ele tenha acesso ao objeto user que foi anexado ao objeto req para poder salvar o respectivo username desse usuário como um atributo do receita.




// ...
app.use(authMiddleware);

// ...

app.post('/recipes', validateName, function (req, res) {

  const { id, name, price } = req.body;


  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação. (authMiddleware)
  

  recipes.push({ id, name, price, chef: username });

  res.status(201).json({ message: 'Recipe created successfully!'});
});
// ...