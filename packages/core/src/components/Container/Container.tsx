import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const containerVariants = cva(
  'velvet-container mx-auto w-full',
  {
    variants: {
      size: {
        small: 'max-w-2xl',
        medium: 'max-w-4xl',
        large: 'max-w-6xl',
        xlarge: 'max-w-7xl',
        full: 'max-w-full',
      },
      padding: {
        none: '',
        small: 'px-4 sm:px-6',
        medium: 'px-4 sm:px-6 lg:px-8',
        large: 'px-6 sm:px-8 lg:px-12',
      },
      centered: {
        true: 'flex flex-col items-center justify-center',
        false: '',
      },
    },
    defaultVariants: {
      size: 'large',
      padding: 'medium',
      centered: false,
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, centered, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size, padding, centered }), className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';