import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from "../controllers/tasks.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(authMiddleware, getTask);
router.route("/createtask").post(authMiddleware, createTask);
router.route("/update/:id").patch(authMiddleware, updateTask);
router.route("/delete/task/:id").delete(authMiddleware, deleteTask);
export default router;
