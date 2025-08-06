import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes";
import clearRoutes from "./routes/clear.routes";


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.get('/', (_req, res) => {
  res.send('API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api', clearRoutes);


export default app;
