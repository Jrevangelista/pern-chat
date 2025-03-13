import express from "express";
import cookieParser from "cookie-parser";
import authroutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messagesRoutes.js";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing application/json
app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
