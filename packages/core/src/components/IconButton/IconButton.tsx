import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Badge } from '../Badge/Badge';
import { Tooltip } from '../Tooltip/Tooltip';
import { glass, gradient, glow } from '../../utils/glass';

const iconButtonVariants = cva(
  'velvet-icon-button relative inline-flex items-center justify-center font-medium outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-40 disabled:pointer-events-none select-none',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'bg-transparent border',
        ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
        soft: 'border',
        glass: glass('medium') + ' backdrop-blur-xl hover:backdrop-blur-2xl',
        gradient: 'text-white hover:shadow-lg',
        glow: '',
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
        tiny: 'h-6 w-6 text-xs',
        small: 'h-8 w-8 text-sm',
        medium: 'h-10 w-10 text-base',
        large: 'h-12 w-12 text-lg',
        xlarge: 'h-14 w-14 text-xl',
      },
      radius: {
        none: 'rounded-none',
        small: 'rounded',
        medium: 'rounded-md',
        large: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: 'solid',
        color: 'default',
        className: 'bg-default text-default-foreground hover:bg-default-hover focus-visible:ring-default',
      },
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-hover)] focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'bg-[var(--color-success)] text-[var(--color-success-foreground)] hover:bg-[var(--color-success-hover)] focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-[var(--color-warning)] text-[var(--color-warning-foreground)] hover:bg-[var(--color-warning-hover)] focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'bg-[var(--color-danger)] text-[var(--color-danger-foreground)] hover:bg-[var(--color-danger-hover)] focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-[var(--color-info)] text-[var(--color-info-foreground)] hover:bg-[var(--color-info-hover)] focus-visible:ring-[var(--color-info)]',
      },
      // Outline variants
      {
        variant: 'outline',
        color: 'default',
        className: 'border-border text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-default',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-[var(--color-success)] text-[var(--color-success)] hover:bg-[var(--color-success)]/10 focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-[var(--color-warning)] text-[var(--color-warning)] hover:bg-[var(--color-warning)]/10 focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'border-[var(--color-danger)] text-[var(--color-danger)] hover:bg-[var(--color-danger)]/10 focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-[var(--color-info)] text-[var(--color-info)] hover:bg-[var(--color-info)]/10 focus-visible:ring-[var(--color-info)]',
      },
      // Ghost variants
      {
        variant: 'ghost',
        color: 'default',
        className: 'text-foreground hover:text-foreground-hover focus-visible:ring-default',
      },
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:bg-[var(--color-primary)]/10 focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'ghost',
        color: 'secondary',
        className: 'text-[var(--color-secondary)] hover:text-[var(--color-secondary-hover)] hover:bg-[var(--color-secondary)]/10 focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'ghost',
        color: 'success',
        className: 'text-[var(--color-success)] hover:text-[var(--color-success-hover)] hover:bg-[var(--color-success)]/10 focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'ghost',
        color: 'warning',
        className: 'text-[var(--color-warning)] hover:text-[var(--color-warning-hover)] hover:bg-[var(--color-warning)]/10 focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'ghost',
        color: 'danger',
        className: 'text-[var(--color-danger)] hover:text-[var(--color-danger-hover)] hover:bg-[var(--color-danger)]/10 focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'ghost',
        color: 'info',
        className: 'text-[var(--color-info)] hover:text-[var(--color-info-hover)] hover:bg-[var(--color-info)]/10 focus-visible:ring-[var(--color-info)]',
      },
      // Soft variants
      {
        variant: 'soft',
        color: 'default',
        className: 'bg-default/10 border-default/20 text-default-foreground hover:bg-default/20 focus-visible:ring-default',
      },
      {
        variant: 'soft',
        color: 'primary',
        className: 'bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'soft',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)]/10 border-[var(--color-secondary)]/20 text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/20 focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'bg-[var(--color-success)]/10 border-[var(--color-success)]/20 text-[var(--color-success)] hover:bg-[var(--color-success)]/20 focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'bg-[var(--color-warning)]/10 border-[var(--color-warning)]/20 text-[var(--color-warning)] hover:bg-[var(--color-warning)]/20 focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'soft',
        color: 'danger',
        className: 'bg-[var(--color-danger)]/10 border-[var(--color-danger)]/20 text-[var(--color-danger)] hover:bg-[var(--color-danger)]/20 focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'bg-[var(--color-info)]/10 border-[var(--color-info)]/20 text-[var(--color-info)] hover:bg-[var(--color-info)]/20 focus-visible:ring-[var(--color-info)]',
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
        className: 'bg-gradient-to-r from-gray-400 to-gray-600',
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
      // Glow variants
      {
        variant: 'glow',
        color: 'primary',
        className: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] ' + glow('primary'),
      },
      {
        variant: 'glow',
        color: 'success',
        className: 'bg-[var(--color-success)] text-[var(--color-success-foreground)] ' + glow('success'),
      },
      {
        variant: 'glow',
        color: 'danger',
        className: 'bg-[var(--color-danger)] text-[var(--color-danger-foreground)] ' + glow('danger'),
      },
      {
        variant: 'glow',
        color: 'warning',
        className: 'bg-[var(--color-warning)] text-[var(--color-warning-foreground)] ' + glow('warning'),
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'medium',
      radius: 'medium',
    },
  }
);

export interface IconButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'color'>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode;
  badge?: React.ReactNode;
  badgePosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  badgeProps?: React.ComponentProps<typeof Badge>;
  tooltip?: string;
  tooltipProps?: Omit<React.ComponentProps<typeof Tooltip>, 'children' | 'content'>;
  loading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { 
      className, 
      variant, 
      color, 
      size, 
      radius,
      icon,
      badge,
      badgePosition = 'top-right',
      badgeProps,
      tooltip,
      tooltipProps,
      loading = false,
      disabled,
      ...props 
    }, 
    ref
  ) => {
    const badgePositionClasses = {
      'top-right': 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
      'top-left': 'absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2',
      'bottom-right': 'absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2',
      'bottom-left': 'absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2',
    };

    const button = (
      <motion.button
        ref={ref}
        className={cn(iconButtonVariants({ variant, color, size, radius }), className)}
        disabled={disabled || loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...props}
      >
        <span className={cn(
          'relative flex items-center justify-center',
          loading && 'animate-spin'
        )}>
          {icon}
        </span>
        {badge && (
          <div className={cn(badgePositionClasses[badgePosition], 'z-10')}>
            {typeof badge === 'string' || typeof badge === 'number' ? (
              <Badge
                size="tiny"
                variant="notification"
                color="danger"
                radius="full"
                className="min-w-[1.25rem] h-5 px-1"
                {...badgeProps}
              >
                {badge}
              </Badge>
            ) : (
              badge
            )}
          </div>
        )}
      </motion.button>
    );

    if (tooltip) {
      return (
        <Tooltip content={tooltip} {...tooltipProps}>
          {button}
        </Tooltip>
      );
    }

    return button;
  }
);

IconButton.displayName = 'IconButton';