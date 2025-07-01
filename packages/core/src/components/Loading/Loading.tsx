import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const loadingVariants = cva('velvet-loading', {
  variants: {
    variant: {
      spinner: 'velvet-loading-spinner',
      dots: 'velvet-loading-dots flex gap-1',
      pulse: 'velvet-loading-pulse',
      bars: 'velvet-loading-bars flex gap-1',
    },
    size: {
      small: 'scale-75',
      medium: 'scale-100',
      large: 'scale-125',
    },
    color: {
      primary: 'text-[var(--color-primary)]',
      secondary: 'text-[var(--color-secondary)]',
      success: 'text-[var(--color-success)]',
      warning: 'text-[var(--color-warning)]',
      danger: 'text-[var(--color-danger)]',
      info: 'text-[var(--color-info)]',
      current: 'text-current',
    },
  },
  defaultVariants: {
    variant: 'spinner',
    size: 'medium',
    color: 'primary',
  },
});

export interface LoadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof loadingVariants> {}

export const Loading: React.FC<LoadingProps> = ({
  className,
  variant,
  size,
  color,
  ...props
}) => {
  if (variant === 'spinner') {
    return (
      <div className={cn(loadingVariants({ variant, size, color }), className)} {...props}>
        <motion.svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </motion.svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn(loadingVariants({ variant, size, color }), className)} {...props}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-current"
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={cn(loadingVariants({ variant, size, color }), className)} {...props}>
        <motion.div
          className="w-12 h-12 rounded-full bg-current"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    );
  }

  if (variant === 'bars') {
    return (
      <div className={cn(loadingVariants({ variant, size, color }), className)} {...props}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-8 bg-current rounded-full"
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};