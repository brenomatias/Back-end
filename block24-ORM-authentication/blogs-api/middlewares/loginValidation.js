const rescue = require('express-rescue');
const Joi = require('joi');
const standardService = require('../services/standardService');

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).validate({ email, password });
  if (error) return res.status(400).json({ message: error.details[0].message });
  
  const user = await standardService.getUserByEmail(email);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  next();
});

module.exports = {
  login,
};