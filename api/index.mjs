import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
// import gigRoute from "./routes/gig.js";
// import orderRoute from "./routes/order.js";
// import conversationRoute from "./routes/conversation.js";
// import messageRoute from "./routes/message.js";
// import reviewRoute from "./routes/review.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    // app.use("/api/gigs", gigRoute);
    // app.use("/api/orders", orderRoute);
    // app.use("/api/conversations", conversationRoute);
    // app.use("/api/messages", messageRoute);
    // app.use("/api/reviews", reviewRoute);

app.listen(8800, ()=>{
    console.log("backend is running")
});