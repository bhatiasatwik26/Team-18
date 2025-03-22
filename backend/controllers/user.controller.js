import User from "../model/User.model.js"; // Adjust path if needed
import mongoose from "mongoose";

export const getUserById = async (req, res) => {
    try {
        
        const id = req.params.id;
        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }
        
        const user = await User.findById(id).select("-password"); // Exclude password field
        console.log(user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
};
