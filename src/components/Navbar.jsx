import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-400">
          Farooq<span className="text-white">Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <Link to={"/"} className="hover:text-red-400 cursor-pointer">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-red-400 cursor-pointer">
            About
          </Link>
          <Link to={"/skills"} className="hover:text-red-400 cursor-pointer">
            Skills
          </Link>
          <Link to={"/projects"} className="hover:text-red-400 cursor-pointer">
            Projects
          </Link>
          <Link to={"/contact"} className="hover:text-red-400 cursor-pointer">
            Contact
          </Link>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-gray-300">
          <li>
            <Link to={"/"} className="hover:text-red-400 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-red-400 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to={"/skills"} className="hover:text-red-400 cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link
              to={"/projects"}
              className="hover:text-red-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:text-red-400 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
