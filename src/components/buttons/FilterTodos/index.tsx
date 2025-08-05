import Button from "@/components/buttons/Button";
import TodoFiltersMenu from "@/components/buttons/FilterTodos/TodoFiltersMenu";
import ChevronDown from "@/components/icons/ChevronDown";
import { useTodoStore } from "@/components/store/todo-store";
import { useState } from "react";

export interface FilterTodosProps {}

const FilterTodos = ({}: FilterTodosProps) => {
  const filter = useTodoStore((state) => state.todoFilter);
  const filterLabel = filter.toUpperCase();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="relative w-fit">
      <Button
        className="gap-x-6.5 max-h-9.5 flex min-w-[105px] flex-row items-center justify-between p-2.5"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {filterLabel} <ChevronDown />
      </Button>
      {showMenu && <TodoFiltersMenu />}
    </section>
  );
};

export default FilterTodos;
