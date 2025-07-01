import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// Grid Container variants
const gridContainerVariants = cva(
  'velvet-grid',
  {
    variants: {
      container: {
        true: 'flex flex-wrap',
        false: '',
      },
      spacing: {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        8: '',
        10: '',
        12: '',
      },
      direction: {
        row: 'flex-row',
        'row-reverse': 'flex-row-reverse',
        column: 'flex-col',
        'column-reverse': 'flex-col-reverse',
      },
      wrap: {
        nowrap: 'flex-nowrap',
        wrap: 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse',
      },
      alignItems: {
        'flex-start': 'items-start',
        center: 'items-center',
        'flex-end': 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      justifyContent: {
        'flex-start': 'justify-start',
        center: 'justify-center',
        'flex-end': 'justify-end',
        'space-between': 'justify-between',
        'space-around': 'justify-around',
        'space-evenly': 'justify-evenly',
      },
    },
    defaultVariants: {
      container: false,
      direction: 'row',
      wrap: 'wrap',
      alignItems: 'stretch',
    },
  }
);

// Grid Item size type
type GridSize = boolean | 'auto' | number;

// Map of grid sizes to Tailwind width classes
const gridSizeMap: Record<number, string> = {
  1: 'w-1/12',
  2: 'w-2/12',
  3: 'w-3/12',
  4: 'w-4/12',
  5: 'w-5/12',
  6: 'w-6/12',
  7: 'w-7/12',
  8: 'w-8/12',
  9: 'w-9/12',
  10: 'w-10/12',
  11: 'w-11/12',
  12: 'w-full',
};

// Helper to get size classes
const getSizeClasses = (size: GridSize, breakpoint?: string): string => {
  if (size === true) {
    const classes = 'flex-grow flex-shrink basis-0';
    return breakpoint ? 
      `${breakpoint}:flex-grow ${breakpoint}:flex-shrink ${breakpoint}:basis-0` : 
      classes;
  }
  
  if (size === 'auto') {
    const classes = 'flex-grow-0 flex-shrink-0 basis-auto w-auto';
    return breakpoint ? 
      `${breakpoint}:flex-grow-0 ${breakpoint}:flex-shrink-0 ${breakpoint}:basis-auto ${breakpoint}:w-auto` : 
      classes;
  }
  
  if (typeof size === 'number' && size >= 1 && size <= 12) {
    const widthClass = gridSizeMap[size];
    const classes = `flex-grow-0 flex-shrink-0 ${widthClass} max-w-full`;
    return breakpoint ? 
      `${breakpoint}:flex-grow-0 ${breakpoint}:flex-shrink-0 ${breakpoint}:${widthClass} ${breakpoint}:max-w-full` : 
      classes;
  }
  
  return '';
};

// Map of spacing values to actual pixel values
const spacingToPx: Record<number, number> = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
};

export interface GridProps extends 
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof gridContainerVariants> {
  component?: React.ElementType;
  item?: boolean;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  zeroMinWidth?: boolean;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ 
    className, 
    container,
    item,
    spacing,
    direction,
    wrap,
    alignItems,
    justifyContent,
    component: Component = 'div',
    xs,
    sm,
    md,
    lg,
    xl,
    zeroMinWidth,
    style,
    children,
    ...props 
  }, ref) => {
    
    // If it's a container
    if (container) {
      // Calculate negative margin for spacing
      const spacingPx = spacing ? spacingToPx[spacing] || 0 : 0;
      const marginStyle = spacingPx ? {
        margin: `-${spacingPx / 2}px`,
        width: `calc(100% + ${spacingPx}px)`,
        ...style,
      } : style;

      // Clone children to add padding if spacing is set
      const childrenWithSpacing = spacingPx ? React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Grid) {
          return React.cloneElement(child as React.ReactElement<any>, {
            style: {
              padding: `${spacingPx / 2}px`,
              ...child.props.style,
            },
          });
        }
        return child;
      }) : children;

      return (
        <Component
          ref={ref}
          className={cn(
            'flex flex-wrap box-border',
            gridContainerVariants({ container: true, direction, wrap, alignItems, justifyContent }),
            className
          )}
          style={marginStyle}
          {...props}
        >
          {childrenWithSpacing}
        </Component>
      );
    }

    // If it's an item
    if (item || xs || sm || md || lg || xl) {
      const sizeClasses = [];
      
      // Base size (xs) - applies to all screen sizes by default
      if (xs !== undefined) {
        sizeClasses.push(getSizeClasses(xs));
      } else if (item) {
        // Default item behavior - flexible grow
        sizeClasses.push('flex-grow flex-shrink basis-0');
      }
      
      // Responsive sizes
      if (sm !== undefined) {
        sizeClasses.push(getSizeClasses(sm, 'sm'));
      }
      if (md !== undefined) {
        sizeClasses.push(getSizeClasses(md, 'md'));
      }
      if (lg !== undefined) {
        sizeClasses.push(getSizeClasses(lg, 'lg'));
      }
      if (xl !== undefined) {
        sizeClasses.push(getSizeClasses(xl, 'xl'));
      }

      return (
        <Component
          ref={ref}
          className={cn(
            'box-border',
            sizeClasses.filter(Boolean).join(' '),
            zeroMinWidth && 'min-w-0',
            className
          )}
          style={style}
          {...props}
        >
          {children}
        </Component>
      );
    }

    // Default div
    return (
      <Component
        ref={ref}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = 'Grid';