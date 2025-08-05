import { useTodoStore } from "@/components/store/todo-store";
import { updateTodo } from "@/lib/apis/todo-api/utils/update-todo";
import { queryClient } from "@/lib/react-query/query-client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

/**
 * Utilize optimistic UI updates with React Query when updating a todo
 */
export const useUpdateTodo = () => {
  const updateTodoStore = useTodoStore((state) => state.updateTodo);
  const revertUpdateTodo = useTodoStore((state) => state.revertUpdateTodo);

  const mutation = useMutation({
    mutationFn: updateTodo,
    onMutate: async (todo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      updateTodoStore(todo);

      return todo;
    },
    onError: (error, _, context) => {
      if (context) {
        revertUpdateTodo(context);
      }

      console.error(error);
      toast.error(`Failed to update todo`);
    },
    onSuccess: () => {
      toast.success("Todo updated");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  });

  return mutation;
};
