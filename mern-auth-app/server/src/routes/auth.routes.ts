import express from 'express';
import { register, login, logout, getMe, verifyEmail, requestPasswordReset, resetPassword } from '../controllers/auth.controller';
import { protect } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/verify-email', verifyEmail);
router.post('/login', login);
router.post('/logout',protect, logout);
router.get('/me', protect, getMe);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);
export default router;
