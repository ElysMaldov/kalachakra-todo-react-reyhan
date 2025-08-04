import type { TodoType } from "@/models/Todo";
import { create } from "zustand";

interface TodoState {
  todos: TodoType[];
  initializeTodos: (todos: TodoType[]) => void;

  // TODO CRUD todo
}

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  initializeTodos(todos) {}
}));
