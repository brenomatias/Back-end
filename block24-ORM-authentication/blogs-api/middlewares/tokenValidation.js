const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');

const { JWT_SECRET } = process.env;

module.exports = rescue(async (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  jwt.verify(token, JWT_SECRET, { algorithm: ['HS256'] }, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = decoded.data.email;
    next();
  });
});