const express = require("express");
const { createTask, getTasksByProject, updateTask, deleteTask, completeTask } = require("../controllers/taskController");
const router = express.Router();

// Create a new task
router.post("/", createTask);

// Get all tasks for a project
router.get("/:projectId", getTasksByProject);

// Update a task
router.put("/:taskId", updateTask);

// Delete a task
router.delete("/:taskId", deleteTask);

// Mark a task as completed
router.patch("/:taskId/complete", completeTask);

module.exports = router;
