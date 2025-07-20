import express from "express";
import dotenv from "dotenv";
import authRoutes from "../routes/authRoutes";
import todoRoutes from "../routes/todoRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

export default app;
