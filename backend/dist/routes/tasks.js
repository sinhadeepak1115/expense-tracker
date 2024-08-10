"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const taskControllers_1 = __importDefault(require("../controllers/taskControllers"));
const { getTasks, createTask, getTask, updateTask, deleteTask } = taskControllers_1.default;
const router = express_1.default.Router();
router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);
module.exports = router;
