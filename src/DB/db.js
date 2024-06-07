import mongoose from "mongoose";

export async function db() {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL is not defined in environment variables");
        }

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
