import { todoAPIInstance } from "@/lib/apis/todo-api/instance";
import { Todo } from "@/models/Todo";

export const createTodo = async (title: string) => {
  const res = await todoAPIInstance.post("/todos", {
    title
  });

  const parsedResData = Todo.parse(res.data);

  return parsedResData;
};
