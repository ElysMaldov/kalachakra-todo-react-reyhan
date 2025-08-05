import { useTodoStore } from "@/components/store/todo-store";
import { toggleTodo } from "@/lib/apis/todo-api/utils/toggle-todo";
import { queryClient } from "@/lib/react-query/query-client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useToggleTodo = () => {
  const toggleTodoStore = useTodoStore((state) => state.toggleTodo);
  const revertToggleTodo = useTodoStore((state) => state.revertToggleTodo);

  const mutation = useMutation({
    mutationFn: toggleTodo,
    onMutate: async (todo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      toggleTodoStore(todo.id);

      return todo;
    },
    onError: (error, _, context) => {
      if (context) {
        revertToggleTodo(context.id, context.completed);
      }

      console.error(error);
      toast.error(`Failed to toggle todo`);
    },
    onSuccess: () => {
      toast.success("Todo toggled");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  });

  return mutation;
};
