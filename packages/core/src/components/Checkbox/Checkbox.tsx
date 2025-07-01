import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';

const checkboxVariants = cva(
  'velvet-checkbox relative inline-flex items-center justify-center rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--velvet-focus-ring-offset))] disabled:opacity-40 disabled:pointer-events-none select-none cursor-pointer',
  {
    variants: {
      variant: {
        solid: 'border-2',
        outline: 'bg-transparent border-2',
        ghost: 'bg-transparent border-2',
        glass: 'velvet-glass backdrop-blur-xl border-2',
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
        small: 'h-4 w-4',
        medium: 'h-5 w-5',
        large: 'h-6 w-6',
      },
    },
    compoundVariants: [
      // Solid variants - checked state
      {
        variant: 'solid',
        color: 'primary',
        className: 'border-[var(--color-border)] hover:border-[var(--color-primary)]/60 data-[checked=true]:bg-[var(--color-primary)] data-[checked=true]:border-[var(--color-primary)] focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'border-[var(--color-border)] hover:border-[var(--color-secondary)]/60 data-[checked=true]:bg-[var(--color-secondary)] data-[checked=true]:border-[var(--color-secondary)] focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'border-[var(--color-border)] hover:border-[var(--color-success)]/60 data-[checked=true]:bg-[var(--color-success)] data-[checked=true]:border-[var(--color-success)] focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'border-[var(--color-border)] hover:border-[var(--color-warning)]/60 data-[checked=true]:bg-[var(--color-warning)] data-[checked=true]:border-[var(--color-warning)] focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'border-[var(--color-border)] hover:border-[var(--color-danger)]/60 data-[checked=true]:bg-[var(--color-danger)] data-[checked=true]:border-[var(--color-danger)] focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'border-[var(--color-border)] hover:border-[var(--color-info)]/60 data-[checked=true]:bg-[var(--color-info)] data-[checked=true]:border-[var(--color-info)] focus-visible:ring-[var(--color-info)]',
      },
      // Outline variants
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 data-[checked=true]:bg-[var(--color-primary)]/10 focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 data-[checked=true]:bg-[var(--color-secondary)]/10 focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-[var(--color-success)] hover:bg-[var(--color-success)]/10 data-[checked=true]:bg-[var(--color-success)]/10 focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-[var(--color-warning)] hover:bg-[var(--color-warning)]/10 data-[checked=true]:bg-[var(--color-warning)]/10 focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'border-[var(--color-danger)] hover:bg-[var(--color-danger)]/10 data-[checked=true]:bg-[var(--color-danger)]/10 focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-[var(--color-info)] hover:bg-[var(--color-info)]/10 data-[checked=true]:bg-[var(--color-info)]/10 focus-visible:ring-[var(--color-info)]',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'medium',
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'type'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, color, size, label, checked, defaultChecked, indeterminate, disabled, onChange, ...props }, ref) => {
    const { getAnimation } = useAnimation();
    
    // Determine if component is controlled
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
    
    // Use checked prop if controlled, otherwise use internal state
    const isChecked = isControlled ? checked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      onChange?.(e);
    };

    const checkIconPath = indeterminate
      ? "M5 12h14" // Minus sign for indeterminate
      : "M5 13l4 4L19 7"; // Checkmark

    return (
      <label className={cn(
        "inline-flex items-center gap-2 cursor-pointer",
        disabled && "cursor-not-allowed"
      )}>
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            className="sr-only"
            {...(isControlled ? { checked: isChecked } : { defaultChecked })}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />
          <motion.div
            className={cn(checkboxVariants({ variant, color, size, className }))}
            data-checked={isChecked}
            whileTap={{ scale: 0.9 }}
            transition={getAnimation('snappy')}
          >
            <AnimatePresence mode="wait">
              {(isChecked || indeterminate) && (
                <motion.svg
                  className={cn(
                    "absolute inset-0 p-0.5",
                    variant === 'solid' ? "text-white" : `text-[var(--color-${color})]`
                  )}
                  viewBox="0 0 24 24"
                  fill="none"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={getAnimation('bouncy')}
                >
                  <motion.path
                    d={checkIconPath}
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        {label && (
          <span className={cn(
            "text-[var(--color-foreground)] select-none leading-none",
            size === 'small' && 'text-[13px]',
            size === 'medium' && 'text-[14px]',
            size === 'large' && 'text-[15px]',
            disabled && "opacity-40"
          )}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';