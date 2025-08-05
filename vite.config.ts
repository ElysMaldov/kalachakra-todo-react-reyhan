import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "/kalachakra-todo-react-reyhan/",
  plugins: [react(), tailwindcss(), tsconfigPaths()]
});
