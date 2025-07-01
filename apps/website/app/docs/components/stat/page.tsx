'use client'

import { Stat, StatGroup, Card, CardBody, Typography, CodeBlock, Badge, Breadcrumb , Chip } from '@velvet-ui/core'
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react'

export default function StatPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Stat' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Stat</Typography>
          <Chip size="small" variant="glass" color="success" label="Stable" />
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          Display statistics and metrics with optional trends and icons.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Stat, StatGroup , Chip } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Stat */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Stat</Typography>
          <Typography variant="body" className="mb-4">
            A simple stat showing a label and value.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Stat
                label="Total Revenue"
                value="$45,231"
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Stat
  label="Total Revenue"
  value="$45,231"
/>`}</CodeBlock>
        </div>

        {/* With Change Indicator */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Change Indicator</Typography>
          <Typography variant="body" className="mb-4">
            Display positive or negative changes with trend indicators.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Stat
                  label="Monthly Users"
                  value="12,543"
                  change={23.5}
                  changeLabel="from last month"
                />
                <Stat
                  label="Conversion Rate"
                  value="3.2%"
                  change={-5.4}
                  changeLabel="from last week"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Stat
  label="Monthly Users"
  value="12,543"
  change={23.5}
  changeLabel="from last month"
/>

<Stat
  label="Conversion Rate"
  value="3.2%"
  change={-5.4}
  changeLabel="from last week"
/>`}</CodeBlock>
        </div>

        {/* With Icons */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Icons</Typography>
          <Typography variant="body" className="mb-4">
            Add icons to provide visual context for your stats.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <StatGroup cols={2}>
                <Stat
                  label="Total Sales"
                  value="$12,456"
                  change={12.3}
                  icon={<DollarSign className="h-6 w-6" />}
                />
                <Stat
                  label="Active Users"
                  value="2,345"
                  change={8.1}
                  icon={<Users className="h-6 w-6" />}
                />
              </StatGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Stat
  label="Total Sales"
  value="$12,456"
  change={12.3}
  icon={<DollarSign className="h-6 w-6" />}
/>

<Stat
  label="Active Users"
  value="2,345"
  change={8.1}
  icon={<Users className="h-6 w-6" />}
/>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from different visual styles to match your design.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <StatGroup cols={3}>
                <Stat
                  label="Default"
                  value="1,234"
                  change={5.2}
                  variant="default"
                />
                <Stat
                  label="Glass"
                  value="5,678"
                  change={-2.1}
                  variant="glass"
                />
                <Stat
                  label="Gradient"
                  value="9,012"
                  change={15.7}
                  variant="gradient"
                  color="primary"
                />
              </StatGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Stat
  label="Default"
  value="1,234"
  change={5.2}
  variant="default"
/>

<Stat
  label="Glass"
  value="5,678"
  change={-2.1}
  variant="glass"
/>

<Stat
  label="Gradient"
  value="9,012"
  change={15.7}
  variant="gradient"
  color="primary"
/>`}</CodeBlock>
        </div>

        {/* Gradient Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Gradient Colors</Typography>
          <Typography variant="body" className="mb-4">
            When using the gradient variant, you can apply different color schemes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <StatGroup cols={3}>
                <Stat
                  label="Revenue"
                  value="$89,456"
                  change={12.5}
                  variant="gradient"
                  color="success"
                  icon={<DollarSign className="h-6 w-6" />}
                />
                <Stat
                  label="Orders"
                  value="1,234"
                  change={-3.2}
                  variant="gradient"
                  color="danger"
                  icon={<ShoppingCart className="h-6 w-6" />}
                />
                <Stat
                  label="Growth"
                  value="23.5%"
                  change={8.7}
                  variant="gradient"
                  color="info"
                  icon={<TrendingUp className="h-6 w-6" />}
                />
              </StatGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Stat
  label="Revenue"
  value="$89,456"
  change={12.5}
  variant="gradient"
  color="success"
  icon={<DollarSign className="h-6 w-6" />}
/>

<Stat
  label="Orders"
  value="1,234"
  change={-3.2}
  variant="gradient"
  color="danger"
  icon={<ShoppingCart className="h-6 w-6" />}
/>

<Stat
  label="Growth"
  value="23.5%"
  change={8.7}
  variant="gradient"
  color="info"
  icon={<TrendingUp className="h-6 w-6" />}
/>`}</CodeBlock>
        </div>

        {/* Loading State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Loading State</Typography>
          <Typography variant="body" className="mb-4">
            Show a loading skeleton while fetching data.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <Stat
                label="Loading Data"
                value="-"
                loading
              />
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Stat
  label="Loading Data"
  value="-"
  loading
/>`}</CodeBlock>
        </div>

        {/* Stat Group */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Stat Group</Typography>
          <Typography variant="body" className="mb-4">
            Use StatGroup to organize multiple stats in a responsive grid layout.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <StatGroup cols={4}>
                <Stat label="Users" value="45.2K" change={12.5} />
                <Stat label="Revenue" value="$125K" change={8.2} />
                <Stat label="Orders" value="1,234" change={-2.4} />
                <Stat label="Growth" value="23.1%" change={4.1} />
              </StatGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<StatGroup cols={4}>
  <Stat label="Users" value="45.2K" change={12.5} />
  <Stat label="Revenue" value="$125K" change={8.2} />
  <Stat label="Orders" value="1,234" change={-2.4} />
  <Stat label="Growth" value="23.1%" change={4.1} />
</StatGroup>`}</CodeBlock>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Stat</Typography>
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
                <td className="p-2 font-mono text-sm">label</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">The label text for the stat</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">value</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string | number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">The main value to display</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">change</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Percentage change value (positive or negative)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">changeLabel</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Additional text to display after the change percentage</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">icon</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Icon to display in the stat</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'glass' | 'gradient'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'primary'</td>
                <td className="p-2 text-sm">Color scheme (only applies to gradient variant)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">loading</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Shows loading skeleton</td>
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

        <Typography variant="h3" className="mb-4">StatGroup</Typography>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">1 | 2 | 3 | 4</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">3</td>
                <td className="p-2 text-sm">Number of columns in the grid (responsive)</td>
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
                <td className="p-2 text-sm">Stat components to display in the group</td>
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
                Positive changes are displayed with a green color and up arrow
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Negative changes are displayed with a red color and down arrow
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The gradient variant works best with the color prop for visual hierarchy
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                StatGroup provides responsive grid layouts that adapt to different screen sizes
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}