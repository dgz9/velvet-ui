'use client'

import { Section, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb, Button, Container , Chip } from '@velvet-ui/core'

export default function SectionPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Section' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Section</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A layout component for creating consistent page sections with spacing and background options.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Section , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Section */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Section</Typography>
          <Typography variant="body" className="mb-4">
            A simple section with default spacing.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <Section>
                <Container>
                  <Typography variant="h2" className="mb-4">Section Title</Typography>
                  <Typography variant="body">
                    This is a basic section with default medium spacing. It provides consistent padding for your content.
                  </Typography>
                </Container>
              </Section>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Section>
  <Container>
    <Typography variant="h2" className="mb-4">Section Title</Typography>
    <Typography variant="body">
      This is a basic section with default medium spacing.
    </Typography>
  </Container>
</Section>`}</CodeBlock>
        </div>

        {/* Spacing Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Spacing Variants</Typography>
          <Typography variant="body" className="mb-4">
            Control the vertical padding of sections with different spacing options.
          </Typography>
          <div className="space-y-4">
            <Card className="mb-2">
              <CardBody className="p-0">
                <Section spacing="none" background="secondary">
                  <Container>
                    <Typography variant="body">No spacing</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
            
            <Card className="mb-2">
              <CardBody className="p-0">
                <Section spacing="small" background="secondary">
                  <Container>
                    <Typography variant="body">Small spacing</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
            
            <Card className="mb-2">
              <CardBody className="p-0">
                <Section spacing="medium" background="secondary">
                  <Container>
                    <Typography variant="body">Medium spacing (default)</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
            
            <Card className="mb-2">
              <CardBody className="p-0">
                <Section spacing="large" background="secondary">
                  <Container>
                    <Typography variant="body">Large spacing</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
            
            <Card className="mb-4">
              <CardBody className="p-0">
                <Section spacing="xlarge" background="secondary">
                  <Container>
                    <Typography variant="body">Extra large spacing</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
          </div>
          <CodeBlock followTheme>{`<Section spacing="none">...</Section>
<Section spacing="small">...</Section>
<Section spacing="medium">...</Section>
<Section spacing="large">...</Section>
<Section spacing="xlarge">...</Section>`}</CodeBlock>
        </div>

        {/* Background Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Background Variants</Typography>
          <Typography variant="body" className="mb-4">
            Apply different background styles to your sections.
          </Typography>
          <div className="space-y-4">
            <Card className="mb-2">
              <CardBody className="p-0">
                <Section background="default">
                  <Container>
                    <Typography variant="h4" className="mb-2">Default Background</Typography>
                    <Typography variant="body">Uses the default background color</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
            
            <Card className="mb-2">
              <CardBody className="p-0">
                <Section background="secondary">
                  <Container>
                    <Typography variant="h4" className="mb-2">Secondary Background</Typography>
                    <Typography variant="body">Uses a secondary background color for visual separation</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
            
            <Card className="mb-2">
              <CardBody className="p-0">
                <Section background="gradient">
                  <Container>
                    <Typography variant="h4" className="mb-2">Gradient Background</Typography>
                    <Typography variant="body">Applies a subtle gradient background</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
            
            <Card className="mb-4">
              <CardBody className="p-0">
                <Section background="dots">
                  <Container>
                    <Typography variant="h4" className="mb-2">Dots Pattern Background</Typography>
                    <Typography variant="body">Adds a decorative dots pattern overlay</Typography>
                  </Container>
                </Section>
              </CardBody>
            </Card>
          </div>
          <CodeBlock followTheme>{`<Section background="default">...</Section>
<Section background="secondary">...</Section>
<Section background="gradient">...</Section>
<Section background="dots">...</Section>`}</CodeBlock>
        </div>

        {/* Component Prop */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Semantic HTML Elements</Typography>
          <Typography variant="body" className="mb-4">
            Change the underlying HTML element for semantic markup.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="space-y-4">
                <Section component="section" spacing="small" background="secondary">
                  <Typography variant="body">Rendered as &lt;section&gt; (default)</Typography>
                </Section>
                
                <Section component="article" spacing="small" background="secondary">
                  <Typography variant="body">Rendered as &lt;article&gt;</Typography>
                </Section>
                
                <Section component="div" spacing="small" background="secondary">
                  <Typography variant="body">Rendered as &lt;div&gt;</Typography>
                </Section>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Section component="section">...</Section>  // Default
<Section component="article">...</Section>
<Section component="div">...</Section>`}</CodeBlock>
        </div>

        {/* Full Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Full Page Example</Typography>
          <Typography variant="body" className="mb-4">
            Combine sections with different backgrounds and spacing to create a full page layout.
          </Typography>
          <Card className="mb-4">
            <CardBody className="p-0">
              <Section spacing="large" background="gradient">
                <Container>
                  <Typography variant="h1" className="mb-4">Hero Section</Typography>
                  <Typography variant="lead">
                    Welcome to our amazing product. This hero section uses large spacing and a gradient background.
                  </Typography>
                  <div className="mt-6">
                    <Button size="large">Get Started</Button>
                  </div>
                </Container>
              </Section>
              
              <Section spacing="medium">
                <Container>
                  <Typography variant="h2" className="mb-4">Features</Typography>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardBody>
                        <Typography variant="h4">Feature 1</Typography>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <Typography variant="h4">Feature 2</Typography>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <Typography variant="h4">Feature 3</Typography>
                      </CardBody>
                    </Card>
                  </div>
                </Container>
              </Section>
              
              <Section spacing="medium" background="dots">
                <Container>
                  <Typography variant="h2" className="mb-4">Call to Action</Typography>
                  <Typography variant="body" className="mb-6">
                    Ready to get started? Join thousands of satisfied customers.
                  </Typography>
                  <Button variant="glow">Sign Up Now</Button>
                </Container>
              </Section>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Section spacing="large" background="gradient">
  <Container>
    <Typography variant="h1" className="mb-4">Hero Section</Typography>
    <Typography variant="lead">
      Welcome to our amazing product.
    </Typography>
    <Button size="large">Get Started</Button>
  </Container>
</Section>

<Section spacing="medium">
  <Container>
    <Typography variant="h2" className="mb-4">Features</Typography>
    {/* Feature cards */}
  </Container>
</Section>

<Section spacing="medium" background="dots">
  <Container>
    <Typography variant="h2" className="mb-4">Call to Action</Typography>
    <Button variant="glow">Sign Up Now</Button>
  </Container>
</Section>`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm">spacing</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'none' | 'small' | 'medium' | 'large' | 'xlarge'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The vertical padding of the section</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">background</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'secondary' | 'gradient' | 'dots'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">The background style of the section</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">fullWidth</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Whether the section should span full width</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">component</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'section' | 'div' | 'article'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'section'</td>
                <td className="p-2 text-sm">The HTML element to render</td>
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
                <td className="p-2 text-sm">Section content</td>
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
                Sections are responsive and adjust padding based on screen size
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use Container component inside Section for consistent content width
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The dots background pattern adds visual interest without being distracting
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Gradient backgrounds work well for hero sections and CTAs
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}