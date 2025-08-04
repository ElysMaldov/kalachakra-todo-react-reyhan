import { useTodoStore } from "@/components/store/todo-store";
import EmptyTodo from "@/components/todos/TodoList/EmptyTodo";

export interface TodoListProps {}

const TodoList = ({}: TodoListProps) => {
  const todos = useTodoStore((state) => state.todos);

  if (!todos.length) {
    return <EmptyTodo />;
  }

  return <li></li>;
};

export default TodoList;
