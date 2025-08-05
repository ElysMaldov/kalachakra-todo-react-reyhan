import MagnifyingGlass from "@/components/icons/MagnifyingGlass";
import Input from "@/components/inputs/Input/input";
import { useTodoStore } from "@/components/store/todo-store";

export interface SearchTodoProps {}

const SearchTodo = ({}: SearchTodoProps) => {
  const setTodoQuery = useTodoStore((state) => state.setTodoQuery);

  return (
    <Input
      className="max-h-9.5"
      placeholder="Search note..."
      trailingIcon={<MagnifyingGlass />}
      onChange={(e) => setTodoQuery(e.target.value)}
    />
  );
};

export default SearchTodo;
