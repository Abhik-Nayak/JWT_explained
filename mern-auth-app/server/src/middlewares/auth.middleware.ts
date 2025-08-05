import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecret') as { userId: string };
    req.user = { id: decoded.userId };
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
