import Button from "@/components/buttons/Button";
import AlertDialog from "@/components/dialogs/AlertDialog";
import DialogFooter from "@/components/dialogs/AlertDialog/DialogFooter";
import DialogHeader from "@/components/dialogs/AlertDialog/DialogHeader";
import DialogTitle from "@/components/dialogs/AlertDialog/DialogTitle";
import { useUpdateTodo } from "@/components/hooks/use-update-todo";
import Input from "@/components/inputs/Input/input";
import { useTodoStore } from "@/components/store/todo-store";
import {
  updateTodoSchema,
  type UpdateTodoSchema
} from "@/components/todos/UpdateTodoTrigger/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

export interface UpdateTodoDialogProps {}

const UpdateTodoDialog = ({}: UpdateTodoDialogProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const existingTodo = useTodoStore((state) =>
    state.todos.find((todo) => id && todo.id === parseInt(id))
  );

  const form = useForm<UpdateTodoSchema>({
    resolver: zodResolver(updateTodoSchema),
    defaultValues: {
      title: existingTodo?.title
    }
  });

  // Create useUpdateTodo
  const updateTodo = useUpdateTodo();

  const onSubmit = async (values: UpdateTodoSchema) => {
    if (existingTodo) {
      await updateTodo.mutateAsync({
        ...existingTodo,
        title: values.title
      });
    }
    navigate("/");
  };

  const cancelSubmission = () => {
    form.reset();
    navigate("/");
  };

  return (
    <AlertDialog>
      <DialogHeader>
        <DialogTitle>Edit Note</DialogTitle>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full"
        >
          <Input
            className="w-full"
            placeholder="Input your note..."
            {...form.register("title")}
          />

          {/* TODO error message */}

          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={cancelSubmission}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!form.formState.isValid}
            >
              Apply
            </Button>
          </DialogFooter>
        </form>
      </DialogHeader>
    </AlertDialog>
  );
};

export default UpdateTodoDialog;
