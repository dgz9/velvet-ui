import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const typographyVariants = cva(
  'velvet-typography',
  {
    variants: {
      variant: {
        h1: 'text-5xl font-bold tracking-tight',
        h2: 'text-4xl font-bold tracking-tight',
        h3: 'text-3xl font-bold',
        h4: 'text-2xl font-semibold',
        h5: 'text-xl font-semibold',
        h6: 'text-lg font-semibold',
        lead: 'text-xl',
        body: 'text-base',
        body1: 'text-base',
        body2: 'text-sm',
        small: 'text-sm',
        caption: 'text-xs',
        overline: 'text-xs uppercase tracking-wider font-medium',
        subtitle1: 'text-base font-medium',
        subtitle2: 'text-sm font-medium',
      },
      color: {
        default: 'text-[var(--color-foreground)]',
        primary: 'text-[var(--color-primary)]',
        secondary: 'text-[var(--color-secondary)]',
        success: 'text-[var(--color-success)]',
        warning: 'text-[var(--color-warning)]',
        danger: 'text-[var(--color-danger)]',
        info: 'text-[var(--color-info)]',
        muted: 'text-[var(--color-foreground-secondary)]',
        inherit: 'text-inherit',
      },
      gradient: {
        none: '',
        primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent',
        secondary: 'bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent',
        success: 'bg-gradient-to-r from-[var(--color-success)] to-[var(--color-primary)] bg-clip-text text-transparent',
        danger: 'bg-gradient-to-r from-[var(--color-danger)] to-[var(--color-warning)] bg-clip-text text-transparent',
        info: 'bg-gradient-to-r from-[var(--color-info)] to-[var(--color-primary)] bg-clip-text text-transparent',
        rainbow: 'bg-gradient-to-r from-[var(--color-danger)] via-[var(--color-warning)] via-[var(--color-success)] via-[var(--color-info)] to-[var(--color-primary)] bg-clip-text text-transparent',
        sunset: 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent',
        ocean: 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent',
        forest: 'bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent',
        candy: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent',
        metal: 'bg-gradient-to-r from-slate-500 via-gray-600 to-zinc-700 bg-clip-text text-transparent',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
        inherit: '',
      },
      weight: {
        thin: 'font-thin',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black',
      },
      gutterBottom: {
        true: 'mb-4',
        false: '',
      },
      noWrap: {
        true: 'whitespace-nowrap overflow-hidden text-ellipsis',
        false: '',
      },
      italic: {
        true: 'italic',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'body1',
      color: 'default',
      gradient: 'none',
      gutterBottom: false,
      noWrap: false,
      italic: false,
    },
  }
);

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  lead: 'p',
  body: 'p',
  body1: 'p',
  body2: 'p',
  small: 'span',
  caption: 'span',
  overline: 'span',
  subtitle1: 'h6',
  subtitle2: 'h6',
} as const;

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
  children?: React.ReactNode;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ 
    className, 
    variant = 'body1',
    color,
    gradient,
    align,
    weight,
    gutterBottom,
    noWrap,
    italic,
    component,
    children,
    ...props 
  }, ref) => {
    const Component = component || variantMapping[variant || 'body1'] || 'span';
    
    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants({ 
            variant, 
            color: gradient && gradient !== 'none' ? undefined : color, 
            gradient,
            align, 
            weight,
            gutterBottom, 
            noWrap,
            italic,
            className 
          })
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';