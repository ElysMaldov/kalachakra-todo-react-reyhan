import { todoAPIInstance } from "@/lib/apis/todo-api/instance";
import { Todo, type TodoType } from "@/models/Todo";

export const updateTodo = async ({ id, ...todoData }: TodoType) => {
  const res = await todoAPIInstance.put(`/todos/${id}`, todoData);

  const parsedResData = Todo.parse(res.data);

  return parsedResData;
};
