const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    status: { 
        type: String, 
        enum: ["pending", "in-progress", "completed"], 
        default: "pending" 
    },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);
