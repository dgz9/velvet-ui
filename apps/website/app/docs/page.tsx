import { Typography, Card, CardBody, Button, Alert, AlertTitle, AlertDescription, Badge, Tabs, TabsList, TabsTrigger, TabsContent } from '@velvet-ui/core'
import Link from 'next/link'
import { ArrowRight, Github, Package, Palette, Zap } from 'lucide-react'

export default function DocsPage() {
  return (
    <div>
      <Alert variant="info" className="mb-8">
        <AlertTitle>Welcome to Velvet UI Documentation</AlertTitle>
        <AlertDescription>
          Learn how to use our components to build beautiful, accessible user interfaces.
        </AlertDescription>
      </Alert>
      
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          Introduction to Velvet UI
        </Typography>
        <Typography variant="lead" className="text-foreground-secondary">
          A modern React component library with smooth animations and Mac OS-inspired aesthetics.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Typography variant="body" className="mb-6">
          Velvet UI is a carefully crafted component library that brings the elegance of Mac OS design 
          to your React applications. With glassmorphism effects, smooth spring animations, and a 
          comprehensive theming system, Velvet UI helps you create beautiful, accessible, and performant 
          user interfaces.
        </Typography>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardBody>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Zap className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="flex items-center gap-2 mb-2">
              <Typography variant="h4">Quick to implement</Typography>
              <Badge size="small" variant="soft" color="success">Easy</Badge>
            </div>
              <Typography className="text-foreground-secondary">
                Get up and running in minutes with our simple installation process and intuitive API.
              </Typography>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-100 dark:bg-secondary-900/30">
                <Palette className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div className="flex items-center gap-2 mb-2">
              <Typography variant="h4">Beautiful by default</Typography>
              <Badge size="small" variant="soft" color="secondary">Design</Badge>
            </div>
              <Typography className="text-foreground-secondary">
                Every component is designed with attention to detail and includes multiple variants.
              </Typography>
            </CardBody>
          </Card>
        </div>

        <Typography variant="h2" className="mb-4 mt-12">
          Key Features
        </Typography>

        <ul className="mb-8 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>
              <strong>12+ Components</strong> - Essential UI components for modern applications
            </Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>
              <strong>10 Pre-built Themes</strong> - Beautiful color schemes ready to use
            </Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>
              <strong>TypeScript Support</strong> - Full type definitions for better developer experience
            </Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>
              <strong>Accessibility First</strong> - WCAG compliant with keyboard navigation
            </Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>
              <strong>Dark Mode</strong> - Built-in support for light and dark themes
            </Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400">•</span>
            <Typography>
              <strong>Smooth Animations</strong> - Powered by Framer Motion for fluid interactions
            </Typography>
          </li>
        </ul>

        <Typography variant="h2" className="mb-4">
          Why Velvet UI?
        </Typography>

        <Typography variant="body" className="mb-6">
          In a world of generic component libraries, Velvet UI stands out by focusing on aesthetics 
          without compromising functionality. Every component is designed to be:
        </Typography>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div>
            <Typography variant="h5" className="mb-2">Intuitive</Typography>
            <Typography variant="small" className="text-foreground-secondary">
              Simple APIs that follow React best practices and conventions.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className="mb-2">Flexible</Typography>
            <Typography variant="small" className="text-foreground-secondary">
              Easily customizable with Tailwind CSS and CSS variables.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className="mb-2">Performant</Typography>
            <Typography variant="small" className="text-foreground-secondary">
              Tree-shakeable and optimized for production builds.
            </Typography>
          </div>
        </div>

        <Card className="my-8 bg-primary-50 dark:bg-primary-950/20">
          <CardBody>
            <Typography variant="h3" className="mb-3">
              Ready to get started?
            </Typography>
            <Typography className="mb-4 text-foreground-secondary">
              Follow our installation guide to add Velvet UI to your project in just a few steps.
            </Typography>
            <div className="flex flex-wrap gap-3">
              <Link href="/docs/installation">
                <Button beginContent={<Package className="h-4 w-4" />} endContent={<ArrowRight className="h-4 w-4" />}>
                  Installation Guide
                </Button>
              </Link>
              <Link href="https://github.com/yourusername/velvet-ui" target="_blank">
                <Button variant="outline" beginContent={<Github className="h-4 w-4" />}>
                  View on GitHub
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>

        <Typography variant="h2" className="mb-4">
          Community & Support
        </Typography>

        <Typography variant="body" className="mb-6">
          Join our growing community of developers using Velvet UI. Get help, share your projects, 
          and contribute to making Velvet UI even better.
        </Typography>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardBody>
              <Typography variant="h5" className="mb-2">Discord Community</Typography>
              <Typography variant="small" className="text-foreground-secondary">
                Chat with other developers and get real-time help.
              </Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Typography variant="h5" className="mb-2">GitHub Discussions</Typography>
              <Typography variant="small" className="text-foreground-secondary">
                Share ideas, ask questions, and showcase your work.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}