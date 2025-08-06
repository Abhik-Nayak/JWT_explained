import express from 'express';
import { register, login, logout, getMe, verifyEmail } from '../controllers/auth.controller';
import { protect } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/verify-email', verifyEmail);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, getMe);
export default router;
