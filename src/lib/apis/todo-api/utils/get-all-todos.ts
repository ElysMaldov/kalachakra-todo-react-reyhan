import { todoAPIInstance } from "@/lib/apis/todo-api/instance";
import { Todo } from "@/models/Todo";
import z from "zod";

export const getAllTodo = async () => {
  const res = await todoAPIInstance.get("/todos");

  const parsedResData = getAllTodoSchema.parse(res.data);

  return parsedResData;
};

export const getAllTodoSchema = z.array(Todo);
