'use client'

import { Container, Breadcrumb, Card, CardBody, Typography, CodeBlock, Badge, Button, Grid , Chip } from '@velvet-ui/core'

export default function ContainerPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Container' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Container</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A responsive container that centers content and provides consistent spacing and max-width constraints.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Container , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Usage */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Usage</Typography>
          <Typography variant="body" className="mb-4">
            A simple container with default settings.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <Container className="bg-surface-secondary">
                <div className="py-8">
                  <Typography variant="h4">Container Content</Typography>
                  <Typography className="mt-2">
                    This content is wrapped in a container with default large size and medium padding.
                  </Typography>
                </div>
              </Container>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Container>
  <Typography variant="h4">Container Content</Typography>
  <Typography>
    This content is wrapped in a container with default large size and medium padding.
  </Typography>
</Container>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Choose from five different container sizes to match your layout needs.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0 space-y-4">
              <Container size="small" className="bg-primary-50 dark:bg-primary-950/20">
                <div className="py-4">
                  <Typography className="text-center">Small (max-w-2xl)</Typography>
                </div>
              </Container>
              <Container size="medium" className="bg-secondary-50 dark:bg-secondary-950/20">
                <div className="py-4">
                  <Typography className="text-center">Medium (max-w-4xl)</Typography>
                </div>
              </Container>
              <Container size="large" className="bg-success-50 dark:bg-success-950/20">
                <div className="py-4">
                  <Typography className="text-center">Large (max-w-6xl)</Typography>
                </div>
              </Container>
              <Container size="xlarge" className="bg-warning-50 dark:bg-warning-950/20">
                <div className="py-4">
                  <Typography className="text-center">Extra Large (max-w-7xl)</Typography>
                </div>
              </Container>
              <Container size="full" className="bg-info-50 dark:bg-info-950/20">
                <div className="py-4">
                  <Typography className="text-center">Full Width</Typography>
                </div>
              </Container>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Container size="small">Small Container</Container>
<Container size="medium">Medium Container</Container>
<Container size="large">Large Container</Container>
<Container size="xlarge">Extra Large Container</Container>
<Container size="full">Full Width Container</Container>`}</CodeBlock>
        </div>

        {/* Padding */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Padding</Typography>
          <Typography variant="body" className="mb-4">
            Control the horizontal padding of the container.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0 space-y-4">
              <Container padding="none" className="bg-surface-secondary">
                <div className="py-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography className="text-center">No Padding</Typography>
                </div>
              </Container>
              <Container padding="small" className="bg-surface-secondary">
                <div className="py-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography className="text-center">Small Padding</Typography>
                </div>
              </Container>
              <Container padding="medium" className="bg-surface-secondary">
                <div className="py-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography className="text-center">Medium Padding</Typography>
                </div>
              </Container>
              <Container padding="large" className="bg-surface-secondary">
                <div className="py-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography className="text-center">Large Padding</Typography>
                </div>
              </Container>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Container padding="none">No Padding</Container>
<Container padding="small">Small Padding</Container>
<Container padding="medium">Medium Padding</Container>
<Container padding="large">Large Padding</Container>`}</CodeBlock>
        </div>

        {/* Centered Layout */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Centered Layout</Typography>
          <Typography variant="body" className="mb-4">
            Use the centered prop to create a flex container with centered content.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <Container centered className="bg-surface-secondary min-h-[200px]">
                <div className="text-center">
                  <Typography variant="h4">Centered Content</Typography>
                  <Typography className="mt-2">This content is vertically and horizontally centered</Typography>
                  <Button className="mt-4">Action Button</Button>
                </div>
              </Container>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Container centered className="min-h-[200px]">
  <div className="text-center">
    <Typography variant="h4">Centered Content</Typography>
    <Typography>This content is vertically and horizontally centered</Typography>
    <Button>Action Button</Button>
  </div>
</Container>`}</CodeBlock>
        </div>

        {/* Nested Containers */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Nested Containers</Typography>
          <Typography variant="body" className="mb-4">
            Containers can be nested to create more complex layouts.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <Container size="xlarge" className="bg-surface-secondary py-8">
                <Typography variant="h4" className="mb-4">Outer Container (XLarge)</Typography>
                <Container size="medium" className="bg-primary-50 dark:bg-primary-950/20 py-6">
                  <Typography variant="h5">Inner Container (Medium)</Typography>
                  <Typography className="mt-2">
                    This creates a narrower content area within a wider container.
                  </Typography>
                </Container>
              </Container>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Container size="xlarge">
  <Typography variant="h4">Outer Container</Typography>
  <Container size="medium">
    <Typography variant="h5">Inner Container</Typography>
    <Typography>Narrower content area</Typography>
  </Container>
</Container>`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'small' | 'medium' | 'large' | 'xlarge' | 'full'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'large'</td>
                <td className="p-2 text-sm">Maximum width of the container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">padding</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'none' | 'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Horizontal padding of the container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">centered</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Centers content using flexbox</td>
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
                <td className="p-2 text-sm">Content to be contained</td>
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
                The container uses responsive padding that adjusts based on screen size
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                When centered is true, the container uses flexbox with items-center and justify-center
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Container widths: small (640px), medium (768px), large (1024px), xlarge (1280px)
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component forwards refs and supports all standard div HTML attributes
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}