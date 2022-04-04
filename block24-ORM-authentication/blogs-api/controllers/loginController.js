const rescue = require('express-rescue');
const standardService = require('../services/standardService');

const loginValidation = require('../middlewares/loginValidation');

const login = [
  loginValidation.login,
  rescue(async (req, res) => {
    const { email } = req.body;
    const token = standardService.generateToken(email);
    res.status(200).json({ token });
  }),
];

module.exports = {
  login,
};