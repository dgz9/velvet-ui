'use client'

import { 
  MuiGrid as Grid,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Badge, 
  Breadcrumb
, Chip } from '@velvet-ui/core'

export default function GridPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Grid' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Grid</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          A powerful and flexible grid system for creating responsive layouts.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { MuiGrid as Grid , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Grid */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Grid</Typography>
          <Typography variant="body" className="mb-4">
            The grid system uses a 12-column layout. Items will automatically wrap to the next line.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">xs=12</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">xs=6</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">xs=6</div>
                </Grid>
                <Grid item xs={3}>
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">xs=3</div>
                </Grid>
                <Grid item xs={3}>
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">xs=3</div>
                </Grid>
                <Grid item xs={3}>
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">xs=3</div>
                </Grid>
                <Grid item xs={3}>
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">xs=3</div>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Grid container spacing={2}>
  <Grid item xs={12}>
    <div>xs=12</div>
  </Grid>
  <Grid item xs={6}>
    <div>xs=6</div>
  </Grid>
  <Grid item xs={6}>
    <div>xs=6</div>
  </Grid>
  <Grid item xs={3}>
    <div>xs=3</div>
  </Grid>
  <Grid item xs={3}>
    <div>xs=3</div>
  </Grid>
  <Grid item xs={3}>
    <div>xs=3</div>
  </Grid>
  <Grid item xs={3}>
    <div>xs=3</div>
  </Grid>
</Grid>`}</CodeBlock>
        </div>

        {/* Responsive Grid */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Responsive Grid</Typography>
          <Typography variant="body" className="mb-4">
            Define different column sizes for different screen sizes. Resize your browser to see the effect.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <div className="bg-secondary-100 dark:bg-secondary-900/30 p-4 rounded">
                    <Typography variant="body" className="font-semibold">Responsive Item 1</Typography>
                    <Typography variant="caption" className="text-foreground-secondary">
                      xs=12 sm=6 md=4 lg=3
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <div className="bg-secondary-100 dark:bg-secondary-900/30 p-4 rounded">
                    <Typography variant="body" className="font-semibold">Responsive Item 2</Typography>
                    <Typography variant="caption" className="text-foreground-secondary">
                      xs=12 sm=6 md=4 lg=3
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <div className="bg-secondary-100 dark:bg-secondary-900/30 p-4 rounded">
                    <Typography variant="body" className="font-semibold">Responsive Item 3</Typography>
                    <Typography variant="caption" className="text-foreground-secondary">
                      xs=12 sm=6 md=4 lg=3
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={3}>
                  <div className="bg-secondary-100 dark:bg-secondary-900/30 p-4 rounded">
                    <Typography variant="body" className="font-semibold">Responsive Item 4</Typography>
                    <Typography variant="caption" className="text-foreground-secondary">
                      xs=12 sm=6 md=12 lg=3
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Grid container spacing={3}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <div>Responsive Item 1</div>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <div>Responsive Item 2</div>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <div>Responsive Item 3</div>
  </Grid>
  <Grid item xs={12} sm={6} md={12} lg={3}>
    <div>Responsive Item 4</div>
  </Grid>
</Grid>`}</CodeBlock>
        </div>

        {/* Auto Layout */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Auto Layout</Typography>
          <Typography variant="body" className="mb-4">
            Items can grow to fill available space or size based on their content.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <Typography variant="body" className="text-sm text-foreground-secondary">Equal width items</Typography>
              <Grid container spacing={2}>
                <Grid item xs>
                  <div className="bg-success-100 dark:bg-success-900/30 p-4 rounded text-center">xs</div>
                </Grid>
                <Grid item xs>
                  <div className="bg-success-100 dark:bg-success-900/30 p-4 rounded text-center">xs</div>
                </Grid>
                <Grid item xs>
                  <div className="bg-success-100 dark:bg-success-900/30 p-4 rounded text-center">xs</div>
                </Grid>
              </Grid>
              
              <Typography variant="body" className="text-sm text-foreground-secondary">Variable width content</Typography>
              <Grid container spacing={2}>
                <Grid item xs="auto">
                  <div className="bg-info-100 dark:bg-info-900/30 p-4 rounded">xs="auto"</div>
                </Grid>
                <Grid item xs>
                  <div className="bg-info-100 dark:bg-info-900/30 p-4 rounded text-center">xs (fills remaining)</div>
                </Grid>
                <Grid item xs="auto">
                  <div className="bg-info-100 dark:bg-info-900/30 p-4 rounded">xs="auto"</div>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Equal width items
<Grid container spacing={2}>
  <Grid item xs>
    <div>xs</div>
  </Grid>
  <Grid item xs>
    <div>xs</div>
  </Grid>
  <Grid item xs>
    <div>xs</div>
  </Grid>
</Grid>

// Variable width content
<Grid container spacing={2}>
  <Grid item xs="auto">
    <div>xs="auto"</div>
  </Grid>
  <Grid item xs>
    <div>xs (fills remaining)</div>
  </Grid>
  <Grid item xs="auto">
    <div>xs="auto"</div>
  </Grid>
</Grid>`}</CodeBlock>
        </div>

        {/* Spacing */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Spacing</Typography>
          <Typography variant="body" className="mb-4">
            Control the spacing between grid items.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-6">
              <div>
                <Typography variant="body" className="text-sm text-foreground-secondary mb-2">spacing={0}</Typography>
                <Grid container spacing={0}>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 border border-warning-200 dark:border-warning-800">1</div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 border border-warning-200 dark:border-warning-800">2</div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 border border-warning-200 dark:border-warning-800">3</div>
                  </Grid>
                </Grid>
              </div>
              
              <div>
                <Typography variant="body" className="text-sm text-foreground-secondary mb-2">spacing={2}</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 rounded">1</div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 rounded">2</div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 rounded">3</div>
                  </Grid>
                </Grid>
              </div>
              
              <div>
                <Typography variant="body" className="text-sm text-foreground-secondary mb-2">spacing={4}</Typography>
                <Grid container spacing={4}>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 rounded">1</div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 rounded">2</div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="bg-warning-100 dark:bg-warning-900/30 p-4 rounded">3</div>
                  </Grid>
                </Grid>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Grid container spacing={0}>...</Grid>
<Grid container spacing={2}>...</Grid>
<Grid container spacing={4}>...</Grid>`}</CodeBlock>
        </div>

        {/* Direction and Alignment */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Direction and Alignment</Typography>
          <Typography variant="body" className="mb-4">
            Control the direction and alignment of grid items.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-6">
              <div>
                <Typography variant="body" className="text-sm text-foreground-secondary mb-2">Row Direction</Typography>
                <Grid container spacing={2} direction="row">
                  <Grid item xs="auto">
                    <div className="bg-danger-100 dark:bg-danger-900/30 p-4 rounded">1</div>
                  </Grid>
                  <Grid item xs="auto">
                    <div className="bg-danger-100 dark:bg-danger-900/30 p-4 rounded">2</div>
                  </Grid>
                  <Grid item xs="auto">
                    <div className="bg-danger-100 dark:bg-danger-900/30 p-4 rounded">3</div>
                  </Grid>
                </Grid>
              </div>
              
              <div>
                <Typography variant="body" className="text-sm text-foreground-secondary mb-2">Column Direction</Typography>
                <Grid container spacing={2} direction="column" className="h-48">
                  <Grid item>
                    <div className="bg-danger-100 dark:bg-danger-900/30 p-4 rounded">1</div>
                  </Grid>
                  <Grid item>
                    <div className="bg-danger-100 dark:bg-danger-900/30 p-4 rounded">2</div>
                  </Grid>
                  <Grid item>
                    <div className="bg-danger-100 dark:bg-danger-900/30 p-4 rounded">3</div>
                  </Grid>
                </Grid>
              </div>
              
              <div>
                <Typography variant="body" className="text-sm text-foreground-secondary mb-2">Justify Content</Typography>
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item xs={3}>
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">1</div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">2</div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">3</div>
                  </Grid>
                </Grid>
              </div>
              
              <div>
                <Typography variant="body" className="text-sm text-foreground-secondary mb-2">Align Items</Typography>
                <Grid container spacing={2} alignItems="center" className="h-32 bg-gray-100 dark:bg-gray-800 rounded">
                  <Grid item xs={4}>
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 p-2 rounded text-center">Small</div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 p-8 rounded text-center">Large</div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 p-4 rounded text-center">Medium</div>
                  </Grid>
                </Grid>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Direction
<Grid container direction="row">...</Grid>
<Grid container direction="column">...</Grid>

// Justify Content
<Grid container justifyContent="space-between">...</Grid>

// Align Items
<Grid container alignItems="center">...</Grid>`}</CodeBlock>
        </div>

        {/* Nested Grids */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Nested Grids</Typography>
          <Typography variant="body" className="mb-4">
            Grid containers can be nested to create complex layouts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <Typography variant="body" className="font-semibold mb-2">Main Content</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">Nested 1</div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded text-center">Nested 2</div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded h-full">
                    <Typography variant="body" className="font-semibold">Sidebar</Typography>
                  </div>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Grid container spacing={3}>
  <Grid item xs={12} md={8}>
    <div>
      <Typography>Main Content</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>Nested 1</div>
        </Grid>
        <Grid item xs={6}>
          <div>Nested 2</div>
        </Grid>
      </Grid>
    </div>
  </Grid>
  <Grid item xs={12} md={4}>
    <div>Sidebar</div>
  </Grid>
</Grid>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Grid Container Props</Typography>
        <div className="overflow-x-auto mb-8">
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
                <td className="p-2 font-mono text-sm">container</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Defines the component as a grid container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">spacing</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">0</td>
                <td className="p-2 text-sm">Spacing between grid items (multiplied by 4px)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">direction</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'row' | 'row-reverse' | 'column' | 'column-reverse'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'row'</td>
                <td className="p-2 text-sm">Flex direction of the container</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">wrap</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'nowrap' | 'wrap' | 'wrap-reverse'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'wrap'</td>
                <td className="p-2 text-sm">Flex wrap behavior</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">alignItems</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'stretch'</td>
                <td className="p-2 text-sm">Align items vertically</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">justifyContent</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'flex-start'</td>
                <td className="p-2 text-sm">Justify content horizontally</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">Grid Item Props</Typography>
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
                <td className="p-2 font-mono text-sm">item</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Defines the component as a grid item</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">xs</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true | 'auto' | 1-12</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Grid size for all screen sizes</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">sm</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true | 'auto' | 1-12</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Grid size for small screens and up</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">md</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true | 'auto' | 1-12</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Grid size for medium screens and up</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">lg</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true | 'auto' | 1-12</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Grid size for large screens and up</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">xl</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">true | 'auto' | 1-12</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Grid size for extra large screens and up</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">zeroMinWidth</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Prevents text overflow issues</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">component</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ElementType</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'div'</td>
                <td className="p-2 text-sm">Component to render as</td>
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
                The grid system is based on a 12-column layout with flexible breakpoints
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use <code>xs={true}</code> or just <code>xs</code> for items that should grow equally
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use <code>xs="auto"</code> for items that should size based on their content
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The spacing prop adds padding to grid items and negative margin to the container
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Grid items must be direct children of a grid container for spacing to work correctly
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}