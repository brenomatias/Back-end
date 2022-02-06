// index.js

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/ping', controllers.ping);
// app.post('/login', controllers.login);
app.get('/users/me', middlewares.auth, controllers.me);

// app.use(middlewares.error);


//4.6)
app.get(
    '/top-secret',
    /* Middleware que valida o JWT e cria `req.user` */
    middlewares.auth,
    /* Middleware que verifica se a pessoa autenticada é admin */
    middlewares.admin,
    /* Controller do endpoint */
    controllers.topSecret
  );
//4.6)