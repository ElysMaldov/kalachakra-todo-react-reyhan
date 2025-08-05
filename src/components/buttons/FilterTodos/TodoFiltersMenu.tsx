import { useTodoStore } from "@/components/store/todo-store";
import { mergeClass } from "@/lib/merge-class";
import { TodoFilters } from "@/lib/types/TodoFilters";

export interface TodoFiltersMenuProps {}

const TodoFiltersMenu = ({}: TodoFiltersMenuProps) => {
  const filter = useTodoStore((state) => state.todoFilter);
  const setTodoFilter = useTodoStore((state) => state.setTodoFilter);

  const filterItems = Object.values(TodoFilters).map((filterLabel) => {
    const isActive = filter === filterLabel;

    return (
      <li
        key={filterLabel}
        className={mergeClass(
          "cursor-pointer px-[5px] py-1",
          isActive && "bg-accent/20"
        )}
        onClick={() => setTodoFilter(filterLabel)}
      >
        <span className="text-accent px-1.5">
          {`${filterLabel[0].toUpperCase()}${filterLabel.slice(1)}`}
        </span>
      </li>
    );
  });

  return (
    <ul className="border-accent bg-primary absolute top-[100%] w-full rounded-[5px] border py-2">
      {filterItems}
    </ul>
  );
};

export default TodoFiltersMenu;
