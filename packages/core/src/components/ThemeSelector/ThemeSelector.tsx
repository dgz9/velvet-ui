import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useThemeContext } from '../../context/ThemeProvider';

const themeSelectorVariants = cva(
  'velvet-theme-selector flex items-center gap-1 rounded-lg border border-border p-1',
  {
    variants: {
      size: {
        small: 'h-7',
        medium: 'h-8',
        large: 'h-10',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const iconSize = {
  small: 14,
  medium: 16,
  large: 20,
};

export interface ThemeSelectorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
    VariantProps<typeof themeSelectorVariants> {
  showLabels?: boolean;
}

export const ThemeSelector = forwardRef<HTMLDivElement, ThemeSelectorProps>(
  ({ className, size = 'medium', showLabels = false, ...props }, ref) => {
    const { theme, setTheme } = useThemeContext();
    
    const themes = [
      { value: 'light' as const, label: 'Light', icon: SunIcon },
      { value: 'system' as const, label: 'System', icon: SystemIcon },
      { value: 'dark' as const, label: 'Dark', icon: MoonIcon },
    ];

    return (
      <div
        ref={ref}
        className={cn(themeSelectorVariants({ size, className }))}
        {...props}
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = theme === themeOption.value;
          
          return (
            <button
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={cn(
                'relative inline-flex items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium',
                'hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                size === 'small' && 'h-5 px-1.5 text-xs',
                size === 'medium' && 'h-6 px-2 text-sm',
                size === 'large' && 'h-8 px-3 text-base',
                isActive 
                  ? 'text-foreground' 
                  : 'text-foreground-secondary hover:text-foreground'
              )}
              aria-label={`${themeOption.label} theme`}
              aria-pressed={isActive}
            >
              {isActive && (
                <motion.div
                  layoutId="theme-selector-active"
                  className="absolute inset-0 rounded-md bg-secondary"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon size={iconSize[size || 'medium']} />
                {showLabels && (
                  <span className={cn(
                    size === 'small' && 'hidden sm:inline',
                    size === 'medium' && 'hidden md:inline',
                    size === 'large' && 'inline'
                  )}>
                    {themeOption.label}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    );
  }
);

ThemeSelector.displayName = 'ThemeSelector';

// Icon components
const SunIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const SystemIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const MoonIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);