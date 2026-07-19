import dotenv from "dotenv";
import express from 'express';
import app from "./src/app.js";
import connectDB from "./src/db/db.js"
dotenv.config();


console.log(process.env.MONGODB_URL);

const PORT = process.env.PORT;
connectDB();

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})

// import express from 'express';
// import connectDB from './src/db/db.js';

// const app = express();

// connectDB(); // DB connect karo

// app.listen(5000, () => {
//     console.log("🚀 Server running on port 5000");
// });