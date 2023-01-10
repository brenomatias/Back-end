const router = require('express').Router();
const {
  createUser, getAllUsers, getUserById, deleteUser,
} = require('../controllers/usersController');

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/me', deleteUser);

module.exports = router;