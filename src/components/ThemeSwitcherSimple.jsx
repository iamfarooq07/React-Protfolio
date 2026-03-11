import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcherSimple = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    console.log("Theme changed to:", theme);
    // Apply theme to document
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggle clicked, current theme:", theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent transition-all duration-300 shadow-md border border-border"
      aria-label="Toggle theme"
      type="button"
    >
      {theme === "light" ? (
        <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-blue-400 transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeSwitcherSimple;
