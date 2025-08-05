import Button from "@/components/buttons/Button";
import AlertDialog from "@/components/dialogs/AlertDialog";
import DialogFooter from "@/components/dialogs/AlertDialog/DialogFooter";
import DialogHeader from "@/components/dialogs/AlertDialog/DialogHeader";
import DialogTitle from "@/components/dialogs/AlertDialog/DialogTitle";
import { useCreateTodo } from "@/components/hooks/use-create-todo";
import Input from "@/components/inputs/Input/input";
import {
  createTodoSchema,
  type CreateTodoSchema
} from "@/components/todos/CreateTodoTrigger/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export interface CreateTodoDialogProps {}

const CreateTodoDialog = ({}: CreateTodoDialogProps) => {
  const navigate = useNavigate();

  const form = useForm<CreateTodoSchema>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      title: ""
    }
  });

  const createTodo = useCreateTodo();

  const onSubmit = async (values: CreateTodoSchema) => {
    await createTodo.mutateAsync(values.title);
    navigate("/");
  };

  const cancelSubmission = () => {
    form.reset();
    navigate("/");
  };

  return (
    <AlertDialog>
      <DialogHeader>
        <DialogTitle>New Note</DialogTitle>

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

export default CreateTodoDialog;
