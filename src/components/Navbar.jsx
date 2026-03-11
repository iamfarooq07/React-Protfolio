import { useState } from "react";
import { Link } from "react-router";
import ThemeSwitcherSimple from "./ThemeSwitcherSimple";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-b border-border shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-400">
          Farooq<span className="text-foreground">Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-foreground items-center">
          <Link to={"/"} className="hover:text-red-400 cursor-pointer transition-colors">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-red-400 cursor-pointer transition-colors">
            About
          </Link>
          <Link to={"/skills"} className="hover:text-red-400 cursor-pointer transition-colors">
            Skills
          </Link>
          <Link to={"/projects"} className="hover:text-red-400 cursor-pointer transition-colors">
            Projects
          </Link>
          <Link to={"/contact"} className="hover:text-red-400 cursor-pointer transition-colors">
            Contact
          </Link>
          <ThemeSwitcherSimple />
        </ul>

        {/* Mobile Menu & Theme Switcher */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcherSimple />
          <button
            className="text-foreground text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-card px-6 py-4 space-y-4 text-foreground border-t border-border transition-colors duration-300">
          <li>
            <Link to={"/"} className="hover:text-red-400 cursor-pointer transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-red-400 cursor-pointer transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to={"/skills"} className="hover:text-red-400 cursor-pointer transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link
              to={"/projects"}
              className="hover:text-red-400 cursor-pointer transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:text-red-400 cursor-pointer transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
