import React, { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';
import { macOSGlass, glass } from '../../utils/glass';

const modalVariants = cva(
  'velvet-modal relative',
  {
    variants: {
      variant: {
        default: 'bg-background shadow-2xl',
        glass: macOSGlass.window + ' shadow-2xl',
        glassStrong: glass('strong') + ' shadow-2xl',
        glassMedium: glass('medium') + ' shadow-xl',
        elevated: 'bg-background shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]',
      },
      size: {
        small: 'max-w-sm w-full rounded-xl',
        medium: 'max-w-lg w-full rounded-xl',
        large: 'max-w-2xl w-full rounded-xl',
        xlarge: 'max-w-4xl w-full rounded-2xl',
        full: 'w-screen h-screen rounded-none flex flex-col',
      },
    },
    defaultVariants: {
      variant: 'glass',
      size: 'medium',
    },
  }
);

export interface ModalProps extends Omit<HTMLMotionProps<'div'>, 'children' | 'size'>, VariantProps<typeof modalVariants> {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  backdropClassName?: string;
  backdrop?: 'blur' | 'dark' | 'light' | 'none' | 'glass';
  animation?: 'fade' | 'scale' | 'slide' | 'zoom' | 'flip' | 'bounce';
  scrollBehavior?: 'inside' | 'outside';
  zIndex?: number;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({
    open,
    onClose,
    children,
    closeOnBackdrop = true,
    closeOnEscape = true,
    className,
    backdropClassName,
    variant,
    size,
    backdrop = 'blur',
    animation = 'scale',
    scrollBehavior = 'outside',
    zIndex = 1040,
    ...props
  }, ref) => {
    const { getAnimation } = useAnimation();

    useEffect(() => {
      if (!closeOnEscape || !open) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose?.();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [closeOnEscape, open, onClose]);

    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);

    if (typeof window === 'undefined') return null;

    const backdropStyles = {
      blur: 'bg-foreground/40 backdrop-blur-2xl',
      dark: 'bg-foreground/70',
      light: 'bg-background/70 backdrop-blur-xl',
      glass: 'bg-foreground/20 backdrop-blur-3xl backdrop-saturate-150',
      none: 'bg-transparent',
    };

    const animationVariants = {
      fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      },
      scale: {
        initial: { opacity: 0, scale: 0.85, y: 30 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
      },
      slide: {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
      },
      zoom: {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 },
      },
      flip: {
        initial: { opacity: 0, rotateX: -90 },
        animate: { opacity: 1, rotateX: 0 },
        exit: { opacity: 0, rotateX: 90 },
      },
      bounce: {
        initial: { opacity: 0, scale: 0.3, y: -50 },
        animate: { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: {
            type: 'spring',
            damping: 15,
            stiffness: 300,
          }
        },
        exit: { opacity: 0, scale: 0.5, y: -30 },
      },
    };

    const selectedAnimation = animationVariants[animation];

    return createPortal(
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={cn(
                'velvet-modal-backdrop fixed inset-0',
                backdropStyles[backdrop],
                backdropClassName
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={getAnimation('smooth')}
              onClick={closeOnBackdrop ? onClose : undefined}
              style={{ zIndex }}
            />
            <div className={cn(
              "velvet-modal-container fixed inset-0 flex items-center justify-center",
              size !== 'full' && 'p-4',
              scrollBehavior === 'outside' && 'overflow-y-auto'
            )}
            style={{ zIndex: zIndex + 10 }}>
              <motion.div
                ref={ref}
                className={cn(
                  modalVariants({ variant, size }),
                  scrollBehavior === 'inside' && size !== 'full' && 'flex flex-col max-h-[90vh]',
                  scrollBehavior === 'inside' && size === 'full' && 'max-h-screen',
                  className
                )}
                initial={selectedAnimation.initial}
                animate={selectedAnimation.animate}
                exit={selectedAnimation.exit}
                transition={getAnimation('windowOpen')}
                onClick={(e) => e.stopPropagation()}
                style={{ perspective: '1000px' }}
                {...props}
              >
                {children}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>,
      document.body
    );
  }
);

Modal.displayName = 'Modal';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, onClose, showCloseButton = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'velvet-modal-header flex items-center justify-between px-6 py-4 border-b border-gray-200/20 dark:border-gray-700/20',
          className
        )}
        {...props}
      >
        <div className="flex-1">{children}</div>
        {showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="velvet-modal-close ml-4 p-2 rounded-lg hover:bg-muted/50 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:scale-110"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

ModalHeader.displayName = 'ModalHeader';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollable?: boolean;
}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, scrollable, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'velvet-modal-body px-6 py-4',
          scrollable && 'overflow-y-auto flex-1',
          className
        )}
        {...props}
      />
    );
  }
);

ModalBody.displayName = 'ModalBody';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'velvet-modal-footer flex items-center justify-end gap-3 px-6 py-4 border-t border-border/20 bg-gradient-to-r from-muted/50 to-muted/70 backdrop-blur-sm mt-auto rounded-b-xl',
          className
        )}
        {...props}
      />
    );
  }
);

ModalFooter.displayName = 'ModalFooter';