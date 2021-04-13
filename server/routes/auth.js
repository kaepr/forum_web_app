import express from 'express';
import { isLogged } from '../middlewares/auth';
import { register, login, logout, isLoggedIn } from '../controllers/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', isLogged, logout);
router.get('/isLoggedIn', isLoggedIn);

module.exports = router;
