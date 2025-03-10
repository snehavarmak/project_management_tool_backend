const Project = require("../models/Project");

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const { title, description, teamMembers, startDate, endDate } = req.body;

        const newProject = new Project({
            title,
            description,
            owner: req.user.id,  // Assuming user authentication is in place
            teamMembers,
            startDate,
            endDate
        });

        await newProject.save();
        res.status(201).json({ message: "Project created successfully", project: newProject });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
