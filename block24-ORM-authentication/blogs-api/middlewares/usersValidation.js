const rescue = require('express-rescue');
const Joi = require('joi');
const standardService = require('../services/standardService');

const createUser = rescue(async (req, res, next) => {
  
  const { displayName, email, password } = req.body;
  const { error } = Joi.object({
    displayName: Joi.string().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
  }).validate({ displayName, email, password });
  
  if (error) return res.status(400).json({ message: error.details[0].message });
  const user = await standardService.getUserByEmail(email);
  if (user) return res.status(409).json({ message: 'User already registered' });
  next();
});

module.exports = {
  createUser,
};