const app = require('express')();
const bodyParser = require('body-parser').json();
const routes = require('./routes/routesPackage');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(bodyParser);

app.use('/user', routes.usersRouter);
app.use('/login', routes.loginRouter);
app.use('/categories', routes.categoriesRouter);
app.use('/post', routes.postsRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));