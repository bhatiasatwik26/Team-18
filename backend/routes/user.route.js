import express from "express";
import { getUserById } from "../controllers/user.controller.js"; // Import controller

const router = express.Router();

// Route to get user by ID
router.get("/:id", getUserById);

export default router;
