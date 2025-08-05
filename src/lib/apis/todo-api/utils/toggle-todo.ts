import { todoAPIInstance } from "@/lib/apis/todo-api/instance";
import { Todo, type TodoType } from "@/models/Todo";

export const toggleTodo = async ({ id, completed }: TodoType) => {
  const res = await todoAPIInstance.put(`/todos/${id}`, {
    completed: !completed
  });

  const parsedResData = Todo.parse(res.data);

  return parsedResData;
};
