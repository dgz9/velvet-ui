'use client'

import { 
  Loading,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Badge, 
  Breadcrumb,
  Button,
  MuiGrid as Grid
, Chip } from '@velvet-ui/core'
import { useState } from 'react'

export default function LoadingPage() {
  const [isLoading, setIsLoading] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Loading' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Loading</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          Animated loading indicators to show progress and keep users engaged during async operations.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Loading , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Loading */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Loading</Typography>
          <Typography variant="body" className="mb-4">
            The default spinner loading indicator.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex items-center justify-center py-8">
                <Loading />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Loading />`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from 4 different loading animations.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Grid container spacing={4}>
                <Grid item xs={6} md={3}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading variant="spinner" />
                    <Typography variant="caption" className="text-center">Spinner</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} md={3}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading variant="dots" />
                    <Typography variant="caption" className="text-center">Dots</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} md={3}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading variant="pulse" />
                    <Typography variant="caption" className="text-center">Pulse</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} md={3}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading variant="bars" />
                    <Typography variant="caption" className="text-center">Bars</Typography>
                  </div>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Loading variant="spinner" />
<Loading variant="dots" />
<Loading variant="pulse" />
<Loading variant="bars" />`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Available in 3 sizes to fit different contexts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-4">
                  <Loading size="small" />
                  <Typography variant="caption">Small</Typography>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Loading size="medium" />
                  <Typography variant="caption">Medium</Typography>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Loading size="large" />
                  <Typography variant="caption">Large</Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Loading size="small" />
<Loading size="medium" />
<Loading size="large" />`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Use semantic colors or inherit from parent.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Grid container spacing={4}>
                <Grid item xs={6} md={4}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading color="primary" />
                    <Typography variant="caption">Primary</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} md={4}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading color="secondary" />
                    <Typography variant="caption">Secondary</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} md={4}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading color="success" />
                    <Typography variant="caption">Success</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} md={4}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading color="warning" />
                    <Typography variant="caption">Warning</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} md={4}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading color="danger" />
                    <Typography variant="caption">Danger</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} md={4}>
                  <div className="flex flex-col items-center gap-4">
                    <Loading color="info" />
                    <Typography variant="caption">Info</Typography>
                  </div>
                </Grid>
              </Grid>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <div className="flex flex-col items-center gap-4 text-white">
                  <Loading color="current" />
                  <Typography variant="caption">Current Color</Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Loading color="primary" />
<Loading color="secondary" />
<Loading color="success" />
<Loading color="warning" />
<Loading color="danger" />
<Loading color="info" />

// Inherits text color from parent
<div className="text-white">
  <Loading color="current" />
</div>`}</CodeBlock>
        </div>

        {/* All Variants and Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">All Combinations</Typography>
          <Typography variant="body" className="mb-4">
            Every variant in all available sizes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-8">
                {(['spinner', 'dots', 'pulse', 'bars'] as const).map((variant) => (
                  <div key={variant}>
                    <Typography variant="h6" className="mb-4 capitalize">{variant}</Typography>
                    <div className="flex items-center gap-8">
                      <div className="flex flex-col items-center gap-2">
                        <Loading variant={variant} size="small" />
                        <Typography variant="caption" className="text-foreground-secondary">Small</Typography>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Loading variant={variant} size="medium" />
                        <Typography variant="caption" className="text-foreground-secondary">Medium</Typography>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Loading variant={variant} size="large" />
                        <Typography variant="caption" className="text-foreground-secondary">Large</Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Loading States */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Loading States</Typography>
          <Typography variant="body" className="mb-4">
            Common patterns for showing loading states in your UI.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-6">
                {/* Button Loading */}
                <div>
                  <Typography variant="body" className="mb-3 font-semibold">Button Loading</Typography>
                  <div className="flex gap-3">
                    <Button loading>
                      Loading...
                    </Button>
                    <Button loading variant="outline">
                      Please wait
                    </Button>
                    <Button loading={isLoading} onClick={simulateLoading}>
                      {isLoading ? 'Processing...' : 'Click to Load'}
                    </Button>
                  </div>
                </div>

                {/* Card Loading */}
                <div>
                  <Typography variant="body" className="mb-3 font-semibold">Card Loading</Typography>
                  <Card className="max-w-sm">
                    <CardBody>
                      <div className="flex items-center justify-center py-8">
                        <div className="flex flex-col items-center gap-4">
                          <Loading variant="dots" />
                          <Typography variant="body" className="text-foreground-secondary">
                            Loading content...
                          </Typography>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                {/* Inline Loading */}
                <div>
                  <Typography variant="body" className="mb-3 font-semibold">Inline Loading</Typography>
                  <div className="flex items-center gap-2">
                    <Loading size="small" variant="spinner" />
                    <Typography variant="body">Checking availability...</Typography>
                  </div>
                </div>

                {/* Full Page Loading */}
                <div>
                  <Typography variant="body" className="mb-3 font-semibold">Full Page Loading</Typography>
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                      <div className="flex flex-col items-center gap-4">
                        <Loading size="large" variant="pulse" />
                        <Typography variant="h6">Loading Application</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Button Loading
<Button loading>Loading...</Button>

// Card Loading
<Card>
  <CardBody>
    <div className="flex items-center justify-center py-8">
      <Loading variant="dots" />
    </div>
  </CardBody>
</Card>

// Inline Loading
<div className="flex items-center gap-2">
  <Loading size="small" variant="spinner" />
  <Typography>Checking availability...</Typography>
</div>

// Full Page Loading
<div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
  <Loading size="large" variant="pulse" />
</div>`}</CodeBlock>
        </div>

        {/* Custom Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Usage</Typography>
          <Typography variant="body" className="mb-4">
            Customize loading indicators with CSS classes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex items-center justify-center gap-8">
                <Loading className="scale-150" />
                <Loading className="opacity-50" />
                <Loading className="blur-sm" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Loading className="scale-150" />
<Loading className="opacity-50" />
<Loading className="blur-sm" />`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'spinner' | 'dots' | 'pulse' | 'bars'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'spinner'</td>
                <td className="p-2 text-sm">The animation style</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The size of the loading indicator</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'current'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary'</td>
                <td className="p-2 text-sm">The color of the loading indicator</td>
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
                All animations are powered by Framer Motion for smooth, performant animations
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The 'current' color option inherits the text color from its parent element
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Loading indicators are inline-flex by default, making them easy to align with text
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Consider using appropriate ARIA labels when loading content for accessibility
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}