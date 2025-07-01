import { cn } from './cn';

export const glassStyles = {
  light: 'bg-background/60 backdrop-blur-2xl backdrop-saturate-200 border border-border/30 shadow-xl',
  medium: 'bg-background/40 backdrop-blur-xl backdrop-saturate-150 border border-border/20 shadow-lg',
  strong: 'bg-background/20 backdrop-blur-md backdrop-saturate-100 border border-border/10 shadow-md',
  subtle: 'bg-background/80 backdrop-blur-sm backdrop-saturate-200 border border-border/40 shadow-sm',
  
  // Dark mode variants are handled by the theme system
  darkLight: '',
  darkMedium: '',
  darkStrong: '',
  darkSubtle: '',
};

export const gradientStyles = {
  // Primary gradients
  primary: 'bg-gradient-to-br from-primary-400 to-primary-600',
  primarySubtle: 'bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40',
  primaryGlass: 'bg-gradient-to-br from-primary-400/20 to-primary-600/20 backdrop-blur-xl',
  
  // Accent gradients
  accent: 'bg-gradient-to-br from-purple-400 to-pink-600',
  accentSubtle: 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40',
  accentGlass: 'bg-gradient-to-br from-purple-400/20 to-pink-600/20 backdrop-blur-xl',
  
  // Success gradients
  success: 'bg-gradient-to-br from-green-400 to-emerald-600',
  successSubtle: 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40',
  successGlass: 'bg-gradient-to-br from-green-400/20 to-emerald-600/20 backdrop-blur-xl',
  
  // Danger gradients
  danger: 'bg-gradient-to-br from-red-400 to-rose-600',
  dangerSubtle: 'bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40',
  dangerGlass: 'bg-gradient-to-br from-red-400/20 to-rose-600/20 backdrop-blur-xl',
  
  // Special gradients
  rainbow: 'bg-gradient-to-br from-red-400 via-yellow-400 to-purple-600',
  sunset: 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600',
  ocean: 'bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600',
  forest: 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600',
  aurora: 'bg-gradient-to-br from-purple-400 via-pink-500 to-blue-600',
  
  // Metallic gradients
  silver: 'bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500',
  gold: 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 dark:from-yellow-700 dark:via-yellow-600 dark:to-amber-600',
};

export const glowStyles = {
  primary: 'shadow-lg shadow-primary-500/25 dark:shadow-primary-400/20',
  accent: 'shadow-lg shadow-purple-500/25 dark:shadow-purple-400/20',
  success: 'shadow-lg shadow-green-500/25 dark:shadow-green-400/20',
  danger: 'shadow-lg shadow-red-500/25 dark:shadow-red-400/20',
  warning: 'shadow-lg shadow-yellow-500/25 dark:shadow-yellow-400/20',
};

export const glass = (variant: keyof typeof glassStyles = 'light', includesDark = true) => {
  const darkVariant = `dark${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof glassStyles;
  return cn(
    glassStyles[variant],
    includesDark && glassStyles[darkVariant]
  );
};

export const gradient = (variant: keyof typeof gradientStyles) => {
  return gradientStyles[variant];
};

export const glow = (variant: keyof typeof glowStyles) => {
  return glowStyles[variant];
};

// Combined glass and gradient effect
export const glassGradient = (
  glassVariant: keyof typeof glassStyles = 'medium',
  gradientVariant: keyof typeof gradientStyles = 'primaryGlass'
) => {
  return cn(
    glass(glassVariant),
    gradient(gradientVariant)
  );
};

// macOS-style frosted glass effect
export const macOSGlass = {
  window: cn(
    'bg-background/70',
    'backdrop-blur-2xl backdrop-saturate-200',
    'border border-border/30',
    'shadow-2xl shadow-black/10 dark:shadow-black/30',
    'rounded-xl'
  ),
  sidebar: cn(
    'bg-background/60',
    'backdrop-blur-2xl backdrop-saturate-150',
    'border-r border-border/30',
    'shadow-xl'
  ),
  popover: cn(
    'bg-background/80',
    'backdrop-blur-xl backdrop-saturate-200',
    'border border-border/40',
    'shadow-lg shadow-black/5 dark:shadow-black/20',
    'rounded-lg'
  ),
  toolbar: cn(
    'bg-background/50',
    'backdrop-blur-md backdrop-saturate-150',
    'border border-border/20',
    'shadow-sm'
  ),
};