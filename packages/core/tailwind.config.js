const { spacing, fontFamily, fontSize, fontWeight, shadows } = require('@velvet-ui/tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  safelist: [
    // Grid component width classes
    'w-1/12', 'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12', 'w-6/12',
    'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12', 'w-full',
    // Responsive variants
    'sm:w-1/12', 'sm:w-2/12', 'sm:w-3/12', 'sm:w-4/12', 'sm:w-5/12', 'sm:w-6/12',
    'sm:w-7/12', 'sm:w-8/12', 'sm:w-9/12', 'sm:w-10/12', 'sm:w-11/12', 'sm:w-full',
    'md:w-1/12', 'md:w-2/12', 'md:w-3/12', 'md:w-4/12', 'md:w-5/12', 'md:w-6/12',
    'md:w-7/12', 'md:w-8/12', 'md:w-9/12', 'md:w-10/12', 'md:w-11/12', 'md:w-full',
    'lg:w-1/12', 'lg:w-2/12', 'lg:w-3/12', 'lg:w-4/12', 'lg:w-5/12', 'lg:w-6/12',
    'lg:w-7/12', 'lg:w-8/12', 'lg:w-9/12', 'lg:w-10/12', 'lg:w-11/12', 'lg:w-full',
    'xl:w-1/12', 'xl:w-2/12', 'xl:w-3/12', 'xl:w-4/12', 'xl:w-5/12', 'xl:w-6/12',
    'xl:w-7/12', 'xl:w-8/12', 'xl:w-9/12', 'xl:w-10/12', 'xl:w-11/12', 'xl:w-full',
    // Flexbox utilities
    'flex-grow', 'flex-grow-0', 'flex-shrink', 'flex-shrink-0',
    'basis-0', 'basis-auto', 'max-w-full', 'w-auto',
    'sm:flex-grow', 'sm:flex-grow-0', 'sm:flex-shrink', 'sm:flex-shrink-0',
    'sm:basis-0', 'sm:basis-auto', 'sm:max-w-full', 'sm:w-auto',
    'md:flex-grow', 'md:flex-grow-0', 'md:flex-shrink', 'md:flex-shrink-0',
    'md:basis-0', 'md:basis-auto', 'md:max-w-full', 'md:w-auto',
    'lg:flex-grow', 'lg:flex-grow-0', 'lg:flex-shrink', 'lg:flex-shrink-0',
    'lg:basis-0', 'lg:basis-auto', 'lg:max-w-full', 'lg:w-auto',
    'xl:flex-grow', 'xl:flex-grow-0', 'xl:flex-shrink', 'xl:flex-shrink-0',
    'xl:basis-0', 'xl:basis-auto', 'xl:max-w-full', 'xl:w-auto',
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          foreground: 'var(--color-secondary-foreground)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          hover: 'var(--color-success-hover)',
          foreground: 'var(--color-success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          hover: 'var(--color-warning-hover)',
          foreground: 'var(--color-warning-foreground)',
        },
        danger: {
          DEFAULT: 'var(--color-danger)',
          hover: 'var(--color-danger-hover)',
          foreground: 'var(--color-danger-foreground)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          hover: 'var(--color-info-hover)',
          foreground: 'var(--color-info-foreground)',
        },
        // Background colors
        background: {
          DEFAULT: 'var(--color-background)',
          secondary: 'var(--color-background-secondary)',
          tertiary: 'var(--color-background-tertiary)',
          elevated: 'var(--color-background-elevated)',
          overlay: 'var(--color-background-overlay)',
          inverse: 'var(--color-background-inverse)',
        },
        // Foreground colors
        foreground: {
          DEFAULT: 'var(--color-foreground)',
          secondary: 'var(--color-foreground-secondary)',
          tertiary: 'var(--color-foreground-tertiary)',
          inverse: 'var(--color-foreground-inverse)',
        },
        // Border colors
        border: {
          DEFAULT: 'var(--color-border)',
          secondary: 'var(--color-border-secondary)',
          tertiary: 'var(--color-border-tertiary)',
        },
        // Additional theme colors
        card: 'var(--color-card)',
        surface: 'var(--color-surface)',
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          foreground: 'var(--color-accent-foreground)',
        },
      },
      spacing,
      fontFamily,
      fontSize,
      fontWeight,
      boxShadow: shadows,
      animation: {
        'velvet-fade-in': 'velvet-fade-in 0.2s ease-out',
        'velvet-fade-out': 'velvet-fade-out 0.2s ease-out',
        'velvet-slide-up': 'velvet-slide-up 0.3s ease-out',
        'velvet-slide-down': 'velvet-slide-down 0.3s ease-out',
        'velvet-scale-in': 'velvet-scale-in 0.2s ease-out',
        'velvet-scale-out': 'velvet-scale-out 0.2s ease-out',
        'velvet-spin': 'velvet-spin 1s linear infinite',
      },
      keyframes: {
        'velvet-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'velvet-fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'velvet-slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'velvet-slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'velvet-scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'velvet-scale-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        'velvet-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};