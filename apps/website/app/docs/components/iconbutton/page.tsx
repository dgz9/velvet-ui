'use client'

import { 
  IconButton,
  Badge,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Breadcrumb,
  Tooltip
} from '@velvet-ui/core'
import { 
  Bell, 
  Mail, 
  Settings, 
  Heart, 
  Share2, 
  Download,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  Mic
} from 'lucide-react'

export default function IconButtonPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'IconButton' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">IconButton</Typography>
          <Badge variant="soft" color="success">New</Badge>
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          Icon-only buttons with optional badges and tooltips for compact actions.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { IconButton } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic IconButton */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic IconButton</Typography>
          <Typography variant="body" className="mb-4">
            Simple icon buttons for common actions.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <IconButton icon={<Bell className="h-5 w-5" />} />
                <IconButton icon={<Mail className="h-5 w-5" />} />
                <IconButton icon={<Settings className="h-5 w-5" />} />
                <IconButton icon={<Heart className="h-5 w-5" />} />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<IconButton icon={<Bell className="h-5 w-5" />} />
<IconButton icon={<Mail className="h-5 w-5" />} />
<IconButton icon={<Settings className="h-5 w-5" />} />
<IconButton icon={<Heart className="h-5 w-5" />} />`}</CodeBlock>
        </div>

        {/* With Badge */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Badge</Typography>
          <Typography variant="body" className="mb-4">
            Add notification badges to icon buttons.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <IconButton 
                  icon={<Bell className="h-5 w-5" />} 
                  badge={3}
                />
                <IconButton 
                  icon={<Mail className="h-5 w-5" />} 
                  badge="99+"
                />
                <IconButton 
                  icon={<Bell className="h-5 w-5" />} 
                  badge={<Badge variant="dot" color="danger" animate ping />}
                />
                <IconButton 
                  icon={<Settings className="h-5 w-5" />} 
                  badge={1}
                  badgePosition="top-left"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <IconButton 
                  icon={<Mail className="h-5 w-5" />} 
                  badge={12}
                  badgeProps={{ color: 'warning' }}
                  variant="outline"
                />
                <IconButton 
                  icon={<Bell className="h-5 w-5" />} 
                  badge="New"
                  badgeProps={{ variant: 'soft', color: 'success' }}
                  variant="ghost"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<IconButton 
  icon={<Bell className="h-5 w-5" />} 
  badge={3}
/>

<IconButton 
  icon={<Mail className="h-5 w-5" />} 
  badge="99+"
/>

<IconButton 
  icon={<Bell className="h-5 w-5" />} 
  badge={<Badge variant="dot" color="danger" animate ping />}
/>

<IconButton 
  icon={<Settings className="h-5 w-5" />} 
  badge={1}
  badgePosition="top-left"
/>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from 7 different variants to match your design.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <IconButton icon={<Heart className="h-5 w-5" />} variant="solid" color="primary" />
                <IconButton icon={<Heart className="h-5 w-5" />} variant="outline" color="primary" />
                <IconButton icon={<Heart className="h-5 w-5" />} variant="ghost" color="primary" />
                <IconButton icon={<Heart className="h-5 w-5" />} variant="soft" color="primary" />
              </div>
              <div className="flex flex-wrap gap-4">
                <IconButton icon={<Heart className="h-5 w-5" />} variant="glass" color="primary" />
                <IconButton icon={<Heart className="h-5 w-5" />} variant="gradient" color="primary" />
                <IconButton icon={<Heart className="h-5 w-5" />} variant="glow" color="primary" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<IconButton icon={<Heart />} variant="solid" color="primary" />
<IconButton icon={<Heart />} variant="outline" color="primary" />
<IconButton icon={<Heart />} variant="ghost" color="primary" />
<IconButton icon={<Heart />} variant="soft" color="primary" />
<IconButton icon={<Heart />} variant="glass" color="primary" />
<IconButton icon={<Heart />} variant="gradient" color="primary" />
<IconButton icon={<Heart />} variant="glow" color="primary" />`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Use semantic colors for different actions.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <IconButton icon={<Bell className="h-5 w-5" />} color="default" />
                <IconButton icon={<Bell className="h-5 w-5" />} color="primary" />
                <IconButton icon={<Bell className="h-5 w-5" />} color="secondary" />
                <IconButton icon={<Bell className="h-5 w-5" />} color="success" />
                <IconButton icon={<Bell className="h-5 w-5" />} color="warning" />
                <IconButton icon={<Bell className="h-5 w-5" />} color="danger" />
                <IconButton icon={<Bell className="h-5 w-5" />} color="info" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<IconButton icon={<Bell />} color="default" />
<IconButton icon={<Bell />} color="primary" />
<IconButton icon={<Bell />} color="secondary" />
<IconButton icon={<Bell />} color="success" />
<IconButton icon={<Bell />} color="warning" />
<IconButton icon={<Bell />} color="danger" />
<IconButton icon={<Bell />} color="info" />`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Available in 5 sizes from tiny to extra large.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap items-center gap-4">
                <IconButton icon={<Settings className="h-3 w-3" />} size="tiny" />
                <IconButton icon={<Settings className="h-4 w-4" />} size="small" />
                <IconButton icon={<Settings className="h-5 w-5" />} size="medium" />
                <IconButton icon={<Settings className="h-6 w-6" />} size="large" />
                <IconButton icon={<Settings className="h-7 w-7" />} size="xlarge" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<IconButton icon={<Settings className="h-3 w-3" />} size="tiny" />
<IconButton icon={<Settings className="h-4 w-4" />} size="small" />
<IconButton icon={<Settings className="h-5 w-5" />} size="medium" />
<IconButton icon={<Settings className="h-6 w-6" />} size="large" />
<IconButton icon={<Settings className="h-7 w-7" />} size="xlarge" />`}</CodeBlock>
        </div>

        {/* With Tooltip */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Tooltip</Typography>
          <Typography variant="body" className="mb-4">
            Add tooltips to provide context for icon actions.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <IconButton 
                  icon={<Edit className="h-5 w-5" />} 
                  tooltip="Edit"
                />
                <IconButton 
                  icon={<Download className="h-5 w-5" />} 
                  tooltip="Download file"
                  variant="outline"
                />
                <IconButton 
                  icon={<Share2 className="h-5 w-5" />} 
                  tooltip="Share"
                  tooltipProps={{ placement: 'bottom' }}
                  variant="ghost"
                />
                <IconButton 
                  icon={<Trash2 className="h-5 w-5" />} 
                  tooltip="Delete (cannot be undone)"
                  color="danger"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<IconButton 
  icon={<Edit className="h-5 w-5" />} 
  tooltip="Edit"
/>

<IconButton 
  icon={<Download className="h-5 w-5" />} 
  tooltip="Download file"
  variant="outline"
/>

<IconButton 
  icon={<Share2 className="h-5 w-5" />} 
  tooltip="Share"
  tooltipProps={{ placement: 'bottom' }}
  variant="ghost"
/>`}</CodeBlock>
        </div>

        {/* Border Radius */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Border Radius</Typography>
          <Typography variant="body" className="mb-4">
            Customize the border radius of icon buttons.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <IconButton icon={<Bell className="h-5 w-5" />} radius="none" variant="outline" />
                <IconButton icon={<Bell className="h-5 w-5" />} radius="small" variant="outline" />
                <IconButton icon={<Bell className="h-5 w-5" />} radius="medium" variant="outline" />
                <IconButton icon={<Bell className="h-5 w-5" />} radius="large" variant="outline" />
                <IconButton icon={<Bell className="h-5 w-5" />} radius="full" variant="outline" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<IconButton icon={<Bell />} radius="none" variant="outline" />
<IconButton icon={<Bell />} radius="small" variant="outline" />
<IconButton icon={<Bell />} radius="medium" variant="outline" />
<IconButton icon={<Bell />} radius="large" variant="outline" />
<IconButton icon={<Bell />} radius="full" variant="outline" />`}</CodeBlock>
        </div>

        {/* Loading State */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Loading State</Typography>
          <Typography variant="body" className="mb-4">
            Show a loading spinner for async actions.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <IconButton 
                  icon={<RefreshCw className="h-5 w-5" />} 
                  loading
                />
                <IconButton 
                  icon={<RefreshCw className="h-5 w-5" />} 
                  loading
                  variant="outline"
                  color="primary"
                />
                <IconButton 
                  icon={<RefreshCw className="h-5 w-5" />} 
                  loading
                  variant="soft"
                  color="success"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<IconButton 
  icon={<RefreshCw className="h-5 w-5" />} 
  loading
/>`}</CodeBlock>
        </div>

        {/* Practical Examples */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Practical Examples</Typography>
          <Typography variant="body" className="mb-4">
            Common use cases for icon buttons.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-6">
              {/* Toolbar */}
              <div>
                <Typography variant="small" className="text-foreground-secondary mb-2">Toolbar</Typography>
                <div className="flex items-center gap-1 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <IconButton icon={<Plus className="h-4 w-4" />} variant="ghost" size="small" tooltip="New" />
                  <IconButton icon={<Edit className="h-4 w-4" />} variant="ghost" size="small" tooltip="Edit" />
                  <IconButton icon={<Trash2 className="h-4 w-4" />} variant="ghost" size="small" color="danger" tooltip="Delete" />
                  <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
                  <IconButton icon={<Search className="h-4 w-4" />} variant="ghost" size="small" tooltip="Search" />
                  <IconButton icon={<Filter className="h-4 w-4" />} variant="ghost" size="small" tooltip="Filter" />
                </div>
              </div>

              {/* Pagination */}
              <div>
                <Typography variant="small" className="text-foreground-secondary mb-2">Pagination</Typography>
                <div className="flex items-center gap-2">
                  <IconButton icon={<ChevronLeft className="h-4 w-4" />} variant="outline" size="small" disabled />
                  <span className="px-3 text-sm">Page 1 of 10</span>
                  <IconButton icon={<ChevronRight className="h-4 w-4" />} variant="outline" size="small" />
                </div>
              </div>

              {/* Media Controls */}
              <div>
                <Typography variant="small" className="text-foreground-secondary mb-2">Media Controls</Typography>
                <div className="flex items-center gap-2">
                  <IconButton icon={<Play className="h-5 w-5" />} variant="soft" color="primary" />
                  <IconButton icon={<Volume2 className="h-4 w-4" />} variant="ghost" />
                  <IconButton icon={<Mic className="h-4 w-4" />} variant="ghost" />
                </div>
              </div>
            </CardBody>
          </Card>
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
                <td className="p-2 font-mono text-sm">icon</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Icon to display (required)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">variant</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid' | 'outline' | 'ghost' | 'soft' | 'glass' | 'gradient' | 'glow'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid'</td>
                <td className="p-2 text-sm">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">Color scheme</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'tiny' | 'small' | 'medium' | 'large' | 'xlarge'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Button size</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">radius</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'none' | 'small' | 'medium' | 'large' | 'full'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Border radius</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">badge</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Badge content</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">badgePosition</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'top-right'</td>
                <td className="p-2 text-sm">Badge position</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">badgeProps</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">BadgeProps</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Props for badge component</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">tooltip</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Tooltip content</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">tooltipProps</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">TooltipProps</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Props for tooltip component</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">loading</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Show loading spinner</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">disabled</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Disable the button</td>
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
                IconButtons are perfect for toolbars, navigation, and compact interfaces
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Always include tooltips to provide context for icon-only buttons
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Badges automatically position themselves relative to the button
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The loading state shows a spinning animation on the icon
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                All button props from HTML button element are supported
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}