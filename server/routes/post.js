import express from 'express';
import { isLogged } from '../middlewares/auth';

const router = express.Router();

import { getAllPosts, createPost } from '../controllers/post';

router.get('/getallposts', isLogged, getAllPosts);
router.post('/createpost', isLogged, createPost);

module.exports = router;
