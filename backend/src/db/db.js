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
// import mongoose from "mongoose";

// const connectDB = async() => {
//     try {
//         console.log("Trying to connect...");

//         await mongoose.connect(process.env.MONGODB_URL);

//         console.log("✅ Connected to DB");
//     } catch (error) {
//         console.error("❌ Database connection failed:");
//         console.error(error.message);
//         process.exit(1);
//     }
// };

// export default connectDB;