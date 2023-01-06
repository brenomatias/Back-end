const router = require('express').Router();
const {
  createPost, getAllPosts, getPostById, updatePost, deletePost, searchPost,
} = require('../controllers/postsController');

router.post('/', createPost);
router.get('/search', searchPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;