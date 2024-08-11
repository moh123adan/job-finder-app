import { Request, Response } from 'express';
import User from '../models/userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

interface RegisterRequest extends Request {
  body: {
    username: string;
    email: string;
    password: string;
    password_confirm: string;
  };
}

interface LoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

async function register(req: RegisterRequest, res: Response): Promise<Response> {
  const { username, email, password, password_confirm } = req.body;

  if (!username || !email || !password || !password_confirm) {
    return res.status(422).json({ message: 'Invalid fields' });
  }

  if (password !== password_confirm) {
    return res.status(422).json({ message: 'Passwords do not match' });
  }

  const userExists = await User.exists({ email }).exec();

  if (userExists) {
    return res.sendStatus(409);
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, username, password: hashedPassword });

    return res.sendStatus(201);
  } catch (error) {
    return res.status(400).json({ message: 'Could not register' });
  }
}

async function login(req: LoginRequest, res: Response): Promise<Response> {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: 'Invalid fields' });
  }

  const user = await User.findOne({ email }).exec();

  if (!user) {
    return res.status(401).json({ message: 'Email or password is incorrect' });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({ message: 'Email or password is incorrect' });
  }

  const accessToken = jwt.sign(
    { id: user.id },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: '1800s' }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: '1d' }
  );

  user.refresh_token = refreshToken;
  await user.save();

  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return res.json({ access_token: accessToken });
}

async function logout(req: Request, res: Response): Promise<Response> {
  const cookies = req.cookies;

  if (!cookies.refresh_token) {
    return res.sendStatus(204);
  }

  const refreshToken = cookies.refresh_token;
  const user = await User.findOne({ refresh_token: refreshToken }).exec();

  if (!user) {
    res.clearCookie('refresh_token', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
    });
    return res.sendStatus(204);
  }

  user.refresh_token = null;
  await user.save();

  res.clearCookie('refresh_token', {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
  });

  return res.sendStatus(204);
}

async function refresh(req: Request, res: Response): Promise<Response> {
  const cookies = req.cookies;
  if (!cookies.refresh_token) {
    return res.sendStatus(401);
  }

  const refreshToken = cookies.refresh_token;

  const user = await User.findOne({ refresh_token: refreshToken }).exec();

  if (!user) {
    return res.sendStatus(403);
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET as string,
    (err, decoded: any) => {
      if (err || user.id !== decoded.id) {
        return res.sendStatus(403);
      }

      const accessToken = jwt.sign(
        { id: decoded.id },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: '1800s' }
      );

      return res.json({ access_token: accessToken });
    }
  );
}

async function user(req: Request, res: Response): Promise<Response> {
  const user = req.user;
  return res.status(200).json(user);
}

export { register, login, logout, refresh, user };
