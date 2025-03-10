const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * @desc Middleware to verify JWT and authenticate users
 */
const authMiddleware = async (req, res, next) => {
    try {
        // Get the token from the request header
        const token = req.header("Authorization");

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "Invalid token. User not found." });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token." });
    }
};

/**
 * @desc Middleware to check if user is an admin
 */
const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
};

/**
 * @desc Middleware to check if user is a project manager
 */
const isProjectManager = (req, res, next) => {
    if (req.user.role !== "manager" && req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Only managers and admins can access this resource." });
    }
    next();
};

module.exports = { authMiddleware, isAdmin, isProjectManager };
