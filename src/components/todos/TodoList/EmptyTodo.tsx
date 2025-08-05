import useDarkMode from "@/components/hooks/use-dark-mode";

export interface EmptyTodoProps {}

const EmptyTodo = ({}: EmptyTodoProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="flex flex-col items-center gap-y-5">
      {isDarkMode ? (
        <img src="/images/empty-todo-dark.png" />
      ) : (
        <img src="/images/empty-todo.png" />
      )}
      <p className="text-xl">Empty...</p>
    </section>
  );
};

export default EmptyTodo;
