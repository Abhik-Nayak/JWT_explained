import { CookieOptions, Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { generateToken } from "../utils/jwt";
import sendEmail from "../utils/sendEmail";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
};

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists && exists.verified)
      return res.status(400).json({ message: "User already exists" });

    if (exists) {
      exists.verificationToken = crypto.randomBytes(32).toString("hex");
      exists.verificationTokenExpiry = Date.now() + 1000 * 60 * 60 * 24;
      const user = await exists.save();
      const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${user.verificationToken}`;

      await sendEmail(
        user.email,
        "Verify your account",
        `<h2>Welcome, ${user.name}</h2><p>Please <a href="${verificationLink}">click here</a> to verify your account.</p>`
      );

      res
        .status(201)
        .json({ user });
    } else {
      const user = await User.create({
        name,
        email,
        password,
        verificationToken: crypto.randomBytes(32).toString("hex"),
        verificationTokenExpiry: Date.now() + 1000 * 60 * 60 * 24, // 24 hrs
      });

      const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${user.verificationToken}`;

      await sendEmail(
        user.email,
        "Verify your account",
        `<h2>Welcome, ${user.name}</h2><p>Please <a href="${verificationLink}">click here</a> to verify your account.</p>`
      );

      res
        .status(201)
        .json({ user });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  const { token } = req.body;
  const user = await User.findOne({
    verificationToken: token,
    verificationTokenExpiry: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }
  user.verified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiry = undefined;
  await user.save();
  res.status(200).json({ message: "Email verified successfully" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user: any = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    res.cookie("token", token, cookieOptions);
    res
      .status(200)
      .json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const logout = (_req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user?.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
