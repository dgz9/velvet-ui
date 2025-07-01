import React, { forwardRef, useState } from 'react';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { macosTokens } from '@velvet-ui/tokens';

const sidebarVariants = cva(
  'velvet-macos-sidebar flex flex-col h-full overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-[var(--color-background-secondary)] border-r border-[var(--color-border)]',
        glass: 'backdrop-blur-xl bg-[var(--color-background-overlay)] border-r border-[var(--color-border)]',
        elevated: 'bg-[var(--color-background-elevated)] shadow-lg border-r border-[var(--color-border)]',
      },
      width: {
        narrow: 'w-48',
        default: 'w-64',
        wide: 'w-80',
      },
    },
    defaultVariants: {
      variant: 'default',
      width: 'default',
    },
  }
);

const sidebarItemVariants = cva(
  'velvet-sidebar-item relative flex items-center gap-3 px-3 py-1.5 rounded-md text-[13px] font-medium cursor-pointer select-none',
  {
    variants: {
      variant: {
        default: 'hover:bg-[var(--color-background-tertiary)]',
        ghost: 'hover:bg-black/5 dark:hover:bg-white/5',
      },
      isActive: {
        true: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
        false: 'text-[var(--color-foreground)]',
      },
    },
    defaultVariants: {
      variant: 'default',
      isActive: false,
    },
  }
);

export interface MacOSSidebarProps
  extends Omit<HTMLMotionProps<'aside'>, 'children'>,
    VariantProps<typeof sidebarVariants> {
  isCollapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  children?: React.ReactNode;
}

export interface MacOSSidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

export interface MacOSSidebarItemProps
  extends HTMLMotionProps<'button'>,
    VariantProps<typeof sidebarItemVariants> {
  icon?: React.ReactNode;
  badge?: string | number;
  children: React.ReactNode;
}

export interface MacOSSidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const SidebarSection = forwardRef<HTMLDivElement, MacOSSidebarSectionProps>(
  ({ title, collapsible = true, defaultExpanded = true, className, children, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
      <div ref={ref} className={cn('velvet-sidebar-section', className)} {...props}>
        {title && (
          <button
            className={cn(
              'flex items-center justify-between w-full px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-foreground-secondary)]',
              collapsible && 'hover:text-[var(--color-foreground)]'
            )}
            onClick={() => collapsible && setIsExpanded(!isExpanded)}
          >
            <span>{title}</span>
            {collapsible && (
              <motion.svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                animate={{ rotate: isExpanded ? 0 : -90 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </button>
        )}
        <AnimatePresence initial={false}>
          {(!collapsible || isExpanded) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: macosTokens.animation.easing.smooth  }}
              className="overflow-hidden"
            >
              <div className="px-2 pb-2">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

SidebarSection.displayName = 'SidebarSection';

const SidebarItem = forwardRef<HTMLButtonElement, MacOSSidebarItemProps>(
  ({ variant, isActive, icon, badge, className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(sidebarItemVariants({ variant, isActive, className }))}
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
        {...props}
      >
        {icon && (
          <span className={cn(
            'flex-shrink-0 w-4 h-4',
            isActive && 'text-white',
            !isActive && 'text-[var(--color-foreground-secondary)]'
          )}>
            {icon}
          </span>
        )}
        <span className="flex-1 text-left">{children}</span>
        {badge !== undefined && (
          <span className={cn(
            'flex-shrink-0 px-1.5 py-0.5 text-[10px] font-medium rounded-full',
            isActive && 'bg-white/20 text-white',
            !isActive && 'bg-[var(--color-background-tertiary)] text-[var(--color-foreground-secondary)]'
          )}>
            {badge}
          </span>
        )}
      </motion.button>
    );
  }
);

SidebarItem.displayName = 'SidebarItem';

const SidebarGroup = forwardRef<HTMLDivElement, MacOSSidebarGroupProps>(
  ({ label, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('velvet-sidebar-group', className)} {...props}>
        {label && (
          <div className="px-3 py-1 text-[11px] font-medium text-[var(--color-foreground-tertiary)]">
            {label}
          </div>
        )}
        <div className="space-y-0.5">
          {children}
        </div>
      </div>
    );
  }
);

SidebarGroup.displayName = 'SidebarGroup';

export const MacOSSidebar = forwardRef<HTMLDivElement, MacOSSidebarProps>(
  ({ 
    className, 
    variant, 
    width,
    isCollapsed = false,
    onCollapse,
    children,
    ...props 
  }, ref) => {
    return (
      <motion.aside
        ref={ref}
        className={cn(
          sidebarVariants({ variant, width, className }),
          isCollapsed && 'w-0'
        )}
        animate={{ width: isCollapsed ? 0 : 'auto' }}
        transition={{ duration: 0.3, ease: macosTokens.animation.easing.smooth  }}
        {...props}
      >
        <div className="flex-1 overflow-y-auto py-4">
          {children}
        </div>
      </motion.aside>
    );
  }
);

MacOSSidebar.displayName = 'MacOSSidebar';

export { 
  SidebarSection as MacOSSidebarSection, 
  SidebarItem as MacOSSidebarItem, 
  SidebarGroup as MacOSSidebarGroup 
};