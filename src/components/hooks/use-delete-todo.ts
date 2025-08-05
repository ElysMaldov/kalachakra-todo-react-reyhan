import { useTodoStore } from "@/components/store/todo-store";
import { deleteTodo } from "@/lib/apis/todo-api/utils/delete-todo";
import { queryClient } from "@/lib/react-query/query-client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteTodo = () => {
  const deleteTodoStore = useTodoStore((state) => state.deleteTodo);
  const addTodo = useTodoStore((state) => state.addTodo);

  const mutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const deletedTodo = deleteTodoStore(id);

      return deletedTodo;
    },
    onError: (error, _, context) => {
      if (context) {
        addTodo(context);
      }

      console.error(error);
      toast.error(`Failed to delete todo`);
    },
    onSuccess: () => {
      toast.success("Todo deleted");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  });

  return mutation;
};
