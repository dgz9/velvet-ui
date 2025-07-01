import React, { forwardRef, useState, useRef, useEffect, cloneElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { macOSGlass, glass } from '../../utils/glass';
import { Portal } from '../Portal';

const tooltipVariants = cva(
  'velvet-tooltip fixed z-50 font-medium rounded-md pointer-events-none whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 dark:bg-gray-800 text-white shadow-lg',
        glass: glass('medium') + ' text-foreground shadow-lg',
        light: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700',
      },
      size: {
        small: 'px-2 py-1 text-xs',
        medium: 'px-2.5 py-1.5 text-sm',
        large: 'px-3 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

export type TooltipPlacement = 
  | 'top' 
  | 'top-start' 
  | 'top-end'
  | 'bottom' 
  | 'bottom-start' 
  | 'bottom-end'
  | 'left' 
  | 'left-start' 
  | 'left-end'
  | 'right' 
  | 'right-start' 
  | 'right-end';

export interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  children: React.ReactElement;
  content: React.ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  offset?: number;
  arrow?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  contentClassName?: string;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ 
    children, 
    content,
    variant,
    size,
    placement = 'top',
    delay = 200,
    offset = 6,
    arrow = false,
    open: controlledOpen,
    onOpenChange,
    className,
    contentClassName,
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLElement>(null);
    const [tooltipElement, setTooltipElement] = useState<HTMLDivElement | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    const open = controlledOpen !== undefined ? controlledOpen : isOpen;

    const calculatePosition = () => {
      if (!triggerRef.current || !tooltipElement) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      
      // Get the actual width and height of the tooltip
      const tooltipWidth = tooltipElement.offsetWidth;
      const tooltipHeight = tooltipElement.offsetHeight;
      
      const { innerWidth, innerHeight } = window;

      let top = 0;
      let left = 0;

      // Calculate base position
      switch (placement) {
        case 'top':
          top = triggerRect.top - tooltipHeight - offset;
          left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2;
          break;
        case 'top-start':
          top = triggerRect.top - tooltipHeight - offset;
          left = triggerRect.left;
          break;
        case 'top-end':
          top = triggerRect.top - tooltipHeight - offset;
          left = triggerRect.right - tooltipWidth;
          break;
        case 'bottom':
          top = triggerRect.bottom + offset;
          left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2;
          break;
        case 'bottom-start':
          top = triggerRect.bottom + offset;
          left = triggerRect.left;
          break;
        case 'bottom-end':
          top = triggerRect.bottom + offset;
          left = triggerRect.right - tooltipWidth;
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2;
          left = triggerRect.left - tooltipWidth - offset;
          break;
        case 'left-start':
          top = triggerRect.top;
          left = triggerRect.left - tooltipWidth - offset;
          break;
        case 'left-end':
          top = triggerRect.bottom - tooltipHeight;
          left = triggerRect.left - tooltipWidth - offset;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2;
          left = triggerRect.right + offset;
          break;
        case 'right-start':
          top = triggerRect.top;
          left = triggerRect.right + offset;
          break;
        case 'right-end':
          top = triggerRect.bottom - tooltipHeight;
          left = triggerRect.right + offset;
          break;
      }

      // Boundary checking
      if (left < 8) left = 8;
      if (left + tooltipWidth > innerWidth - 8) {
        left = innerWidth - tooltipWidth - 8;
      }
      if (top < 8) top = 8;
      if (top + tooltipHeight > innerHeight - 8) {
        top = innerHeight - tooltipHeight - 8;
      }

      setPosition({ top, left });
    };

    useEffect(() => {
      if (open && tooltipElement) {
        calculatePosition();
        
        window.addEventListener('resize', calculatePosition);
        window.addEventListener('scroll', calculatePosition);
        return () => {
          window.removeEventListener('resize', calculatePosition);
          window.removeEventListener('scroll', calculatePosition);
        };
      }
    }, [open, placement, offset, tooltipElement]);

    const handleMouseEnter = () => {
      if (controlledOpen !== undefined) return;
      
      timeoutRef.current = setTimeout(() => {
        setIsOpen(true);
        onOpenChange?.(true);
      }, delay);
    };

    const handleMouseLeave = () => {
      if (controlledOpen !== undefined) return;
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(false);
      onOpenChange?.(false);
    };

    const getArrowStyles = () => {
      const baseArrowStyles = cn(
        'absolute w-2 h-2 rotate-45',
        variant === 'default' && 'bg-gray-900 dark:bg-gray-800',
        variant === 'glass' && 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-md',
        variant === 'light' && 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700'
      );

      switch (placement) {
        case 'top':
          return cn(baseArrowStyles, '-bottom-1 left-1/2 -translate-x-1/2');
        case 'top-start':
          return cn(baseArrowStyles, '-bottom-1 left-3');
        case 'top-end':
          return cn(baseArrowStyles, '-bottom-1 right-3');
        case 'bottom':
          return cn(baseArrowStyles, '-top-1 left-1/2 -translate-x-1/2');
        case 'bottom-start':
          return cn(baseArrowStyles, '-top-1 left-3');
        case 'bottom-end':
          return cn(baseArrowStyles, '-top-1 right-3');
        case 'left':
          return cn(baseArrowStyles, '-right-1 top-1/2 -translate-y-1/2');
        case 'left-start':
          return cn(baseArrowStyles, '-right-1 top-3');
        case 'left-end':
          return cn(baseArrowStyles, '-right-1 bottom-3');
        case 'right':
          return cn(baseArrowStyles, '-left-1 top-1/2 -translate-y-1/2');
        case 'right-start':
          return cn(baseArrowStyles, '-left-1 top-3');
        case 'right-end':
          return cn(baseArrowStyles, '-left-1 bottom-3');
        default:
          return baseArrowStyles;
      }
    };

    const animationVariants = {
      initial: {
        opacity: 0,
        scale: 0.9,
        y: placement.startsWith('top') ? 10 : placement.startsWith('bottom') ? -10 : 0,
        x: placement.startsWith('left') ? 10 : placement.startsWith('right') ? -10 : 0,
      },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        y: placement.startsWith('top') ? 10 : placement.startsWith('bottom') ? -10 : 0,
        x: placement.startsWith('left') ? 10 : placement.startsWith('right') ? -10 : 0,
      },
    };

    // Clone child element and attach ref and handlers
    const child = cloneElement(children, {
      ref: triggerRef,
      onMouseEnter: (e: React.MouseEvent) => {
        children.props.onMouseEnter?.(e);
        handleMouseEnter();
      },
      onMouseLeave: (e: React.MouseEvent) => {
        children.props.onMouseLeave?.(e);
        handleMouseLeave();
      },
    });

    return (
      <>
        {child}
        <Portal>
          <AnimatePresence>
            {open && content && (
              <motion.div
                ref={(node) => {
                  setTooltipElement(node);
                  if (node) {
                    // Double RAF to ensure layout is complete
                    requestAnimationFrame(() => {
                      requestAnimationFrame(() => {
                        calculatePosition();
                      });
                    });
                  }
                }}
                className={cn(
                  tooltipVariants({ variant, size }),
                  contentClassName
                )}
                style={{
                  top: position.top,
                  left: position.left,
                }}
                initial={animationVariants.initial}
                animate={animationVariants.animate}
                exit={animationVariants.exit}
                transition={{
                  duration: 0.15,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                {content}
                {arrow && <div className={getArrowStyles()} />}
              </motion.div>
            )}
          </AnimatePresence>
        </Portal>
      </>
    );
  }
);

Tooltip.displayName = 'Tooltip';