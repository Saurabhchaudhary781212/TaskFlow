import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }
}

export default connectDB;

// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectDB = async() => {
//     try {
//         console.log("MONGODB_URL from env:", process.env.MONGODB_URL); // debug
//         await mongoose.connect(process.env.MONGODB_URL); // no extra options needed in v7+
//         console.log("✅ Database connected successfully");
//     } catch (error) {
//         console.error("❌ Database connection failed:", error.message);
//         process.exit(1);
//     }
// };

// export default connectDB;