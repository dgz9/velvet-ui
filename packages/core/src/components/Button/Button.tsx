import React, { forwardRef, useState } from 'react';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';
import { Spinner } from './Spinner';
import { gradient, glass, glow } from '../../utils/glass';
import { macosTokens } from '@velvet-ui/tokens';

const buttonVariants = cva(
  'velvet-button relative inline-flex items-center justify-center font-medium outline-none select-none overflow-hidden antialiased',
  {
    variants: {
      variant: {
        solid: 'shadow-sm hover:shadow-md active:shadow-sm backdrop-blur-sm',
        outline: 'bg-transparent border border-[var(--color-border)] hover:bg-[var(--color-background-secondary)]',
        ghost: 'bg-transparent hover:bg-[var(--color-background-secondary)]',
        glass: 'backdrop-blur-md bg-[var(--color-background-overlay)] border border-[var(--color-border)] shadow-sm hover:shadow-md',
        glow: 'shadow-lg',
        gradient: 'text-white shadow-md hover:shadow-lg',
        gradientOutline: 'bg-transparent border border-transparent hover:shadow-md',
      },
      color: {
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        danger: '',
        info: '',
      },
      size: {
        small: 'h-7 px-3 text-[12px] gap-1.5',
        medium: 'h-8 px-4 text-[13px] gap-2',
        large: 'h-10 px-5 text-[15px] gap-2.5',
      },
      radius: {
        none: 'rounded-none',
        small: 'rounded-[4px]',
        medium: 'rounded-[6px]',
        large: 'rounded-[8px]',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'bg-[var(--color-success)] text-[var(--color-success-foreground)] hover:bg-[var(--color-success-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-success)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-[var(--color-warning)] text-[var(--color-warning-foreground)] hover:bg-[var(--color-warning-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-warning)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'bg-[var(--color-danger)] text-[var(--color-danger-foreground)] hover:bg-[var(--color-danger-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-danger)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-[var(--color-info)] text-[var(--color-info-foreground)] hover:bg-[var(--color-info-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-info)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      // Outline variants
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-[var(--color-success)] text-[var(--color-success)] hover:bg-[var(--color-success)]/10 focus-visible:ring-2 focus-visible:ring-[var(--color-success)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-[var(--color-warning)] text-[var(--color-warning)] hover:bg-[var(--color-warning)]/10 focus-visible:ring-2 focus-visible:ring-[var(--color-warning)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'border-[var(--color-danger)] text-[var(--color-danger)] hover:bg-[var(--color-danger)]/10 focus-visible:ring-2 focus-visible:ring-[var(--color-danger)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-[var(--color-info)] text-[var(--color-info)] hover:bg-[var(--color-info)]/10 focus-visible:ring-2 focus-visible:ring-[var(--color-info)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      // Ghost variants
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 active:bg-[var(--color-primary)]/20 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'ghost',
        color: 'secondary',
        className: 'text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 active:bg-[var(--color-secondary)]/20 focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'ghost',
        color: 'success',
        className: 'text-[var(--color-success)] hover:bg-[var(--color-success)]/10 active:bg-[var(--color-success)]/20 focus-visible:ring-2 focus-visible:ring-[var(--color-success)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'ghost',
        color: 'warning',
        className: 'text-[var(--color-warning)] hover:bg-[var(--color-warning)]/10 active:bg-[var(--color-warning)]/20 focus-visible:ring-2 focus-visible:ring-[var(--color-warning)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'ghost',
        color: 'danger',
        className: 'text-[var(--color-danger)] hover:bg-[var(--color-danger)]/10 active:bg-[var(--color-danger)]/20 focus-visible:ring-2 focus-visible:ring-[var(--color-danger)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      {
        variant: 'ghost',
        color: 'info',
        className: 'text-[var(--color-info)] hover:bg-[var(--color-info)]/10 active:bg-[var(--color-info)]/20 focus-visible:ring-2 focus-visible:ring-[var(--color-info)]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      },
      // Glass variants
      {
        variant: 'glass',
        color: 'primary',
        className: 'bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'glass',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)]/10 border-[var(--color-secondary)]/20 text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/20 focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'glass',
        color: 'success',
        className: 'bg-[var(--color-success)]/10 border-[var(--color-success)]/20 text-[var(--color-success)] hover:bg-[var(--color-success)]/20 focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'glass',
        color: 'warning',
        className: 'bg-[var(--color-warning)]/10 border-[var(--color-warning)]/20 text-[var(--color-warning)] hover:bg-[var(--color-warning)]/20 focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'glass',
        color: 'danger',
        className: 'bg-[var(--color-danger)]/10 border-[var(--color-danger)]/20 text-[var(--color-danger)] hover:bg-[var(--color-danger)]/20 focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'glass',
        color: 'info',
        className: 'bg-[var(--color-info)]/10 border-[var(--color-info)]/20 text-[var(--color-info)] hover:bg-[var(--color-info)]/20 focus-visible:ring-[var(--color-info)]',
      },
      // Glow variants - using same shadow syntax as Card component
      {
        variant: 'glow',
        color: 'primary',
        className: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-[0_0_15px_var(--color-primary)] hover:shadow-[0_0_25px_var(--color-primary)] focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'glow',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-hover)] shadow-[0_0_15px_var(--color-secondary)] hover:shadow-[0_0_25px_var(--color-secondary)] focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'glow',
        color: 'success',
        className: 'bg-[var(--color-success)] text-[var(--color-success-foreground)] hover:bg-[var(--color-success-hover)] shadow-[0_0_15px_var(--color-success)] hover:shadow-[0_0_25px_var(--color-success)] focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'glow',
        color: 'warning',
        className: 'bg-[var(--color-warning)] text-[var(--color-warning-foreground)] hover:bg-[var(--color-warning-hover)] shadow-[0_0_15px_var(--color-warning)] hover:shadow-[0_0_25px_var(--color-warning)] focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'glow',
        color: 'danger',
        className: 'bg-[var(--color-danger)] text-[var(--color-danger-foreground)] hover:bg-[var(--color-danger-hover)] shadow-[0_0_15px_var(--color-danger)] hover:shadow-[0_0_25px_var(--color-danger)] focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'glow',
        color: 'info',
        className: 'bg-[var(--color-info)] text-[var(--color-info-foreground)] hover:bg-[var(--color-info-hover)] shadow-[0_0_15px_var(--color-info)] hover:shadow-[0_0_25px_var(--color-info)] focus-visible:ring-[var(--color-info)]',
      },
      // Gradient variants
      {
        variant: 'gradient',
        color: 'primary',
        className: gradient('primary') + ' hover:opacity-90',
      },
      {
        variant: 'gradient',
        color: 'secondary',
        className: 'bg-gradient-to-r from-gray-600 to-gray-800 hover:opacity-90',
      },
      {
        variant: 'gradient',
        color: 'success',
        className: gradient('success') + ' hover:opacity-90',
      },
      {
        variant: 'gradient',
        color: 'warning',
        className: 'bg-gradient-to-r from-yellow-400 to-orange-600 hover:opacity-90',
      },
      {
        variant: 'gradient',
        color: 'danger',
        className: gradient('danger') + ' hover:opacity-90',
      },
      {
        variant: 'gradient',
        color: 'info',
        className: gradient('ocean') + ' hover:opacity-90',
      },
      // Gradient outline variants
      {
        variant: 'gradientOutline',
        color: 'primary',
        className: 'border-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-700',
      },
      {
        variant: 'gradientOutline',
        color: 'secondary',
        className: 'border-transparent bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent hover:from-gray-700 hover:to-gray-900',
      },
      {
        variant: 'gradientOutline',
        color: 'success',
        className: 'border-transparent bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent hover:from-green-500 hover:to-emerald-700',
      },
      {
        variant: 'gradientOutline',
        color: 'warning',
        className: 'border-transparent bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent hover:from-yellow-500 hover:to-orange-700',
      },
      {
        variant: 'gradientOutline',
        color: 'danger',
        className: 'border-transparent bg-gradient-to-r from-red-400 to-rose-600 bg-clip-text text-transparent hover:from-red-500 hover:to-rose-700',
      },
      {
        variant: 'gradientOutline',
        color: 'info',
        className: 'border-transparent bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-cyan-700',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'medium',
      radius: 'medium',
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'size' | 'color'>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
  asChild?: boolean;
  beginContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, radius, loading, loadingText, children, disabled, asChild, beginContent, endContent, ...props }, ref) => {
    const { getAnimation } = useAnimation();
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples(prev => [...prev, { x, y, id }]);

      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 600);
    };

    // Get glow class for glow variant - removed, will use compound variants instead

    return (
      <motion.button
        ref={ref}
        className={cn(
          buttonVariants({ variant, color, size, radius, className }),
          variant === 'gradientOutline' && 'before:absolute before:inset-0 before:rounded-[inherit] before:p-[2px] before:bg-gradient-to-r before:from-blue-400 before:to-purple-600 before:mask-gradient'
        )}
        disabled={disabled || loading}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ 
          duration: macosTokens.animation.duration.fast,
          ease: macosTokens.animation.easing.smooth
        }}
        onMouseDown={handleRipple}
        {...props}
      >
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Multiple ripple rings for better effect */}
              <motion.span
                className={cn(
                  'absolute rounded-full',
                  (variant === 'solid' || variant === 'glow' || variant === 'gradient') && 'bg-white/30',
                  variant === 'outline' && 'bg-current',
                  variant === 'ghost' && 'bg-current',
                  variant === 'glass' && 'bg-white',
                  variant === 'gradientOutline' && 'bg-current'
                )}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ width: 0, height: 0, opacity: 0.3 }}
                animate={{ width: 300, height: 300, opacity: 0 }}
                transition={{ duration: 0.5, ease: macosTokens.animation.easing.out }}
              />
            </motion.span>
          ))}
        </AnimatePresence>
        <span className={cn(
          "relative z-10 inline-flex items-center justify-center gap-2",
          variant === 'gradientOutline' && 'bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text'
        )}>
          {loading ? (
            <Spinner
              className={cn(
                'velvet-spinner',
                size === 'small' && 'h-3 w-3',
                size === 'medium' && 'h-4 w-4',
                size === 'large' && 'h-5 w-5'
              )}
            />
          ) : beginContent}
          {loading && loadingText ? loadingText : children as React.ReactNode}
          {!loading && endContent}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';