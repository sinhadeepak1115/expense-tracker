import express from "express";
import taskControllers from "../controllers/taskControllers";

const { getTasks, createTask, getTask, updateTask, deleteTask } =
  taskControllers;

const router = express.Router();

router.route("/").get(getTasks).post(createTask);

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

export = router;
