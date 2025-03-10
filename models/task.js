const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    title: { type: String, required: true },
    description: { type: String },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    dueDate: { type: Date },
    status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
