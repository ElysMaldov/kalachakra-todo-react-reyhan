import { useToggleTodo } from "@/components/hooks/use-toggle-todo";
import { useTodoStore } from "@/components/store/todo-store";
import EmptyTodo from "@/components/todos/TodoList/EmptyTodo";
import TodoItem from "@/components/todos/TodoList/TodoItem";
import { getAllTodo } from "@/lib/apis/todo-api/utils/get-all-todos";
import type { TodoType } from "@/models/Todo";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface TodoListProps {}

const TodoList = ({}: TodoListProps) => {
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
  // Get data using suspense to show loading state above this TodoList
  const { data } = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: getAllTodo
  });

  const initializeTodos = useTodoStore((state) => state.initializeTodos);

  const todoFilter = useTodoStore((state) => state.todoFilter);
  const todoQuery = useTodoStore((state) => state.q);
  const getFilteredTodos = useTodoStore((state) => state.getFilteredTodos);

  const toggleTodo = useToggleTodo();

  useEffect(() => {
    if (data) {
      initializeTodos(data);
      const filteredTodos = getFilteredTodos(todoFilter, todoQuery);
      setFilteredTodos(filteredTodos);
    }
  }, [data, getFilteredTodos, initializeTodos, todoFilter, todoQuery]);

  if (!filteredTodos.length) {
    return <EmptyTodo />;
  }

  const todoItems = filteredTodos.map((todo, i) => {
    const isEnd = i === filteredTodos.length - 1;

    return (
      <li key={todo.id}>
        <TodoItem
          {...todo}
          onClick={async () => await toggleTodo.mutateAsync(todo)}
        />
        {!isEnd && (
          <hr className="border-b-accent/50 my-[17px] border-b border-l-0 border-r-0 border-t-0" />
        )}
      </li>
    );
  });

  return <ul className="w-full max-w-[520px]">{todoItems}</ul>;
};

export default TodoList;
