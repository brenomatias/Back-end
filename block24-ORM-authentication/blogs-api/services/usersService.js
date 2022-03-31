const { User, BlogPost } = require('../models');

const createUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });
};

const getAllUsers = async () => User.findAll();

const getUserById = async (id) => User.findOne({ where: { id } });

const deleteUser = async (email) => {
  const { id } = await User.findOne({ where: { email } });
  await BlogPost.destroy({ where: { userId: id } });
  await User.destroy({ where: { email } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};