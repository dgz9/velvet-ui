import React, { forwardRef, useState } from 'react';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { glass, gradient, glow } from '../../utils/glass';
import { Plus, X } from 'lucide-react';

const fabVariants = cva(
  'velvet-fab fixed z-40 flex items-center justify-center font-medium shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        solid: 'text-white',
        glass: glass('medium') + ' backdrop-blur-xl',
        gradient: 'text-white',
        glow: 'text-white',
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
        small: 'h-10 w-10 text-sm',
        medium: 'h-14 w-14 text-base',
        large: 'h-16 w-16 text-lg',
      },
      position: {
        'bottom-right': 'bottom-6 right-6 sm:bottom-8 sm:right-8',
        'bottom-left': 'bottom-6 left-6 sm:bottom-8 sm:left-8',
        'top-right': 'top-20 right-6 sm:top-24 sm:right-8',
        'top-left': 'top-20 left-6 sm:top-24 sm:left-8',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-2xl',
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-primary-600 hover:bg-primary-700 focus-visible:ring-primary-500',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-gray-600 hover:bg-gray-700 focus-visible:ring-gray-500',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'bg-green-600 hover:bg-green-700 focus-visible:ring-green-500',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-yellow-600 hover:bg-yellow-700 focus-visible:ring-yellow-500',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'bg-red-600 hover:bg-red-700 focus-visible:ring-red-500',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500',
      },
      // Glass variants
      {
        variant: 'glass',
        color: 'primary',
        className: 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
      },
      {
        variant: 'glass',
        color: 'secondary',
        className: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/20',
      },
      // Gradient variants
      {
        variant: 'gradient',
        color: 'primary',
        className: gradient('primary'),
      },
      {
        variant: 'gradient',
        color: 'success',
        className: gradient('success'),
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
        className: 'bg-primary-600 ' + glow('primary'),
      },
      {
        variant: 'glow',
        color: 'success',
        className: 'bg-green-600 ' + glow('success'),
      },
      {
        variant: 'glow',
        color: 'danger',
        className: 'bg-red-600 ' + glow('danger'),
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'medium',
      position: 'bottom-right',
      shape: 'circle',
    },
  }
);

export interface FabAction {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
}

export interface FabProps
  extends Omit<HTMLMotionProps<'button'>, 'size' | 'color'>,
    VariantProps<typeof fabVariants> {
  icon?: React.ReactNode;
  label?: string;
  actions?: FabAction[];
  expandDirection?: 'up' | 'down' | 'left' | 'right';
}

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({ 
    className, 
    variant, 
    color, 
    size, 
    position,
    shape,
    icon = <Plus className="h-6 w-6" />,
    label,
    actions = [],
    expandDirection = 'up',
    ...props 
  }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      if (actions.length > 0) {
        setIsExpanded(!isExpanded);
      }
    };

    const getActionPosition = (index: number) => {
      const spacing = size === 'small' ? 50 : size === 'large' ? 80 : 65;
      const offset = (index + 1) * spacing;

      switch (expandDirection) {
        case 'up':
          return { x: 0, y: -offset };
        case 'down':
          return { x: 0, y: offset };
        case 'left':
          return { x: -offset, y: 0 };
        case 'right':
          return { x: offset, y: 0 };
        default:
          return { x: 0, y: -offset };
      }
    };

    return (
      <>
        {/* Action buttons */}
        <AnimatePresence>
          {isExpanded && actions.map((action, index) => {
            const { x, y } = getActionPosition(index);
            return (
              <motion.button
                key={index}
                initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  x, 
                  y, 
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.05,
                  }
                }}
                exit={{ 
                  scale: 0, 
                  x: 0, 
                  y: 0, 
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    delay: (actions.length - index - 1) * 0.05,
                  }
                }}
                onClick={() => {
                  action.onClick();
                  setIsExpanded(false);
                }}
                className={cn(
                  fabVariants({ 
                    variant: 'glass', 
                    color: action.color || 'primary', 
                    size: size === 'large' ? 'medium' : 'small', 
                    position, 
                    shape 
                  }),
                  'group'
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {action.icon}
                {/* Tooltip */}
                <span className={cn(
                  'absolute px-2 py-1 text-xs font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity',
                  expandDirection === 'up' && 'bottom-full mb-2 left-1/2 -translate-x-1/2',
                  expandDirection === 'down' && 'top-full mt-2 left-1/2 -translate-x-1/2',
                  expandDirection === 'left' && 'right-full mr-2 top-1/2 -translate-y-1/2',
                  expandDirection === 'right' && 'left-full ml-2 top-1/2 -translate-y-1/2'
                )}>
                  {action.label}
                </span>
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          ref={ref}
          className={cn(fabVariants({ variant, color, size, position, shape }), className)}
          onClick={handleToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isExpanded ? { rotate: 45 } : { rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          {...props}
        >
          <AnimatePresence mode="wait">
            {isExpanded && actions.length > 0 ? (
              <motion.div
                key="close"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className={cn(
                  size === 'small' && 'h-4 w-4',
                  size === 'medium' && 'h-6 w-6',
                  size === 'large' && 'h-8 w-8'
                )} />
              </motion.div>
            ) : (
              <motion.div
                key="icon"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Label (if provided and not expanded) */}
          {label && !isExpanded && (
            <span className={cn(
              'absolute px-2 py-1 text-xs font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded whitespace-nowrap pointer-events-none opacity-0 hover:opacity-100 transition-opacity',
              position?.includes('right') ? 'right-full mr-2' : 'left-full ml-2',
              'top-1/2 -translate-y-1/2'
            )}>
              {label}
            </span>
          )}
        </motion.button>

        {/* Backdrop for expanded state */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30"
              onClick={() => setIsExpanded(false)}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);

Fab.displayName = 'Fab';