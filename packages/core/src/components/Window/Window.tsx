import React, { forwardRef, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { macosTokens } from '@velvet-ui/tokens';

const windowVariants = cva(
  'velvet-window relative flex flex-col overflow-hidden antialiased',
  {
    variants: {
      variant: {
        default: 'bg-[var(--color-background)] shadow-xl border border-[var(--color-border)]',
        glass: 'backdrop-blur-2xl bg-[var(--color-background-overlay)] shadow-xl border border-[var(--color-border)]',
        elevated: 'bg-[var(--color-background-elevated)] shadow-2xl border border-[var(--color-border)]',
      },
      radius: {
        none: 'rounded-none',
        small: 'rounded-[8px]',
        medium: 'rounded-[10px]',
        large: 'rounded-[12px]',
      },
      size: {
        small: 'min-w-[320px] min-h-[200px]',
        medium: 'min-w-[480px] min-h-[320px]',
        large: 'min-w-[640px] min-h-[480px]',
        full: 'w-full h-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      radius: 'medium',
      size: 'medium',
    },
  }
);

export interface WindowProps
  extends Omit<HTMLMotionProps<'div'>, 'size' | 'children'>,
    VariantProps<typeof windowVariants> {
  title?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  showControls?: boolean;
  isActive?: boolean;
  draggable?: boolean;
  resizable?: boolean;
  children?: React.ReactNode;
}

interface WindowControlProps {
  type: 'close' | 'minimize' | 'maximize';
  onClick?: () => void;
  isActive?: boolean;
}

const WindowControl: React.FC<WindowControlProps> = ({ type, onClick, isActive = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    close: isActive ? '#ff5f57' : '#8e8e93',
    minimize: isActive ? '#ffbd2e' : '#8e8e93',
    maximize: isActive ? '#28ca42' : '#8e8e93',
  };

  const icons = {
    close: (
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path
          d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
          fill="currentColor"
        />
      </svg>
    ),
    minimize: (
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path
          d="M0 4C0 3.72386 0.223858 3.5 0.5 3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H0.5C0.223858 4.5 0 4.27614 0 4Z"
          fill="currentColor"
        />
      </svg>
    ),
    maximize: (
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path
          d="M1.5 0C0.671573 0 0 0.671573 0 1.5V6.5C0 7.32843 0.671573 8 1.5 8H6.5C7.32843 8 8 7.32843 8 6.5V1.5C8 0.671573 7.32843 0 6.5 0H1.5ZM1 1.5C1 1.22386 1.22386 1 1.5 1H6.5C6.77614 1 7 1.22386 7 1.5V6.5C7 6.77614 6.77614 7 6.5 7H1.5C1.22386 7 1 6.77614 1 6.5V1.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  };

  return (
    <motion.button
      className={cn(
        'velvet-window-control w-3 h-3 rounded-full flex items-center justify-center',
        !isActive && 'cursor-default'
      )}
      style={{
        backgroundColor: colors[type],
      }}
      onClick={isActive ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={isActive ? { scale: 1.1 } : {}}
      whileTap={isActive ? { scale: 0.95 } : {}}
    >
      {isHovered && isActive && (
        <span className={cn(
          'text-black/60',
          type === 'close' && 'text-red-900/60',
          type === 'minimize' && 'text-yellow-900/60',
          type === 'maximize' && 'text-green-900/60'
        )}>
          {icons[type]}
        </span>
      )}
    </motion.button>
  );
};

export const Window = forwardRef<HTMLDivElement, WindowProps>(
  ({ 
    className, 
    variant, 
    radius, 
    size,
    title,
    onClose,
    onMinimize,
    onMaximize,
    showControls = true,
    isActive = true,
    draggable = false,
    resizable = false,
    children,
    ...props 
  }, ref) => {
    const [isDragging, setIsDragging] = useState(false);

    return (
      <motion.div
        ref={ref}
        className={cn(
          windowVariants({ variant, radius, size, className }),
          !isActive && 'opacity-95'
        )}
        drag={draggable}
        dragMomentum={false}
        dragElastic={0}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{
          cursor: isDragging ? 'grabbing' : 'auto',
        }}
        {...props}
      >
        {(showControls || title) && (
          <div className={cn(
            'velvet-window-header flex items-center px-4 h-11 border-b border-[var(--color-border)]',
            draggable && !isDragging && 'cursor-grab'
          )}>
            {showControls && (
              <div className="flex items-center gap-2 mr-4">
                <WindowControl type="close" onClick={onClose} isActive={isActive} />
                <WindowControl type="minimize" onClick={onMinimize} isActive={isActive} />
                <WindowControl type="maximize" onClick={onMaximize} isActive={isActive} />
              </div>
            )}
            {title && (
              <h3 className={cn(
                'flex-1 text-center text-[13px] font-medium',
                showControls && '-ml-20'
              )}>
                {title}
              </h3>
            )}
          </div>
        )}
        <div className="velvet-window-content flex-1 overflow-auto">
          {children}
        </div>
      </motion.div>
    );
  }
);

Window.displayName = 'Window';

export interface WindowBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const WindowBody = forwardRef<HTMLDivElement, WindowBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('velvet-window-body p-4', className)}
        {...props}
      />
    );
  }
);

WindowBody.displayName = 'WindowBody';