import React from "react";
import { useState } from "react";

export const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-200
       dark:bg-gray-800
       text-gray-800 
       dark:text-gray-200 
       py-2 px-4 rounded-md 
       focus:outline-none"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkMode;
