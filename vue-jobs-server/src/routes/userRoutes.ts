import express, { Request, Response, NextFunction } from 'express';
import {registerUser, loginUser, logoutUser} from '../controllers/authController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

// router.post('/refresh', authControllers.refresh);

// router.get('/user', authMiddleware, authControllers.user);

export default router;
