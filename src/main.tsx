import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ThirdwebProvider } from 'thirdweb/react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider>
        <ThirdwebProvider>
          <main className="dark text-foreground bg-background">
            <App />
          </main>
        </ThirdwebProvider>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
);