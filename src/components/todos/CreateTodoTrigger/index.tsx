import Button from "@/components/buttons/Button";
import Plus from "@/components/icons/Plus";
import { useNavigate } from "react-router";

export interface CreateTodoTriggerProps {}

/**
 * Renders a + button which when clicked will open up a create todo
 * dialog.
 */
const CreateTodoTrigger = ({}: CreateTodoTriggerProps) => {
  const navigate = useNavigate();

  return (
    <Button
      className="shadow-focus-light absolute bottom-8 right-2 rounded-full p-[13px]"
      onClick={() => navigate("/new-todo")}
    >
      <Plus />
    </Button>
  );
};

export default CreateTodoTrigger;
