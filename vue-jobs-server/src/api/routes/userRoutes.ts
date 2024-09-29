import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/authController';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

// router.post('/refresh', authControllers.refresh);

// router.get('/user', authMiddleware, authControllers.user);

export default router;
