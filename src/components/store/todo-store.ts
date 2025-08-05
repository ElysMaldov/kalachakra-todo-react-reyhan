import { TodoFilters } from "@/lib/types/TodoFilters";
import type { TodoType } from "@/models/Todo";
import { create } from "zustand";

interface TodoState {
  todos: TodoType[];

  /**
   * Should be the todo's title
   */
  q: string;
  setTodoQuery: (q: string) => void;

  initializeTodos: (todos: TodoType[]) => void;
  // TODO CRUD todo
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: number) => TodoType | undefined;

  toggleTodo: (id: number) => void;
  revertToggleTodo: (id: number, completed: boolean) => void;

  todoFilter: TodoFilters;
  setTodoFilter: (filter: TodoFilters) => void;
  getFilteredTodos: (filter: TodoFilters, q: string) => TodoType[];
}

export const useTodoStore = create<TodoState>()((set, get) => ({
  todos: [],

  q: "",
  setTodoQuery(q) {
    set(() => ({
      q: q
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
  queryTodo: () => {
    const q = get().q;

    if (!q || !q.length) return get().todos;

    return get().todos.filter(({ title }) => {
      const regex = new RegExp(q, "i"); // Case insensitive search
      return regex.test(title);
    });
  },

  todoFilter: TodoFilters.ALL,
  setTodoFilter: (filter) => {
    set(() => ({
      todoFilter: filter
    }));
  },
  getFilteredTodos: (filter, q) => {
    if (!q.length) return get().todos;

    return get().todos.filter(({ completed, title }) => {
      // Filter by status
      const doesStatusFitFilter =
        filter === TodoFilters.COMPLETE
          ? completed === true
          : TodoFilters.INCOMPLETE
            ? completed === false
            : true;

      // Queries based on title
      const regex = new RegExp(q, "i"); // Case insensitive search

      const doesTitleMatchQuery = regex.test(title);

      return doesStatusFitFilter && doesTitleMatchQuery;
    });
  },

  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    }));
  },

  revertToggleTodo: (id, completed) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed
            }
          : todo
      )
    }));
  }
}));
