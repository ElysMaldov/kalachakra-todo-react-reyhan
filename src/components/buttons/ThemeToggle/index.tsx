import Button from "@/components/buttons/Button";
import useDarkMode from "@/components/hooks/use-dark-mode";
import Moon from "@/components/icons/Moon";
import Sun from "@/components/icons/Sun";

export interface ThemeToggleProps {}

const ThemeToggle = ({}: ThemeToggleProps) => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <Button
      onClick={toggleDarkMode}
      className="size-9.5 flex items-center p-2"
      size="ghost"
      // onClick={() => setShowMenu((prev) => !prev)}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggle;
