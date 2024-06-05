// import dotenv from 'dotenv';
import mongoose from "mongoose";

// dotenv.config();

export async function db() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); 
    }
}

// export async function saveUserEmail(email) {
//     try {
//         const user = new User({ email });
//         await user.save();
//         console.log('User email saved successfully');
//     } catch (error) {
//         console.error('Error saving user email:', error);
//     }
// }
