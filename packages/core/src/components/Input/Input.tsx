import React, { forwardRef, useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';
import { macosTokens } from '@velvet-ui/tokens';

const inputVariants = cva(
  'velvet-input w-full rounded-[5px] border bg-[var(--color-background)] px-3.5 text-[13px] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-foreground-tertiary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-[var(--color-border)] shadow-sm hover:border-[var(--color-border-secondary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20',
        glass: 'backdrop-blur-md bg-[var(--color-background-overlay)] border-[var(--color-border)] shadow-sm focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20',
        error: 'border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-2 focus:ring-[var(--color-danger)]/20 bg-[var(--color-danger)]/5',
        success: 'border-[var(--color-success)] focus:border-[var(--color-success)] focus:ring-2 focus:ring-[var(--color-success)]/20 bg-[var(--color-success)]/5',
      },
      size: {
        small: 'text-[12px]',
        medium: 'text-[13px]',
        large: 'text-[15px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const inputHeightVariants = cva(
  '',
  {
    variants: {
      size: {
        small: 'h-7',
        medium: 'h-8',
        large: 'h-10',
      },
      hasLabel: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'small',
        hasLabel: true,
        class: 'h-10',
      },
      {
        size: 'medium',
        hasLabel: true,
        class: 'h-11',
      },
      {
        size: 'large',
        hasLabel: true,
        class: 'h-12',
      },
    ],
    defaultVariants: {
      size: 'medium',
      hasLabel: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, label, error, success, helperText, id: providedId, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(!!props.value || !!props.defaultValue);
    const { getAnimation } = useAnimation();
    const generatedId = useId();
    const id = providedId || generatedId;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      setFilled(!!e.target.value);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilled(!!e.target.value);
      props.onChange?.(e);
    };

    const inputVariant = error ? 'error' : success ? 'success' : variant;
    const message = error || success || helperText;

    const hasPlaceholder = !!props.placeholder;
    const isDateTimeInput = props.type === 'date' || props.type === 'time' || props.type === 'datetime-local' || props.type === 'month' || props.type === 'week';
    const shouldFloat = focused || filled || !!props.value || !!props.defaultValue || hasPlaceholder || isDateTimeInput;

    return (
      <div className="velvet-input-wrapper">
        {label && (
          <div className="relative">
            <input
              ref={ref}
              id={id}
              className={cn(
                inputVariants({ variant: inputVariant, size, className }),
                inputHeightVariants({ size, hasLabel: true }),
                'peer pt-4 pb-1'
              )}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={hasPlaceholder ? props.placeholder : ''}
              {...props}
            />
            <motion.label
              htmlFor={id}
              className="absolute left-3.5 text-[var(--color-foreground-secondary)] pointer-events-none"
              initial={false}
              animate={{
                y: shouldFloat ? 0 : 0,
                scale: shouldFloat ? 0.846 : 1,
                color: focused ? 'var(--color-primary)' : 'var(--color-foreground-secondary)',
              }}
              transition={{ 
                duration: macosTokens.animation.duration.fast,
                ease: macosTokens.animation.easing.smooth               }}
              style={{
                top: shouldFloat ? '3px' : '50%',
                translateY: shouldFloat ? '0%' : '-50%',
                transformOrigin: 'left center',
              }}
            >
              {label}
            </motion.label>
          </div>
        )}
        {!label && (
          <input
            ref={ref}
            id={id}
            className={cn(
              inputVariants({ variant: inputVariant, size, className }),
              inputHeightVariants({ size, hasLabel: false }),
              'py-3'
            )}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
        )}
        <AnimatePresence>
          {message && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ 
                duration: macosTokens.animation.duration.fast,
                ease: macosTokens.animation.easing.smooth               }}
              className={cn(
                'mt-1 text-[11px] px-3.5',
                error && 'text-[var(--color-danger)]',
                success && 'text-[var(--color-success)]',
                !error && !success && 'text-[var(--color-foreground-tertiary)]'
              )}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';