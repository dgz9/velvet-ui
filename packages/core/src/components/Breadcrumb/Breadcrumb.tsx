import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number;
  itemClassName?: string;
  separatorClassName?: string;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ 
    className, 
    items, 
    separator, 
    maxItems = 0, 
    itemClassName,
    separatorClassName,
    ...props 
  }, ref) => {
    const { getAnimation } = useAnimation();
    
    const displayItems = maxItems > 0 && items.length > maxItems
      ? [
          items[0],
          { label: '...', href: undefined },
          ...items.slice(-(maxItems - 1))
        ]
      : items;

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn('velvet-breadcrumb', className)}
        {...props}
      >
        <ol className="flex items-center space-x-2">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1;
            const isEllipsis = item.label === '...';
            
            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span 
                    className={cn(
                      "mx-2 text-foreground-secondary",
                      separatorClassName
                    )}
                  >
                    {separator || <ChevronRight className="h-4 w-4" />}
                  </span>
                )}
                
                {isEllipsis ? (
                  <span className="text-foreground-secondary">...</span>
                ) : item.href && !isLast ? (
                  <motion.a
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground",
                      itemClassName
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={getAnimation('snappy')}
                  >
                    {item.icon}
                    {item.label}
                  </motion.a>
                ) : (
                  <span 
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium",
                      isLast ? "text-foreground" : "text-foreground-secondary",
                      itemClassName
                    )}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.icon}
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';