import { Request, Response } from "express";
import User from "../models/user.model";

export const deleteAllExistUser = async (req: Request, res: Response) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: "User DB clear." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
