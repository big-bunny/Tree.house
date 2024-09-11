// src/types/next-themes.d.ts
declare module 'next-themes' {
    import { ReactNode } from 'react';
  
    export const ThemeProvider: React.FC<{ children: ReactNode }>;
    export function useTheme(): {
      theme: string | undefined;
      setTheme: (theme: string) => void;
      resolvedTheme: string | undefined;
    };
  }
  