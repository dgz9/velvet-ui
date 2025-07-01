import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';

const dividerVariants = cva(
  'velvet-divider',
  {
    variants: {
      orientation: {
        horizontal: 'w-full h-px',
        vertical: 'h-full w-px',
      },
      variant: {
        solid: '',
        dashed: '',
        dotted: '',
        gradient: '',
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
      thickness: {
        thin: '',
        medium: '',
        thick: '',
      },
      spacing: {
        none: '',
        small: '',
        medium: '',
        large: '',
      },
      fullWidth: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Horizontal thickness
      {
        orientation: 'horizontal',
        thickness: 'thin',
        className: 'h-px',
      },
      {
        orientation: 'horizontal',
        thickness: 'medium',
        className: 'h-[2px]',
      },
      {
        orientation: 'horizontal',
        thickness: 'thick',
        className: 'h-1',
      },
      // Vertical thickness
      {
        orientation: 'vertical',
        thickness: 'thin',
        className: 'w-px',
      },
      {
        orientation: 'vertical',
        thickness: 'medium',
        className: 'w-[2px]',
      },
      {
        orientation: 'vertical',
        thickness: 'thick',
        className: 'w-1',
      },
      // Spacing for horizontal
      {
        orientation: 'horizontal',
        spacing: 'none',
        className: 'my-0',
      },
      {
        orientation: 'horizontal',
        spacing: 'small',
        className: 'my-2',
      },
      {
        orientation: 'horizontal',
        spacing: 'medium',
        className: 'my-4',
      },
      {
        orientation: 'horizontal',
        spacing: 'large',
        className: 'my-6',
      },
      // Spacing for vertical
      {
        orientation: 'vertical',
        spacing: 'none',
        className: 'mx-0',
      },
      {
        orientation: 'vertical',
        spacing: 'small',
        className: 'mx-2',
      },
      {
        orientation: 'vertical',
        spacing: 'medium',
        className: 'mx-4',
      },
      {
        orientation: 'vertical',
        spacing: 'large',
        className: 'mx-6',
      },
      // Full width for cards (matches CardBody px-6)
      {
        orientation: 'horizontal',
        fullWidth: true,
        className: '-mx-6 w-[calc(100%+3rem)]',
      },
      // Solid variants
      {
        variant: 'solid',
        color: 'default',
        className: 'bg-[var(--color-border)]',
      },
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-[var(--color-primary)]',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'bg-[var(--color-secondary)]',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'bg-[var(--color-success)]',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-[var(--color-warning)]',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'bg-[var(--color-danger)]',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'bg-[var(--color-info)]',
      },
      // Dashed variants
      {
        variant: 'dashed',
        orientation: 'horizontal',
        color: 'default',
        className: 'border-t-2 border-dashed border-[var(--color-border)] bg-transparent',
      },
      {
        variant: 'dashed',
        orientation: 'vertical',
        color: 'default',
        className: 'border-l-2 border-dashed border-[var(--color-border)] bg-transparent',
      },
      {
        variant: 'dashed',
        orientation: 'horizontal',
        color: 'primary',
        className: 'border-t-2 border-dashed border-[var(--color-primary)] bg-transparent',
      },
      {
        variant: 'dashed',
        orientation: 'vertical',
        color: 'primary',
        className: 'border-l-2 border-dashed border-[var(--color-primary)] bg-transparent',
      },
      // Dotted variants
      {
        variant: 'dotted',
        orientation: 'horizontal',
        color: 'default',
        className: 'border-t-2 border-dotted border-[var(--color-border)] bg-transparent',
      },
      {
        variant: 'dotted',
        orientation: 'vertical',
        color: 'default',
        className: 'border-l-2 border-dotted border-[var(--color-border)] bg-transparent',
      },
      // Gradient variants
      {
        variant: 'gradient',
        orientation: 'horizontal',
        color: 'default',
        className: 'bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent',
      },
      {
        variant: 'gradient',
        orientation: 'vertical',
        color: 'default',
        className: 'bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent',
      },
      {
        variant: 'gradient',
        orientation: 'horizontal',
        color: 'primary',
        className: 'bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent',
      },
      {
        variant: 'gradient',
        orientation: 'vertical',
        color: 'primary',
        className: 'bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent',
      },
      {
        variant: 'gradient',
        orientation: 'horizontal',
        color: 'secondary',
        className: 'bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent',
      },
      {
        variant: 'gradient',
        orientation: 'vertical',
        color: 'secondary',
        className: 'bg-gradient-to-b from-transparent via-[var(--color-secondary)] to-transparent',
      },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'solid',
      color: 'default',
      thickness: 'medium',
      spacing: 'medium',
      fullWidth: false,
    },
  }
);

export interface DividerProps
  extends Omit<HTMLMotionProps<'div'>, 'color'>,
    VariantProps<typeof dividerVariants> {
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
  animate?: boolean;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ 
    className, 
    orientation, 
    variant, 
    color, 
    thickness, 
    spacing, 
    fullWidth,
    label,
    labelPosition = 'center',
    animate = false,
    ...props 
  }, ref) => {
    const { getAnimation } = useAnimation();

    if (label && orientation === 'horizontal') {
      const labelClasses = cn(
        "px-3 text-sm text-[var(--color-foreground-secondary)]",
        color !== 'default' && [
          color === 'primary' && "text-[var(--color-primary)]",
          color === 'secondary' && "text-[var(--color-secondary)]",
          color === 'success' && "text-[var(--color-success)]",
          color === 'warning' && "text-[var(--color-warning)]",
          color === 'danger' && "text-[var(--color-danger)]",
          color === 'info' && "text-[var(--color-info)]",
        ]
      );

      const containerClasses = cn(
        "flex items-center",
        spacing === 'none' && 'my-0',
        spacing === 'small' && 'my-2',
        spacing === 'medium' && 'my-4',
        spacing === 'large' && 'my-6',
        fullWidth && '-mx-6',
        className
      );

      const lineClasses = cn(
        dividerVariants({ orientation, variant, color, thickness, fullWidth }),
        'my-0'
      );

      return (
        <div ref={ref} className={containerClasses}>
          {labelPosition !== 'left' && (
            <motion.div 
              className={cn(lineClasses, labelPosition === 'center' && 'flex-1')}
              initial={animate ? { scaleX: 0 } : {}}
              animate={animate ? { scaleX: 1 } : {}}
              transition={animate ? getAnimation('smooth') : {}}
            />
          )}
          <span className={labelClasses}>{label}</span>
          {labelPosition !== 'right' && (
            <motion.div 
              className={cn(lineClasses, labelPosition === 'center' && 'flex-1')}
              initial={animate ? { scaleX: 0 } : {}}
              animate={animate ? { scaleX: 1 } : {}}
              transition={animate ? getAnimation('smooth') : {}}
            />
          )}
        </div>
      );
    }

    const motionProps = animate
      ? {
          initial: orientation === 'horizontal' ? { scaleX: 0 } : { scaleY: 0 },
          animate: orientation === 'horizontal' ? { scaleX: 1 } : { scaleY: 1 },
          transition: getAnimation('smooth'),
        }
      : {};

    return (
      <motion.div
        ref={ref}
        className={cn(
          dividerVariants({ orientation, variant, color, thickness, spacing, fullWidth }),
          className
        )}
        {...motionProps}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';