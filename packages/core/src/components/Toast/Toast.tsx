import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useAnimation } from '../../hooks/useAnimation';
import { Portal } from '../Portal/Portal';

const toastVariants = cva(
  'velvet-toast relative flex items-center gap-3 w-full max-w-sm rounded-xl shadow-velvet-lg backdrop-blur-xl p-4 pointer-events-auto border',
  {
    variants: {
      variant: {
        default: 'bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-gray-100 border-gray-200/50 dark:border-gray-700/50',
        success: 'bg-green-50/95 dark:bg-green-900/30 text-green-900 dark:text-green-100 border-green-200/50 dark:border-green-800/50',
        error: 'bg-red-50/95 dark:bg-red-900/30 text-red-900 dark:text-red-100 border-red-200/50 dark:border-red-800/50',
        warning: 'bg-amber-50/95 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100 border-amber-200/50 dark:border-amber-800/50',
        info: 'bg-blue-50/95 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 border-blue-200/50 dark:border-blue-800/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ToastData extends VariantProps<typeof toastVariants> {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextValue {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, 'id'>) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
  children, 
  position = 'bottom-right',
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const toastCounterRef = useRef(0);

  const addToast = useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = `toast-${toastCounterRef.current++}`;
    const newToast = { ...toast, id };
    
    setToasts((prev) => {
      const updated = [...prev, newToast];
      return updated.slice(-maxToasts);
    });
    
    return id;
  }, [maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer position={position} />
    </ToastContext.Provider>
  );
};

interface ToastContainerProps {
  position: string;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ position }) => {
  const { toasts } = useToast();

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  return (
    <Portal>
      <div className={cn('velvet-toast-container fixed z-50 pointer-events-none', positionClasses[position as keyof typeof positionClasses])}>
        <AnimatePresence mode="sync">
          {toasts.map((toast, index) => (
            <Toast key={toast.id} {...toast} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </Portal>
  );
};

interface ToastProps extends ToastData {
  index: number;
}

const Toast: React.FC<ToastProps> = ({ 
  id, 
  title, 
  description, 
  variant, 
  duration = 5000, 
  action,
  index,
}) => {
  const { removeToast } = useToast();
  const { getAnimation } = useAnimation();
  const [progress, setProgress] = useState(100);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (duration === Infinity) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          removeToast(id);
          return 0;
        }
        return prev - (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, id, removeToast]);

  const handleDismiss = () => {
    removeToast(id);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: isHydrated ? -index * 12 : 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, transition: { duration: 0.2 } }}
      transition={getAnimation('smooth')}
      drag={isHydrated ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 100) {
          handleDismiss();
        }
      }}
      className={cn(toastVariants({ variant }), 'mb-3')}
    >
      <div className="flex-1">
        {title && <h3 className="font-semibold text-sm">{title}</h3>}
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>
      
      {action && (
        <button
          onClick={action.onClick}
          className="text-sm font-medium hover:underline"
        >
          {action.label}
        </button>
      )}
      
      <button
        onClick={handleDismiss}
        className="ml-2 p-1 rounded-md hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors opacity-60 hover:opacity-100"
        aria-label="Dismiss"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {duration !== Infinity && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 dark:bg-white/10 rounded-b-lg overflow-hidden">
          <motion.div
            className="h-full bg-current opacity-30"
            initial={{ width: '100%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>
      )}
    </motion.div>
  );
};