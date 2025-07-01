import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';
import { 
  X, 
  CheckCircle, 
  AlertCircle, 
  AlertTriangle, 
  Info,
  XCircle 
} from 'lucide-react';

const alertVariants = cva(
  'velvet-alert relative w-full rounded-lg border p-4',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-danger/50 text-danger dark:border-danger',
        success: 'border-success/50 text-success dark:border-success',
        warning: 'border-warning/50 text-warning dark:border-warning',
        info: 'border-info/50 text-info dark:border-info',
      },
      size: {
        small: 'p-3 text-sm',
        medium: 'p-4',
        large: 'p-5 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const iconMap = {
  default: Info,
  destructive: XCircle,
  success: CheckCircle,
  warning: AlertTriangle,
  info: AlertCircle,
};

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className, 
    variant = 'default', 
    size,
    title,
    description,
    icon,
    closable = false,
    onClose,
    children,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = useState(true);
    const { getAnimation } = useAnimation();
    
    const Icon = iconMap[variant || 'default'];
    const iconElement = icon || <Icon className={cn(
      "h-5 w-5",
      size === 'small' && "h-4 w-4",
      size === 'large' && "h-6 w-6"
    )} />;

    const handleClose = () => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 300);
    };

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            role="alert"
            className={cn(alertVariants({ variant, size }), className)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={getAnimation('smooth')}
          >
            <div className="flex">
              {iconElement && (
                <div className="flex-shrink-0">
                  {iconElement}
                </div>
              )}
              <div className={cn("flex-1", iconElement && "ml-3")}>
                {title && (
                  <h5 className={cn(
                    "mb-1 font-medium leading-none tracking-tight",
                    size === 'small' && "text-sm",
                    size === 'large' && "text-lg"
                  )}>
                    {title}
                  </h5>
                )}
                {description && (
                  <div className={cn(
                    "text-sm opacity-90",
                    size === 'large' && "text-base"
                  )}>
                    {description}
                  </div>
                )}
                {children}
              </div>
              {closable && (
                <button
                  className={cn(
                    "ml-4 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md transition-colors hover:bg-foreground/10",
                    size === 'small' && "h-5 w-5",
                    size === 'large' && "h-7 w-7"
                  )}
                  onClick={handleClose}
                  aria-label="Close alert"
                >
                  <X className={cn(
                    "h-4 w-4",
                    size === 'small' && "h-3 w-3",
                    size === 'large' && "h-5 w-5"
                  )} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

Alert.displayName = 'Alert';

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
);

AlertTitle.displayName = 'AlertTitle';

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
);

AlertDescription.displayName = 'AlertDescription';