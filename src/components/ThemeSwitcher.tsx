// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-4">
   
      <button 
        onClick={() => setTheme('light')} 
        aria-label="Light Mode"
        className="p-2 rounded-full hover:bg-green-200 transition-all duration-200"
      >
        <SunIcon className="w-6 h-6 text-yellow-500" />
      </button>
      <button 
        onClick={() => setTheme('dark')} 
        aria-label="Dark Mode"
        className="p-2 rounded-full hover:bg-green-200 transition-all duration-200"
      >
        <MoonIcon className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
