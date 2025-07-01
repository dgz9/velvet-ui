import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const statVariants = cva(
  'velvet-stat',
  {
    variants: {
      variant: {
        default: '',
        glass: 'backdrop-blur-md bg-white/70 dark:bg-gray-900/70',
        gradient: 'bg-gradient-to-br',
      },
      color: {
        primary: 'from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-600/20',
        secondary: 'from-secondary-500/10 to-secondary-600/10 dark:from-secondary-500/20 dark:to-secondary-600/20',
        success: 'from-success-500/10 to-success-600/10 dark:from-success-500/20 dark:to-success-600/20',
        danger: 'from-danger-500/10 to-danger-600/10 dark:from-danger-500/20 dark:to-danger-600/20',
        warning: 'from-warning-500/10 to-warning-600/10 dark:from-warning-500/20 dark:to-warning-600/20',
        info: 'from-info-500/10 to-info-600/10 dark:from-info-500/20 dark:to-info-600/20',
      },
    },
    defaultVariants: {
      variant: 'default',
      color: 'primary',
    },
  }
);

export interface StatProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof statVariants> {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

export const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ 
    className, 
    variant, 
    color, 
    label, 
    value, 
    change, 
    changeLabel,
    icon,
    loading = false,
    ...props 
  }, ref) => {
    const isPositiveChange = change && change > 0;
    const isNegativeChange = change && change < 0;

    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-xl p-6',
          variant === 'gradient' && statVariants({ variant, color }),
          variant === 'glass' && statVariants({ variant }),
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground-secondary">{label}</p>
            
            {loading ? (
              <div className="mt-2 h-8 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-3xl font-bold"
              >
                {value}
              </motion.p>
            )}

            {change !== undefined && (
              <div className="mt-2 flex items-center gap-1.5">
                {isPositiveChange && (
                  <TrendingUp className="h-4 w-4 text-success-600 dark:text-success-400" />
                )}
                {isNegativeChange && (
                  <TrendingDown className="h-4 w-4 text-danger-600 dark:text-danger-400" />
                )}
                <span
                  className={cn(
                    'text-sm font-medium',
                    isPositiveChange && 'text-success-600 dark:text-success-400',
                    isNegativeChange && 'text-danger-600 dark:text-danger-400',
                    !isPositiveChange && !isNegativeChange && 'text-foreground-secondary'
                  )}
                >
                  {change > 0 && '+'}
                  {change}%
                </span>
                {changeLabel && (
                  <span className="text-sm text-foreground-secondary">{changeLabel}</span>
                )}
              </div>
            )}
          </div>

          {icon && (
            <div className={cn(
              'flex h-12 w-12 items-center justify-center rounded-lg',
              variant === 'gradient' && 'bg-white/50 dark:bg-gray-900/50',
              variant !== 'gradient' && 'bg-gray-100 dark:bg-gray-800'
            )}>
              {icon}
            </div>
          )}
        </div>

        {/* Decorative element */}
        {variant === 'gradient' && (
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-white/5" />
        )}
      </div>
    );
  }
);

Stat.displayName = 'Stat';

// Stat Group for organizing multiple stats
export interface StatGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
}

export const StatGroup = forwardRef<HTMLDivElement, StatGroupProps>(
  ({ className, cols = 3, children, ...props }, ref) => {
    const colsMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };

    return (
      <div
        ref={ref}
        className={cn('grid gap-4', colsMap[cols], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

StatGroup.displayName = 'StatGroup';