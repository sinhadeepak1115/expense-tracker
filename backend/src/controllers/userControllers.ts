import { Request, Response } from "express";

const registerUsers = async (req: Request, res: Response) => {
  res.send("Get Users");
};

const loginUser = async (req: Request, res: Response) => {
  res.send("Login User");
};

const currentUser = async (req: Request, res: Response) => {
  res.send("You are the current user");
};

export default { registerUsers, loginUser, currentUser };
