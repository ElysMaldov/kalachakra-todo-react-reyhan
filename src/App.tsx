import CreateTodoDialog from "@/components/todos/CreateTodoTrigger/CreateTodoDialog";
import UpdateTodoDialog from "@/components/todos/UpdateTodoTrigger/UpdateTodoDialog";
import { Route, Routes } from "react-router";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<TodoPage />}
      >
        <Route
          path="new-todo"
          element={<CreateTodoDialog />}
        />
        <Route
          path="update-todo/:id"
          element={<UpdateTodoDialog />}
        />
      </Route>
    </Routes>
  );
}

export default App;
