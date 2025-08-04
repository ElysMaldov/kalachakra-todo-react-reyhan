import type { TodoType } from "@/models/Todo";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890", 9); // Always generate numbers

/**
 * Creates a Todo data similar to Todo schema
 */
export const createOptimisticTodo = (title: string): TodoType => {
  const newTodo: TodoType = {
    completed: false,
    title,
    id: parseInt(nanoid())
  };

  return newTodo;
};
