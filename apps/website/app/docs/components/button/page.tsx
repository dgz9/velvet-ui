'use client'

import { Button, Card, CardBody, Typography, CodeBlock, Tabs, TabsList, TabsTrigger, TabsContent, Badge, Container, Section, Alert, Breadcrumb, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Chip } from '@velvet-ui/core'
import { useState } from 'react'
import { Check, Copy, Heart, ArrowRight, Loader } from 'lucide-react'

export default function ButtonPage() {
  const [loading, setLoading] = useState(false)

  const handleAsyncClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Button' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Button</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A versatile button component with multiple variants, sizes, and states.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Button } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from 5 different button variants to match your design needs.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
              <Button variant="solid">Solid</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="glass">Glass</Button>
              <Button variant="glow">Glow</Button>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="glass">Glass</Button>
<Button variant="glow">Glow</Button>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Available in 3 sizes to fit different contexts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Use semantic colors to convey meaning and match your brand.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
                <Button color="info">Info</Button>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="info">Info</Button>`}</CodeBlock>
        </div>

        {/* Border Radius */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Border Radius</Typography>
          <Typography variant="body" className="mb-4">
            Customize the corner radius to match your design system.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
                <Button radius="none">None</Button>
                <Button radius="small">Small</Button>
                <Button radius="medium">Medium</Button>
                <Button radius="large">Large</Button>
                <Button radius="full">Full</Button>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Button radius="none">None</Button>
<Button radius="small">Small</Button>
<Button radius="medium">Medium</Button>
<Button radius="large">Large</Button>
<Button radius="full">Full</Button>`}</CodeBlock>
        </div>

        {/* With Icons */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Icons</Typography>
          <Typography variant="body" className="mb-4">
            Enhance buttons with icons for better visual communication.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
              <Button>
                <Heart className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="outline">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="small">
                <Copy className="h-4 w-4" />
              </Button>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Button>
  <Heart className="mr-2 h-4 w-4" />
  Like
</Button>

<Button variant="outline">
  Continue
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>

<Button variant="ghost" size="small">
  <Copy className="h-4 w-4" />
</Button>`}</CodeBlock>
        </div>

        {/* Loading State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Loading State</Typography>
          <Typography variant="body" className="mb-4">
            Show loading state for asynchronous actions.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
              <Button loading>Loading</Button>
              <Button variant="outline" loading onClick={handleAsyncClick}>
                Click me
              </Button>
              <Button variant="solid" loading={loading} onClick={handleAsyncClick}>
                {loading ? 'Processing...' : 'Submit'}
              </Button>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Button loading>Loading</Button>

<Button variant="outline" loading>
  Click me
</Button>

<Button loading={isLoading} onClick={handleSubmit}>
  {isLoading ? 'Processing...' : 'Submit'}
</Button>`}</CodeBlock>
        </div>

        {/* Disabled State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Disabled State</Typography>
          <Typography variant="body" className="mb-4">
            Disable buttons when actions are not available.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled</Button>
              <Button variant="ghost" disabled>Disabled</Button>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled</Button>
<Button variant="ghost" disabled>Disabled</Button>`}</CodeBlock>
        </div>

        {/* Button as Link */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Button as Link</Typography>
          <Typography variant="body" className="mb-4">
            To use a button as a link, wrap the Button component with a Link component.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <Button>
                  External Link
                </Button>
              </a>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<a href="https://example.com" target="_blank">
  <Button>
    External Link
  </Button>
</a>

<Link href="/about">
  <Button>
    Internal Link
  </Button>
</Link>`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid' | 'outline' | 'ghost' | 'glass' | 'glow'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid'</td>
                <td className="p-2 text-sm">The visual style variant of the button</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The size of the button</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">loading</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Shows a loading spinner and disables the button</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">disabled</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Disables the button</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary'</td>
                <td className="p-2 text-sm">The color scheme of the button</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">radius</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'none' | 'small' | 'medium' | 'large' | 'full'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The border radius of the button</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">ripple</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true</td>
                <td className="p-2 text-sm">Enables ripple effect on click</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">className</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional CSS classes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">children</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Button content</td>
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
                The button component includes smooth spring animations powered by Framer Motion
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                All buttons are keyboard accessible and include proper ARIA attributes
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The ripple effect can be disabled by setting ripple={false}
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The glass and glow variants work best on colorful backgrounds
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}