import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Badge } from '../Badge/Badge';

const avatarVariants = cva(
  'velvet-avatar relative inline-flex items-center justify-center font-medium select-none shrink-0',
  {
    variants: {
      size: {
        tiny: 'h-6 w-6 text-xs',
        small: 'h-8 w-8 text-sm',
        medium: 'h-10 w-10 text-base',
        large: 'h-12 w-12 text-lg',
        xlarge: 'h-16 w-16 text-xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },
      color: {
        default: 'bg-default text-default-foreground',
        primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300',
        secondary: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300',
        success: 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-300',
        warning: 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-300',
        danger: 'bg-danger-100 text-danger-700 dark:bg-danger-900/30 dark:text-danger-300',
        info: 'bg-info-100 text-info-700 dark:bg-info-900/30 dark:text-info-300',
      },
      bordered: {
        true: 'ring-2 ring-background',
        false: '',
      },
    },
    defaultVariants: {
      size: 'medium',
      shape: 'circle',
      color: 'default',
      bordered: false,
    },
  }
);

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  badge?: React.ReactNode;
  badgePosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  badgeProps?: React.ComponentProps<typeof Badge>;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    { 
      className, 
      size, 
      shape, 
      color, 
      bordered,
      src, 
      alt = '', 
      fallback, 
      badge,
      badgePosition = 'bottom-right',
      badgeProps,
      children,
      ...props 
    }, 
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);

    const badgePositionClasses = {
      'top-right': 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
      'top-left': 'absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2',
      'bottom-right': 'absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2',
      'bottom-left': 'absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2',
    };

    const renderContent = () => {
      const content = (() => {
        if (src && !imageError) {
          return (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              onError={() => setImageError(true)}
            />
          );
        }

        if (fallback) {
          return <>{fallback}</>;
        }

        if (children) {
          return <>{children}</>;
        }

        // Default fallback - show initials or first letter
        if (alt) {
          const initials = alt
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
          return <span className="font-semibold">{initials}</span>;
        }

        return null;
      })();

      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[inherit]">
          {content}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, shape, color, bordered }), className)}
        {...props}
      >
        {renderContent()}
        {badge && (
          <div className={cn(badgePositionClasses[badgePosition], 'z-10')}>
            {typeof badge === 'string' || typeof badge === 'number' ? (
              <Badge
                size="tiny"
                variant="notification"
                color="danger"
                radius="full"
                className="min-w-[1.25rem] h-5 px-1"
                {...badgeProps}
              >
                {badge}
              </Badge>
            ) : (
              badge
            )}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

// AvatarGroup component for displaying multiple avatars
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
  spacing?: 'tight' | 'normal' | 'loose';
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max = 5, size = 'medium', spacing = 'normal', ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const displayedChildren = childrenArray.slice(0, max);
    const remainingCount = childrenArray.length - max;

    const spacingClasses = {
      tight: '-space-x-2',
      normal: '-space-x-3',
      loose: '-space-x-4',
    };

    return (
      <div
        ref={ref}
        className={cn('velvet-avatar-group flex items-center', spacingClasses[spacing], className)}
        {...props}
      >
        {displayedChildren.map((child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              key: index,
              size,
              bordered: true,
              className: cn(
                'ring-2 ring-background hover:z-10 transition-transform hover:scale-110',
                (child as React.ReactElement<any>).props.className
              ),
            });
          }
          return child;
        })}
        {remainingCount > 0 && (
          <Avatar
            size={size}
            bordered
            color="default"
            className="ring-2 ring-background hover:z-10 transition-transform hover:scale-110"
          >
            +{remainingCount}
          </Avatar>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';