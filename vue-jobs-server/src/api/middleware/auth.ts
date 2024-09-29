import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
    user?: {
        id?: string;
    };
}

function auth(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
    if (req.user?.id) {
        return next();
    }
    res.sendStatus(401);
}

export default auth;
