import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const getTasks = async (req: Request, res: Response) => {
  res.send("Get Tasks");
};

const createTask = async (req: Request, res: Response) => {
  res.send("Create Tasks");
};

const getTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  res.send(taskId);
};

const updateTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  res.send(`Update the ${taskId}`);
};

const deleteTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  res.send(`Delete the ${taskId}`);
};

export default { getTasks, createTask, getTask, updateTask, deleteTask };
