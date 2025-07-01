import React, { forwardRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Checkbox, CheckboxProps } from './Checkbox';

const checkboxGroupVariants = cva(
  'velvet-checkbox-group flex gap-3',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row flex-wrap',
        vertical: 'flex-col',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  }
);

export interface CheckboxGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'>,
    VariantProps<typeof checkboxGroupVariants> {
  options: CheckboxGroupOption[];
  value?: string[];
  onChange?: (values: string[]) => void;
  variant?: CheckboxProps['variant'];
  color?: CheckboxProps['color'];
  size?: CheckboxProps['size'];
  disabled?: boolean;
  label?: string;
  description?: string;
  required?: boolean;
}

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ 
    className, 
    orientation, 
    options, 
    value = [], 
    onChange, 
    variant,
    color,
    size,
    disabled,
    label,
    description,
    required,
    ...props 
  }, ref) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(value);

    React.useEffect(() => {
      setSelectedValues(value);
    }, [value]);

    const handleChange = (optionValue: string, checked: boolean) => {
      const newValues = checked
        ? [...selectedValues, optionValue]
        : selectedValues.filter(v => v !== optionValue);
      
      setSelectedValues(newValues);
      onChange?.(newValues);
    };

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <label className="block text-[var(--color-foreground)] font-medium text-sm">
            {label}
            {required && <span className="text-[var(--color-danger)] ml-1">*</span>}
          </label>
        )}
        {description && (
          <p className="text-[var(--color-foreground-secondary)] text-sm">
            {description}
          </p>
        )}
        <div
          className={cn(checkboxGroupVariants({ orientation }))}
          role="group"
          aria-labelledby={label ? `${label}-label` : undefined}
          aria-required={required}
        >
          {options.map((option) => (
            <Checkbox
              key={option.value}
              label={option.label}
              checked={selectedValues.includes(option.value)}
              onChange={(e) => handleChange(option.value, e.target.checked)}
              disabled={disabled || option.disabled}
              variant={variant}
              color={color}
              size={size}
            />
          ))}
        </div>
      </div>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';