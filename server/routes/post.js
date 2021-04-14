import express from 'express';
import { isLogged } from '../middlewares/auth';

const router = express.Router();

import {
  getAllPosts,
  createPost,
  createReply,
  getAllReplies
} from '../controllers/post';

router.get('/getallposts', isLogged, getAllPosts);
router.post('/createpost', isLogged, createPost);
router.post('/createreply', isLogged, createReply);
router.post('/getallreplies', isLogged, getAllReplies);

module.exports = router;
