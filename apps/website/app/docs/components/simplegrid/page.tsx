'use client'

import { SimpleGrid, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb , Chip } from '@velvet-ui/core'

export default function SimpleGridPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'SimpleGrid' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">SimpleGrid</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A responsive grid layout component with flexible column configuration.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { SimpleGrid , Chip } from '@velvet-ui/core'

// Also available as Grid for backward compatibility
import { Grid , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Grid */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Grid</Typography>
          <Typography variant="body" className="mb-4">
            Create simple grid layouts with a fixed number of columns.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <SimpleGrid cols={3} gap={4}>
                <Card className="p-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography>Item 1</Typography>
                </Card>
                <Card className="p-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography>Item 2</Typography>
                </Card>
                <Card className="p-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography>Item 3</Typography>
                </Card>
                <Card className="p-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography>Item 4</Typography>
                </Card>
                <Card className="p-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography>Item 5</Typography>
                </Card>
                <Card className="p-4 bg-primary-100 dark:bg-primary-900/20">
                  <Typography>Item 6</Typography>
                </Card>
              </SimpleGrid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<SimpleGrid cols={3} gap={4}>
  <Card className="p-4">Item 1</Card>
  <Card className="p-4">Item 2</Card>
  <Card className="p-4">Item 3</Card>
  <Card className="p-4">Item 4</Card>
  <Card className="p-4">Item 5</Card>
  <Card className="p-4">Item 6</Card>
</SimpleGrid>`}</CodeBlock>
        </div>

        {/* Responsive Grid */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Responsive Grid</Typography>
          <Typography variant="body" className="mb-4">
            Configure different column counts for different screen sizes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <SimpleGrid 
                cols={{ 
                  default: 1, 
                  sm: 2, 
                  md: 3, 
                  lg: 4 
                }} 
                gap={4}
              >
                <Card className="p-8 bg-secondary-100 dark:bg-secondary-900/20">
                  <Typography className="text-center">1</Typography>
                </Card>
                <Card className="p-8 bg-secondary-100 dark:bg-secondary-900/20">
                  <Typography className="text-center">2</Typography>
                </Card>
                <Card className="p-8 bg-secondary-100 dark:bg-secondary-900/20">
                  <Typography className="text-center">3</Typography>
                </Card>
                <Card className="p-8 bg-secondary-100 dark:bg-secondary-900/20">
                  <Typography className="text-center">4</Typography>
                </Card>
                <Card className="p-8 bg-secondary-100 dark:bg-secondary-900/20">
                  <Typography className="text-center">5</Typography>
                </Card>
                <Card className="p-8 bg-secondary-100 dark:bg-secondary-900/20">
                  <Typography className="text-center">6</Typography>
                </Card>
                <Card className="p-8 bg-secondary-100 dark:bg-secondary-900/20">
                  <Typography className="text-center">7</Typography>
                </Card>
                <Card className="p-8 bg-secondary-100 dark:bg-secondary-900/20">
                  <Typography className="text-center">8</Typography>
                </Card>
              </SimpleGrid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<SimpleGrid 
  cols={{ 
    default: 1,  // Mobile: 1 column
    sm: 2,       // Small screens: 2 columns
    md: 3,       // Medium screens: 3 columns
    lg: 4        // Large screens: 4 columns
  }} 
  gap={4}
>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
  <Card>7</Card>
  <Card>8</Card>
</SimpleGrid>`}</CodeBlock>
        </div>

        {/* Different Column Counts */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Column Counts</Typography>
          <Typography variant="body" className="mb-4">
            SimpleGrid supports 1, 2, 3, 4, 5, 6, and 12 column layouts.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-6">
              <div>
                <Typography variant="caption" className="mb-2 text-foreground-secondary">2 Columns</Typography>
                <SimpleGrid cols={2} gap={3}>
                  <Card className="p-3 bg-success-100 dark:bg-success-900/20">
                    <Typography className="text-center text-sm">1</Typography>
                  </Card>
                  <Card className="p-3 bg-success-100 dark:bg-success-900/20">
                    <Typography className="text-center text-sm">2</Typography>
                  </Card>
                </SimpleGrid>
              </div>
              
              <div>
                <Typography variant="caption" className="mb-2 text-foreground-secondary">4 Columns</Typography>
                <SimpleGrid cols={4} gap={3}>
                  <Card className="p-3 bg-info-100 dark:bg-info-900/20">
                    <Typography className="text-center text-sm">1</Typography>
                  </Card>
                  <Card className="p-3 bg-info-100 dark:bg-info-900/20">
                    <Typography className="text-center text-sm">2</Typography>
                  </Card>
                  <Card className="p-3 bg-info-100 dark:bg-info-900/20">
                    <Typography className="text-center text-sm">3</Typography>
                  </Card>
                  <Card className="p-3 bg-info-100 dark:bg-info-900/20">
                    <Typography className="text-center text-sm">4</Typography>
                  </Card>
                </SimpleGrid>
              </div>

              <div>
                <Typography variant="caption" className="mb-2 text-foreground-secondary">12 Columns (for fine control)</Typography>
                <SimpleGrid cols={12} gap={3}>
                  {Array.from({ length: 12 }, (_, i) => (
                    <Card key={i} className="p-2 bg-warning-100 dark:bg-warning-900/20">
                      <Typography className="text-center text-xs">{i + 1}</Typography>
                    </Card>
                  ))}
                </SimpleGrid>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<SimpleGrid cols={2} gap={3}>
  <Card>1</Card>
  <Card>2</Card>
</SimpleGrid>

<SimpleGrid cols={4} gap={3}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
</SimpleGrid>

<SimpleGrid cols={12} gap={3}>
  {/* 12 column grid for fine control */}
  {items.map((item) => (
    <Card key={item.id}>{item.name}</Card>
  ))}
</SimpleGrid>`}</CodeBlock>
        </div>

        {/* Gap Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Gap Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Control the spacing between grid items.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-6">
              <div>
                <Typography variant="caption" className="mb-2 text-foreground-secondary">Gap: 0</Typography>
                <SimpleGrid cols={3} gap={0}>
                  <Card className="p-4 rounded-none">1</Card>
                  <Card className="p-4 rounded-none">2</Card>
                  <Card className="p-4 rounded-none">3</Card>
                </SimpleGrid>
              </div>
              
              <div>
                <Typography variant="caption" className="mb-2 text-foreground-secondary">Gap: 4 (default)</Typography>
                <SimpleGrid cols={3} gap={4}>
                  <Card className="p-4">1</Card>
                  <Card className="p-4">2</Card>
                  <Card className="p-4">3</Card>
                </SimpleGrid>
              </div>

              <div>
                <Typography variant="caption" className="mb-2 text-foreground-secondary">Gap: 8</Typography>
                <SimpleGrid cols={3} gap={8}>
                  <Card className="p-4">1</Card>
                  <Card className="p-4">2</Card>
                  <Card className="p-4">3</Card>
                </SimpleGrid>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<SimpleGrid cols={3} gap={0}>
  {/* No gap between items */}
</SimpleGrid>

<SimpleGrid cols={3} gap={4}>
  {/* Default gap */}
</SimpleGrid>

<SimpleGrid cols={3} gap={8}>
  {/* Large gap */}
</SimpleGrid>`}</CodeBlock>
        </div>

        {/* Real-world Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Real-world Example</Typography>
          <Typography variant="body" className="mb-4">
            A product grid with responsive columns.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <SimpleGrid 
                cols={{ 
                  default: 1, 
                  sm: 2, 
                  lg: 3 
                }} 
                gap={6}
              >
                {[
                  { name: 'Product 1', price: '$29.99', image: '🎯' },
                  { name: 'Product 2', price: '$39.99', image: '🎨' },
                  { name: 'Product 3', price: '$49.99', image: '🎪' },
                  { name: 'Product 4', price: '$59.99', image: '🎭' },
                  { name: 'Product 5', price: '$69.99', image: '🎬' },
                  { name: 'Product 6', price: '$79.99', image: '🎮' },
                ].map((product, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-6xl">
                      {product.image}
                    </div>
                    <CardBody>
                      <Typography variant="h4">{product.name}</Typography>
                      <Typography variant="body" className="text-foreground-secondary">
                        Lorem ipsum dolor sit amet consectetur.
                      </Typography>
                      <Typography variant="h3" className="mt-4 text-primary">
                        {product.price}
                      </Typography>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<SimpleGrid 
  cols={{ 
    default: 1, 
    sm: 2, 
    lg: 3 
  }} 
  gap={6}
>
  {products.map((product) => (
    <Card key={product.id}>
      <img 
        src={product.image} 
        alt={product.name}
        className="aspect-square object-cover"
      />
      <CardBody>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="body">
          {product.description}
        </Typography>
        <Typography variant="h3" className="mt-4">
          {product.price}
        </Typography>
      </CardBody>
    </Card>
  ))}
</SimpleGrid>`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm">cols</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">number | ResponsiveCols</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">1</td>
                <td className="p-2 text-sm">Number of columns or responsive configuration</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">gap</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">4</td>
                <td className="p-2 text-sm">Gap between grid items</td>
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
                <td className="p-2 text-sm">Grid items</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ResponsiveCols Type */}
        <Typography variant="h3" className="mb-4 mt-8">ResponsiveCols Type</Typography>
        <CodeBlock followTheme language="tsx">{`type ResponsiveCols = {
  default?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;  // 640px+
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;  // 768px+
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;  // 1024px+
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;  // 1280px+
}`}</CodeBlock>

        {/* Notes */}
        <Typography variant="h2" className="mb-4 mt-12">Notes</Typography>
        <Card className="p-4 bg-info-50 dark:bg-info-950/20">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                SimpleGrid uses CSS Grid under the hood for optimal performance
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The component is also exported as "Grid" for backward compatibility
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                For more complex grid layouts, consider using CSS Grid directly with custom classes
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The 12-column option is useful for creating layouts that align with traditional grid systems
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}