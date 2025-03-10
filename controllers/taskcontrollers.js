const Task = require("../models/Task");

// ✅ Create a new task
exports.createTask = async (req, res) => {
    try {
        const { projectId, title, description, assignedTo, dueDate } = req.body;
        
        const newTask = new Task({
            projectId,
            title,
            description,
            assignedTo,
            dueDate,
            status: "pending"  // Default status
        });

        await newTask.save();
        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Get all tasks for a specific project
exports.getTasksByProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const tasks = await Task.find({ projectId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Update a task
exports.updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated", task: updatedTask });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Mark a task as completed
exports.completeTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const completedTask = await Task.findByIdAndUpdate(taskId, { status: "completed" }, { new: true });

        if (!completedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task marked as completed", task: completedTask });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
