'use client'

import { ThemeSelector, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb, Alert , Chip } from '@velvet-ui/core'

export default function ThemeSelectorPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'ThemeSelector' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">ThemeSelector</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A theme switcher component that allows users to toggle between light, dark, and system themes.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { ThemeSelector , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Setup */}
        <Typography variant="h2" className="mb-4 mt-12">Setup</Typography>
        <Typography variant="body" className="mb-4">
          The ThemeSelector component requires the ThemeProvider to be set up in your application. Make sure to wrap your app with the ThemeProvider:
        </Typography>
        <CodeBlock followTheme language="tsx">{`import { ThemeProvider , Chip } from '@velvet-ui/core'

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  )
}`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic ThemeSelector */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            A simple theme selector with icon buttons for light, system, and dark modes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex justify-center">
                <ThemeSelector />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<ThemeSelector />`}</CodeBlock>
        </div>

        {/* With Labels */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Labels</Typography>
          <Typography variant="body" className="mb-4">
            Show text labels alongside the icons for better clarity.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex justify-center">
                <ThemeSelector showLabels />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<ThemeSelector showLabels />`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            The theme selector comes in three sizes to fit different layouts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  <Typography variant="small" className="w-16">Small:</Typography>
                  <ThemeSelector size="small" />
                </div>
                <div className="flex items-center gap-4">
                  <Typography variant="small" className="w-16">Medium:</Typography>
                  <ThemeSelector size="medium" />
                </div>
                <div className="flex items-center gap-4">
                  <Typography variant="small" className="w-16">Large:</Typography>
                  <ThemeSelector size="large" />
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<ThemeSelector size="small" />
<ThemeSelector size="medium" />
<ThemeSelector size="large" />`}</CodeBlock>
        </div>

        {/* Responsive Labels */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Responsive Labels</Typography>
          <Typography variant="body" className="mb-4">
            When using showLabels, the text visibility adapts based on screen size and the size prop.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-col gap-4">
                <div>
                  <Typography variant="small" className="mb-2">Small size - Labels hidden on mobile, visible on sm+ screens:</Typography>
                  <ThemeSelector size="small" showLabels />
                </div>
                <div>
                  <Typography variant="small" className="mb-2">Medium size - Labels hidden on mobile/tablet, visible on md+ screens:</Typography>
                  <ThemeSelector size="medium" showLabels />
                </div>
                <div>
                  <Typography variant="small" className="mb-2">Large size - Labels always visible:</Typography>
                  <ThemeSelector size="large" showLabels />
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Labels respond to screen size based on the size prop
<ThemeSelector size="small" showLabels />   // Hidden on mobile
<ThemeSelector size="medium" showLabels />  // Hidden on mobile/tablet
<ThemeSelector size="large" showLabels />   // Always visible`}</CodeBlock>
        </div>

        {/* Integration Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Integration Example</Typography>
          <Typography variant="body" className="mb-4">
            Common usage in a navigation bar or header.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex items-center justify-between p-4 bg-background-secondary rounded-lg">
                <Typography variant="h4">My App</Typography>
                <div className="flex items-center gap-4">
                  <Typography variant="small">Settings</Typography>
                  <Typography variant="small">Profile</Typography>
                  <ThemeSelector />
                </div>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<header className="flex items-center justify-between p-4">
  <h1>My App</h1>
  <div className="flex items-center gap-4">
    <nav>{/* Navigation items */}</nav>
    <ThemeSelector />
  </div>
</header>`}</CodeBlock>
        </div>

        {/* How It Works */}
        <Typography variant="h2" className="mb-4 mt-12">How It Works</Typography>
        <Alert variant="info" className="mb-8">
          <Typography>
            The ThemeSelector provides three options:
          </Typography>
          <ul className="mt-2 space-y-1">
            <li>• <strong>Light</strong> - Forces light theme</li>
            <li>• <strong>System</strong> - Follows the operating system's theme preference</li>
            <li>• <strong>Dark</strong> - Forces dark theme</li>
          </ul>
        </Alert>

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
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Size of the theme selector</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">showLabels</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Whether to show text labels alongside icons</td>
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
                The selected theme is persisted to localStorage automatically
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                System theme follows the user's OS preference (prefers-color-scheme)
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The active theme button is highlighted with a subtle background
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Smooth animations are applied when switching between themes
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component is fully keyboard accessible with proper ARIA attributes
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}