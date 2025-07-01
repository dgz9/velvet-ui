import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const sectionVariants = cva(
  'velvet-section',
  {
    variants: {
      spacing: {
        none: '',
        small: 'py-8 sm:py-12',
        medium: 'py-12 sm:py-16 lg:py-20',
        large: 'py-16 sm:py-20 lg:py-32',
        xlarge: 'py-20 sm:py-32 lg:py-40',
      },
      background: {
        default: '',
        secondary: 'bg-background-secondary',
        gradient: 'bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-950/20 dark:to-secondary-950/20',
        dots: 'relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_1px_1px,rgb(var(--color-border))_1px,transparent_1px)] before:bg-[length:24px_24px]',
      },
      fullWidth: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      spacing: 'medium',
      background: 'default',
      fullWidth: false,
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  component?: 'section' | 'div' | 'article';
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, background, fullWidth, component: Component = 'section', children, ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(sectionVariants({ spacing, background, fullWidth }), className)}
        {...props}
      >
        {background === 'dots' && <div className="relative z-10">{children}</div>}
        {background !== 'dots' && children}
      </Component>
    );
  }
);

Section.displayName = 'Section';