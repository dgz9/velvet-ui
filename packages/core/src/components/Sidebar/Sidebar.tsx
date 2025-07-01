import React, { forwardRef, useState, createContext, useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { glass } from '../../utils/glass';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X } from 'lucide-react';

const sidebarVariants = cva(
  'velvet-sidebar flex flex-col h-full',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-b from-background/95 via-surface/50 to-background/95 backdrop-blur-sm border-r border-border/50',
        glass: glass('light') + ' bg-gradient-to-b from-primary/[0.03] via-transparent to-secondary/[0.03] backdrop-blur-2xl backdrop-saturate-150 border-r border-white/[0.08] dark:border-white/[0.06] shadow-xl shadow-black/[0.03] dark:shadow-black/[0.1]',
        elevated: 'bg-gradient-to-b from-background-elevated via-surface to-background-elevated shadow-2xl border-r border-border/30',
        gradient: 'bg-gradient-to-b from-primary/[0.08] via-background/90 to-secondary/[0.08] backdrop-blur-2xl border-r border-border/20',
      },
      size: {
        small: 'w-56',
        medium: 'w-64',
        large: 'w-80',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const sidebarItemVariants = cva(
  'velvet-sidebar-item flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer relative overflow-hidden group',
  {
    variants: {
      active: {
        true: 'bg-gradient-to-r from-primary/[0.12] to-primary/[0.06] text-primary font-medium shadow-sm border border-primary/10 dark:from-primary/[0.15] dark:to-primary/[0.08]',
        false: 'hover:bg-primary/[0.06] dark:hover:bg-primary/[0.08] text-foreground-secondary hover:text-foreground backdrop-blur-sm',
      },
    },
  }
);

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export interface SidebarProviderProps {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  isMobile?: boolean;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ 
  children, 
  defaultCollapsed = false,
  isMobile = false,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [isMobileState, setIsMobile] = useState(isMobile);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, isMobile: isMobileState, setIsMobile }}>
      {children}
    </SidebarContext.Provider>
  );
};

export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  collapsible?: boolean;
  overlay?: boolean;
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, variant, size, collapsible = true, overlay = false, children, ...props }, ref) => {
    const { collapsed, setCollapsed, isMobile } = useSidebar();

    return (
      <>
        {/* Mobile overlay */}
        {isMobile && overlay && !collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setCollapsed(true)}
          />
        )}

        {/* Sidebar */}
        <motion.aside
          ref={ref}
          initial={false}
          animate={{
            width: collapsed ? (isMobile ? 0 : 80) : 'auto',
            x: isMobile && collapsed ? -300 : 0,
          }}
          transition={{
            width: {
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            },
            x: {
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            },
          }}
          className={cn(
            sidebarVariants({ variant, size }),
            'relative z-40',
            isMobile && 'fixed top-16 left-0 h-[calc(100vh-4rem)]',
            isMobile && collapsed && '-translate-x-full',
            className
          )}
        >
          {/* Toggle button */}
          {collapsible && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className={cn(
                'absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full',
                'bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-md border border-white/50 dark:border-gray-700/50 shadow-lg',
                'hover:from-white hover:to-white/90 dark:hover:from-gray-700 dark:hover:to-gray-800 hover:shadow-xl hover:scale-110',
                isMobile && 'hidden'
              )}
            >
              <motion.div
                animate={{ rotate: collapsed ? 0 : 180 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <ChevronRight className="h-3 w-3 text-gray-600 dark:text-gray-400" />
              </motion.div>
            </button>
          )}

          {/* Mobile close button */}
          {isMobile && !collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          )}

          <div className={cn(
            'flex-1 overflow-y-auto overflow-x-hidden',
            // Custom scrollbar styles
            '[&::-webkit-scrollbar]:w-2.5',
            '[&::-webkit-scrollbar]:h-2.5',
            '[&::-webkit-scrollbar-track]:bg-transparent',
            '[&::-webkit-scrollbar-track]:rounded-full',
            '[&::-webkit-scrollbar-track]:my-1',
            // Thumb styles
            '[&::-webkit-scrollbar-thumb]:bg-gray-300/50',
            '[&::-webkit-scrollbar-thumb]:rounded-full',
            '[&::-webkit-scrollbar-thumb]:border-[3px]',
            '[&::-webkit-scrollbar-thumb]:border-solid',
            '[&::-webkit-scrollbar-thumb]:border-transparent',
            '[&::-webkit-scrollbar-thumb]:bg-clip-padding',
            '[&::-webkit-scrollbar-thumb]:transition-colors',
            '[&::-webkit-scrollbar-thumb]:duration-200',
            // Dark mode
            'dark:[&::-webkit-scrollbar-thumb]:bg-gray-700/50',
            // Hover state
            '[&:hover]::[&::-webkit-scrollbar-thumb]:bg-gray-400/70',
            'dark:[&:hover]::[&::-webkit-scrollbar-thumb]:bg-gray-600/70',
            // Active scrolling
            '[&::-webkit-scrollbar-thumb:hover]:bg-gray-500/80',
            'dark:[&::-webkit-scrollbar-thumb:hover]:bg-gray-500/80',
            '[&::-webkit-scrollbar-thumb:active]:bg-gray-600/90',
            'dark:[&::-webkit-scrollbar-thumb:active]:bg-gray-400/90',
            // Firefox scrollbar
            'scrollbar-thin',
            'scrollbar-track-transparent',
            'scrollbar-thumb-gray-300/50',
            'dark:scrollbar-thumb-gray-700/50'
          )}>
            {children}
          </div>
        </motion.aside>
      </>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, ...props }, ref) => {
    const { collapsed, isMobile } = useSidebar();

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-3 px-4 py-4 border-b border-border/50 bg-gradient-to-r from-primary/[0.05] via-transparent to-secondary/[0.05] backdrop-blur-sm',
          collapsed && !isMobile && 'justify-center px-0',
          className
        )}
        {...props}
      >
        <AnimatePresence mode="wait">
          {collapsed && !isMobile ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 25,
                mass: 0.8,
              }}
              className="flex items-center justify-center"
            >
              {React.Children.toArray(children)[0]}
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.2,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="flex items-center gap-3"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

SidebarHeader.displayName = 'SidebarHeader';

export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex-1 py-4', className)}
        {...props}
      />
    );
  }
);

SidebarContent.displayName = 'SidebarContent';

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, label, children, ...props }, ref) => {
    const { collapsed, isMobile } = useSidebar();

    return (
      <div
        ref={ref}
        className={cn('mb-6', className)}
        {...props}
      >
        {label && (
          <div
            className={cn(
              'px-4 mb-2 text-xs font-medium uppercase tracking-wider text-foreground-tertiary',
              collapsed && !isMobile && 'text-center px-0 opacity-60'
            )}
          >
            <span className={cn(
              'block',
              collapsed && !isMobile && 'w-6 mx-auto truncate'
            )}>
              {collapsed && !isMobile ? label.charAt(0) : label}
            </span>
          </div>
        )}
        <div className="space-y-1">{children}</div>
      </div>
    );
  }
);

SidebarGroup.displayName = 'SidebarGroup';

export interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  href?: string;
}

export const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, icon, active = false, badge, children, onClick, href, ...props }, ref) => {
    const { collapsed, isMobile } = useSidebar();
    
    const content = (
      <>
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent dark:via-primary/[0.12]"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        {icon && (
          <span className={cn('flex-shrink-0', collapsed && !isMobile && 'mx-auto')}>
            {icon}
          </span>
        )}
        <AnimatePresence mode="wait">
          {(!collapsed || isMobile) && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{
                opacity: { duration: 0.2, ease: 'easeOut' },
                width: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                },
              }}
              className="flex-1 text-left overflow-hidden whitespace-nowrap"
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
        {badge && (!collapsed || isMobile) && (
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/15 px-1.5 text-xs font-medium text-primary dark:text-primary shadow-sm border border-primary/20"
          >
            {badge}
          </motion.span>
        )}
      </>
    );

    const itemClasses = cn(
      sidebarItemVariants({ active }),
      'mx-2',
      collapsed && !isMobile && 'justify-center',
      className
    );

    if (href) {
      const Component = 'a' as any;
      return (
        <Component
          ref={ref}
          href={href}
          className={itemClasses}
          onClick={onClick}
        >
          {content}
        </Component>
      );
    }

    return (
      <div
        ref={ref}
        className={itemClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </div>
    );
  }
);

SidebarItem.displayName = 'SidebarItem';

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mt-auto border-t border-border/50 p-4 bg-gradient-to-t from-muted/30 to-transparent', className)}
        {...props}
      />
    );
  }
);

SidebarFooter.displayName = 'SidebarFooter';

// Mobile trigger button
export interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SidebarTrigger = forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, ...props }, ref) => {
    const { setCollapsed } = useSidebar();

    return (
      <button
        ref={ref}
        onClick={() => setCollapsed(false)}
        className={cn(
          'p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden',
          className
        )}
        {...props}
      >
        <Menu className="h-5 w-5" />
      </button>
    );
  }
);

SidebarTrigger.displayName = 'SidebarTrigger';