import React, { forwardRef, useState, useContext, createContext, useLayoutEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';

const tabsVariants = cva(
  'velvet-tabs',
  {
    variants: {
      variant: {
        solid: '',
        underlined: '',
        pills: '',
      },
      size: {
        small: '',
        medium: '',
        large: '',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'medium',
      fullWidth: false,
    },
  }
);

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant?: 'solid' | 'underlined' | 'pills';
  size?: 'small' | 'medium' | 'large';
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, variant, size, fullWidth, defaultValue, value, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const activeTab = value !== undefined ? value : internalValue;
    
    const setActiveTab = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab, variant: variant || 'solid', size: size || 'medium' }}>
        <div
          ref={ref}
          className={cn(tabsVariants({ variant, size, fullWidth }), className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('TabsList must be used within Tabs');
    
    const { variant, size, activeTab } = context;
    const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0, height: 0 });
    const tabsRef = React.useRef<HTMLDivElement | null>(null);
    
    useLayoutEffect(() => {
      if (variant === 'solid' && tabsRef.current && activeTab) {
        const activeElement = tabsRef.current.querySelector(`[data-value="${activeTab}"]`);
        if (activeElement) {
          const rect = activeElement.getBoundingClientRect();
          const parentRect = tabsRef.current.getBoundingClientRect();
          setIndicatorStyle({
            left: Math.round(rect.left - parentRect.left),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          });
        }
      }
    }, [activeTab, variant]);
    
    const mergedRef = React.useCallback((node: HTMLDivElement | null) => {
      tabsRef.current = node;
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }
    }, [ref]);
    
    return (
      <div
        ref={mergedRef}
        className={cn(
          'velvet-tabs-list relative inline-flex',
          variant === 'solid' && 'h-10 items-center justify-center rounded-md bg-background-secondary border border-border p-1',
          variant === 'underlined' && 'h-12 items-center gap-4 border-b border-border',
          variant === 'pills' && 'gap-2',
          size === 'small' && 'text-sm',
          size === 'medium' && 'text-base',
          size === 'large' && 'text-lg',
          className
        )}
        role="tablist"
        {...props}
      >
        {variant === 'solid' && (
          <motion.div
            className="absolute bg-background rounded shadow-sm"
            animate={indicatorStyle}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          />
        )}
        {children}
      </div>
    );
  }
);

TabsList.displayName = 'TabsList';

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, disabled, onClick, ...props }, ref) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('TabsTrigger must be used within Tabs');
    
    const { activeTab, setActiveTab, variant, size } = context;
    const isActive = activeTab === value;
    const [isHovered, setIsHovered] = React.useState(false);
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!disabled) {
        setActiveTab(value);
      }
    };
    
    return (
      <motion.button
        ref={ref}
        type="button"
        className={cn(
          'velvet-tabs-trigger relative inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variant === 'solid' && [
            'rounded px-3 py-1.5 z-10',
            isActive ? 'text-foreground' : 'text-foreground-secondary hover:text-foreground',
          ],
          variant === 'underlined' && [
            'h-full px-1 pb-3',
            isActive ? 'text-foreground' : 'text-foreground-secondary hover:text-foreground',
          ],
          variant === 'pills' && [
            'rounded-full px-4 py-2',
            isActive ? 'bg-primary text-primary-foreground' : 'bg-background-secondary text-foreground-secondary hover:text-foreground hover:bg-background',
          ],
          size === 'small' && 'text-sm',
          size === 'medium' && 'text-base',
          size === 'large' && 'text-lg',
          className
        )}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: variant === 'pills' ? 1.05 : 1 }}
        whileTap={{ scale: variant === 'pills' ? 0.95 : 1 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        disabled={disabled}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${value}`}
        data-value={value}
      >
        <span className="relative z-10">
          {children}
        </span>
        {variant === 'underlined' && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            initial={false}
            animate={{
              scaleX: isActive ? 1 : 0,
              opacity: isActive ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          />
        )}
        {variant === 'pills' && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/10"
            initial={false}
            animate={{
              scale: isHovered && !isActive ? 1 : 0,
              opacity: isHovered && !isActive ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          />
        )}
      </motion.button>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('TabsContent must be used within Tabs');
    
    const { activeTab } = context;
    const { getAnimation } = useAnimation();
    
    if (activeTab !== value) return null;
    
    return (
      <AnimatePresence mode="wait">
        {activeTab === value && (
          <motion.div
            ref={ref}
            key={value}
            className={cn('velvet-tabs-content mt-4', className)}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
              mass: 0.5,
            }}
          >
            <div {...props}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

TabsContent.displayName = 'TabsContent';