'use client';

import { ThemeProvider, ToastProvider } from '@velvet-ui/core';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system" defaultThemeName="default">
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  );
}