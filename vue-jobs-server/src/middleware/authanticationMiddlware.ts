import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User, { IUser } from '../models/userModel';


interface AuthenticatedRequest extends Request {
    user?: Partial<IUser>;
}

function authentication(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization || req.headers.Authorization as string;

    if (authHeader?.startsWith('Bearer')) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, async (err, decoded: any) => {
            if (err) {
                req.user = {};
                return next();
            }
            try {
                const user = await User.findById(decoded.id).select({ password: 0, refresh_token: 0 }).exec();

                if (user) {
                    req.user = user.toObject({ getters: true }) as Partial<IUser>;
                } else {
                    req.user = {};
                }

                next();
            } catch (error) {
                req.user = {};
                next();
            }
        });
    } else {
        req.user = {};
        next();
    }
}

export default authentication;
