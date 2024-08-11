import express, { Request, Response, NextFunction } from 'express';
import authControllers from '../controllers/authController';
import authMiddleware from '../../middleware/auth';

const router = express.Router();

router.post('/register', authControllers.register);

router.post('/login', authControllers.login);

router.post('/logout', authControllers.logout);

router.post('/refresh', authControllers.refresh);

router.get('/user', authMiddleware, authControllers.user);

export default router;
