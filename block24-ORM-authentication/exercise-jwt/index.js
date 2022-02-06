// index.js

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/ping', controllers.ping);
// app.post('/login', controllers.login);
app.get('/users/me', middlewares.auth, controllers.me);

// app.use(middlewares.error);