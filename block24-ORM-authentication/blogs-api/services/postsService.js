const Sequelize = require('sequelize');
const config = require('../config/config');
const { BlogPost, Category, PostCategory, User } = require('../models');
const standardService = require('./standardService');

const { Op } = Sequelize;
const sequelize = new Sequelize(config.development);

const categoriesValidation = async (categoryIds) => {
  const categories = [];
  await Promise.all(categoryIds.map(async (categoryId) => {
    const category = await Category.findByPk(categoryId);
    if (!category) categories.push(categoryId);
  }));
  return categories.length === 0;
};

const createPost = async (user, title, content, categoryIds) => {
  const { dataValues } = await standardService.getUserByEmail(user);
  const userId = dataValues.id;
  const id = await sequelize.transaction(async (t) => {
    const insertionInfo = await BlogPost.create({
      title,
      content,
      userId,
      published: new Date(),
      updated: new Date(),
    }, { transaction: t });
    
    const postId = insertionInfo.dataValues.id;
    await Promise.all(categoryIds.map(async (categoryId) => {
      await PostCategory.create({ postId, categoryId }, { transaction: t });
    }));
    return postId;
  });
  return { id, userId, title, content };
};

const getAllPosts = async (user) => {
  const userInfo = await standardService.getUserByEmail(user);
  const userId = userInfo.dataValues.id;
  const postsRaw = await BlogPost.findAll({
    where: { userId },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
  const posts = postsRaw.map(({ dataValues }) => (
    { ...dataValues, user: { ...userInfo.dataValues } }
  ));
  return posts;
};

const getPostById = async (user, id) => {
  const userInfo = await standardService.getUserByEmail(user);
  const postRaw = await BlogPost.findOne({
    where: { id },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return postRaw ? { ...postRaw.dataValues, user: { ...userInfo.dataValues } } : null;
};

const updatePost = async (title, content, id) => {
  await BlogPost.update({ title, content, updated: new Date() }, { where: { id } });
  const postsRaw = await BlogPost.findAll({
    where: { id },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return postsRaw[0].dataValues;
};

const deletePost = async (id) => {
  await BlogPost.destroy({
    where: { id },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
};

const searchPost = async (q) => {
  const postsInfo = await BlogPost.findAll({
    where: { [Op.or]: [
        { title: { [Op.substring]: q } },
        { content: { [Op.substring]: q } },
    ] },
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  }).catch((err) => { console.log(err); });
  const posts = postsInfo.map(({ dataValues }) => dataValues);
  return posts;
};

module.exports = {
  createPost,
  categoriesValidation,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};