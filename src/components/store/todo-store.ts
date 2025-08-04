import type { TodoType } from "@/models/Todo";
import { create } from "zustand";

interface TodoState {
  todos: TodoType[];

  /**
   * Should be the todo's title
   */
  todoQuery: string;
  setTodoQuery: (q: string) => void;

  initializeTodos: (todos: TodoType[]) => void;
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: number) => TodoType | undefined;
  /**
   * Queries based on title
   */
  queryTodo: () => TodoType[];

  // TODO CRUD todo
}

export const useTodoStore = create<TodoState>()((set, get) => ({
  todos: [],

  todoQuery: "",
  setTodoQuery(q) {
    set(() => ({
      todoQuery: q
    }));
  },

  initializeTodos: (todos) => {
    set(() => ({
      todos
    }));
  },
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
  },
  queryTodo: () => {}
}));
