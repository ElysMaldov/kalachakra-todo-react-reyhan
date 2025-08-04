import type { TodoType } from "@/models/Todo";
import { create } from "zustand";

interface TodoState {
  todos: TodoType[];
  initializeTodos: (todos: TodoType[]) => void;
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: number) => TodoType | undefined;

  // TODO CRUD todo
}

export const useTodoStore = create<TodoState>()((set, get) => ({
  todos: [],
  initializeTodos: (todos) => {},
  addTodo: (todo) => {
    set((state) => ({
      todos: [todo, ...state.todos] // Prepend to sort based on latest todo
    }));
  },
  deleteTodo: (id) => {
    const todoToDelete = get().todos.find((todo) => todo.id === id);

    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    }));

    return todoToDelete;
  }
}));
