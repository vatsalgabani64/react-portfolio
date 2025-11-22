import ThemeToggle from "./ThemeToggle";
import { navbarItems } from "../../constants/navigation";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-10 py-6 flex items-center justify-between bg-background/80 backdrop-blur-md">
      <div className="text-xl font-semibold">VG</div>

      <nav>
        <ul className="flex items-center gap-10">
          {navbarItems.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-center gap-3 font-mono text-sm text-foreground hover:text-foreground/70 transition"
              >
                <span className="opacity-70">0{index + 1}.</span>
                <span >{item.title}</span>
              </a>
            </li>
          ))}

          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
