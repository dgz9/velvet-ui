import React, { forwardRef, useMemo, useEffect, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { macOSGlass } from '../../utils/glass';

const heroVariants = cva(
  'velvet-hero relative overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-background',
        gradient: 'bg-gradient-to-br from-primary-50/50 via-background to-secondary-50/50 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20',
        glass: macOSGlass.window + ' bg-background/50',
        image: 'bg-cover bg-center bg-no-repeat',
      },
      size: {
        small: 'min-h-[40vh]',
        medium: 'min-h-[60vh]',
        large: 'min-h-[80vh]',
        full: 'min-h-screen',
      },
      centered: {
        true: 'flex items-center justify-center',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'large',
      centered: true,
    },
  }
);

export interface HeroProps
  extends Omit<HTMLMotionProps<'section'>, 'children'>,
    VariantProps<typeof heroVariants> {
  children?: React.ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  particles?: boolean;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ 
    className, 
    variant, 
    size, 
    centered,
    backgroundImage,
    overlay = false,
    overlayOpacity = 0.5,
    particles = false,
    children,
    style,
    ...props 
  }, ref) => {
    // Use state to ensure particles are only generated on client
    const [particleData, setParticleData] = useState<Array<{
      id: number;
      x: number;
      y: number;
      duration: number;
      delay: number;
    }>>([]);

    useEffect(() => {
      if (particles) {
        // Generate deterministic particle positions using a simple hash function
        const hash = (n: number) => {
          let x = n * 1103515245 + 12345;
          x = (x / 65536) % 32768;
          return x / 32768;
        };
        
        const data = Array.from({ length: 50 }, (_, i) => ({
          id: i,
          x: Math.floor(hash(i * 2) * 100),
          y: Math.floor(hash(i * 3) * 100),
          duration: Math.floor(hash(i * 5) * 10 + 10),
          delay: Math.floor(hash(i * 7) * 10),
        }));
        setParticleData(data);
      }
    }, [particles]);

    return (
      <motion.section
        ref={ref}
        className={cn(heroVariants({ variant, size, centered }), className)}
        style={{
          ...style,
          ...(backgroundImage && variant === 'image' && {
            backgroundImage: `url(${backgroundImage})`,
          }),
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {/* Overlay */}
        {overlay && (
          <div 
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ opacity: overlayOpacity }}
          />
        )}
        
        {/* Animated particles - only render on client */}
        {particles && particleData.length > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            {particleData.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-primary-500/20 dark:bg-primary-400/20 rounded-full"
                initial={{
                  x: `${particle.x}%`,
                  y: `${particle.y}%`,
                }}
                animate={{
                  y: [null, '-20%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </motion.section>
    );
  }
);

Hero.displayName = 'Hero';

export interface HeroContentProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'small' | 'medium' | 'large' | 'xlarge' | 'full';
}

export const HeroContent = forwardRef<HTMLDivElement, HeroContentProps>(
  ({ className, maxWidth = 'large', children, ...props }, ref) => {
    const maxWidthClasses = {
      small: 'max-w-3xl',
      medium: 'max-w-5xl',
      large: 'max-w-7xl',
      xlarge: 'max-w-[90rem]',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'velvet-hero-content mx-auto px-4 sm:px-6 lg:px-8',
          maxWidthClasses[maxWidth],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

HeroContent.displayName = 'HeroContent';

export interface HeroTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  gradient?: boolean;
}

export const HeroTitle = forwardRef<HTMLHeadingElement, HeroTitleProps>(
  ({ className, gradient = false, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          'velvet-hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight',
          gradient && 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-x',
          !gradient && 'text-foreground',
          className
        )}
        {...props}
      >
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.span>
      </h1>
    );
  }
);

HeroTitle.displayName = 'HeroTitle';

export interface HeroSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const HeroSubtitle = forwardRef<HTMLParagraphElement, HeroSubtitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'velvet-hero-subtitle text-lg sm:text-xl lg:text-2xl text-foreground-secondary',
          className
        )}
        {...props}
      >
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.span>
      </p>
    );
  }
);

HeroSubtitle.displayName = 'HeroSubtitle';

export interface HeroActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroActions = forwardRef<HTMLDivElement, HeroActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'velvet-hero-actions flex flex-col sm:flex-row gap-4 justify-center',
          className
        )}
        {...props}
      >
        <motion.div
          className="contents"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }
);

HeroActions.displayName = 'HeroActions';