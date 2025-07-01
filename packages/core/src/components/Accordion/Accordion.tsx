import React, { forwardRef, createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';

interface AccordionContextType {
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ 
    className, 
    type = 'single',
    value,
    defaultValue,
    onValueChange,
    collapsible = true,
    children,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = useState<string | string[]>(
      defaultValue || (type === 'single' ? '' : [])
    );

    const actualValue = value !== undefined ? value : internalValue;

    const handleValueChange = (newValue: string | string[]) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <AccordionContext.Provider value={{ value: actualValue, onValueChange: handleValueChange, type }}>
        <div
          ref={ref}
          className={cn('velvet-accordion space-y-2', className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error('AccordionItem must be used within Accordion');

    const isOpen = context.type === 'single' 
      ? context.value === value
      : Array.isArray(context.value) && context.value.includes(value);

    return (
      <div
        ref={ref}
        className={cn('velvet-accordion-item border rounded-lg', className)}
        data-state={isOpen ? 'open' : 'closed'}
        {...props}
      >
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { value, isOpen });
          }
          return child;
        })}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  isOpen?: boolean;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, value, isOpen, children, ...props }, ref) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error('AccordionTrigger must be used within Accordion');

    const { getAnimation } = useAnimation();

    const handleClick = () => {
      if (!value) return;

      if (context.type === 'single') {
        context.onValueChange(context.value === value ? '' : value);
      } else {
        const currentValue = context.value as string[];
        if (currentValue.includes(value)) {
          context.onValueChange(currentValue.filter(v => v !== value));
        } else {
          context.onValueChange([...currentValue, value]);
        }
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'velvet-accordion-trigger flex w-full items-center justify-between px-4 py-4 text-left font-medium transition-colors hover:bg-background-secondary',
          className
        )}
        onClick={handleClick}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={getAnimation('snappy')}
        >
          <ChevronDown className="h-4 w-4 shrink-0 text-foreground-secondary" />
        </motion.div>
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  isOpen?: boolean;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, isOpen, children, ...props }, ref) => {
    const { getAnimation } = useAnimation();

    return (
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={getAnimation('smooth')}
            className="overflow-hidden"
          >
            <div className={cn('velvet-accordion-content px-4 pb-4 pt-0', className)} {...props}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';