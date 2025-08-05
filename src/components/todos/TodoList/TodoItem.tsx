import Button from "@/components/buttons/Button";
import Edit from "@/components/icons/Edit";
import Trash from "@/components/icons/Trash";
import { mergeClass } from "@/lib/merge-class";
import type { TodoType } from "@/models/Todo";

export interface TodoItemProps extends TodoType {
  onClick?: (id: number) => void;
}

const TodoItem = ({ completed, id, title, onClick }: TodoItemProps) => {
  return (
    <article className="group flex w-full flex-row justify-between">
      <section
        className="flex grow flex-row items-center"
        onClick={() => onClick?.(id)}
      >
        {/* TODO Make V icon thinner */}
        <input
          id={id.toString()}
          type="checkbox"
          className="size-6.5 accent-accent rounded-xs cursor-pointer"
          checked={completed}
        />
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
