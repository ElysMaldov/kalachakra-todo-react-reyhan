import { useTodoStore } from "@/components/store/todo-store";
import EmptyTodo from "@/components/todos/TodoList/EmptyTodo";
import TodoItem from "@/components/todos/TodoList/TodoItem";
import { getAllTodo } from "@/lib/apis/todo-api/utils/get-all-todos";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export interface TodoListProps {}

const TodoList = ({}: TodoListProps) => {
  // Get data using suspense to show loading state above this TodoList
  const { data } = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: getAllTodo
  });

  const initializeTodos = useTodoStore((state) => state.initializeTodos);

  useEffect(() => {
    if (data) {
      initializeTodos(data);
    }
  }, [data, initializeTodos]);

  const todos = useTodoStore((state) => state.todos);

  if (!data.length) {
    return <EmptyTodo />;
  }

  const todoItems = todos.map((todo) => (
    <li key={todo.id}>
      <TodoItem {...todo} />
    </li>
  ));

  return <ul>{todoItems}</ul>;
};

export default TodoList;
