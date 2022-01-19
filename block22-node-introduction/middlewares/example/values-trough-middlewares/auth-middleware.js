/* auth-middleware.js */
const validUsers = [
    { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
    { username: 'McRonald', password: 'Senha123Mudar' },
    { username: 'Burger Queen', password: 'Senha123Mudar' },
    { username: 'UpWay', password: 'Senha123Mudar' },
  ];
  
  const authMiddleware = (req, res, next) => {
    const { username, password } = req.headers;
  
    if (!username && !password) {
      return res.status(401).json({ message: 'Username and password can`t be blank!' });
    }
  


    const foundUser = validUsers.find((user) => user.username === username);
  
    if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });
  
    if (!(username === foundUser.username  && password === foundUser.password)) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }


  
    req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.
    
    //O objeto req praticamente aceita qualquer atributo que você quiser definir, só é preciso tomar cuidado para não sobrescrever nenhum dos atributos padrão (req.body, req.headers, req.params, req.query, etc).


    next();
  };
  
  module.exports = authMiddleware;

// https://expressjs.com/en/api.html#req