import Button from "@/components/buttons/Button";
import { useDeleteTodo } from "@/components/hooks/use-delete-todo";
import { useToggleTodo } from "@/components/hooks/use-toggle-todo";
import Check from "@/components/icons/Check";
import Trash from "@/components/icons/Trash";
import UpdateTodoTrigger from "@/components/todos/UpdateTodoTrigger";
import { mergeClass } from "@/lib/merge-class";
import type { TodoType } from "@/models/Todo";

export interface TodoItemProps extends TodoType {}

const TodoItem = ({ completed, id, title }: TodoItemProps) => {
  const toggleTodo = useToggleTodo();
  const deleteTodo = useDeleteTodo();

  return (
    <article className="group flex w-full flex-row justify-between">
      <section
        className="flex grow flex-row items-center"
        onClick={async () =>
          // FIXME why does updates happen twice which causes flickering?
          await toggleTodo.mutateAsync({ id, title, completed })
        }
      >
        <div
          className={mergeClass(
            "size-6.5 rounded-xs border-accent flex cursor-pointer items-start justify-center border pt-1",
            completed && "bg-accent"
          )}
        >
          <input
            id={id.toString()}
            type="checkbox"
            className="hidden"
            checked={completed}
            readOnly
          />
          {completed && <Check />}
        </div>
        <label
          htmlFor={id.toString()}
          className={mergeClass(
            "grow cursor-pointer pl-[17px] text-xl font-medium",
            completed && "text-secondary/50 line-through"
          )}
        >
          {title}
        </label>
      </section>

      <section className="hidden flex-row gap-x-2.5 px-2 group-hover:flex">
        <UpdateTodoTrigger id={id} />
        <Button
          variant="ghost"
          size="ghost"
          className="hover:[&_path]:stroke-error"
          onClick={() => deleteTodo.mutate(id)}
        >
          <Trash />
        </Button>
      </section>
    </article>
  );
};

export default TodoItem;
