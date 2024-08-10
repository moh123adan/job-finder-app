import { Request, Response, NextFunction } from 'express';
function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    res.status(500).send(err.message);
}

export default errorHandler;
