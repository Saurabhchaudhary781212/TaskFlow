import dotenv from "dotenv";
import express from 'express';
import app from "./src/app.js";
import connectDB from "./src/db/db.js"
dotenv.config();


// console.log(process.env.MONGODB_URL);

const PORT = process.env.PORT;
connectDB();

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})

// import dotenv from "dotenv";
// import app from "./src/app.js";
// import connectDB from "./src/db/db.js";
// import dns from "dns";

// dns.setDefaultResultOrder("ipv4first");

// dotenv.config();

// const PORT = process.env.PORT || 8000;

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`🚀 Server running on port ${PORT}`);
//     });
// });