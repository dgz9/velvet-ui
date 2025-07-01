import React, { forwardRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';
import { useAnimation } from '../../hooks/useAnimation';
import { zIndex } from '../../utils/zIndex';

export interface CodeBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
  followTheme?: boolean;
  children?: React.ReactNode;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ 
    className, 
    language = 'text',
    filename,
    showLineNumbers = false,
    copyable = true,
    followTheme = false,
    children,
    ...props 
  }, ref) => {
    const [copied, setCopied] = useState(false);
    const { getAnimation } = useAnimation();
    
    const code = typeof children === 'string' ? children : String(children);
    const lines = code.trim().split('\n');

    const handleCopy = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'velvet-codeblock relative overflow-hidden rounded-lg border transition-colors',
          followTheme ? 
            'bg-surface/50 border-border dark:bg-background-tertiary dark:border-border' : 
            'bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-800',
          className
        )}
        {...props}
      >
        {(filename || copyable) && (
          <div className={cn(
            'flex items-center justify-between px-4 py-2 border-b',
            followTheme ?
              'bg-background-secondary/50 border-border dark:bg-background-secondary dark:border-border' :
              'bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
          )}>
            {filename && (
              <span className={cn(
                'text-sm font-medium',
                followTheme ?
                  'text-foreground-secondary' :
                  'text-gray-600 dark:text-gray-400'
              )}>
                {filename}
              </span>
            )}
            {copyable && (
              <Button
                variant="ghost"
                size="small"
                className={cn(
                  'h-7 w-7 p-0',
                  followTheme ?
                    'hover:bg-muted dark:hover:bg-muted' :
                    'hover:bg-gray-200 dark:hover:bg-gray-700'
                )}
                onClick={handleCopy}
              >
                <motion.div
                  key={copied ? 'check' : 'copy'}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={getAnimation('snappy')}
                >
                  {copied ? (
                    <Check className={cn(
                      'h-4 w-4',
                      followTheme ? 'text-success' : 'text-green-500'
                    )} />
                  ) : (
                    <Copy className={cn(
                      'h-4 w-4',
                      followTheme ?
                        'text-foreground-tertiary' :
                        'text-gray-600 dark:text-gray-400'
                    )} />
                  )}
                </motion.div>
              </Button>
            )}
          </div>
        )}
        
        <div className="overflow-x-auto">
          <pre className={cn(
            'p-4 text-sm leading-relaxed font-mono',
            followTheme ?
              'text-foreground' :
              'text-gray-900 dark:text-gray-100'
          )}>
            {showLineNumbers ? (
              <div className="flex">
                <div className={cn(
                  'pr-4 text-right select-none',
                  followTheme ?
                    'text-foreground-tertiary' :
                    'text-gray-400 dark:text-gray-500'
                )}>
                  {lines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <code className="flex-1 overflow-x-auto">
                  {lines.map((line, i) => (
                    <div key={i}>{line || '\n'}</div>
                  ))}
                </code>
              </div>
            ) : (
              <code>{children}</code>
            )}
          </pre>
        </div>
        
        {language && language !== 'text' && (
          <div className={cn(
            'absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium',
            followTheme ?
              'bg-muted text-foreground-secondary' :
              'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
            (filename || copyable) && 'hidden'
          )}>
            {language}
          </div>
        )}
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';