import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const gridVariants = cva(
  'velvet-simple-grid grid',
  {
    variants: {
      cols: {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        12: 'grid-cols-12',
      },
      gap: {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        8: 'gap-8',
        10: 'gap-10',
        12: 'gap-12',
      },
    },
    defaultVariants: {
      cols: 1,
      gap: 4,
    },
  }
);

type ResponsiveCols = {
  default?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
};

export interface SimpleGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof gridVariants>, 'cols'> {
  cols?: ResponsiveCols | 1 | 2 | 3 | 4 | 5 | 6 | 12;
}

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ className, cols, gap, ...props }, ref) => {
    let colClasses = [];
    
    if (typeof cols === 'object' && cols !== null) {
      // Handle responsive cols - using explicit classes for Tailwind purging
      const colsMap: Record<number, string> = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        12: 'grid-cols-12',
      };
      
      const responsiveColsMap: Record<number, Record<string, string>> = {
        1: { sm: 'sm:grid-cols-1', md: 'md:grid-cols-1', lg: 'lg:grid-cols-1', xl: 'xl:grid-cols-1' },
        2: { sm: 'sm:grid-cols-2', md: 'md:grid-cols-2', lg: 'lg:grid-cols-2', xl: 'xl:grid-cols-2' },
        3: { sm: 'sm:grid-cols-3', md: 'md:grid-cols-3', lg: 'lg:grid-cols-3', xl: 'xl:grid-cols-3' },
        4: { sm: 'sm:grid-cols-4', md: 'md:grid-cols-4', lg: 'lg:grid-cols-4', xl: 'xl:grid-cols-4' },
        5: { sm: 'sm:grid-cols-5', md: 'md:grid-cols-5', lg: 'lg:grid-cols-5', xl: 'xl:grid-cols-5' },
        6: { sm: 'sm:grid-cols-6', md: 'md:grid-cols-6', lg: 'lg:grid-cols-6', xl: 'xl:grid-cols-6' },
        12: { sm: 'sm:grid-cols-12', md: 'md:grid-cols-12', lg: 'lg:grid-cols-12', xl: 'xl:grid-cols-12' },
      };
      
      if (cols.default) colClasses.push(colsMap[cols.default]);
      if (cols.sm) colClasses.push(responsiveColsMap[cols.sm]['sm']);
      if (cols.md) colClasses.push(responsiveColsMap[cols.md]['md']);
      if (cols.lg) colClasses.push(responsiveColsMap[cols.lg]['lg']);
      if (cols.xl) colClasses.push(responsiveColsMap[cols.xl]['xl']);
    } else if (typeof cols === 'number') {
      // Handle single cols value
      colClasses.push(gridVariants({ cols }).split(' ').find(c => c.startsWith('grid-cols-')) || '');
    }

    // Handle gap with explicit classes
    const gapClasses: Record<number, string> = {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          gap !== undefined && gap !== null && gapClasses[gap],
          colClasses.filter(Boolean),
          className
        )}
        {...props}
      />
    );
  }
);

SimpleGrid.displayName = 'SimpleGrid';

// Export as Grid for backward compatibility
export const Grid = SimpleGrid;