import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { glass, gradient } from '../../utils/glass';

const badgeVariants = cva(
  'velvet-badge inline-flex items-center justify-center font-medium',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'bg-transparent border',
        ghost: 'bg-transparent',
        soft: '',
        glass: glass('medium') + ' backdrop-blur-xl',
        gradient: 'text-white',
        dot: 'p-0', // Dot variant should have no padding
        notification: 'font-bold', // New variant for notification badges
      },
      color: {
        default: '',
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        danger: '',
        info: '',
      },
      size: {
        tiny: 'text-[10px]',
        small: 'text-xs',
        medium: 'text-sm',
        large: 'text-base',
      },
      radius: {
        none: 'rounded-none',
        small: 'rounded',
        medium: 'rounded-md',
        large: 'rounded-lg',
        full: 'rounded-full',
      },
      ping: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Size variants for non-dot badges
      {
        variant: ['solid', 'outline', 'ghost', 'soft', 'glass', 'gradient', 'notification'],
        size: 'tiny',
        className: 'min-w-[1rem] h-4 px-1',
      },
      {
        variant: ['solid', 'outline', 'ghost', 'soft', 'glass', 'gradient', 'notification'],
        size: 'small',
        className: 'min-w-[1.25rem] h-5 px-1.5',
      },
      {
        variant: ['solid', 'outline', 'ghost', 'soft', 'glass', 'gradient', 'notification'],
        size: 'medium',
        className: 'min-w-[1.5rem] h-6 px-2',
      },
      {
        variant: ['solid', 'outline', 'ghost', 'soft', 'glass', 'gradient', 'notification'],
        size: 'large',
        className: 'min-w-[1.75rem] h-7 px-2.5',
      },
      // Dot variant sizes
      {
        variant: 'dot',
        size: 'tiny',
        className: 'h-1.5 w-1.5 rounded-full',
      },
      {
        variant: 'dot',
        size: 'small',
        className: 'h-2 w-2 rounded-full',
      },
      {
        variant: 'dot',
        size: 'medium',
        className: 'h-2.5 w-2.5 rounded-full',
      },
      {
        variant: 'dot',
        size: 'large',
        className: 'h-3 w-3 rounded-full',
      },
      // Solid variants
      {
        variant: 'solid',
        color: 'default',
        className: 'bg-default text-default-foreground',
      },
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'bg-[var(--color-success)] text-[var(--color-success-foreground)]',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-[var(--color-warning)] text-[var(--color-warning-foreground)]',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'bg-[var(--color-danger)] text-[var(--color-danger-foreground)]',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-[var(--color-info)] text-[var(--color-info-foreground)]',
      },
      // Outline variants
      {
        variant: 'outline',
        color: 'default',
        className: 'border-border text-foreground',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-[var(--color-primary)] text-[var(--color-primary)]',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-[var(--color-secondary)] text-[var(--color-secondary)]',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-[var(--color-success)] text-[var(--color-success)]',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-[var(--color-warning)] text-[var(--color-warning)]',
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'border-[var(--color-danger)] text-[var(--color-danger)]',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-[var(--color-info)] text-[var(--color-info)]',
      },
      // Ghost variants
      {
        variant: 'ghost',
        color: 'default',
        className: 'text-foreground',
      },
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-[var(--color-primary)]',
      },
      {
        variant: 'ghost',
        color: 'secondary',
        className: 'text-[var(--color-secondary)]',
      },
      {
        variant: 'ghost',
        color: 'success',
        className: 'text-[var(--color-success)]',
      },
      {
        variant: 'ghost',
        color: 'warning',
        className: 'text-[var(--color-warning)]',
      },
      {
        variant: 'ghost',
        color: 'danger',
        className: 'text-[var(--color-danger)]',
      },
      {
        variant: 'ghost',
        color: 'info',
        className: 'text-[var(--color-info)]',
      },
      // Soft variants
      {
        variant: 'soft',
        color: 'default',
        className: 'bg-default/20 text-default-foreground',
      },
      {
        variant: 'soft',
        color: 'primary',
        className: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
      },
      {
        variant: 'soft',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'bg-[var(--color-success)]/10 text-[var(--color-success)]',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'bg-[var(--color-warning)]/10 text-[var(--color-warning)]',
      },
      {
        variant: 'soft',
        color: 'danger',
        className: 'bg-[var(--color-danger)]/10 text-[var(--color-danger)]',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'bg-[var(--color-info)]/10 text-[var(--color-info)]',
      },
      // Glass variants
      {
        variant: 'glass',
        color: 'default',
        className: 'text-foreground border-border/20',
      },
      {
        variant: 'glass',
        color: 'primary',
        className: 'text-primary-600 dark:text-primary-400 border-primary-500/20',
      },
      {
        variant: 'glass',
        color: 'secondary',
        className: 'text-gray-600 dark:text-gray-400 border-gray-500/20',
      },
      {
        variant: 'glass',
        color: 'success',
        className: 'text-green-600 dark:text-green-400 border-green-500/20',
      },
      {
        variant: 'glass',
        color: 'warning',
        className: 'text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
      },
      {
        variant: 'glass',
        color: 'danger',
        className: 'text-red-600 dark:text-red-400 border-red-500/20',
      },
      {
        variant: 'glass',
        color: 'info',
        className: 'text-blue-600 dark:text-blue-400 border-blue-500/20',
      },
      // Gradient variants
      {
        variant: 'gradient',
        color: 'primary',
        className: gradient('primary'),
      },
      {
        variant: 'gradient',
        color: 'secondary',
        className: 'bg-gradient-to-r from-gray-500 to-gray-700',
      },
      {
        variant: 'gradient',
        color: 'success',
        className: gradient('success'),
      },
      {
        variant: 'gradient',
        color: 'warning',
        className: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      },
      {
        variant: 'gradient',
        color: 'danger',
        className: gradient('danger'),
      },
      {
        variant: 'gradient',
        color: 'info',
        className: gradient('ocean'),
      },
      // Dot variants - simple colored circles
      {
        variant: 'dot',
        color: 'default',
        className: 'bg-gray-500 dark:bg-gray-400',
      },
      {
        variant: 'dot',
        color: 'primary',
        className: 'bg-[var(--color-primary)]',
      },
      {
        variant: 'dot',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)]',
      },
      {
        variant: 'dot',
        color: 'success',
        className: 'bg-[var(--color-success)]',
      },
      {
        variant: 'dot',
        color: 'warning',
        className: 'bg-[var(--color-warning)]',
      },
      {
        variant: 'dot',
        color: 'danger',
        className: 'bg-[var(--color-danger)]',
      },
      {
        variant: 'dot',
        color: 'info',
        className: 'bg-[var(--color-info)]',
      },
      // Notification variants - optimized for small indicators
      {
        variant: 'notification',
        color: 'default',
        className: 'bg-gray-600 text-white dark:bg-gray-400',
      },
      {
        variant: 'notification',
        color: 'primary',
        className: 'bg-primary-600 text-white',
      },
      {
        variant: 'notification',
        color: 'danger',
        className: 'bg-red-600 text-white',
      },
      {
        variant: 'notification',
        color: 'success',
        className: 'bg-green-600 text-white',
      },
      {
        variant: 'notification',
        color: 'warning',
        className: 'bg-yellow-600 text-white',
      },
      // Ping animation
      {
        ping: true,
        className: 'relative',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'medium',
      radius: 'medium',
      ping: false,
    },
  }
);

export interface BadgeProps
  extends Omit<HTMLMotionProps<'span'>, 'color'>,
    VariantProps<typeof badgeVariants> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  animate?: boolean;
  max?: number; // Maximum number to display (e.g., 99+)
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, color, size, radius, ping, startContent, endContent, animate = false, max, children, style, ...props }, ref) => {

    // Format content based on max prop
    const displayContent = React.useMemo(() => {
      if (typeof children === 'number' && max && children > max) {
        return `${max}+`;
      }
      return children;
    }, [children, max]);

    const content = (
      <>
        {ping && (
          <span className="absolute inset-0 -z-10">
            <span className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              variant === 'notification' ? 'bg-current' : 'bg-current/50'
            )} />
          </span>
        )}
        {variant !== 'dot' && (
          <>
            {startContent && <span className="mr-1">{startContent}</span>}
            {displayContent}
            {endContent && <span className="ml-1">{endContent}</span>}
          </>
        )}
      </>
    );

    if (animate) {
      return (
        <motion.span
          ref={ref}
          className={cn(badgeVariants({ variant, color, size, radius, ping }), className)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.05 }}
          {...props}
        >
          {content}
        </motion.span>
      );
    }

    // Filter out motion-specific props for regular span element
    const { 
      initial, 
      animate: animateProp, 
      exit, 
      transition, 
      whileHover, 
      whileTap, 
      whileDrag,
      whileFocus,
      whileInView,
      ...htmlProps 
    } = props as any;

    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, color, size, radius, ping }), className)}
        style={style as React.CSSProperties}
        {...htmlProps}
      >
        {content}
      </span>
    );
  }
);

Badge.displayName = 'Badge';