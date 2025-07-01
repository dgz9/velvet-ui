import React, { forwardRef, useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';
import { zIndex } from '../../utils/zIndex';

const selectVariants = cva(
  'velvet-select flex items-center justify-between font-medium outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--velvet-focus-ring-offset))] select-none cursor-pointer w-full',
  {
    variants: {
      variant: {
        solid: 'bg-[var(--color-background)] border border-[var(--color-border)]',
        outline: 'bg-transparent border-2',
        ghost: 'bg-transparent border border-transparent hover:bg-[var(--color-foreground)]/5',
        glass: 'velvet-glass backdrop-blur-xl border',
        underline: 'bg-transparent border-b-2 px-0',
      },
      color: {
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        danger: '',
        info: '',
      },
      size: {
        small: 'px-2.5 text-[13px] gap-1.5',
        medium: 'px-3.5 text-[14px] gap-2',
        large: 'px-5 text-[15px] gap-2.5',
      },
      radius: {
        none: 'rounded-none',
        small: 'rounded',
        medium: 'rounded-md',
        large: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: 'solid',
        color: 'primary',
        className: 'text-[var(--color-foreground)] hover:border-[var(--color-primary)]/50 focus-visible:ring-[var(--color-primary)] focus-visible:border-[var(--color-primary)]',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'text-[var(--color-foreground)] hover:border-[var(--color-secondary)]/50 focus-visible:ring-[var(--color-secondary)] focus-visible:border-[var(--color-secondary)]',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'text-[var(--color-foreground)] hover:border-[var(--color-success)]/50 focus-visible:ring-[var(--color-success)] focus-visible:border-[var(--color-success)]',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'text-[var(--color-foreground)] hover:border-[var(--color-warning)]/50 focus-visible:ring-[var(--color-warning)] focus-visible:border-[var(--color-warning)]',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'text-[var(--color-foreground)] hover:border-[var(--color-danger)]/50 focus-visible:ring-[var(--color-danger)] focus-visible:border-[var(--color-danger)]',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'text-[var(--color-foreground)] hover:border-[var(--color-info)]/50 focus-visible:ring-[var(--color-info)] focus-visible:border-[var(--color-info)]',
      },
      // Outline variants
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-[var(--color-success)] text-[var(--color-success)] hover:bg-[var(--color-success)]/10 focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-[var(--color-warning)] text-[var(--color-warning)] hover:bg-[var(--color-warning)]/10 focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'border-[var(--color-danger)] text-[var(--color-danger)] hover:bg-[var(--color-danger)]/10 focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-[var(--color-info)] text-[var(--color-info)] hover:bg-[var(--color-info)]/10 focus-visible:ring-[var(--color-info)]',
      },
      // Ghost variants
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'ghost',
        color: 'secondary',
        className: 'text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'ghost',
        color: 'success',
        className: 'text-[var(--color-success)] hover:bg-[var(--color-success)]/10 focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'ghost',
        color: 'warning',
        className: 'text-[var(--color-warning)] hover:bg-[var(--color-warning)]/10 focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'ghost',
        color: 'danger',
        className: 'text-[var(--color-danger)] hover:bg-[var(--color-danger)]/10 focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'ghost',
        color: 'info',
        className: 'text-[var(--color-info)] hover:bg-[var(--color-info)]/10 focus-visible:ring-[var(--color-info)]',
      },
      // Glass variants
      {
        variant: 'glass',
        color: 'primary',
        className: 'text-[var(--color-foreground)] border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 focus-visible:ring-[var(--color-primary)]',
      },
      {
        variant: 'glass',
        color: 'secondary',
        className: 'text-[var(--color-foreground)] border-[var(--color-secondary)]/20 hover:border-[var(--color-secondary)]/40 focus-visible:ring-[var(--color-secondary)]',
      },
      {
        variant: 'glass',
        color: 'success',
        className: 'text-[var(--color-foreground)] border-[var(--color-success)]/20 hover:border-[var(--color-success)]/40 focus-visible:ring-[var(--color-success)]',
      },
      {
        variant: 'glass',
        color: 'warning',
        className: 'text-[var(--color-foreground)] border-[var(--color-warning)]/20 hover:border-[var(--color-warning)]/40 focus-visible:ring-[var(--color-warning)]',
      },
      {
        variant: 'glass',
        color: 'danger',
        className: 'text-[var(--color-foreground)] border-[var(--color-danger)]/20 hover:border-[var(--color-danger)]/40 focus-visible:ring-[var(--color-danger)]',
      },
      {
        variant: 'glass',
        color: 'info',
        className: 'text-[var(--color-foreground)] border-[var(--color-info)]/20 hover:border-[var(--color-info)]/40 focus-visible:ring-[var(--color-info)]',
      },
      // Underline variants
      {
        variant: 'underline',
        color: 'primary',
        className: 'border-[var(--color-border)] hover:border-[var(--color-border)] focus-visible:border-[var(--color-border)] focus-visible:ring-0',
      },
      {
        variant: 'underline',
        color: 'secondary',
        className: 'border-[var(--color-border)] hover:border-[var(--color-border)] focus-visible:border-[var(--color-border)] focus-visible:ring-0',
      },
      {
        variant: 'underline',
        color: 'success',
        className: 'border-[var(--color-border)] hover:border-[var(--color-border)] focus-visible:border-[var(--color-border)] focus-visible:ring-0',
      },
      {
        variant: 'underline',
        color: 'warning',
        className: 'border-[var(--color-border)] hover:border-[var(--color-border)] focus-visible:border-[var(--color-border)] focus-visible:ring-0',
      },
      {
        variant: 'underline',
        color: 'danger',
        className: 'border-[var(--color-border)] hover:border-[var(--color-border)] focus-visible:border-[var(--color-border)] focus-visible:ring-0',
      },
      {
        variant: 'underline',
        color: 'info',
        className: 'border-[var(--color-border)] hover:border-[var(--color-border)] focus-visible:border-[var(--color-border)] focus-visible:ring-0',
      },
      // Size adjustments for underline variant
      {
        variant: 'underline',
        size: 'small',
        className: 'h-7 px-0 text-[13px] gap-1.5',
      },
      {
        variant: 'underline',
        size: 'medium',
        className: 'h-8 px-0 text-[14px] gap-2',
      },
      {
        variant: 'underline',
        size: 'large',
        className: 'h-10 px-0 text-[15px] gap-2.5',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'medium',
      radius: 'medium',
    },
  }
);

const selectHeightVariants = cva(
  '',
  {
    variants: {
      size: {
        small: 'h-7',
        medium: 'h-8',
        large: 'h-10',
      },
      hasLabel: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'small',
        hasLabel: true,
        class: 'h-11',
      },
      {
        size: 'medium',
        hasLabel: true,
        class: 'h-12',
      },
      {
        size: 'large',
        hasLabel: true,
        class: 'h-14',
      },
    ],
    defaultVariants: {
      size: 'medium',
      hasLabel: false,
    },
  }
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends VariantProps<typeof selectVariants> {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
  labelPlacement?: 'top' | 'left' | 'inside';
  clearable?: boolean;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ className, variant, color, size, radius, options, value, onChange, placeholder, disabled, label, labelPlacement = 'inside', clearable }, ref) => {
    const { getAnimation } = useAnimation();
    const [isOpen, setIsOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(
      options.find(opt => opt.value === value)
    );
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const uniqueId = useId();

    useEffect(() => {
      setSelectedOption(options.find(opt => opt.value === value));
    }, [value, options]);

    useEffect(() => {
      if (isOpen && selectRef.current) {
        const rect = selectRef.current.getBoundingClientRect();
        const dropdownHeight = 300; // max height of dropdown
        const viewportHeight = window.innerHeight;
        
        // Check if dropdown would go off screen
        let top = rect.bottom + 4;
        if (top + dropdownHeight > viewportHeight) {
          // Position above the select if not enough space below
          top = rect.top - dropdownHeight - 4;
        }
        
        setDropdownPosition({
          top: Math.max(0, top),
          left: rect.left,
          width: rect.width
        });
      }
    }, [isOpen]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          isOpen &&
          containerRef.current && 
          !containerRef.current.contains(target) &&
          dropdownRef.current &&
          !dropdownRef.current.contains(target)
        ) {
          setIsOpen(false);
        }
      };

      const handleScroll = () => {
        if (isOpen && selectRef.current) {
          const rect = selectRef.current.getBoundingClientRect();
          const dropdownHeight = 300; // max height of dropdown
          const viewportHeight = window.innerHeight;
          
          // Check if dropdown would go off screen
          let top = rect.bottom + 4;
          if (top + dropdownHeight > viewportHeight) {
            // Position above the select if not enough space below
            top = rect.top - dropdownHeight - 4;
          }
          
          setDropdownPosition({
            top: Math.max(0, top),
            left: rect.left,
            width: rect.width
          });
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleScroll);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleScroll);
      };
    }, [isOpen]);


    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return;
      setSelectedOption(option);
      onChange?.(option.value);
      setIsOpen(false);
      selectRef.current?.focus();
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedOption(undefined);
      onChange?.('');
    };

    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = () => {
      setFocused(false);
      setIsOpen(false);
    };

    const hasPlaceholder = !!placeholder;
    const shouldFloat = focused || isOpen || !!selectedOption || hasPlaceholder;

    const renderLabel = () => {
      if (!label || !labelPlacement) return null;
      
      if (labelPlacement === 'inside') {
        return (
          <motion.label
            className="absolute left-3.5 text-gray-500 dark:text-gray-400 pointer-events-none"
            initial={false}
            animate={{
              y: shouldFloat ? 0 : 0,
              scale: shouldFloat ? 0.75 : 1,
              color: focused || isOpen ? 'rgb(59, 130, 246)' : shouldFloat ? 'rgb(107, 114, 128)' : 'rgb(156, 163, 175)',
            }}
            transition={getAnimation('smooth')}
            style={{
              top: shouldFloat ? '2px' : '50%',
              translateY: shouldFloat ? '0%' : '-50%',
              transformOrigin: 'left center',
            }}
          >
            {label}
          </motion.label>
        );
      }
      
      const labelClasses = cn(
        "text-sm font-medium text-[var(--color-foreground)]",
        disabled && "opacity-50"
      );
      
      return <label className={labelClasses}>{label}</label>;
    };

    const selectContent = (
      <div ref={containerRef} className="relative w-full" data-velvet-dropdown-open={isOpen}>
        <motion.div
          ref={selectRef}
          className={cn(
            selectVariants({ variant, color, size, radius: variant === 'underline' ? 'none' : radius, className }),
            selectHeightVariants({ size, hasLabel: labelPlacement === 'inside' && !!label }),
            disabled && "opacity-50 cursor-not-allowed bg-[var(--color-foreground)]/5",
            labelPlacement === 'inside' && label && "pt-4 pb-1",
            "relative flex items-center"
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          whileTap={!disabled && variant !== 'underline' ? { scale: 0.99 } : {}}
          transition={getAnimation('snappy')}
          role="combobox"
          aria-expanded={isOpen}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          {labelPlacement === 'inside' && renderLabel()}
          <span className={cn(
            "truncate flex-1 text-left",
            !selectedOption && hasPlaceholder && "text-[var(--color-foreground-secondary)]"
          )}>
            {selectedOption?.label || (hasPlaceholder && shouldFloat ? placeholder : '')}
          </span>
          <div className="flex items-center gap-1">
            {clearable && selectedOption && (
              <motion.button
                className="h-4 w-4 flex-shrink-0 hover:opacity-70 transition-opacity"
                onClick={handleClear}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={getAnimation('snappy')}
                type="button"
              >
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}
            <motion.svg
              className={cn(
                "h-4 w-4 flex-shrink-0 transition-colors",
                isOpen && variant !== 'underline' && "text-[var(--color-primary)]",
                variant === 'underline' && isOpen && `text-[var(--color-${color})]`,
                disabled && "opacity-30"
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={getAnimation('snappy')}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        </motion.div>

        {variant === 'underline' && (
          <motion.div
            className={cn(
              "absolute bottom-0 left-0 h-[2px]",
              color === 'primary' && "bg-[var(--color-primary)]",
              color === 'secondary' && "bg-[var(--color-secondary)]",
              color === 'success' && "bg-[var(--color-success)]",
              color === 'warning' && "bg-[var(--color-warning)]",
              color === 'danger' && "bg-[var(--color-danger)]",
              color === 'info' && "bg-[var(--color-info)]"
            )}
            initial={{ width: "0%" }}
            animate={{ width: isOpen ? "100%" : "0%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        )}

        {typeof window !== 'undefined' && isOpen && createPortal(
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            pointerEvents: 'none', 
            zIndex: zIndex.dropdown
          }}>
            <motion.div
              ref={dropdownRef}
              className={cn(
                "absolute bg-[var(--color-background)] border border-[var(--color-border)] shadow-velvet-lg",
                (radius === 'none' || variant === 'underline') && 'rounded-none',
                radius === 'small' && variant !== 'underline' && 'rounded',
                radius === 'medium' && variant !== 'underline' && 'rounded-md',
                radius === 'large' && variant !== 'underline' && 'rounded-lg',
                radius === 'full' && variant !== 'underline' && 'rounded-2xl'
              )}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              style={{ 
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: dropdownPosition.width,
                pointerEvents: 'auto'
              }}
            >
              <div className="max-h-[300px] overflow-y-auto overflow-x-hidden py-1 pr-1">
                {options.map((option) => (
                  <motion.div
                    key={option.value}
                    className={cn(
                      "px-3 py-2 cursor-pointer text-[14px]",
                      option.disabled 
                        ? "opacity-40 cursor-not-allowed" 
                        : cn(
                            color === 'primary' && "hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]",
                            color === 'secondary' && "hover:bg-[var(--color-secondary)]/10 hover:text-[var(--color-secondary)]",
                            color === 'success' && "hover:bg-[var(--color-success)]/10 hover:text-[var(--color-success)]",
                            color === 'warning' && "hover:bg-[var(--color-warning)]/10 hover:text-[var(--color-warning)]",
                            color === 'danger' && "hover:bg-[var(--color-danger)]/10 hover:text-[var(--color-danger)]",
                            color === 'info' && "hover:bg-[var(--color-info)]/10 hover:text-[var(--color-info)]",
                            // Default fallback when no color matches
                            !['primary', 'secondary', 'success', 'warning', 'danger', 'info'].includes(color || '') && "hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
                          ),
                      selectedOption?.value === option.value && cn(
                        color === 'primary' && "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
                        color === 'secondary' && "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
                        color === 'success' && "bg-[var(--color-success)]/10 text-[var(--color-success)]",
                        color === 'warning' && "bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
                        color === 'danger' && "bg-[var(--color-danger)]/10 text-[var(--color-danger)]",
                        color === 'info' && "bg-[var(--color-info)]/10 text-[var(--color-info)]",
                        // Default fallback when no color matches
                        !['primary', 'secondary', 'success', 'warning', 'danger', 'info'].includes(color || '') && "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      )
                    )}
                    onClick={() => handleSelect(option)}
                    whileHover={!option.disabled ? { scale: 1.02 } : {}}
                    whileTap={!option.disabled ? { scale: 0.98 } : {}}
                    transition={{ duration: 0.1 }}
                  >
                    {option.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>,
          document.body
        )}
      </div>
    );

    if (labelPlacement === 'top' && label) {
      return (
        <div ref={ref} className="space-y-1.5">
          {renderLabel()}
          {selectContent}
        </div>
      );
    }

    if (labelPlacement === 'left' && label) {
      return (
        <div ref={ref} className="flex items-center gap-3">
          {renderLabel()}
          <div className="flex-1">
            {selectContent}
          </div>
        </div>
      );
    }

    return <div ref={ref} className="w-full">{selectContent}</div>;
  }
);

Select.displayName = 'Select';