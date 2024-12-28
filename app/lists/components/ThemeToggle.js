'use client';

import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 dark:bg-gray-700 p-1 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <span className="text-yellow-300 text-lg">☀️</span>
        ) : (
          <span className="text-gray-500 text-lg">🌙</span>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
