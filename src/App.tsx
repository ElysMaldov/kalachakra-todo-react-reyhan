import { Route, Routes } from "react-router";
import TodoPage from "./pages/TodoPage";
import CreateTodoDialog from "@/components/todos/CreateTodoTrigger/CreateTodoDialog";

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
      </Route>
    </Routes>
  );
}

export default App;
