import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const featureVariants = cva(
  'velvet-feature group',
  {
    variants: {
      variant: {
        default: '',
        centered: 'text-center',
        card: 'rounded-xl p-6 bg-background-elevated border border-border',
        glass: 'rounded-xl p-6 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700/20',
      },
      iconPosition: {
        top: 'flex-col',
        left: 'flex-row',
        right: 'flex-row-reverse',
      },
    },
    defaultVariants: {
      variant: 'default',
      iconPosition: 'top',
    },
  }
);

export interface FeatureProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureVariants> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
}

export const Feature = forwardRef<HTMLDivElement, FeatureProps>(
  ({ 
    className, 
    variant, 
    iconPosition,
    icon,
    title,
    description,
    link,
    ...props 
  }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={variant === 'card' || variant === 'glass' ? { y: -4 } : {}}
        className={cn(
          featureVariants({ variant, iconPosition }),
          'flex gap-4',
          (variant === 'card' || variant === 'glass') && 'hover:shadow-lg',
          className
        )}
      >
        {icon && (
          <div className={cn(
            'flex-shrink-0',
            iconPosition === 'top' && 'mb-4',
            variant === 'centered' && 'mx-auto'
          )}>
            <div className={cn(
              'flex h-12 w-12 items-center justify-center rounded-lg',
              'bg-gray-100 dark:bg-gray-800/50',
              'group-hover:bg-gray-200 dark:group-hover:bg-gray-700/50',
              'transition-colors duration-200'
            )}>
              {icon}
            </div>
          </div>
        )}

        <div className="flex-1">
          <h3 className={cn(
            'mb-2 text-lg font-semibold',
            'group-hover:text-primary-600 dark:group-hover:text-primary-400',
            'transition-colors duration-200'
          )}>
            {title}
          </h3>
          
          <p className="text-foreground-secondary">{description}</p>

          {link && (
            <a
              href={link.href}
              className={cn(
                'mt-3 inline-flex items-center gap-1 text-sm font-medium',
                'text-primary-600 dark:text-primary-400',
                'hover:text-primary-700 dark:hover:text-primary-300',
                'transition-colors duration-200'
              )}
            >
              {link.label}
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    );
  }
);

Feature.displayName = 'Feature';

// Feature Grid for organizing multiple features
export interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
}

export const FeatureGrid = forwardRef<HTMLDivElement, FeatureGridProps>(
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
        className={cn('grid gap-6', colsMap[cols], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FeatureGrid.displayName = 'FeatureGrid';