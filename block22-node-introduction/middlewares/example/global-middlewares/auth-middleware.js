//Vamos criar uma forma de autenticar se um determinado usuário pode ter acesso a nossa API de receitas. 

const { use } = require("express/lib/application");

// PARA EXPORTAR PRECISA SER UMA CONSTANTE

const validUser = {
    username: 'MestreCuca',
    password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {

    const { username, password} = req.headers;

    if(!username || !password) {
        return res.status(401).json({message: 'username or password cant be blank'});
    }

    if(!username !== validUser.username || !password !== validUser.password) {
        return res.status(401).json({message: 'Ivalid credentials'})
    }


    next();
};

module.exports = authMiddleWare;

// Caso nenhuma dessas opções seja verdadeira, uma resposta é enviada ao client dizendo que não foi possível realizar a autenticação. Ao enviarmos uma resposta para o client, impedimos que qualquer outro middleware seja executado depois desse. Caso esteja tudo certo com o header, o middleware chama a função next que, basicamente, diz ao Express "ok, terminei aqui, pode chamar o próximo que disse que queria saber de requisições pra essa rota".

// Para enviar parâmetros no header de uma requisição, utiliza-se o formato <chave>:<valor> enquanto no body da requisicão usa-se <chave>=<valor> ou <chave>:=<valor> como já vimos. No exemplo para request do tipo POST e PUT podemos ver como enviar informações no header e no body ao mesmo tempo.