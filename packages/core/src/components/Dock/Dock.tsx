import React, { forwardRef, useState, useRef, useCallback } from 'react';
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { macosTokens } from '@velvet-ui/tokens';

const dockVariants = cva(
  'velvet-dock flex items-end gap-3 px-3 py-2 backdrop-blur-2xl bg-[var(--color-background-overlay)] border border-[var(--color-border)] shadow-2xl',
  {
    variants: {
      variant: {
        default: '',
        glass: 'bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10',
      },
      position: {
        bottom: 'rounded-2xl',
        left: 'flex-col rounded-2xl',
        right: 'flex-col rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'bottom',
    },
  }
);

export interface DockProps
  extends Omit<HTMLMotionProps<'div'>, 'position' | 'children'>,
    VariantProps<typeof dockVariants> {
  magnification?: number;
  distance?: number;
  children?: React.ReactNode;
}

export interface DockItemProps extends HTMLMotionProps<'button'> {
  icon: React.ReactNode;
  label?: string;
  badge?: string | number;
  isActive?: boolean;
  magnification?: number;
  distance?: number;
  position?: 'bottom' | 'left' | 'right';
}

const DockItem = forwardRef<HTMLButtonElement, DockItemProps>(
  ({ 
    icon, 
    label, 
    badge,
    isActive = false,
    magnification = 2,
    distance = 140,
    position = 'bottom',
    className,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const itemRef = useRef<HTMLButtonElement>(null);
    const mouseX = useMotionValue(Infinity);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      mouseX.set(e.clientX - centerX);
    }, [mouseX]);

    const handleMouseLeave = useCallback(() => {
      mouseX.set(Infinity);
      setIsHovered(false);
    }, [mouseX]);

    const springConfig = { damping: 20, stiffness: 300 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    
    const scaleX = useTransform(
      mouseXSpring,
      [-distance, 0, distance],
      [1, magnification, 1]
    );

    const scale = useSpring(scaleX, springConfig);

    return (
      <motion.button
        ref={ref}
        className={cn(
          'velvet-dock-item relative flex items-center justify-center w-12 h-12 rounded-xl',
          'bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10',
          isActive && 'bg-[var(--color-primary)]/10',
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
        style={{
          scale,
          transformOrigin: position === 'bottom' ? 'bottom' : 'center',
        }}
        {...props}
      >
        {icon}
        {badge !== undefined && (
          <div className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] font-semibold bg-red-500 text-white rounded-full min-w-[18px] text-center">
            {badge}
          </div>
        )}
        {isActive && (
          <motion.div
            className={cn(
              'absolute w-1 h-1 bg-[var(--color-foreground)] rounded-full',
              position === 'bottom' && '-bottom-3',
              position === 'left' && '-right-3',
              position === 'right' && '-left-3'
            )}
            layoutId="dockActiveIndicator"
          />
        )}
        {label && isHovered && (
          <motion.div
            className={cn(
              'absolute px-2 py-1 text-xs bg-gray-900 text-white rounded-md whitespace-nowrap',
              'shadow-lg pointer-events-none',
              position === 'bottom' && '-top-8',
              position === 'left' && 'left-full ml-2',
              position === 'right' && 'right-full mr-2'
            )}
            initial={{ opacity: 0, y: position === 'bottom' ? 5 : 0, x: position !== 'bottom' ? (position === 'left' ? -5 : 5) : 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {label}
            <div 
              className={cn(
                'absolute w-0 h-0 border-4 border-transparent',
                position === 'bottom' && 'bottom-[-8px] left-1/2 -translate-x-1/2 border-t-gray-900',
                position === 'left' && 'left-[-8px] top-1/2 -translate-y-1/2 border-r-gray-900',
                position === 'right' && 'right-[-8px] top-1/2 -translate-y-1/2 border-l-gray-900'
              )}
            />
          </motion.div>
        )}
      </motion.button>
    );
  }
);

DockItem.displayName = 'DockItem';

export const Dock = forwardRef<HTMLDivElement, DockProps>(
  ({ 
    className, 
    variant, 
    position = 'bottom',
    magnification = 2,
    distance = 140,
    children,
    ...props 
  }, ref) => {
    const childrenWithProps = React.Children.map(children, child => {
      if (React.isValidElement(child) && child.type === DockItem) {
        return React.cloneElement(child as React.ReactElement<DockItemProps>, {
          magnification,
          distance,
          position: position || 'bottom',
        });
      }
      return child;
    });

    return (
      <motion.div
        ref={ref}
        className={cn(
          dockVariants({ variant, position, className })
        )}
        initial={{ opacity: 0, y: position === 'bottom' ? 20 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: macosTokens.animation.easing.smooth  }}
        {...props}
      >
        {childrenWithProps}
      </motion.div>
    );
  }
);

Dock.displayName = 'Dock';

export { DockItem };