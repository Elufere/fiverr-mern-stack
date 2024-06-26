import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.listen(8800, ()=>{
    console.log("backend is running")
})