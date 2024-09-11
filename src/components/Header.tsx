

// src/components/Header.tsx
import React from 'react';
import { ConnectButton } from "thirdweb/react";
import { useTheme } from 'next-themes';
import { client } from "../client";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-green-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">TREEHOUSE</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-3 py-1 rounded bg-green-700 hover:bg-green-600 transition-colors duration-200"
        >
          Toggle Theme
        </button>
        <ConnectButton
          client={client}
          appMetadata={{
            name: "Treehouse Experience",
            url: "https://treehouse-experience.com",
          }}
        />
      </div>
    </header>
  );
}

