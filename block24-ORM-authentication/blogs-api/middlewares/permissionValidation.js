const rescue = require('express-rescue');
const postsService = require('../services/postsService');

module.exports = rescue(async (req, res, next) => {
  const { params: { id }, user } = req;
  const post = await postsService.getPostById(user, id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (post.user.id !== post.userId) return res.status(401).json({ message: 'Unauthorized user' });
  next();
});