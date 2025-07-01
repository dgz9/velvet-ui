import React, { forwardRef, useState, useId, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';
import { macosTokens } from '@velvet-ui/tokens';
import { Input, InputProps } from '../Input';
import { zIndex } from '../../utils/zIndex';

// Removed dropdownVariants as we're using portal with inline styles

// Removed optionVariants - using inline styles to match Select component

export interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface AutocompleteProps extends Omit<InputProps, 'onChange' | 'value'> {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string) => void;
  onInputChange?: (value: string) => void;
  filterOptions?: (options: AutocompleteOption[], inputValue: string) => AutocompleteOption[];
  renderOption?: (option: AutocompleteOption, isSelected: boolean) => React.ReactNode;
  placeholder?: string;
  loading?: boolean;
  loadingText?: string;
  noOptionsText?: string;
  clearable?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
}

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      value,
      onChange,
      onInputChange,
      filterOptions,
      renderOption,
      placeholder,
      loading = false,
      loadingText = 'Loading...',
      noOptionsText = 'No options',
      clearable = true,
      color = 'primary',
      variant,
      className,
      ...inputProps
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { getAnimation } = useAnimation();
    const generatedId = useId();
    const id = inputProps.id || generatedId;

    useEffect(() => {
      const selectedOption = options.find(opt => opt.value === value);
      if (selectedOption) {
        setInputValue(selectedOption.label);
      }
    }, [value, options]);

    useEffect(() => {
      if (isOpen && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 4,
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
        if (isOpen && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          setDropdownPosition({
            top: rect.bottom + 4,
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


    const defaultFilterOptions = (opts: AutocompleteOption[], searchValue: string) => {
      const lowerSearchValue = searchValue.toLowerCase();
      return opts.filter(option => 
        option.label.toLowerCase().includes(lowerSearchValue)
      );
    };

    const filteredOptions = useMemo(() => {
      if (!isOpen) return [];
      const filterFn = filterOptions || defaultFilterOptions;
      return filterFn(options, inputValue);
    }, [options, inputValue, isOpen, filterOptions]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setIsOpen(true);
      setHighlightedIndex(-1);
      onInputChange?.(newValue);
      
      if (newValue === '' && clearable) {
        onChange?.('');
      }
    };

    const handleInputFocus = () => {
      setIsOpen(true);
    };

    const handleInputBlur = () => {
      setTimeout(() => {
        setIsOpen(false);
        const selectedOption = options.find(opt => opt.value === value);
        if (selectedOption) {
          setInputValue(selectedOption.label);
        }
      }, 200);
    };

    const handleOptionClick = (option: AutocompleteOption) => {
      if (option.disabled) return;
      
      setInputValue(option.label);
      onChange?.(option.value);
      setIsOpen(false);
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        setIsOpen(true);
        return;
      }

      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            handleOptionClick(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          inputRef.current?.blur();
          break;
      }
    };

    useEffect(() => {
      if (dropdownRef.current && highlightedIndex >= 0) {
        const highlightedElement = dropdownRef.current.querySelector(
          `[data-index="${highlightedIndex}"]`
        );
        highlightedElement?.scrollIntoView({ block: 'nearest' });
      }
    }, [highlightedIndex]);

    const inputVariant = inputProps.error ? 'error' : inputProps.success ? 'success' : variant;

    return (
      <div ref={containerRef} className={cn('velvet-autocomplete relative', className)} data-velvet-dropdown-open={isOpen}>
        <Input
          ref={inputRef}
          id={id}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          variant={inputVariant}
          autoComplete="off"
          {...inputProps}
        />
        
        {typeof window !== 'undefined' && createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={dropdownRef}
                className={cn(
                  'velvet-dropdown-portal fixed max-h-60 overflow-y-auto overflow-x-hidden rounded-[5px] border bg-[var(--color-background-overlay)] py-1 pr-1 shadow-lg backdrop-blur-xl',
                  inputVariant === 'default' && 'border-[var(--color-border)]',
                  inputVariant === 'glass' && 'border-[var(--color-border)] bg-[var(--color-background-overlay)]/95',
                  inputVariant === 'error' && 'border-[var(--color-danger)]/50',
                  inputVariant === 'success' && 'border-[var(--color-success)]/50'
                )}
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                style={{ 
                  zIndex: zIndex.dropdown,
                  top: dropdownPosition.top,
                  left: dropdownPosition.left,
                  width: dropdownPosition.width,
                  pointerEvents: 'auto'
                }}
              >
              {loading ? (
                <div className="px-3 py-2 text-[13px] text-[var(--color-foreground-tertiary)]">
                  {loadingText}
                </div>
              ) : filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-[13px] text-[var(--color-foreground-tertiary)]">
                  {noOptionsText}
                </div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isSelected = option.value === value;
                  const isHighlighted = index === highlightedIndex;
                  
                  return (
                    <motion.div
                      key={option.value}
                      data-index={index}
                      data-highlighted={isHighlighted}
                      className={cn(
                        "px-3 py-1.5 cursor-pointer text-[13px]",
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
                        isSelected && cn(
                          "font-medium",
                          color === 'primary' && "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
                          color === 'secondary' && "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
                          color === 'success' && "bg-[var(--color-success)]/10 text-[var(--color-success)]",
                          color === 'warning' && "bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
                          color === 'danger' && "bg-[var(--color-danger)]/10 text-[var(--color-danger)]",
                          color === 'info' && "bg-[var(--color-info)]/10 text-[var(--color-info)]",
                          // Default fallback when no color matches
                          !['primary', 'secondary', 'success', 'warning', 'danger', 'info'].includes(color || '') && "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        ),
                        isHighlighted && "bg-[var(--color-background-secondary)]"
                      )}
                      onClick={() => handleOptionClick(option)}
                      whileHover={!option.disabled ? { scale: 1.02 } : {}}
                      whileTap={!option.disabled ? { scale: 0.98 } : {}}
                      transition={{ duration: 0.1 }}
                    >
                      {renderOption ? renderOption(option, isSelected) : option.label}
                    </motion.div>
                  );
                })
              )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';