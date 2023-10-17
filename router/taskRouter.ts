import express, { Router } from "express";

import {
  ViewAllTask,
  ViewOneTask,
  createTask,
  deleteTask,
} from "../controller/taskController";

const router = express.Router();

router.route("/create").post(createTask);
router.route("/view-all-task").get(ViewAllTask);
router.route("/:userID/view-one-task").get(ViewOneTask);
router.route("/:userID/delete-one-task").delete(deleteTask);

export default router;
