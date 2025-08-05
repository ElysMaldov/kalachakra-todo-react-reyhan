import { todoAPIInstance } from "@/lib/apis/todo-api/instance";
import { Todo } from "@/models/Todo";

export const deleteTodo = async (id: number) => {
  const res = await todoAPIInstance.delete(`/todos/${id}`);

  const parsedResData = Todo.parse(res.data);

  return parsedResData;
};
