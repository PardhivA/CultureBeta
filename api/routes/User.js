const express = require("express");
const { getUser, updateUser, deleteUser, followUser, unFollowUser, getAllUsers } = require("../controllers/UserController");

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser)
router.put('/:id', updateUser)  
router.put('/:id/follow', followUser)  
router.put('/:id/unfollow', unFollowUser)  
router.delete('/:id', deleteUser)
module.exports = router;
