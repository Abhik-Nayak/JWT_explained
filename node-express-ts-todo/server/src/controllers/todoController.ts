import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  const userId = req.userId; // extracted from middleware
  try {
    if (userId) {
      const todo = await prisma.todo.create({
        data: {
          title,
          userId,
        },
      });
      res.status(201).json(todo);
    } else {
      res.status(400).json({ message: "user id required." });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const getTodos = async (req: Request, res: Response) => {
  const userId = req.userId; // extracted from middleware
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId,
      },
    });
    res.json(todos);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export { createTodo, getTodos };
