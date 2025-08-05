import { Todo } from "@/models/Todo";
import type z from "zod";

export const updateTodoSchema = Todo.pick({
  // Use pick here so any validation that Todo has will be carried over here too
  title: true
});

export type UpdateTodoSchema = z.infer<typeof updateTodoSchema>;
