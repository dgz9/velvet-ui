'use client'

import { 
  Avatar, 
  AvatarGroup,
  Badge,
  Card, 
  CardBody, 
  Typography, 
  CodeBlock, 
  Breadcrumb,
  IconButton
} from '@velvet-ui/core'
import { User, Star, Heart, Bell, Mail, Settings } from 'lucide-react'

export default function AvatarPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/docs/components' },
          { label: 'Avatar' },
        ]}
        className="mb-8"
      />
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Typography variant="h1">Avatar</Typography>
          <Badge variant="soft" color="success">New</Badge>
        </div>
        <Typography variant="lead" className="text-foreground-secondary">
          Display user profile pictures, initials, or icons with optional notification badges.
        </Typography>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Import */}
        <Typography variant="h2" className="mb-4">Import</Typography>
        <CodeBlock followTheme language="tsx">{`import { Avatar, AvatarGroup } from '@velvet-ui/core'`}</CodeBlock>

        {/* Examples */}
        <Typography variant="h2" className="mb-4 mt-12">Examples</Typography>

        {/* Basic Avatar */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Basic Avatar</Typography>
          <Typography variant="body" className="mb-4">
            Display user images or fallback to initials.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="John Doe" />
                <Avatar alt="Jane Smith" />
                <Avatar fallback={<User className="h-5 w-5" />} />
                <Avatar>JS</Avatar>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Avatar src="https://example.com/avatar.jpg" alt="John Doe" />
<Avatar alt="Jane Smith" />
<Avatar fallback={<User className="h-5 w-5" />} />
<Avatar>JS</Avatar>`}</CodeBlock>
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
                <Avatar size="tiny" alt="Tiny Avatar" />
                <Avatar size="small" alt="Small Avatar" />
                <Avatar size="medium" alt="Medium Avatar" />
                <Avatar size="large" alt="Large Avatar" />
                <Avatar size="xlarge" alt="XLarge Avatar" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Avatar size="tiny" alt="Tiny Avatar" />
<Avatar size="small" alt="Small Avatar" />
<Avatar size="medium" alt="Medium Avatar" />
<Avatar size="large" alt="Large Avatar" />
<Avatar size="xlarge" alt="XLarge Avatar" />`}</CodeBlock>
        </div>

        {/* Shapes */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Shapes</Typography>
          <Typography variant="body" className="mb-4">
            Choose between circle and square shapes.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <Avatar shape="circle" alt="Circle Avatar" />
                <Avatar shape="square" alt="Square Avatar" />
                <Avatar shape="circle" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Circle Image" />
                <Avatar shape="square" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" alt="Square Image" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Avatar shape="circle" alt="Circle Avatar" />
<Avatar shape="square" alt="Square Avatar" />`}</CodeBlock>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Colors</Typography>
          <Typography variant="body" className="mb-4">
            Use semantic colors for avatar backgrounds.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <Avatar color="default">D</Avatar>
                <Avatar color="primary">P</Avatar>
                <Avatar color="secondary">S</Avatar>
                <Avatar color="success">S</Avatar>
                <Avatar color="warning">W</Avatar>
                <Avatar color="danger">D</Avatar>
                <Avatar color="info">I</Avatar>
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Avatar color="default">D</Avatar>
<Avatar color="primary">P</Avatar>
<Avatar color="secondary">S</Avatar>
<Avatar color="success">S</Avatar>
<Avatar color="warning">W</Avatar>
<Avatar color="danger">D</Avatar>
<Avatar color="info">I</Avatar>`}</CodeBlock>
        </div>

        {/* With Badge */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Badge</Typography>
          <Typography variant="body" className="mb-4">
            Add notification badges to avatars.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-6">
                <Avatar 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
                  alt="John Doe"
                  badge={5}
                />
                <Avatar 
                  alt="Jane Smith"
                  badge="99+"
                  badgePosition="top-left"
                />
                <Avatar 
                  alt="User"
                  badge={<Badge size="tiny" variant="dot" color="success" animate />}
                  badgePosition="bottom-right"
                />
                <Avatar 
                  size="large"
                  alt="User"
                  badge={12}
                  badgeProps={{ color: 'warning' }}
                />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Avatar 
  src="avatar.jpg" 
  alt="John Doe"
  badge={5}
/>

<Avatar 
  alt="Jane Smith"
  badge="99+"
  badgePosition="top-left"
/>

<Avatar 
  alt="User"
  badge={<Badge size="tiny" variant="dot" color="success" animate />}
  badgePosition="bottom-right"
/>

<Avatar 
  size="large"
  alt="User"
  badge={12}
  badgeProps={{ color: 'warning' }}
/>`}</CodeBlock>
        </div>

        {/* Bordered */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Bordered</Typography>
          <Typography variant="body" className="mb-4">
            Add a border ring to avatars.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex flex-wrap gap-4">
                <Avatar bordered alt="User 1" />
                <Avatar bordered color="primary">U2</Avatar>
                <Avatar bordered src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="User 3" />
              </div>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<Avatar bordered alt="User 1" />
<Avatar bordered color="primary">U2</Avatar>
<Avatar bordered src="avatar.jpg" alt="User 3" />`}</CodeBlock>
        </div>

        {/* Avatar Group */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">Avatar Group</Typography>
          <Typography variant="body" className="mb-4">
            Display multiple avatars with overlap and limit.
          </Typography>
          <Card className="mb-4">
            <CardBody className="space-y-4">
              <AvatarGroup max={3}>
                <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="User 1" />
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="User 2" />
                <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" alt="User 3" />
                <Avatar alt="User 4" />
                <Avatar alt="User 5" />
              </AvatarGroup>

              <AvatarGroup max={4} size="small" spacing="tight">
                <Avatar color="primary">A</Avatar>
                <Avatar color="secondary">B</Avatar>
                <Avatar color="success">C</Avatar>
                <Avatar color="warning">D</Avatar>
                <Avatar color="danger">E</Avatar>
                <Avatar color="info">F</Avatar>
              </AvatarGroup>

              <AvatarGroup max={5} size="large" spacing="loose">
                <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="User 1" />
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="User 2" />
                <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" alt="User 3" />
              </AvatarGroup>
            </CardBody>
          </Card>
          <CodeBlock followTheme>{`<AvatarGroup max={3}>
  <Avatar src="user1.jpg" alt="User 1" />
  <Avatar src="user2.jpg" alt="User 2" />
  <Avatar src="user3.jpg" alt="User 3" />
  <Avatar alt="User 4" />
  <Avatar alt="User 5" />
</AvatarGroup>

<AvatarGroup max={4} size="small" spacing="tight">
  <Avatar color="primary">A</Avatar>
  <Avatar color="secondary">B</Avatar>
  <Avatar color="success">C</Avatar>
  <Avatar color="warning">D</Avatar>
  <Avatar color="danger">E</Avatar>
  <Avatar color="info">F</Avatar>
</AvatarGroup>`}</CodeBlock>
        </div>

        {/* With Icon Buttons */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">With Icon Buttons</Typography>
          <Typography variant="body" className="mb-4">
            Combine avatars with icon buttons for actions.
          </Typography>
          <Card className="mb-4">
            <CardBody>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <Avatar 
                    size="large"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
                    alt="John Doe"
                    badge={3}
                  />
                  <div>
                    <Typography variant="h5">John Doe</Typography>
                    <Typography variant="small" className="text-foreground-secondary">john@example.com</Typography>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <IconButton 
                    icon={<Bell className="h-4 w-4" />} 
                    variant="ghost"
                    badge={5}
                    tooltip="Notifications"
                  />
                  <IconButton 
                    icon={<Mail className="h-4 w-4" />} 
                    variant="ghost"
                    badge="99+"
                    tooltip="Messages"
                  />
                  <IconButton 
                    icon={<Settings className="h-4 w-4" />} 
                    variant="ghost"
                    tooltip="Settings"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Props */}
        <Typography variant="h2" className="mb-4 mt-12">Props</Typography>
        
        <Typography variant="h3" className="mb-4">Avatar Props</Typography>
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
                <td className="p-2 font-mono text-sm">src</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Image URL</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">alt</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">string</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">''</td>
                <td className="p-2 text-sm">Alt text for image (used for initials)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">fallback</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">React.ReactNode</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Custom fallback content</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'tiny' | 'small' | 'medium' | 'large' | 'xlarge'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Avatar size</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">shape</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'circle' | 'square'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'circle'</td>
                <td className="p-2 text-sm">Avatar shape</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">color</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'default'</td>
                <td className="p-2 text-sm">Background color</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">bordered</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">boolean</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">false</td>
                <td className="p-2 text-sm">Show border ring</td>
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
                <td className="p-2 font-mono text-sm text-foreground-secondary">'bottom-right'</td>
                <td className="p-2 text-sm">Badge position</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">badgeProps</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">BadgeProps</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">-</td>
                <td className="p-2 text-sm">Props for badge component</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="h3" className="mb-4">AvatarGroup Props</Typography>
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
                <td className="p-2 font-mono text-sm">max</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">number</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">5</td>
                <td className="p-2 text-sm">Maximum avatars to display</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">size</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'tiny' | 'small' | 'medium' | 'large' | 'xlarge'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'medium'</td>
                <td className="p-2 text-sm">Size for all avatars</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-mono text-sm">spacing</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'tight' | 'normal' | 'loose'</td>
                <td className="p-2 font-mono text-sm text-foreground-secondary">'normal'</td>
                <td className="p-2 text-sm">Overlap spacing</td>
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
                Avatars automatically generate initials from the alt text when no image is provided
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Badges can be strings, numbers, or custom Badge components
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                AvatarGroup automatically adds borders and hover effects to child avatars
              </Typography>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info-600 dark:text-info-400">•</span>
              <Typography>
                Use the max prop in AvatarGroup to limit displayed avatars and show a count
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}