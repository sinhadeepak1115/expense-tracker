import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
  res.send("Get Users");
};

export default getUsers;
