'use client'

import { Breadcrumb, Card, CardBody, Typography, CodeBlock, Badge, Alert, Chip } from '@velvet-ui/core'
import { Home, Settings, User, ChevronRight, Hash } from 'lucide-react'

export default function BreadcrumbPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Breadcrumb' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Breadcrumb</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A navigation component that shows the current page's location within a hierarchical structure.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Breadcrumb } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            A simple breadcrumb with navigation links.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products' },
                  { label: 'Electronics', href: '/products/electronics' },
                  { label: 'Smartphones' },
                ]}
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones' },
  ]}
/>`}</CodeBlock>
        </div>

        {/* With Icons */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Icons</Typography>
          <Typography variant="body" className="mb-4">
            Add icons to breadcrumb items for better visual recognition.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
                  { label: 'Settings', href: '/settings', icon: <Settings className="h-4 w-4" /> },
                  { label: 'Profile', icon: <User className="h-4 w-4" /> },
                ]}
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Breadcrumb
  items={[
    { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
    { label: 'Settings', href: '/settings', icon: <Settings className="h-4 w-4" /> },
    { label: 'Profile', icon: <User className="h-4 w-4" /> },
  ]}
/>`}</CodeBlock>
        </div>

        {/* Custom Separator */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Separator</Typography>
          <Typography variant="body" className="mb-4">
            Use a custom separator between breadcrumb items.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <Breadcrumb
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Documents', href: '/docs' },
                    { label: 'Reports', href: '/docs/reports' },
                    { label: 'Q4 2023' },
                  ]}
                  separator="/"
                />
                <Breadcrumb
                  items={[
                    { label: 'src', href: '#' },
                    { label: 'components', href: '#' },
                    { label: 'ui', href: '#' },
                    { label: 'Button.tsx' },
                  ]}
                  separator={<Hash className="h-3 w-3" />}
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Using a string separator
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Documents', href: '/docs' },
    { label: 'Reports', href: '/docs/reports' },
    { label: 'Q4 2023' },
  ]}
  separator="/"
/>

// Using a component separator
<Breadcrumb
  items={[
    { label: 'src', href: '#' },
    { label: 'components', href: '#' },
    { label: 'ui', href: '#' },
    { label: 'Button.tsx' },
  ]}
  separator={<Hash className="h-3 w-3" />}
/>`}</CodeBlock>
        </div>

        {/* Max Items */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Max Items</Typography>
          <Typography variant="body" className="mb-4">
            Limit the number of visible items with automatic ellipsis for long paths.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <Breadcrumb
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Documents', href: '/documents' },
                    { label: 'Projects', href: '/documents/projects' },
                    { label: '2023', href: '/documents/projects/2023' },
                    { label: 'Q4', href: '/documents/projects/2023/q4' },
                    { label: 'Reports', href: '/documents/projects/2023/q4/reports' },
                    { label: 'Final Report' },
                  ]}
                  maxItems={4}
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Documents', href: '/documents' },
    { label: 'Projects', href: '/documents/projects' },
    { label: '2023', href: '/documents/projects/2023' },
    { label: 'Q4', href: '/documents/projects/2023/q4' },
    { label: 'Reports', href: '/documents/projects/2023/q4/reports' },
    { label: 'Final Report' },
  ]}
  maxItems={4}
/>`}</CodeBlock>
        </div>

        {/* Custom Styling */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Custom Styling</Typography>
          <Typography variant="body" className="mb-4">
            Apply custom classes to the container, items, or separator.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products' },
                  { label: 'Featured' },
                ]}
                className="p-2 bg-surface-secondary rounded-lg"
                itemClassName="text-primary hover:text-primary-dark"
                separatorClassName="text-primary"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Featured' },
  ]}
  className="p-2 bg-surface-secondary rounded-lg"
  itemClassName="text-primary hover:text-primary-dark"
  separatorClassName="text-primary"
/>`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm">items</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">BreadcrumbItem[]</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Array of breadcrumb items to display</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">separator</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">ChevronRight</td>
                <td className="p-2 text-sm">Custom separator between items</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">maxItems</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">0</td>
                <td className="p-2 text-sm">Maximum number of items to display (0 = no limit)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">itemClassName</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional CSS classes for breadcrumb items</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">separatorClassName</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional CSS classes for separators</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">className</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional CSS classes for the container</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BreadcrumbItem Type */}
        <Typography variant="h3" className="mb-4 mt-8">BreadcrumbItem Type</Typography>
        <CodeBlock followTheme language="typescript">{`interface BreadcrumbItem {
  label: string;      // The text to display
  href?: string;      // Optional link URL
  icon?: ReactNode;   // Optional icon to display before the label
}`}</CodeBlock>

        {/* Notes */}
        <Typography variant="h2" className="mb-4 mt-12">Notes</Typography>
        <Card className="p-4 bg-info-50 dark:bg-info-950/20">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The last item in the breadcrumb is automatically marked as the current page and is not clickable
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                When maxItems is set and there are more items than the limit, an ellipsis is automatically inserted
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component includes proper ARIA labels and semantic HTML for accessibility
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Links have smooth hover and click animations powered by Framer Motion
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}