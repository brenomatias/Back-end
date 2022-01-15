// Também é possível encadear middlewares de erro, no mesmo esquema dos outros middlewares, simplesmente colocando-os na sequência em que devem ser executados.


app.use(function logErrors(err, req, res, next) {
    console.error(err.stack);
    /* passa o erro para o próximo middleware */
    next(err);
  });
  
  app.use(function (err, req, res, next) {
    res.status(500);
    res.json({ error: err });
  });

//repare que estamos fazendo next(err) na linha 4. Isso diz ao Express que ele não deve continuar executando nenhum middleware ou rota que não seja de erro. Ou seja, quando passamos qualquer parâmetro para o next , o Express entende que é um erro e deixa de executar middlewares comuns , passando a execução para o próximo middleware de erro registrado para aquela rota, router ou aplicação.