import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeSwitcherSimple from "./ThemeSwitcherSimple";

const moreLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Features", href: "/features" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const moreRef = useRef(null);

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close More dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  // Navigation handler
  const handleNav = (href) => {
    setOpen(false);
    setMoreOpen(false);
    navigate(href);
  };

  // Check if a link is active
  const isActive = (href) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-1 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.button
          onClick={() => handleNav("/")}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent cursor-pointer"
        >
          Muhammad
          <span className="text-foreground"> Farooq</span>
        </motion.button>

        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex items-center gap-8">

          {/* Home */}
          <motion.button
            onClick={() => handleNav("/")}
            whileHover={{ y: -2 }}
            className={`transition-colors text-sm font-medium ${
              isActive("/")
                ? "text-blue-500"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </motion.button>

          {/* MORE DROPDOWN */}
          <div ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`flex items-center gap-1 transition-colors text-sm font-medium ${
                moreLinks.some((l) => isActive(l.href))
                  ? "text-blue-500"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              More
              <HiChevronDown
                className={`text-lg transition-transform duration-200 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* More Dropdown */}
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-4 w-52 bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-xl p-2"
                >
                  {moreLinks.map((link) => (
                    <motion.button
                      key={link.href}
                      onClick={() => handleNav(link.href)}
                      whileHover={{ x: 4 }}
                      className={`w-full text-left block px-4 py-2.5 rounded-lg transition-colors text-sm ${
                        isActive(link.href)
                          ? "text-blue-500 bg-blue-500/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Switcher */}
          <ThemeSwitcherSimple />
        </div>

        {/* MOBILE NAVBAR */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeSwitcherSimple />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="text-foreground text-2xl"
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-2">
              {/* Home */}
              <li>
                <button
                  onClick={() => handleNav("/")}
                  className={`w-full text-left block px-3 py-2 rounded-lg transition-colors font-medium ${
                    isActive("/")
                      ? "text-blue-500 bg-blue-500/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Home
                </button>
              </li>

              {/* More Links */}
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left block px-3 py-2 rounded-lg transition-colors font-medium ${
                      isActive(link.href)
                        ? "text-blue-500 bg-blue-500/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
