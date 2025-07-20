import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todoController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware); // All routes here require authentication

router.post("/", createTodo);
router.get("/", getTodos);

export default router;
