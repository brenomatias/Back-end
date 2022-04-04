const rescue = require('express-rescue');
const postsService = require('../services/postsService');
const tokenValidation = require('../middlewares/tokenValidation');
const postsValidation = require('../middlewares/postsValidation');
const permissionValidation = require('../middlewares/permissionValidation');

const createPost = [
  tokenValidation,
  postsValidation.createPost,
  rescue(async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { user } = req;
    const post = await postsService.createPost(user, title, content, categoryIds);
    res.status(201).json(post);
  }),
];

const getAllPosts = [
  tokenValidation,
  rescue(async (req, res) => {
    const { user } = req;
    const posts = await postsService.getAllPosts(user);
    res.status(200).json(posts);
  }),
];

const getPostById = [
  tokenValidation,
  rescue(async (req, res) => {
    const { user } = req;
    const { id } = req.params;
    const post = await postsService.getPostById(user, id);
    return !post
      ? res.status(404).json({ message: 'Post does not exist' })
      : res.status(200).json(post);
  }),
];

const updatePost = [
  tokenValidation,
  postsValidation.updatePost,
  rescue(async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await postsService.updatePost(title, content, id);
    return !post
      ? res.status(404).json({ message: 'Post does not exist' })
      : res.status(200).json(post);
  }),
];

const deletePost = [
  tokenValidation,
  permissionValidation,
  rescue(async (req, res) => {
    const { id } = req.params;
    await postsService.deletePost(id);
    res.sendStatus(204);
  }),
];

const searchPost = [
  tokenValidation,
  rescue(async (req, res) => {
    const { q } = req.query;
    const posts = await postsService.searchPost(q);
    res.status(200).json(posts);
  }),
];

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};