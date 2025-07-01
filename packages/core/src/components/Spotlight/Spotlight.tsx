import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { macOSGlass } from '../../utils/glass';
import { Search, Command, ArrowRight, Clock, X } from 'lucide-react';
import { Portal } from '../Portal';

export interface SpotlightItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  category?: string;
  action?: () => void;
  keywords?: string[];
}

export interface SpotlightProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  items?: SpotlightItem[];
  placeholder?: string;
  emptyMessage?: string;
  recentLabel?: string;
  showRecent?: boolean;
  maxRecent?: number;
  onSearch?: (query: string) => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'light' | 'strong';
}

export const Spotlight = forwardRef<HTMLDivElement, SpotlightProps>(
  ({ 
    size = 'medium',
    variant = 'light',
    open = false,
    onOpenChange,
    items = [],
    placeholder = 'Search for anything...',
    emptyMessage = 'No results found',
    recentLabel = 'Recent',
    showRecent = true,
    maxRecent = 5,
    onSearch,
    className,
  }, ref) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [recentItems, setRecentItems] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Filter items based on query
    const filteredItems = query.trim() === '' 
      ? items 
      : items.filter(item => {
          const searchableText = [
            item.title.toLowerCase(),
            item.description?.toLowerCase() || '',
            ...(item.keywords || []).map(k => k.toLowerCase())
          ].join(' ');
          return searchableText.includes(query.toLowerCase());
        });

    // Get recent items
    const recentFilteredItems = showRecent && query.trim() === '' 
      ? items.filter(item => recentItems.includes(item.id)).slice(0, maxRecent)
      : [];

    // Reset selected index when items change
    useEffect(() => {
      setSelectedIndex(0);
    }, [query]);

    // Focus input when opened
    useEffect(() => {
      if (open && inputRef.current) {
        inputRef.current.focus();
      }
    }, [open]);

    // Keyboard navigation
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!open) return;

        const totalItems = filteredItems.length;
        
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % totalItems);
            break;
          case 'ArrowUp':
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + totalItems) % totalItems);
            break;
          case 'Enter':
            e.preventDefault();
            const selectedItem = filteredItems[selectedIndex];
            if (selectedItem) {
              handleItemSelect(selectedItem);
            }
            break;
          case 'Escape':
            e.preventDefault();
            handleClose();
            break;
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, filteredItems, selectedIndex]);

    const handleItemSelect = (item: SpotlightItem) => {
      // Add to recent items
      setRecentItems(prev => [item.id, ...prev.filter(id => id !== item.id)]);
      
      // Execute action
      if (item.action) {
        item.action();
      }
      
      // Close spotlight
      handleClose();
    };

    const handleClose = () => {
      setQuery('');
      setSelectedIndex(0);
      onOpenChange?.(false);
    };

    if (!open) return null;

    return (
      <Portal>
        <>
          {/* Backdrop */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 9999,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(4px)',
                }}
                onClick={handleClose}
              />
            )}
          </AnimatePresence>
          
          {/* Centered spotlight */}
          <AnimatePresence>
            {open && (
              <motion.div
                ref={ref}
                data-velvet-spotlight="true"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'fixed',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  margin: 'auto',
                  height: 'fit-content',
                  zIndex: 10000,
                  width: '90vw',
                  maxWidth: size === 'small' ? '28rem' : size === 'large' ? '42rem' : '32rem',
                }}
                className={cn(
                  variant === 'light' ? [
                    'bg-background/70',
                    'backdrop-blur-2xl backdrop-saturate-200',
                    'border border-border/30',
                    'shadow-2xl shadow-black/10 dark:shadow-black/30',
                    'rounded-xl'
                  ] : variant === 'strong' ? [
                    'bg-background/90',
                    'backdrop-blur-3xl backdrop-saturate-250',
                    'border border-border/40',
                    'shadow-2xl shadow-black/20 dark:shadow-black/40',
                    'rounded-xl'
                  ] : macOSGlass.window,
                  className
                )}
                onClick={(e) => e.stopPropagation()}
              >
                  {/* Search Input */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground-secondary" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        onSearch?.(e.target.value);
                      }}
                      placeholder={placeholder}
                      className="w-full bg-transparent px-12 py-4 text-lg font-medium placeholder:text-foreground-tertiary focus:outline-none"
                    />
                    <button
                      onClick={handleClose}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <X className="h-4 w-4 text-foreground-secondary" />
                    </button>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                  
                  {/* Results */}
                  <div className="max-h-[400px] overflow-y-auto p-2">
                    {recentFilteredItems.length > 0 && query.trim() === '' && (
                      <>
                        <div className="px-3 py-2 text-xs font-medium text-foreground-tertiary uppercase tracking-wider">
                          {recentLabel}
                        </div>
                        {recentFilteredItems.map((item, index) => (
                          <SpotlightItemComponent
                            key={item.id}
                            item={item}
                            selected={index === selectedIndex}
                            onClick={() => handleItemSelect(item)}
                            showRecent
                          />
                        ))}
                        <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
                      </>
                    )}
                    
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item, index) => (
                        <SpotlightItemComponent
                          key={item.id}
                          item={item}
                          selected={index === selectedIndex}
                          onClick={() => handleItemSelect(item)}
                        />
                      ))
                    ) : (
                      <div className="px-3 py-8 text-center text-foreground-secondary">
                        {emptyMessage}
                      </div>
                    )}
                  </div>
                  
                  {/* Footer */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                  <div className="flex items-center justify-between px-4 py-3 text-xs text-foreground-tertiary">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-medium">↑</kbd>
                        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-medium">↓</kbd>
                        Navigate
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-medium">↵</kbd>
                        Select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-medium">esc</kbd>
                        Close
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Command className="h-3 w-3" />
                      <span>K</span>
                    </div>
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </Portal>
    );
  }
);

Spotlight.displayName = 'Spotlight';

// Individual item component
interface SpotlightItemComponentProps {
  item: SpotlightItem;
  selected: boolean;
  onClick: () => void;
  showRecent?: boolean;
}

const SpotlightItemComponent: React.FC<SpotlightItemComponentProps> = ({ 
  item, 
  selected, 
  onClick,
  showRecent = false 
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors',
        selected 
          ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20' 
          : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
      )}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {showRecent ? (
        <Clock className="h-5 w-5 text-foreground-tertiary flex-shrink-0" />
      ) : item.icon ? (
        <div className="flex-shrink-0">{item.icon}</div>
      ) : (
        <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-400 to-purple-600 flex-shrink-0" />
      )}
      
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground truncate">{item.title}</div>
        {item.description && (
          <div className="text-sm text-foreground-secondary truncate">{item.description}</div>
        )}
      </div>
      
      {item.category && (
        <span className="text-xs font-medium text-foreground-tertiary bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
          {item.category}
        </span>
      )}
      
      <ArrowRight className={cn(
        'h-4 w-4 text-foreground-tertiary transition-opacity',
        selected ? 'opacity-100' : 'opacity-0'
      )} />
    </motion.button>
  );
};