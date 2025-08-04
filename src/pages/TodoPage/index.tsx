import { Outlet } from "react-router";

export interface TodoPageProps {}

const TodoPage = ({}: TodoPageProps) => {
  return (
    <>
      <p>Todo</p>
      {/* Used for dialogs */}
      <Outlet />
    </>
  );
};

export default TodoPage;
