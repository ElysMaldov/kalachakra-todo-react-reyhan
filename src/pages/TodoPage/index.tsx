import SearchTodo from "@/components/inputs/SearchTodo";
import CreateTodoTrigger from "@/components/todos/CreateTodoTrigger";
import TodoList from "@/components/todos/TodoList";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import FilterTodos from "@/components/buttons/FilterTodos";

export interface TodoPageProps {}

const TodoPage = ({}: TodoPageProps) => {
  return (
    <>
      <main className="gap-y-7.5 relative mx-auto flex h-fit min-h-screen w-full max-w-[750px] flex-col items-center px-4 py-10">
        <header className="gap-y-4.5 flex w-full flex-col items-center">
          <h1 className="text-[26px] font-medium uppercase">ToDo List</h1>

          <section className="flex w-full flex-row gap-x-4">
            <SearchTodo />
            <FilterTodos />
            {/* TODO add dark mode toggle */}
            {/* <Button>Dark mode</Button> */}
          </section>
        </header>

        <ErrorBoundary fallback={<p>Failed to fetch todos :(</p>}>
          <Suspense fallback={<p>Loading...</p>}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>

        <CreateTodoTrigger />
      </main>
      {/* Used for dialogs */}
      <Outlet />
    </>
  );
};

export default TodoPage;
