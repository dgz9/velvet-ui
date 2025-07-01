import { cva } from 'class-variance-authority';

export const focusRing = cva(
  'outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      color: {
        primary: 'focus-visible:ring-blue-500',
        secondary: 'focus-visible:ring-gray-500',
        success: 'focus-visible:ring-green-500',
        warning: 'focus-visible:ring-amber-500',
        error: 'focus-visible:ring-red-500',
      },
      theme: {
        light: 'focus-visible:ring-offset-white',
        dark: 'focus-visible:ring-offset-gray-900',
      },
    },
    defaultVariants: {
      color: 'primary',
      theme: 'light',
    },
  }
);