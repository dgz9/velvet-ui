'use client'

import { Typography, Card, Button, CodeBlock } from '@velvet-ui/core'
import { useState } from 'react'
import { Terminal } from 'lucide-react'

export default function InstallationPage() {
  const [packageManager, setPackageManager] = useState<'npm' | 'yarn' | 'pnpm'>('npm')

  const installCommands = {
    npm: 'npm install @velvet-ui/core',
    yarn: 'yarn add @velvet-ui/core',
    pnpm: 'pnpm add @velvet-ui/core',
  }

  return (
    <div>
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          Installation
        </Typography>
        <Typography variant="lead" className="text-foreground-secondary">
          Get started with Velvet UI in your React project.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Typography variant="h2" className="mb-4">
          Prerequisites
        </Typography>

        <Typography variant="body" className="mb-6">
          Before installing Velvet UI, make sure your project meets these requirements:
        </Typography>

        <ul className="mb-8 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>React 18.0 or higher</Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>Node.js 18.0 or higher</Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>Tailwind CSS 3.0 or higher (optional but recommended)</Typography>
          </li>
        </ul>

        <Typography variant="h2" className="mb-4">
          Package Installation
        </Typography>

        <Typography variant="body" className="mb-4">
          Choose your preferred package manager:
        </Typography>

        <div className="mb-4 flex gap-2">
          <Button
            variant={packageManager === 'npm' ? 'solid' : 'outline'}
            size="small"
            onClick={() => setPackageManager('npm')}
          >
            npm
          </Button>
          <Button
            variant={packageManager === 'yarn' ? 'solid' : 'outline'}
            size="small"
            onClick={() => setPackageManager('yarn')}
          >
            yarn
          </Button>
          <Button
            variant={packageManager === 'pnpm' ? 'solid' : 'outline'}
            size="small"
            onClick={() => setPackageManager('pnpm')}
          >
            pnpm
          </Button>
        </div>

        <CodeBlock followTheme>{installCommands[packageManager]}</CodeBlock>

        <Card className="my-6 bg-info-50 p-4 dark:bg-info-950/20">
          <Typography variant="body">
            <strong>Note:</strong> Velvet UI includes all necessary dependencies including Framer Motion 
            for animations. You don't need to install them separately.
          </Typography>
        </Card>

        <Typography variant="h2" className="mb-4">
          Setup Provider
        </Typography>

        <Typography variant="body" className="mb-4">
          Wrap your application with the ThemeProvider to enable theming and ensure all components work correctly:
        </Typography>

        <CodeBlock followTheme language="tsx">{`// App.tsx or _app.tsx
import { ThemeProvider } from '@velvet-ui/core'

function App() {
  return (
    <ThemeProvider defaultTheme="system" defaultThemeName="default">
      {/* Your app content */}
    </ThemeProvider>
  )
}

export default App`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-8">
          Tailwind CSS Configuration
        </Typography>

        <Typography variant="body" className="mb-4">
          If you're using Tailwind CSS, add Velvet UI to your content paths to ensure styles are included:
        </Typography>

        <CodeBlock followTheme language="js">{`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@velvet-ui/core/dist/**/*.{js,mjs}'
  ],
  // ... rest of your config
}`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-8">
          Import Components
        </Typography>

        <Typography variant="body" className="mb-4">
          Now you can start using Velvet UI components in your application:
        </Typography>

        <CodeBlock followTheme language="tsx">{`import { Button, Card, Typography } from '@velvet-ui/core'

function MyComponent() {
  return (
    <Card className="p-6">
      <Typography variant="h2">Welcome to Velvet UI</Typography>
      <Button variant="solid" className="mt-4">
        Get Started
      </Button>
    </Card>
  )
}`}</CodeBlock>

        <Typography variant="h2" className="mb-4 mt-8">
          TypeScript Support
        </Typography>

        <Typography variant="body" className="mb-6">
          Velvet UI is written in TypeScript and includes type definitions out of the box. 
          No additional setup is required for TypeScript projects.
        </Typography>

        <Typography variant="h2" className="mb-4">
          Next Steps
        </Typography>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card className="p-6">
            <Terminal className="mb-3 h-8 w-8 text-primary-600 dark:text-primary-400" />
            <Typography variant="h4" className="mb-2">Quick Start Guide</Typography>
            <Typography variant="small" className="text-foreground-secondary">
              Learn how to build your first interface with Velvet UI components.
            </Typography>
          </Card>

          <Card className="p-6">
            <Typography variant="h4" className="mb-2">Browse Components</Typography>
            <Typography variant="small" className="text-foreground-secondary">
              Explore our collection of 12+ beautifully crafted components.
            </Typography>
          </Card>
        </div>

        <Card className="mt-8 bg-warning-50 p-4 dark:bg-warning-950/20">
          <Typography variant="body">
            <strong>Having issues?</strong> Check out our troubleshooting guide or open an issue on GitHub.
          </Typography>
        </Card>
      </div>
    </div>
  )
}