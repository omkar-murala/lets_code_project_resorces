
import mongoose from "mongoose";

const userEmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true 
    }
}, {
    timestamps: true 
});

export const User = mongoose.models.User || mongoose.model("User", userEmailSchema);
