export interface EmptyTodoProps {}

const EmptyTodo = ({}: EmptyTodoProps) => {
  return (
    <section className="flex flex-col items-center gap-y-5">
      <img src="/images/empty-todo.png" />
      <p className="text-xl">Empty...</p>
    </section>
  );
};

export default EmptyTodo;
