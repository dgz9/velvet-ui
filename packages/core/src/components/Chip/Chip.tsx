import React, { forwardRef, useState } from 'react';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { X, Check } from 'lucide-react';

const chipVariants = cva(
  'velvet-chip inline-flex items-center justify-center font-medium select-none',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'bg-transparent border-2',
        soft: '',
        glass: 'backdrop-blur-xl border',
        gradient: 'text-white',
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
        small: 'h-6 px-2 text-xs gap-1 rounded-full',
        medium: 'h-8 px-3 text-sm gap-1.5 rounded-full',
        large: 'h-10 px-4 text-base gap-2 rounded-full',
      },
      clickable: {
        true: 'cursor-pointer hover:shadow-md active:scale-95',
        false: '',
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: 'solid',
        color: 'default',
        className: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
      },
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-primary-600 text-white hover:bg-primary-700',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-gray-600 text-white hover:bg-gray-700',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'bg-green-600 text-white hover:bg-green-700',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-yellow-600 text-white hover:bg-yellow-700',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'bg-red-600 text-white hover:bg-red-700',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-blue-600 text-white hover:bg-blue-700',
      },
      // Outline variants
      {
        variant: 'outline',
        color: 'default',
        className: 'border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-gray-600 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900/20',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-yellow-600 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20',
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      },
      // Soft variants
      {
        variant: 'soft',
        color: 'default',
        className: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
      },
      {
        variant: 'soft',
        color: 'primary',
        className: 'bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-900/30 dark:text-primary-300 dark:hover:bg-primary-900/50',
      },
      {
        variant: 'soft',
        color: 'secondary',
        className: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-900/50',
      },
      {
        variant: 'soft',
        color: 'danger',
        className: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50',
      },
      // Glass variants
      {
        variant: 'glass',
        color: 'default',
        className: 'bg-white/10 border-white/20 text-gray-700 hover:bg-white/20 dark:text-gray-300',
      },
      {
        variant: 'glass',
        color: 'primary',
        className: 'bg-primary-500/10 border-primary-500/20 text-primary-600 hover:bg-primary-500/20 dark:text-primary-400',
      },
      {
        variant: 'glass',
        color: 'secondary',
        className: 'bg-gray-500/10 border-gray-500/20 text-gray-600 hover:bg-gray-500/20 dark:text-gray-400',
      },
      {
        variant: 'glass',
        color: 'success',
        className: 'bg-green-500/10 border-green-500/20 text-green-600 hover:bg-green-500/20 dark:text-green-400',
      },
      {
        variant: 'glass',
        color: 'warning',
        className: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20 dark:text-yellow-400',
      },
      {
        variant: 'glass',
        color: 'danger',
        className: 'bg-red-500/10 border-red-500/20 text-red-600 hover:bg-red-500/20 dark:text-red-400',
      },
      {
        variant: 'glass',
        color: 'info',
        className: 'bg-blue-500/10 border-blue-500/20 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400',
      },
      // Gradient variants
      {
        variant: 'gradient',
        color: 'primary',
        className: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
      },
      {
        variant: 'gradient',
        color: 'secondary',
        className: 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800',
      },
      {
        variant: 'gradient',
        color: 'success',
        className: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
      },
      {
        variant: 'gradient',
        color: 'warning',
        className: 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700',
      },
      {
        variant: 'gradient',
        color: 'danger',
        className: 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700',
      },
      {
        variant: 'gradient',
        color: 'info',
        className: 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'medium',
      clickable: false,
    },
  }
);

export interface ChipProps
  extends Omit<HTMLMotionProps<'div'>, 'color' | 'size'>,
    VariantProps<typeof chipVariants> {
  label: string;
  onDelete?: () => void;
  deleteIcon?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ 
    className, 
    variant, 
    color, 
    size,
    clickable,
    label,
    onDelete,
    deleteIcon,
    startContent,
    endContent,
    selected = false,
    onClick,
    ...props 
  }, ref) => {
    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsDeleting(true);
      setTimeout(() => {
        onDelete?.();
      }, 200);
    };

    const handleClick = () => {
      if (clickable || onClick) {
        onClick?.();
      }
    };

    const isClickable = clickable || !!onClick;

    return (
      <AnimatePresence>
        {!isDeleting && (
          <motion.div
            ref={ref}
            className={cn(
              chipVariants({ variant, color, size, clickable: isClickable }),
              selected && 'ring-2 ring-primary-500 ring-offset-2',
              className
            )}
            onClick={handleClick}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={isClickable ? { scale: 1.05 } : {}}
            whileTap={isClickable ? { scale: 0.95 } : {}}
            transition={{ duration: 0.15 }}
            {...props}
          >
            {selected && !startContent && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Check className={cn(
                  'flex-shrink-0',
                  size === 'small' && 'h-3 w-3',
                  size === 'medium' && 'h-4 w-4',
                  size === 'large' && 'h-5 w-5'
                )} />
              </motion.div>
            )}
            
            {startContent && (
              <span className="flex-shrink-0">{startContent}</span>
            )}
            
            <span className="truncate">{label}</span>
            
            {endContent && !onDelete && (
              <span className="flex-shrink-0">{endContent}</span>
            )}
            
            {onDelete && (
              <button
                onClick={handleDelete}
                className={cn(
                  'flex-shrink-0 ml-1 -mr-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors',
                  size === 'small' && 'p-0.5',
                  size === 'medium' && 'p-1',
                  size === 'large' && 'p-1.5'
                )}
              >
                {deleteIcon || (
                  <X className={cn(
                    size === 'small' && 'h-3 w-3',
                    size === 'medium' && 'h-4 w-4',
                    size === 'large' && 'h-5 w-5'
                  )} />
                )}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

Chip.displayName = 'Chip';

// ChipGroup component for managing multiple chips
export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 'small' | 'medium' | 'large';
}

export const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>(
  ({ className, gap = 'medium', ...props }, ref) => {
    const gapClasses = {
      small: 'gap-1',
      medium: 'gap-2',
      large: 'gap-3',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'velvet-chip-group flex flex-wrap items-center',
          gapClasses[gap],
          className
        )}
        {...props}
      />
    );
  }
);

ChipGroup.displayName = 'ChipGroup';