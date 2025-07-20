import { Request, Response } from "express";
import { register, login } from "../services/authService";

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await register(username, email, password);
    res.status(201).json(user);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await login(email, password);
    res.json({ token, user });
  } catch (error:any) {
    res.status(401).json({ message: error.message });
  }
};

export { registerUser, loginUser };