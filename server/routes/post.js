import express from 'express';
import { isLogged } from '../middlewares/auth';

const router = express.Router();

import {
  getAllPosts,
  createPost,
  createReply,
  getAllReplies,
  deletePost,
  deleteReply,
  getAllPostsUser,
  getStats
} from '../controllers/post';

router.get('/getallposts', isLogged, getAllPosts);
router.get('/getmyposts', isLogged, getAllPostsUser);
router.get('/getstats', isLogged, getStats);
router.post('/createpost', isLogged, createPost);
router.post('/createreply', isLogged, createReply);
router.post('/getallreplies', isLogged, getAllReplies);
router.post('/reply', isLogged, deleteReply);
router.post('/post', isLogged, deletePost);

module.exports = router;
