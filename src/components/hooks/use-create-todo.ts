import { useTodoStore } from "@/components/store/todo-store";
import { createTodo } from "@/lib/apis/todo-api/utils/create-todo";
import { createOptimisticTodo } from "@/lib/optimistic-data/create-optimistic-todo";
import { queryClient } from "@/lib/react-query/query-client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

/**
 * Utilize optimistic UI updates with React Query when creating a todo
 */
export const useCreateTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const mutation = useMutation({
    mutationFn: createTodo,
    onMutate: async (item) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      // Add to local cache first even before mutation finishes
      const newTodo = createOptimisticTodo(item);

      addTodo(newTodo);

      return newTodo;
    },
    onError: (error, _, context) => {
      // Revert addition if failed
      if (context) {
        deleteTodo(context.id);
      }

      console.error(error);
      toast.error(`Failed to add todo: ${context?.title}`);
    },
    onSuccess: () => {
      toast.success("Todo created!");
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // Sync with DB after a while
    }
  });

  return mutation;
};
