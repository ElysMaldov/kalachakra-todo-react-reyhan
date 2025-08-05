import Button from "@/components/buttons/Button";
import Edit from "@/components/icons/Edit";
import type { TodoType } from "@/models/Todo";
import { useNavigate } from "react-router";

export interface UpdateTodoTriggerProps extends Pick<TodoType, "id"> {}

/**
 * Renders a + button which when clicked will open up a create todo
 * dialog.
 */
const UpdateTodoTrigger = ({ id }: UpdateTodoTriggerProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="ghost"
      className="hover:[&_path]:stroke-accent"
      onClick={() => navigate(`/update-todo/${id}`)}
    >
      <Edit />
    </Button>
  );
};

export default UpdateTodoTrigger;
