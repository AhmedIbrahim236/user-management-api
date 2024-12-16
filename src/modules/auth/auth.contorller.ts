import { Request, Response } from "express";
import User from "../user/user.model.js";

const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      res.status(400).json({ status: "fail", message: "Email already exists" });
      return;
    }
    const createdUser = new User({ firstName, lastName, email, password });
    await createdUser.save();
    const token = await createdUser.createToken();
    res.status(201).json({
      status: "success",
      data: { createdUser, token },
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "fail", message: "Server error" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ status: "fail", message: "User not found" });
      return;
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      res.status(401).json({ status: "fail", message: "Invalid password" });
      return;
    }
    const token = await user.createToken();
    res
      .status(200)
      .json({
        status: "success",
        data: { user, token },
        message: "Login successful",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "fail", message: "Server error" });
  }
};

export { register, login };
