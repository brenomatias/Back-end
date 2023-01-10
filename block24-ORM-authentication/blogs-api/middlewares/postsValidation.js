const rescue = require('express-rescue');
const Joi = require('joi');
const postsService = require('../services/postsService');

const createPost = rescue(async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
  }).validate({ title, content, categoryIds });
  if (error) return res.status(400).json({ message: error.details[0].message });
  const categoriesExist = await postsService.categoriesValidation(categoryIds);
  if (!categoriesExist) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
});

const updatePost = rescue(async (req, res, next) => {
  const { body: { title, content, categoryIds }, params: { id }, user } = req;
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
  const post = await postsService.getPostById(user, id);
  if (!post || post.user.id !== post.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).validate({ title, content });
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
});

module.exports = {
  createPost,
  updatePost,
};