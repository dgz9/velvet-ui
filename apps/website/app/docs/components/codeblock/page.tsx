'use client'

import { Breadcrumb, Card, CardBody, Typography, CodeBlock, Badge , Chip } from '@velvet-ui/core'

export default function CodeBlockPage() {
  const exampleCode = `function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to Velvet UI\`;
}

greet('Developer');`;

  const longCode = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

interface ComponentProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const MyComponent: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p className="mt-2 text-gray-600">{description}</p>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};`;

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'CodeBlock' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">CodeBlock</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A component for displaying formatted code snippets with syntax highlighting, line numbers, and copy functionality.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { CodeBlock , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            A simple code block with automatic copy functionality.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CodeBlock followTheme language="typescript">
                {exampleCode}
              </CodeBlock>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CodeBlock followTheme language="typescript">
  {codeString}
</CodeBlock>`}</CodeBlock>
        </div>

        {/* With Filename */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Filename</Typography>
          <Typography variant="body" className="mb-4">
            Display a filename header to provide context for the code snippet.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CodeBlock followTheme language="tsx" filename="Button.tsx">
                {`export const Button = ({ children, onClick }) => {
  return (
    <button 
      className="px-4 py-2 bg-primary text-white rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};`}
              </CodeBlock>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CodeBlock followTheme language="tsx" filename="Button.tsx">
  {codeString}
</CodeBlock>`}</CodeBlock>
        </div>

        {/* With Line Numbers */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Line Numbers</Typography>
          <Typography variant="body" className="mb-4">
            Show line numbers for easier reference in documentation or tutorials.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CodeBlock followTheme language="javascript" showLineNumbers>
                {`const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit, index) => {
  console.log(\`\${index + 1}. \${fruit}\`);
});

// Output:
// 1. apple
// 2. banana
// 3. orange`}
              </CodeBlock>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CodeBlock followTheme language="javascript" showLineNumbers>
  {codeString}
</CodeBlock>`}</CodeBlock>
        </div>

        {/* Light Theme */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Light Theme</Typography>
          <Typography variant="body" className="mb-4">
            Use the light theme for better visibility in bright environments.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CodeBlock followTheme language="css">
                {`.button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  color: white;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}`}
              </CodeBlock>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CodeBlock followTheme language="css" theme="light">
  {codeString}
</CodeBlock>`}</CodeBlock>
        </div>

        {/* Without Copy Button */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Without Copy Button</Typography>
          <Typography variant="body" className="mb-4">
            Disable the copy button for display-only code snippets.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CodeBlock followTheme language="bash" copyable={false}>
                {`$ npm install @velvet-ui/core
$ npm run dev`}
              </CodeBlock>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CodeBlock followTheme language="bash" copyable={false}>
  {codeString}
</CodeBlock>`}</CodeBlock>
        </div>

        {/* Combined Features */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Combined Features</Typography>
          <Typography variant="body" className="mb-4">
            Combine multiple features for comprehensive code display.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <CodeBlock followTheme 
                language="tsx" 
                filename="MyComponent.tsx"
                showLineNumbers
              >
                {longCode}
              </CodeBlock>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<CodeBlock followTheme 
  language="tsx" 
  filename="MyComponent.tsx"
  showLineNumbers
  theme="dark"
>
  {codeString}
</CodeBlock>`}</CodeBlock>
        </div>

        {/* Different Languages */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Different Languages</Typography>
          <Typography variant="body" className="mb-4">
            Specify the language for proper syntax highlighting hints.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <CodeBlock followTheme language="python">
                  {`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`}
                </CodeBlock>
                
                <CodeBlock followTheme language="sql">
                  {`SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id
HAVING order_count > 5;`}
                </CodeBlock>
                
                <CodeBlock followTheme language="json">
                  {`{
  "name": "@velvet-ui/core",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "framer-motion": "^10.0.0"
  }
}`}
                </CodeBlock>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Prop</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Default</th>
                <th className="text-left p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">language</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'text'</td>
                <td className="p-2 text-sm">Programming language for syntax highlighting</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">filename</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Filename to display in the header</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">showLineNumbers</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Whether to show line numbers</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">copyable</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true</td>
                <td className="p-2 text-sm">Whether to show the copy button</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">theme</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'dark' | 'light'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'dark'</td>
                <td className="p-2 text-sm">Color theme of the code block</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">children</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string | React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Code content to display</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">className</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <Typography variant="h2" className="mb-4 mt-12">Notes</Typography>
        <Card className="p-4 bg-info-50 dark:bg-info-950/20">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The copy button shows a checkmark animation when code is successfully copied to clipboard
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Code blocks automatically handle overflow with horizontal scrolling for long lines
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Line numbers are not included when copying code to the clipboard
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The language prop is displayed as a badge when no filename or header is present
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}