import Button from "@/components/buttons/Button";
import Edit from "@/components/icons/Edit";
import Trash from "@/components/icons/Trash";
import type { TodoType } from "@/models/Todo";

export interface TodoItemProps extends TodoType {}

const TodoItem = ({ completed, id, title }: TodoItemProps) => {
  return (
    <article className="group flex w-full flex-row justify-between">
      <section className="flex grow flex-row items-center">
        {/* TODO add mark todo logic API */}
        {/* TODO Make V icon thinner */}
        <input
          id={id.toString()}
          type="checkbox"
          className="size-6.5 accent-accent cursor-pointer"
          // checked={completed}
        />
        <label
          htmlFor={id.toString()}
          className="grow cursor-pointer pl-[17px] text-xl font-medium"
        >
          {title}
        </label>
      </section>

      <section className="hidden flex-row gap-x-2.5 px-2 group-hover:flex">
        <Button
          variant="ghost"
          size="ghost"
          className="hover:[&_path]:stroke-accent"
        >
          <Edit />
        </Button>
        <Button
          variant="ghost"
          size="ghost"
          className="hover:[&_path]:stroke-error"
        >
          <Trash />
        </Button>
      </section>
    </article>
  );
};

export default TodoItem;
