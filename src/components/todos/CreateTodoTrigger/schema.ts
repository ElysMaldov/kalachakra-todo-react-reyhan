import { Todo } from "@/models/Todo";
import type z from "zod";

export const createTodoSchema = Todo.pick({
  // Use pick here so any validation that Todo has will be carried over here too
  title: true
});

export type CreateTodoSchema = z.infer<typeof createTodoSchema>;
