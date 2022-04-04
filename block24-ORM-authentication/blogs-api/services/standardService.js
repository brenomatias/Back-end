const jwt = require('jsonwebtoken');
const { User } = require('../models');

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const generateToken = (email) => {
  const { JWT_SECRET } = process.env;
  const jwtConfig = { expiresIn: '30d', algorithm: 'HS256' };
  return jwt.sign({ data: { email } }, JWT_SECRET, jwtConfig);
};

module.exports = {
  getUserByEmail,
  generateToken,
};