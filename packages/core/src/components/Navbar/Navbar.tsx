import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Button } from '../Button/Button';

const navbarVariants = cva(
  'velvet-navbar w-full',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-2xl supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-background/70 supports-[backdrop-filter]:via-background/60 supports-[backdrop-filter]:to-background/70 border-b border-border/50 shadow-sm',
        glass: 'velvet-glass bg-gradient-to-r from-primary/[0.03] via-transparent to-secondary/[0.03] backdrop-blur-3xl backdrop-saturate-200 border-b border-white/[0.08] dark:border-white/[0.06] shadow-lg shadow-black/[0.03] dark:shadow-black/[0.1]',
        solid: 'bg-gradient-to-r from-background via-surface to-background border-b border-border shadow-sm',
        floating: 'mx-4 mt-4 rounded-2xl bg-gradient-to-br from-background/90 via-surface/80 to-background/90 backdrop-blur-2xl supports-[backdrop-filter]:bg-gradient-to-br supports-[backdrop-filter]:from-background/80 supports-[backdrop-filter]:via-surface/70 supports-[backdrop-filter]:to-background/80 border border-border/50 shadow-2xl shadow-black/[0.08] dark:shadow-black/[0.2]',
      },
      sticky: {
        true: 'sticky top-0 z-50',
        false: 'relative',
      },
      height: {
        small: 'h-14',
        medium: 'h-16',
        large: 'h-20',
      },
    },
    defaultVariants: {
      variant: 'default',
      sticky: true,
      height: 'medium',
    },
  }
);

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  children?: React.ReactNode;
  mobileBreakpoint?: 'sm' | 'md' | 'lg';
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant, sticky, height, children, mobileBreakpoint = 'md', ...props }, ref) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <nav
        ref={ref}
        className={cn(navbarVariants({ variant, sticky, height, className }))}
        {...props}
      >
        <div className="w-full h-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex items-center h-full max-w-7xl relative">
            {/* Desktop Navigation Container */}
            <div className={cn(
              'hidden w-full items-center',
              mobileBreakpoint === 'sm' && 'sm:flex',
              mobileBreakpoint === 'md' && 'md:flex',
              mobileBreakpoint === 'lg' && 'lg:flex'
            )}>
              {children}
            </div>

            {/* Mobile Menu Button */}
            <div className={cn(
              'flex items-center ml-auto',
              mobileBreakpoint === 'sm' && 'sm:hidden',
              mobileBreakpoint === 'md' && 'md:hidden',
              mobileBreakpoint === 'lg' && 'lg:hidden'
            )}>
              <Button
                size="small"
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {mobileMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'overflow-hidden border-t border-border',
                mobileBreakpoint === 'sm' && 'sm:hidden',
                mobileBreakpoint === 'md' && 'md:hidden',
                mobileBreakpoint === 'lg' && 'lg:hidden'
              )}
            >
              <div className="px-4 py-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                  <div className="flex flex-col space-y-2">
                    {children}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';

// NavbarBrand component for logo/brand area
export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarBrand = forwardRef<HTMLDivElement, NavbarBrandProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center flex-shrink-0', className)}
        {...props}
      />
    );
  }
);

NavbarBrand.displayName = 'NavbarBrand';

// NavbarContent component for grouping navbar items
export interface NavbarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: 'start' | 'center' | 'end' | 'between';
}

export const NavbarContent = forwardRef<HTMLDivElement, NavbarContentProps>(
  ({ className, justify = 'start', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-4',
          justify === 'start' && 'justify-start',
          justify === 'center' && 'justify-center flex-1',
          justify === 'end' && 'justify-end ml-auto',
          justify === 'between' && 'justify-between w-full',
          className
        )}
        {...props}
      />
    );
  }
);

NavbarContent.displayName = 'NavbarContent';

// NavbarItem component for individual navigation items
export interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ className, active, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex items-center',
          active && 'text-foreground',
          !active && 'text-foreground-secondary',
          className
        )}
        {...props}
      />
    );
  }
);

NavbarItem.displayName = 'NavbarItem';

// NavbarLink component for navigation links
export interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ className, active, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium hover:text-foreground rounded-lg',
          active ? 'text-foreground' : 'text-foreground-secondary',
          'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:origin-center after:scale-x-0 after:transition-transform after:duration-300',
          active && 'after:scale-x-100',
          'hover:after:scale-x-100',
          'hover:bg-primary/[0.08] dark:hover:bg-primary/[0.12]',
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

NavbarLink.displayName = 'NavbarLink';