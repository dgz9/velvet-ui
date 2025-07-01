'use client'

import { 
  Divider,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Badge, 
  Breadcrumb,
  Button
, Chip } from '@velvet-ui/core'

export default function DividerPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Divider' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Divider</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A visual separator to divide and organize content into clear sections.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Divider , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Divider */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Divider</Typography>
          <Typography variant="body" className="mb-4">
            A simple horizontal divider to separate content.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Typography variant="body">Section 1</Typography>
              <Divider />
              <Typography variant="body">Section 2</Typography>
              <Divider />
              <Typography variant="body">Section 3</Typography>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Typography>Section 1</Typography>
<Divider />
<Typography>Section 2</Typography>
<Divider />
<Typography>Section 3</Typography>`}</CodeBlock>
        </div>

        {/* Vertical Divider */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Vertical Divider</Typography>
          <Typography variant="body" className="mb-4">
            Use vertical dividers to separate inline content.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex items-center h-8">
                <Typography variant="body">Item 1</Typography>
                <Divider orientation="vertical" />
                <Typography variant="body">Item 2</Typography>
                <Divider orientation="vertical" />
                <Typography variant="body">Item 3</Typography>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<div className="flex items-center h-8">
  <Typography>Item 1</Typography>
  <Divider orientation="vertical" />
  <Typography>Item 2</Typography>
  <Divider orientation="vertical" />
  <Typography>Item 3</Typography>
</div>`}</CodeBlock>
        </div>

        {/* With Label */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Label</Typography>
          <Typography variant="body" className="mb-4">
            Add labels to dividers for better context.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Divider label="OR" />
              <Divider label="Section Title" labelPosition="left" />
              <Divider label="End of Section" labelPosition="right" />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Divider label="OR" />
<Divider label="Section Title" labelPosition="left" />
<Divider label="End of Section" labelPosition="right" />`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different visual styles.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Typography variant="body" className="text-sm text-foreground-secondary">Solid</Typography>
              <Divider variant="solid" />
              
              <Typography variant="body" className="text-sm text-foreground-secondary">Dashed</Typography>
              <Divider variant="dashed" />
              
              <Typography variant="body" className="text-sm text-foreground-secondary">Dotted</Typography>
              <Divider variant="dotted" />
              
              <Typography variant="body" className="text-sm text-foreground-secondary">Gradient</Typography>
              <Divider variant="gradient" />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Divider variant="solid" />
<Divider variant="dashed" />
<Divider variant="dotted" />
<Divider variant="gradient" />`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Use semantic colors to match your design.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Divider color="default" />
              <Divider color="primary" />
              <Divider color="secondary" />
              <Divider color="success" />
              <Divider color="warning" />
              <Divider color="danger" />
              <Divider color="info" />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Divider color="default" />
<Divider color="primary" />
<Divider color="secondary" />
<Divider color="success" />
<Divider color="warning" />
<Divider color="danger" />
<Divider color="info" />`}</CodeBlock>
        </div>

        {/* Thickness */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Thickness</Typography>
          <Typography variant="body" className="mb-4">
            Adjust the thickness for different visual weights.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Typography variant="body" className="text-sm text-foreground-secondary">Thin</Typography>
              <Divider thickness="thin" />
              
              <Typography variant="body" className="text-sm text-foreground-secondary">Medium</Typography>
              <Divider thickness="medium" />
              
              <Typography variant="body" className="text-sm text-foreground-secondary">Thick</Typography>
              <Divider thickness="thick" />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Divider thickness="thin" />
<Divider thickness="medium" />
<Divider thickness="thick" />`}</CodeBlock>
        </div>

        {/* Spacing */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Spacing</Typography>
          <Typography variant="body" className="mb-4">
            Control the vertical spacing around dividers.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-2">
                <Typography variant="body" className="text-sm">Content</Typography>
                <Divider spacing="none" />
                <Typography variant="body" className="text-sm">No spacing</Typography>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-2">
                <Typography variant="body" className="text-sm">Content</Typography>
                <Divider spacing="small" />
                <Typography variant="body" className="text-sm">Small spacing</Typography>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-2">
                <Typography variant="body" className="text-sm">Content</Typography>
                <Divider spacing="medium" />
                <Typography variant="body" className="text-sm">Medium spacing</Typography>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-2">
                <Typography variant="body" className="text-sm">Content</Typography>
                <Divider spacing="large" />
                <Typography variant="body" className="text-sm">Large spacing</Typography>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Divider spacing="none" />
<Divider spacing="small" />
<Divider spacing="medium" />
<Divider spacing="large" />`}</CodeBlock>
        </div>

        {/* Full Width */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Full Width</Typography>
          <Typography variant="body" className="mb-4">
            Extend dividers to the full width of their container, useful in cards.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Typography variant="body">This divider respects the container padding</Typography>
              <Divider />
              <Typography variant="body">This divider extends to the card edges</Typography>
              <Divider fullWidth />
              <Typography variant="body">End of content</Typography>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Card>
  <CardBody>
    <Typography>This divider respects the container padding</Typography>
    <Divider />
    <Typography>This divider extends to the card edges</Typography>
    <Divider fullWidth />
    <Typography>End of content</Typography>
  </CardBody>
</Card>`}</CodeBlock>
        </div>

        {/* Animated */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Animated</Typography>
          <Typography variant="body" className="mb-4">
            Add entrance animations for dynamic interfaces.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Button 
                size="small" 
                onClick={() => {
                  // Force re-render to show animation
                  const container = document.getElementById('animated-dividers');
                  if (container) {
                    container.style.display = 'none';
                    setTimeout(() => container.style.display = 'block', 10);
                  }
                }}
              >
                Replay Animation
              </Button>
              <div id="animated-dividers" className="mt-4 space-y-4">
                <Divider animate />
                <Divider animate variant="gradient" color="primary" />
                <Divider animate label="Animated Label" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Divider animate />
<Divider animate variant="gradient" color="primary" />
<Divider animate label="Animated Label" />`}</CodeBlock>
        </div>

        {/* Complex Examples */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Complex Examples</Typography>
          <Typography variant="body" className="mb-4">
            Combine different props for unique dividers.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Divider 
                variant="gradient" 
                color="primary" 
                thickness="thick" 
                label="Featured Section" 
              />
              
              <Divider 
                variant="dashed" 
                color="warning" 
                label="Important Notice" 
                labelPosition="left"
              />
              
              <Divider 
                fullWidth 
                variant="solid" 
                color="secondary" 
                thickness="thin"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Divider 
  variant="gradient" 
  color="primary" 
  thickness="thick" 
  label="Featured Section" 
/>

<Divider 
  variant="dashed" 
  color="warning" 
  label="Important Notice" 
  labelPosition="left"
/>

<Divider 
  fullWidth 
  variant="solid" 
  color="secondary" 
  thickness="thin"
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
                <td className="p-2 font-mono text-sm">orientation</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'horizontal' | 'vertical'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'horizontal'</td>
                <td className="p-2 text-sm">The orientation of the divider</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid' | 'dashed' | 'dotted' | 'gradient'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid'</td>
                <td className="p-2 text-sm">The visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">The color scheme</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">thickness</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'thin' | 'medium' | 'thick'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The thickness of the divider</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">spacing</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'none' | 'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Vertical margin for horizontal, horizontal margin for vertical</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">fullWidth</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Extends to full container width (ignores padding)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">label</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Text label to display with the divider</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">labelPosition</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'left' | 'center' | 'right'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'center'</td>
                <td className="p-2 text-sm">Position of the label (horizontal only)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">animate</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Enable entrance animation</td>
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
                The gradient variant creates a fade effect from transparent to color to transparent
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Vertical dividers require a defined height on their container to display properly
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The fullWidth prop is designed specifically for use within Card components
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Labels are only supported for horizontal dividers
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}