const Joi = require('joi') //1.1)

const jwt = require('jsonwebtoken'); //1.3)

const { JWT_SECRET } = process.env; //1.3)

//1.1)
const validateBody = (body) => Joi.object({
      /* Utilizamos o Joi para validar o schema do body */

    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),

}).validate(body);
//1.1)


//1.1)
module.exports = async (req, res, next) => {
      /* Construímos um schema do Joi */
  const { error } = validateBody(req.body);

    /* Caso ocorra erro na validação do Joi, passamos esse */
  /* erro para o express, que chamará nosso middleware de erro */
  if (error) return next(error);


//2.1)
/* Se o login for admin e a senha estiver incorreta */
    if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
      /* Criamos um novo objeto de erro */
      const err = new Error('Invalid username or password');
      /* Adicionamos o status `401 Unauthorized` ao erro */
      err.statusCode = 401;
      /* Passmos o erro para o express, para que seja tratado pelo middleware de erro */
      return next(err);
     }
//2.1)

//2.1)
 /* Definimos admin como true se username e password estiverem corretos */
 const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';
//2.1)


  //1.3) 
  const payload = {
    username: req.body.username,
    // admin: false, 1.3
    admin,//2.1
  };
  //1.3)

  //1.3)
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
  //1.3)
   
  //1.3)
  return res.status(200).json({ token });
  //1.3)

  }
//1.1)
