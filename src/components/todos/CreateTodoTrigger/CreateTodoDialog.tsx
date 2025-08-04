import Button from "@/components/buttons/Button";
import AlertDialog from "@/components/dialogs/AlertDialog";
import DialogFooter from "@/components/dialogs/AlertDialog/DialogFooter";
import DialogHeader from "@/components/dialogs/AlertDialog/DialogHeader";
import DialogTitle from "@/components/dialogs/AlertDialog/DialogTitle";
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

  const onSubmit = (values: CreateTodoSchema) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // TODO utilize RQ mutation

    console.log(values);
  };

  const cancelSubmission = () => {
    form.reset();
    navigate(-1);
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
