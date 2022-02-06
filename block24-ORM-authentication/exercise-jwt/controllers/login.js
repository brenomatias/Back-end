const Joi = require('joi') //1)

const jwt = require('jsonwebtoken'); //3)

const { JWT_SECRET } = process.env; //3)

//1)
const validateBody = (body) => Joi.object({
      /* Utilizamos o Joi para validar o schema do body */

    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),

}).validate(body);
//1)


//1)
module.exports = async (req, res, next) => {
      /* Construímos um schema do Joi */
  const { error } = validateBody(req.body);

    /* Caso ocorra erro na validação do Joi, passamos esse */
  /* erro para o express, que chamará nosso middleware de erro */
  if (error) return next(error);


  //3) 
  const payload = {
    username: req.body.username,
    admin: false,
  };
  //3)

  //3)
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
  //3)
   
  //3)
  res.status(200).json({ token });
  //3)

  }
//1)
