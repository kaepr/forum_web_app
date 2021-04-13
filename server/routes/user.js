import express from 'express';

import { isLogged } from '../middlewares/auth';

const router = express.Router();

import { getUserInfo } from '../controllers/user';

router.get('/getinfo', isLogged, getUserInfo);

module.exports = router;
