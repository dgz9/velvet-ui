'use client'

import { 
  Badge,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Breadcrumb,
  Button,
  Avatar,
  IconButton
} from '@velvet-ui/core'
import { Check, X, Clock, AlertCircle, Star, Heart, Bell, Mail, ShoppingCart } from 'lucide-react'

export default function BadgePage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Badge' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Badge</Typography>
          <Badge variant="soft" color="success">Updated</Badge>
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          Display status indicators, notification counts, or labels on avatars, buttons, and other components.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Badge } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Notification Badges */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Notification Badges</Typography>
          <Typography variant="body" className="mb-4">
            Use badges as notification indicators on avatars, buttons, and icons.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-6">
              <div className="flex flex-wrap items-center gap-6">
                <Avatar 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
                  alt="John Doe"
                  badge={3}
                />
                <Avatar 
                  alt="Jane Smith"
                  badge="99+"
                  size="large"
                />
                <IconButton 
                  icon={<Bell className="h-5 w-5" />} 
                  badge={5}
                />
                <IconButton 
                  icon={<Mail className="h-5 w-5" />} 
                  badge="12"
                  variant="ghost"
                />
                <Button size="medium">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  <Badge variant="notification" size="tiny" color="danger" className="ml-2">
                    3
                  </Badge>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                <IconButton 
                  icon={<Bell className="h-5 w-5" />} 
                  badge={<Badge variant="dot" color="danger" animate ping />}
                  variant="outline"
                />
                <Avatar 
                  alt="User"
                  badge={<Badge variant="dot" color="success" animate />}
                  badgePosition="bottom-right"
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// On Avatar
<Avatar 
  src="avatar.jpg" 
  alt="John Doe"
  badge={3}
/>

// On IconButton
<IconButton 
  icon={<Bell className="h-5 w-5" />} 
  badge={5}
/>

// With max limit
<Avatar 
  alt="User"
  badge="99+"
/>

// Animated dot
<IconButton 
  icon={<Bell className="h-5 w-5" />} 
  badge={<Badge variant="dot" color="danger" animate ping />}
/>`}</CodeBlock>
        </div>

        {/* Basic Badge */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Badge</Typography>
          <Typography variant="body" className="mb-4">
            A simple badge with default styling.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge>New</Badge>
                <Badge>Updated</Badge>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Badge>Default</Badge>
<Badge>New</Badge>
<Badge>Updated</Badge>`}</CodeBlock>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Variants</Typography>
          <Typography variant="body" className="mb-4">
            Choose from 8 different variants to match your design needs.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <Badge variant="solid" color="primary">Solid</Badge>
                <Badge variant="outline" color="primary">Outline</Badge>
                <Badge variant="ghost" color="primary">Ghost</Badge>
                <Badge variant="soft" color="primary">Soft</Badge>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="glass" color="primary">Glass</Badge>
                <Badge variant="gradient" color="primary">Gradient</Badge>
                <Badge variant="notification" color="danger">5</Badge>
                <span className="flex items-center gap-2">
                  <Badge variant="dot" color="primary" />
                  <span>Status</span>
                </span>
                <span className="flex items-center gap-2">
                  <Badge variant="dot" color="success" animate />
                  <span>Live</span>
                </span>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Badge variant="solid" color="primary">Solid</Badge>
<Badge variant="outline" color="primary">Outline</Badge>
<Badge variant="ghost" color="primary">Ghost</Badge>
<Badge variant="soft" color="primary">Soft</Badge>
<Badge variant="glass" color="primary">Glass</Badge>
<Badge variant="gradient" color="primary">Gradient</Badge>
<Badge variant="notification" color="danger">5</Badge>
<Badge variant="dot" color="primary" />
<Badge variant="dot" color="success" animate />`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Use semantic colors to convey meaning.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge color="default">Default</Badge>
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="danger">Danger</Badge>
                <Badge color="info">Info</Badge>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="soft" color="default">Default</Badge>
                <Badge variant="soft" color="primary">Primary</Badge>
                <Badge variant="soft" color="secondary">Secondary</Badge>
                <Badge variant="soft" color="success">Success</Badge>
                <Badge variant="soft" color="warning">Warning</Badge>
                <Badge variant="soft" color="danger">Danger</Badge>
                <Badge variant="soft" color="info">Info</Badge>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Badge color="default">Default</Badge>
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="info">Info</Badge>`}</CodeBlock>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Sizes</Typography>
          <Typography variant="body" className="mb-4">
            Available in 4 sizes to fit different contexts.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap items-center gap-3">
                <Badge size="tiny" color="primary">Tiny</Badge>
                <Badge size="small" color="primary">Small</Badge>
                <Badge size="medium" color="primary">Medium</Badge>
                <Badge size="large" color="primary">Large</Badge>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Badge size="tiny" color="primary">Tiny</Badge>
<Badge size="small" color="primary">Small</Badge>
<Badge size="medium" color="primary">Medium</Badge>
<Badge size="large" color="primary">Large</Badge>`}</CodeBlock>
        </div>

        {/* Border Radius */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Border Radius</Typography>
          <Typography variant="body" className="mb-4">
            Customize the border radius to match your design.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-3">
                <Badge radius="none" color="primary">None</Badge>
                <Badge radius="small" color="primary">Small</Badge>
                <Badge radius="medium" color="primary">Medium</Badge>
                <Badge radius="large" color="primary">Large</Badge>
                <Badge radius="full" color="primary">Full</Badge>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Badge radius="none" color="primary">None</Badge>
<Badge radius="small" color="primary">Small</Badge>
<Badge radius="medium" color="primary">Medium</Badge>
<Badge radius="large" color="primary">Large</Badge>
<Badge radius="full" color="primary">Full</Badge>`}</CodeBlock>
        </div>

        {/* Dot Variant */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Dot Variant</Typography>
          <Typography variant="body" className="mb-4">
            The dot variant displays a small colored circle, perfect for status indicators.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2">
                  <Badge variant="dot" color="success" />
                  <Typography>Online</Typography>
                </span>
                <span className="flex items-center gap-2">
                  <Badge variant="dot" color="warning" />
                  <Typography>Away</Typography>
                </span>
                <span className="flex items-center gap-2">
                  <Badge variant="dot" color="danger" />
                  <Typography>Offline</Typography>
                </span>
                <span className="flex items-center gap-2">
                  <Badge variant="dot" color="success" animate />
                  <Typography>Live</Typography>
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Badge variant="dot" size="tiny" color="primary" />
                <Badge variant="dot" size="small" color="primary" />
                <Badge variant="dot" size="medium" color="primary" />
                <Badge variant="dot" size="large" color="primary" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`// Status indicators
<span className="flex items-center gap-2">
  <Badge variant="dot" color="success" />
  <Typography>Online</Typography>
</span>

// Animated dot
<Badge variant="dot" color="success" animate />

// Different sizes
<Badge variant="dot" size="tiny" color="primary" />
<Badge variant="dot" size="small" color="primary" />
<Badge variant="dot" size="medium" color="primary" />
<Badge variant="dot" size="large" color="primary" />`}</CodeBlock>
        </div>

        {/* Max Number */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Max Number Display</Typography>
          <Typography variant="body" className="mb-4">
            Limit large numbers with the max prop.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <Badge variant="notification" color="danger">5</Badge>
                <Badge variant="notification" color="danger">50</Badge>
                <Badge variant="notification" color="danger" max={99}>150</Badge>
                <Badge variant="notification" color="danger" max={999}>2500</Badge>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Badge variant="notification" color="danger">5</Badge>
<Badge variant="notification" color="danger">50</Badge>
<Badge variant="notification" color="danger" max={99}>150</Badge>
<Badge variant="notification" color="danger" max={999}>2500</Badge>`}</CodeBlock>
        </div>

        {/* Ping Animation */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Ping Animation</Typography>
          <Typography variant="body" className="mb-4">
            Add a pulsing animation to draw attention.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <Badge variant="notification" color="danger" ping>New</Badge>
                <Badge variant="solid" color="success" ping>Active</Badge>
                <Badge variant="soft" color="warning" ping>Alert</Badge>
                <Badge variant="dot" color="danger" animate ping>Live</Badge>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Badge variant="notification" color="danger" ping>New</Badge>
<Badge variant="solid" color="success" ping>Active</Badge>
<Badge variant="soft" color="warning" ping>Alert</Badge>
<Badge variant="dot" color="danger" animate ping>Live</Badge>`}</CodeBlock>
        </div>

        {/* With Icons */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Icons</Typography>
          <Typography variant="body" className="mb-4">
            Enhance badges with icons for better visual communication.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <Badge variant="soft" color="success" startContent={<Check className="h-3 w-3" />}>
                  Active
                </Badge>
                <Badge variant="soft" color="danger" startContent={<X className="h-3 w-3" />}>
                  Inactive
                </Badge>
                <Badge variant="soft" color="warning" startContent={<Clock className="h-3 w-3" />}>
                  Pending
                </Badge>
                <Badge variant="soft" color="info" startContent={<AlertCircle className="h-3 w-3" />}>
                  Info
                </Badge>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="gradient" color="primary" endContent={<Star className="h-3 w-3" />}>
                  Featured
                </Badge>
                <Badge variant="glass" color="danger" startContent={<Heart className="h-3 w-3" />}>
                  Favorite
                </Badge>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Badge variant="soft" color="success" startContent={<Check className="h-3 w-3" />}>
  Active
</Badge>

<Badge variant="soft" color="danger" startContent={<X className="h-3 w-3" />}>
  Inactive
</Badge>

<Badge variant="soft" color="warning" startContent={<Clock className="h-3 w-3" />}>
  Pending
</Badge>

<Badge variant="soft" color="info" startContent={<AlertCircle className="h-3 w-3" />}>
  Info
</Badge>

<Badge variant="gradient" color="primary" endContent={<Star className="h-3 w-3" />}>
  Featured
</Badge>

<Badge variant="glass" color="danger" startContent={<Heart className="h-3 w-3" />}>
  Favorite
</Badge>`}</CodeBlock>
        </div>

        {/* With Components */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Components</Typography>
          <Typography variant="body" className="mb-4">
            Use badges with other components for enhanced UI patterns.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <div className="flex items-center gap-3">
                <Typography variant="h4">New Features</Typography>
                <Badge variant="soft" color="success" size="small">New</Badge>
              </div>
              
              <Button>
                Notifications
                <Badge variant="solid" color="danger" size="small" radius="full" className="ml-2">
                  5
                </Badge>
              </Button>
              
              <div className="flex items-center gap-2">
                <span>Status:</span>
                <Badge variant="outline" color="success">
                  <span className="w-2 h-2 bg-current rounded-full mr-1.5"></span>
                  Online
                </Badge>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<div className="flex items-center gap-3">
  <Typography variant="h4">New Features</Typography>
  <Badge variant="soft" color="success" size="small">New</Badge>
</div>

<Button>
  Notifications
  <Badge variant="solid" color="danger" size="small" radius="full" className="ml-2">
    5
  </Badge>
</Button>

<Badge variant="outline" color="success">
  <span className="w-2 h-2 bg-current rounded-full mr-1.5"></span>
  Online
</Badge>`}</CodeBlock>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">'solid' | 'outline' | 'ghost' | 'soft' | 'glass' | 'gradient' | 'dot' | 'notification'</td>
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
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'tiny' | 'small' | 'medium' | 'large'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The size of the badge</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">radius</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'none' | 'small' | 'medium' | 'large' | 'full'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">The border radius</td>
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
                <td className="p-2 text-sm">Badge content</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">startContent</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Content to display at the start</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">endContent</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Content to display at the end</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">animate</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Animate the badge (for dot variant)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">ping</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Add pulsing animation</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">max</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Maximum number to display (e.g., 99+)</td>
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
                The notification variant is optimized for displaying counts on avatars and buttons
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use the max prop to limit large numbers (e.g., max={99} displays "99+" for values over 99)
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                The ping animation draws attention to important notifications
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Badges can be positioned on avatars and icon buttons using the badgePosition prop
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use semantic colors to help users quickly understand the badge's purpose
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}