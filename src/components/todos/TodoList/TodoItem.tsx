import type { TodoType } from "@/models/Todo";

export interface TodoItemProps extends TodoType {}

const TodoItem = ({ completed, id, title }: TodoItemProps) => {
  return <p>{title}</p>;
};

export default TodoItem;
