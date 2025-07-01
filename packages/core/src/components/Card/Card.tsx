import React, { forwardRef, useState } from 'react';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';
import { glass, gradient, glow, macOSGlass } from '../../utils/glass';
import { macosTokens } from '@velvet-ui/tokens';

const cardVariants = cva(
  'velvet-card will-change-transform',
  {
    variants: {
      variant: {
        default: 'bg-[var(--color-background)] shadow-sm border border-[var(--color-border)]',
        glass: 'backdrop-blur-xl bg-[var(--color-background-overlay)] border border-[var(--color-border)] shadow-md',
        glassStrong: 'backdrop-blur-2xl bg-[var(--color-background-overlay)] border border-[var(--color-border)] shadow-lg',
        glassMedium: 'backdrop-blur-lg bg-[var(--color-background-overlay)] border border-[var(--color-border)] shadow-md',
        glassSubtle: 'backdrop-blur-md bg-[var(--color-background-overlay)] border border-[var(--color-border)] shadow-sm',
        macOS: 'backdrop-blur-xl bg-[var(--color-background-overlay)] border border-[var(--color-border)] shadow-lg',
        elevated: 'bg-[var(--color-background-elevated)] shadow-xl border border-[var(--color-border)]',
        flat: 'bg-[var(--color-background-secondary)] border border-[var(--color-border)]',
        gradient: gradient('primarySubtle') + ' backdrop-blur-xl border border-border/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
        gradientAccent: gradient('accentSubtle') + ' backdrop-blur-xl border border-border/40 shadow-lg',
        gradientSuccess: gradient('successSubtle') + ' backdrop-blur-xl border border-border/40 shadow-lg',
        gradientDanger: gradient('dangerSubtle') + ' backdrop-blur-xl border border-border/40 shadow-lg',
        gradientSunset: gradient('sunset') + ' backdrop-blur-xl border border-border/40 shadow-xl text-white',
        gradientOcean: gradient('ocean') + ' backdrop-blur-xl border border-border/40 shadow-xl text-white',
        gradientAurora: gradient('aurora') + ' backdrop-blur-xl border border-border/40 shadow-xl text-white',
        glow: '',
      },
      color: {
        none: '',
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        danger: '',
        info: '',
      },
      interactive: {
        true: 'cursor-pointer',
        false: '',
      },
      overflow: {
        hidden: 'overflow-hidden',
        visible: 'overflow-visible',
        auto: 'overflow-auto',
      },
      radius: {
        none: 'rounded-none',
        small: 'rounded-[6px]',
        medium: 'rounded-[10px]',
        large: 'rounded-[16px]',
        xl: 'rounded-[20px]',
      },
    },
    compoundVariants: [
      // Glow variants with refined shadows
      {
        variant: 'glow',
        color: 'primary',
        className: glass('medium') + ' ' + glow('primary') + ' border-primary-200/30 dark:border-primary-700/30',
      },
      {
        variant: 'glow',
        color: 'secondary',
        className: glass('medium') + ' shadow-lg shadow-gray-500/20 dark:shadow-gray-400/15 border-gray-200/30 dark:border-gray-700/30',
      },
      {
        variant: 'glow',
        color: 'success',
        className: glass('medium') + ' ' + glow('success') + ' border-green-200/30 dark:border-green-700/30',
      },
      {
        variant: 'glow',
        color: 'warning',
        className: glass('medium') + ' ' + glow('warning') + ' border-yellow-200/30 dark:border-yellow-700/30',
      },
      {
        variant: 'glow',
        color: 'danger',
        className: glass('medium') + ' ' + glow('danger') + ' border-red-200/30 dark:border-red-700/30',
      },
      {
        variant: 'glow',
        color: 'info',
        className: glass('medium') + ' shadow-lg shadow-blue-500/20 dark:shadow-blue-400/15 border-blue-200/30 dark:border-blue-700/30',
      },
    ],
    defaultVariants: {
      variant: 'default',
      color: 'none',
      interactive: false,
      overflow: 'hidden',
      radius: 'medium',
    },
  }
);

export interface CardProps
  extends Omit<HTMLMotionProps<'div'>, 'color' | 'onPress' | 'children'>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
  isClickable?: boolean;
  onPress?: (e: React.MouseEvent<HTMLDivElement>) => void;
  disableRipple?: boolean;
  coverImage?: string;
  coverImageAlt?: string;
  coverImageHeight?: string | number;
  imageFill?: string;
  imageFillAlt?: string;
  imageFillOverlay?: boolean;
  imageFillGradient?: 'top' | 'bottom' | 'both' | 'none';
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant, 
    color, 
    interactive, 
    overflow, 
    radius,
    isClickable,
    onPress,
    disableRipple = false,
    coverImage,
    coverImageAlt,
    coverImageHeight = 200,
    imageFill,
    imageFillAlt,
    imageFillOverlay = true,
    imageFillGradient = 'bottom',
    children,
    ...props 
  }, ref) => {
    const { getAnimation } = useAnimation();
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleRipple = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isClickable || disableRipple) return;

      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples(prev => [...prev, { x, y, id }]);

      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 800);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      handleRipple(e);
      if (isClickable && onPress) {
        onPress(e);
      }
    };

    const isInteractive = interactive || isClickable;

    const motionProps = isInteractive
      ? {
          whileHover: { 
            scale: 1.005,
            y: -1,
            transition: {
              duration: macosTokens.animation.duration.fast,
              ease: macosTokens.animation.easing.smooth ,
            },
          },
          whileTap: { 
            scale: 0.995,
            transition: {
              duration: 0.1,
              ease: macosTokens.animation.easing.smooth ,
            },
          },
        }
      : {};

    const getGradientClass = () => {
      switch (imageFillGradient) {
        case 'top':
          return 'bg-gradient-to-b from-black/50 to-transparent';
        case 'bottom':
          return 'bg-gradient-to-t from-black/50 to-transparent';
        case 'both':
          return 'bg-gradient-to-b from-black/30 via-transparent to-black/50';
        default:
          return '';
      }
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          cardVariants({ variant, color, interactive: isInteractive, overflow, radius, className }),
          isClickable && 'relative',
          imageFill && 'relative min-h-[200px]'
        )}
        onClick={handleClick}
        style={{
          ...props.style,
          ...(imageFill && {
            backgroundImage: `url(${imageFill})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }),
        }}
        {...motionProps}
        {...props}
      >
        {imageFill && imageFillOverlay && (
          <div 
            className={cn(
              "absolute inset-0 pointer-events-none",
              getGradientClass()
            )}
            aria-hidden="true"
          />
        )}
        {coverImage && !imageFill && (
          <div 
            className="velvet-card-cover w-full overflow-hidden"
            style={{ height: coverImageHeight }}
          >
            <img 
              src={coverImage} 
              alt={coverImageAlt || ''} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className={cn('relative', imageFill && 'z-10')}>
          {children}
          {isClickable && !disableRipple && (
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <AnimatePresence>
              {ripples.map(ripple => (
                <motion.span
                  key={ripple.id}
                  className="absolute block"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 50,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.span
                    className={cn(
                      'block rounded-full',
                      variant?.includes('glass') || variant?.includes('macOS') ? 'bg-background/30' : 'bg-current opacity-[0.12]'
                    )}
                    initial={{ width: 0, height: 0 }}
                    animate={{ 
                      width: 400, 
                      height: 400,
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: macosTokens.animation.easing.out ,
                    }}
                  />
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        )}
        </div>
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showDivider?: boolean;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, showDivider = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'velvet-card-header px-6 py-6',
          showDivider && 'border-b border-border/20',
          className
        )}
        {...props}
      />
    );
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('velvet-card-body px-6 py-6', className)}
        {...props}
      />
    );
  }
);

CardBody.displayName = 'CardBody';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  showDivider?: boolean;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, showDivider = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'velvet-card-footer px-6 py-6 flex items-center',
          showDivider && 'border-t border-border/20',
          className
        )}
        {...props}
      />
    );
  }
);

CardFooter.displayName = 'CardFooter';

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, height = 200, objectFit = 'cover', style, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn('velvet-card-image w-full', className)}
        style={{
          height,
          objectFit,
          ...style,
        }}
        {...props}
      />
    );
  }
);

CardImage.displayName = 'CardImage';