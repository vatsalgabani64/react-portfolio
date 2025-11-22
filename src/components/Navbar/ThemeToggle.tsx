
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeProvider";

const ThemeToggle = () => {
  const {theme,setTheme} = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md transition"
    >
      {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export default ThemeToggle;
