const rescue = require('express-rescue');
const usersService = require('../services/usersService');
const usersValidation = require('../middlewares/usersValidation');
const tokenValidation = require('../middlewares/tokenValidation');
const standardService = require('../services/standardService');

const createUser = [
  usersValidation.createUser,
  rescue(async (req, res) => {
    const { displayName, email, password, image } = req.body;

    await usersService.createUser(displayName, email, password, image);
    
    const token = standardService.generateToken(email);
    return res.status(201).json({ token });
  }),
];

const getAllUsers = [
  tokenValidation,
  rescue(async (_req, res) => {
    const users = await usersService.getAllUsers();
    return res.status(200).json(users);
  }),
];

const getUserById = [
  tokenValidation,
  rescue(async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getUserById(id);
    return !user
      ? res.status(404).json({ message: 'User does not exist' })
      : res.status(200).json(user);
  }),
];

const deleteUser = [
  tokenValidation,
  rescue(async (req, res) => {
    const { user } = req;
    await usersService.deleteUser(user);
    return res.status(204).json();
  }),
];

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};